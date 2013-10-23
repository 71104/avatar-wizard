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
 *		"thumbnailArea": {
 *			"x": 10,
 *			"y": 10,
 *			"width": 80,
 *			"height": 400
 *		},
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
 *		},
 *		"layers": [
 *			"category1",
 *			"category2",
 *			"category3",
 *			...
 *		]
 *	}
 *
 * `canonicalWidth` and `canonicalHeight` are the dimensions of a rectangular
 * area the coordinates in the js image files refer to. Modifying these
 * parameters influences the size of the avatar relative to the destination
 * canvas.
 *
 * `thumbnailArea` describes a rectangular area in canonical space used to size
 * the avatar within a canvas when generating prerendered thumbnails (see the
 * {{#crossLink "AvatarWizard/getThumbnail"}}getThumbnail{{/crossLink}} and
 * {{#crossLink "AvatarWizard/getEncodedThumbnail"}}getEncodedThumbnail{{/crossLink}}
 * methods).
 *
 * `path` is the path of the directory tree containing the js image files. The
 * directory represented by `path` must contain one subdirectory for each
 * category; each category directory must in turn contain one `.js` file for
 * each part/type.
 *
 * "parts" is the set of registered parts and categories. The "parts" object
 * maps category names to part arrays (each key is a category name and its value
 * is an array of part names).
 *
 * "layers" specifies the order in which the several parts are drawn to the
 * canvas; it is an array of category names.
 *
 * TODO document `exclusions`
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

	var functions = {};
	var descriptor = {};

	$.getJSON('settings.json', function (settings) {
		if (!/\/$/.test(settings.path)) {
			settings.path += '/';
		}

		var layers = settings.layers;

		function Renderer(canvas, settings) {
			var context = canvas[0].getContext('2d');
			var width, height;
			var drawing = false;

			function setDimensions() {
				width = canvas.innerWidth();
				height = canvas.innerHeight();
				canvas.attr({
					width: width,
					height: height
				});
				context.setTransform(1, 0, 0, 1, 0, 0);
				if (settings.stretch) {
					// TODO
				} else {
					var ratio1 = width / settings.width;
					var ratio2 = height / settings.height;
					if (ratio2 < ratio1) {
						context.translate((width - settings.width * ratio2) / 2, 0);
						context.scale(ratio2, ratio2);
					} else {
						context.translate(0, (height - settings.height * ratio1) / 2);
						context.scale(ratio1, ratio1);
					}
				}
			}

			setDimensions();

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
				for (var i = 0; i < layers.length; i++) {
					drawElement(layers[i]);
				}
				drawing = false;
			}

			function issue() {
				if (!drawing) {
					requestAnimationFrame(drawAll);
				}
			}

			this.issue = issue;
			this.setDimensions = function () {
				setDimensions();
				issue();
			};
		}

		canvas = $(canvas);
		var width, height;

		var renderer = new Renderer(canvas, {
			stretch: false,
			x: 0,
			y: 0,
			width: settings.canonicalWidth,
			height: settings.canonicalHeight
		});

		(function (count) {
			function fetchPart(name) {
				count++;
				$.get(settings.path + name + '.js', function (code) {
					eval(code);
					functions[name] = draw;
					if (!--count) {
						renderer.issue();
						ready();
					}
				}, 'text');
			}
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
			renderer.setDimensions();
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
			renderer.issue();
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
		 * Returns the currently selected part type for the specified category,
		 * or `undefined` if no part is selected.
		 *
		 * Parts can be selected per-category using the
		 * {{#crossLink "AvatarWizard/select"}}select{{/crossLink}} method.
		 *
		 * @method getSelected
		 * @param category String A category name.
		 * @return String The selected part type, or `undefined` if no part is
		 * selected for the specified category.
		 */
		thisObject.getSelected = function (category) {
			if (typeof descriptor[category] === 'string') {
				return descriptor[category];
			} else if (typeof descriptor[category] === 'object') {
				return descriptor[category].type;
			}
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
				renderer.issue();
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
		 * Sets the color of the currently selected part for the specified
		 * category.
		 *
		 * @method setColor
		 * @chainable
		 * @param category String A category name.
		 * @param color String A CSS color value.
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
			renderer.issue();
			return thisObject;
		};

		function getThumbnail(width, height, stretch) {
			var canvas = document.createElement('canvas');
			canvas.width = width;
			canvas.height = height;
			(new Renderer(canvas, {
				stretch: !!stretch,
				x: thumbnailArea.x,
				y: thumbnailArea.y,
				width: thumbnailArea.width,
				height: thumbnailArea.height
			})).issue();
			return canvas;
		}

		/**
		 * Returns an HTMLElement of the specified width and height containing a
		 * prerendered thumbnail of the avatar.
		 *
		 * The exact type of HTML element is left unspecified: it may be an
		 * image element as well as a canvas.
		 *
		 * @method getThumbnail
		 * @param width Number The width of the thumbnail to generate.
		 * @param height Number The height of the thumbnail to generate.
		 * @param stretch Boolean Indicates whether the avatar must be stretched
		 * to fit the specified width and height exactly. `false` indicates that
		 * the avatar's proportions are maintained.
		 * @return HTMLElement An HTML element of the specified dimensions
		 * containing a prerendered avatar.
		 */
		thisObject.getThumbnail = getThumbnail;

		/**
		 * Returns a data URI that encodes a PNG prerendered image of the
		 * avatar of the specified width and height.
		 *
		 * @method getEncodedThumbnail
		 * @param width Number The width of the image to generate.
		 * @param height Number The height of the image to generate.
		 * @param stretch Boolean Indicates whether the avatar must be stretched
		 * to fit the specified width and height exactly. `false` indicates that
		 * the avatar's proportions are maintained.
		 * @return String A data URI that encodes the generated image in PNG
		 * format.
		 */
		thisObject.getEncodedThumbnail = function (width, height, stretch) {
			return getThumbnail(width, height, stretch).toDataURL('image/png');
		};
	});
}
