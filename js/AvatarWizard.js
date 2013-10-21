/**
 * Manages the composition of a user avatar using predefined graphic parts. This
 * class requires jQuery.
 *
 * The constructor needs to fetch a `settings.json` file through AJAX and its
 * methods may not be invoked until this has been done. The user-defined `ready`
 * callback is invoked by the `AvatarWizard` object when it is ready.
 *
 * The `settings.json` file must have the following format:
 *
 *	{
 *		"canonicalWidth": 123,
 *		"canonicalHeight": 456,
 *		"path": "path/to/parts",
 *		"parts": {
 *			"category1": [
 *				"type1",
 *				"type2",
 *				...
 *			],
 *			"category2": [
 *				"type1",
 *				"type2",
 *				...
 *			],
 *			"category3": [
 *				.
 *				.
 *				.
 *			],
 *		}
 *	}
 *
 * `canonicalWidth` and `canonicalHeight` are the dimensions of a rectangular
 * area the coordinates in the js image files refer to. Modifying these
 * parameters influences the size of the avatar relative to the destination
 * canvas.
 *
 * `path` is the path of the directory tree containing the js image files. The
 * directory represented by `path` must contain one subdirectory for each
 * category; each category directory must in turn contain one `.js` file for
 * each part/type.
 *
 * Finally, "parts" is the set of registered parts and categories. The "parts"
 * object maps category names to part arrays (each key is a category name and
 * its value is an array of part names).
 *
 * The full path of a part is build as follows:
 *
 *	path/category/part.json
 *
 * which means that the "path" option is prepended, the category name follows,
 * the part name follows and the `.json` file extension is appended.
 *
 * @class AvatarWizard
 * @constructor
 * @param canvas Mixed Specifies the HTML5 canvas where the avatar has to be
 * drawn. It can be specified as a HTMLCanvasElement object, string CSS selector
 * or jQuery object.
 * @param ready Function A user-defined callback function invoked after the
 * `AvatarWizard` object has read its configuration file and its ready to
 * receive method invocations.
 */
function AvatarWizard(canvas, ready) {
	var thisObject = this;
	$.getJSON('settings.json', function (settings) {
		if (!/\/$/.test(settings.path)) {
			settings.path += '/';
		}

		var functions = {};

		canvas = $(canvas);
		var context = canvas[0].getContext('2d');
		var width, height;

		function setDimensions() {
			width = canvas.innerWidth();
			height = canvas.innerHeight();
			canvas.attr({
				width: width,
				height: height
			});
			context.setTransform(1, 0, 0, 1, 0, 0);
			var ratio1 = width / settings.canonicalWidth;
			var ratio2 = height / settings.canonicalHeight;
			if (ratio2 < ratio1) {
				context.translate((width - settings.canonicalWidth * ratio2) / 2, 0);
				context.scale(ratio2, ratio2);
			} else {
				context.translate(0, (height - settings.canonicalHeight * ratio1) / 2);
				context.scale(ratio1, ratio1);
			}
		}

		setDimensions();

		descriptor = {};

		var drawing = false;

		function drawElement(category) {
			if (descriptor.hasOwnProperty(category)) {
				if (typeof descriptor[category] !== 'string') {
					functions[category + '/' + descriptor[category].type](context, descriptor[category].color);
				} else {
					functions[category + '/' + descriptor[category]](context);
				}
				return true;
			} else {
				return false;
			}
		}

		function drawAll() {
			context.save();
			context.setTransform(1, 0, 0, 1, 0, 0);
			context.clearRect(0, 0, width, height);
			context.restore();
			functions.shadow(context);
			drawElement('base');
			var specialBody = drawElement('special_body');
			if (!specialBody) {
				drawElement('body');
			}
			if (!drawElement('special_head')) {
				drawElement('mouth');
				drawElement('eyes');
				drawElement('facial_details');
				drawElement('hair');
			}
			if (!specialBody) {
				drawElement('accessories');
			}
			drawing = false;
		}

		(function (count) {
			function fetchPart(name) {
				count++;
				$.get(settings.path + name + '.js', function (code) {
					eval(code);
					functions[name] = draw;
					if (!--count) {
						drawAll();
						ready();
					}
				}, 'text');
			}
			fetchPart('shadow');
			for (var category in settings.parts) {
				if (settings.parts.hasOwnProperty(category)) {
					settings.parts[category].forEach(function (image) {
						fetchPart(category + '/' + image);
					});
				}
			}
		})(0);

		/**
		 * Recalculates the coordinate reference. This method must be invoked
		 * every time the dimensions of the canvas change.
		 *
		 * This method may be called in response to `resize` events at a high
		 * rate because the redraw rate is throttled down through
		 * `requestAnimationFrame`.
		 *
		 * @method resetDimensions
		 * @chainable
		 */
		thisObject.resetDimensions = function () {
			setDimensions();
			if (!drawing) {
				requestAnimationFrame(drawAll);
			}
			return thisObject;
		};

		/**
		 * Loads the avatar described by the specified JSON object and updates
		 * the rendering on the canvas.
		 *
		 * The specified object must have the following format:
		 *
		 *	{
		 *		"category1": "type3",
		 *		"category2": {
		 *			"type": "type2",
		 *			"color": "#abcdef"
		 *		},
		 *		"category3": {
		 *			"type": "type1",
		 *			"color": "rgb(12, 34, 56)"
		 *		},
		 *		.
		 *		.
		 *		.
		 *	}
		 *
		 * Each key must be a valid category name (one registered in the
		 * `settings.json` file, as documented in the
		 * {{#crossLink "AvatarWizard"}}AvatarWizard constructor{{/crossLink}})
		 * and its value can be either a string (a valid part/type name
		 * registered for that category) or an object; in the latter case it
		 * contains a mandatory `type` field specifying the part/type name and
		 * an optional `color` field specifying a CSS color for the part.
		 *
		 * Note that the specified JSON object is deep-copied, so subsequent
		 * modifications to it do not have any effect on the avatar managed by
		 * this object. To modify the managed avatar use the
		 * {{#crossLink "AvatarWizard/select"}}select{{/crossLink}} method.
		 *
		 * @method loadAvatar
		 * @chainable
		 * @param newDescriptor Object A JSON object describing the avatar to
		 * load.
		 */
		thisObject.loadAvatar = function (newDescriptor) {
			descriptor = $.extend({}, newDescriptor);
			drawAll();
			return thisObject;
		};

		/**
		 * Returns a JSON object that describes the current avatar as modified
		 * by {{#crossLink "AvatarWizard/loadAvatar"}}loadAvatar{{/crossLink}}
		 * and {{#crossLink "AvatarWizard/select"}}select{{/crossLink}} calls.
		 *
		 * See {{#crossLink "AvatarWizard/loadAvatar"}}loadAvatar{{/crossLink}}
		 * for information about the JSON format of avatar descriptors.
		 *
		 * The returned object is a deep copy of the object mainatined
		 * internally by the AvatarWizard instance.
		 *
		 * @method getAvatar
		 * @return Object A JSON object that describes the current avatar.
		 */
		thisObject.getAvatar = function () {
			return $.extend({}, descriptor);
		};

		/**
		 * Selects the specified part for the specified category and updates the
		 * rendering of the avatar on the canvas.
		 *
		 * Both the category and part/type names must be valid names registered
		 * in the `settings.json` file, as explained in the
		 * {{#crossLink "AvatarWizard"}}AvatarWizard constructor{{/crossLink}}.
		 *
		 * @method select
		 * @chainable
		 * @param category String The category the part is being selected for.
		 * @param type String The part name.
		 * @example
		 *	wizard.select('hair', 'blonde1');
		 */
		thisObject.select = function (category, type) {
			if (functions.hasOwnProperty(category + '/' + type)) {
				if (descriptor.hasOwnProperty(category)) {
					if (typeof descriptor[category] !== 'string') {
						descriptor[category].type = type;
					} else {
						descriptor[category] = type;
					}
				} else {
					descriptor[category] = type;
				}
				drawAll();
			} else {
				throw 'Unregistered category or image ID: "' + category + '", "' + type + '"';
			}
			return thisObject;
		};

		/**
		 * Returns the current color for the specified category.
		 *
		 * This value can be set per-category with the
		 * {{#crossLink "AvatarWizard/setColor"}}setColor{{/crossLink}} method
		 * or in the avatar descriptor specified to the
		 * {{#crossLink "AvatarWizard/loadAvatar"}}loadAvatar{{/crossLink}}
		 * method.
		 *
		 * The return value is undefined if no color has been set.
		 *
		 * @method getColor
		 * @param category String The category to set the color for.
		 * @return String The current CSS color for the specified category, or
		 * `undefined` if no color is set.
		 */
		thisObject.getColor = function (category) {
			if (descriptor.hasOwnProperty(category)) {
				if (typeof descriptor[category] !== 'string') {
					return descriptor[category].color;
				}
			}
		};

		/**
		 * TODO
		 *
		 * @method setColor
		 * @chainable
		 * @param category String TODO
		 * @param color String TODO
		 */
		thisObject.setColor = function (category, color) {
			if (descriptor.hasOwnProperty(category)) {
				if (typeof descriptor[category] !== 'string') {
					descriptor[category].color = color;
				} else {
					descriptor[category] = {
						type: descriptor[category],
						color: color
					};
				}
			}
			if (!drawing) {
				requestAnimationFrame(drawAll);
			}
			return thisObject;
		};

		function getThumbnail(width, height) {
			// TODO
		}

		/**
		 * TODO
		 *
		 * @method getThumbnail
		 * @param width Number TODO
		 * @param height Number TODO
		 * @return HTMLElement TODO
		 */
		thisObject.getThumbnail = getThumbnail;

		/**
		 * TODO
		 *
		 * @method getEncodedThumbnail
		 * @param width Number TODO
		 * @param height Number TODO
		 * @return String TODO
		 */
		thisObject.getEncodedThumbnail = function (width, height) {
			return getThumbnail(width, height).toDataURL('image/png');
		};
	});
}
