/**
 * Manages the composition of a user avatar using predefined graphic parts. This
 * class requires jQuery.
 *
 * The avatar parts and settings are read from a specified base path that
 * implements the Avaparts REST APIs:
 * http://gamepix-server-cs.cloudapp.net/v1/doc
 *
 * @class AvatarWizard
 * @constructor
 * @param canvas Mixed Specifies the HTML5 canvas where the avatar has to be
 * drawn. It can be specified as a HTMLCanvasElement object, string CSS selector
 * or jQuery object.
 * @param settings Object A dictionary object containing several settings.
 * @param [settings.basePath=""] String The base URL that implements the
 * Avaparts API where avatar parts and configurations are read from.
 * @param settings.ready Function A user-defined callback function invoked after
 * the `AvatarWizard` object has read its configuration file and its ready to
 * receive method invocations.
 * @param [settings.progress] Function A user-defined callback function invoked
 * several times during the initial loading process.
 * @param settings.progress.progress Number A percentage value indicating the
 * current loading progress in a `[0, 100)` range.
 */
function AvatarWizard(canvas, settings) {
	var thisObject = this;

	var basePath = '';
	if (settings.hasOwnProperty('basePath')) {
		basePath = settings.basePath;
	}
	if (!/\/$/.test(basePath)) {
		basePath += '/';
	}

	var functions = {};
	var descriptor = {};

	function loadCategories(ready, progress) {
		$.getJSON(basePath + 'avaparts', function (avaparts) {
			progress(Math.round(100 / (avaparts.categories.length + 1)));
			var count = 0;
			avaparts.categories.forEach(function (category) {
				count++;
				$.getJSON(basePath + 'avaparts/' + category.name, function (parts) {
					category.parts = parts;
					if (--count) {
						progress(Math.round((avaparts.categories.length - count + 1) * 100 / (avaparts.categories.length + 1)));
					} else {
						ready(avaparts);
					}
				});
			});
		});
	}

	loadCategories(function (avaparts) {
		function fetchAll(callback) {
			var count = 0;
			function fetchPart(category, type) {
				var name = category + '/' + type;
				if (!functions.hasOwnProperty(name)) {
					count++;
					$.get(basePath + 'avaparts/' + name, function (code) {
						eval(code);
						functions[name] = draw;
						if (!--count) {
							callback();
						}
					}, 'text');
				}
			}
			for (var category in descriptor) {
				if (descriptor.hasOwnProperty(category)) {
					fetchPart(category, descriptor[category].type);
				}
			}
			if (!count) {
				callback();
			}
		}

		var categories = avaparts.categories;

		function Renderer(canvas, settings) {
			var thisObject = this;

			var layerMask = [];

			function resetLayerMask() {
				layerMask = categories.map(function () {
					return true;
				});
				categories.forEach(function (category, index) {
					if (descriptor.hasOwnProperty(category.name) &&
						category.parts[descriptor[category.name].type].hasOwnProperty('excludes'))
					{
						category.parts[descriptor[category.name].type].excludes.forEach(function (exclusion) {
							if (typeof exclusion !== 'string') {
								categories.forEach(function (category, index) {
									if ((category.name == exclusion.category) &&
										descriptor.hasOwnProperty(category.name) &&
										(descriptor[category.name].type == exclusion.id))
									{
										layerMask[index] = false;
									}
								});
							} else {
								categories.forEach(function (category, index) {
									if (category.name == exclusion) {
										layerMask[index] = false;
									}
								});
							}
						});
					}
				});
				return thisObject;
			}

			resetLayerMask();

			canvas = $(canvas);
			var context = canvas[0].getContext('2d');
			var width, height;
			var drawing = false;

			function setDimensions() {
				if (canvas.parent().length) {
					width = canvas.innerWidth();
					height = canvas.innerHeight();
					canvas.attr({
						width: width,
						height: height
					});
				} else {
					width = parseInt(canvas.attr('width'), 10);
					height = parseInt(canvas.attr('height'), 10);
				}
				context.setTransform(1, 0, 0, 1, 0, 0);
				if (settings.stretch) {
					context.scale(width / settings.width, height / settings.height);
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
				context.translate(-settings.x, -settings.y);
				return thisObject;
			}

			setDimensions();

			function drawElement(category) {
				if (descriptor.hasOwnProperty(category)) {
					functions[category + '/' + descriptor[category].type](context, descriptor[category].color);
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
				for (var i = 0; i < categories.length; i++) {
					if (layerMask[i]) {
						drawElement(categories[i].name);
					}
				}
				drawing = false;
				return thisObject;
			}

			function issue() {
				if (!drawing) {
					requestAnimationFrame(drawAll);
				}
				return thisObject;
			}

			this.drawAll = drawAll;
			this.issue = issue;

			this.setDimensions = function () {
				setDimensions();
				issue();
				return thisObject;
			};

			this.resetLayerMask = resetLayerMask;

			this.maskIn = function (names) {
				if (!Array.isArray(names)) {
					names = [names];
				}
				categories.forEach(function (category, index) {
					if (names.indexOf(category.name) < 0) {
						layerMask[index] = false;
					}
				});
				return thisObject;
			};
		}

		var renderer = new Renderer(canvas, {
			stretch: false,
			x: 0,
			y: 0,
			width: avaparts.settings.area.width,
			height: avaparts.settings.area.height
		});

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
		 *		"category1": "type4",
		 *		"category2": {
		 *			"type": "type3",
		 *			"color": "#abcdef"
		 *		},
		 *		"category3": {
		 *			"type": "type2",
		 *			"color": "rgb(12, 34, 56)"
		 *		},
		 *		"category4": {
		 *			"type": "type1"
		 *		},
		 *		.
		 *		.
		 *		.
		 *	}
		 *
		 * Each key must be a valid category name returned by the
		 * [Avaparts API](http://gamepix-server-cs.cloudapp.net/v1/doc) and its
		 * value can be either a string (a valid part/type name for that
		 * category) or an object; in the latter case it contains a mandatory
		 * `type` field specifying the part/type name and an optional `color`
		 * field specifying a CSS color for the part.
		 *
		 * Note that the specified JSON object is deep-copied, so subsequent
		 * modifications to it do not have any effect on the avatar managed by
		 * this object. To modify the managed avatar use the
		 * {{#crossLink "AvatarWizard/select"}}select{{/crossLink}} and
		 * {{#crossLink "AvatarWizard/setColor"}}setColor{{/crossLink}} methods.
		 *
		 * @method loadAvatar
		 * @chainable
		 * @param newDescriptor Object A JSON object describing the avatar to
		 * load.
		 * @param [callback] Function An optional user-defined callback function
		 * invoked after the new avatar has been loaded. The process is
		 * asynchronous because it may require loading parts that have not been
		 * cached yet.
		 */
		thisObject.loadAvatar = function (newDescriptor, callback) {
			descriptor = {};
			for (category in newDescriptor) {
				if (newDescriptor.hasOwnProperty(category)) {
					if (typeof newDescriptor[category] !== 'string') {
						descriptor[category] = {
							type: '' + newDescriptor[category].type,
							color: '' + newDescriptor[category].color
						};
					} else {
						descriptor[category] = {
							type: newDescriptor[category]
						};
					}
				}
			}
			fetchAll(function () {
				renderer.resetLayerMask().issue();
				callback && callback();
			});
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
			if (descriptor.hasOwnProperty(category)) {
				return descriptor[category].type;
			}
		};

		/**
		 * Selects the specified part for the specified category and updates the
		 * rendering of the avatar on the canvas.
		 *
		 * To remove a currently selected part, invoke `select` for its category
		 * without specifying the `type` argument.
		 *
		 * @method select
		 * @chainable
		 * @param categoryName String The category the part is being selected
		 * for.
		 * @param [type] String The part name. If not specified, the part is
		 * removed.
		 * @param [callback] Function An optional user-defined callback function
		 * invoked after the new part has been selected. The process is
		 * asynchronous because it may require loading parts that have not been
		 * cached yet.
		 * @example
		 *	wizard.select('hair', 'blonde1');
		 */
		thisObject.select = function (categoryName, type, callback) {
			if (typeof type !== 'undefined') {
				type += '';
				(function () {
					for (var i = 0; i < categories.length; i++) {
						if ((categories[i].name == categoryName) && categories[i].parts.hasOwnProperty(type)) {
							return;
						}
					}
					throw 'Invalid category or image ID: "' + categoryName + '", "' + type + '"';
				})();
				if (descriptor.hasOwnProperty(categoryName)) {
					descriptor[categoryName].type = type;
				} else {
					descriptor[categoryName] = {
						type: type
					};
				}
				fetchAll(function () {
					renderer.resetLayerMask().issue();
					callback && callback();
				});
			} else {
				delete descriptor[categoryName];
				renderer.resetLayerMask().issue();
				callback && callback();
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
				return descriptor[category].color;
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
				descriptor[category].color = color;
			}
			renderer.issue();
			return thisObject;
		};

		function getThumbnail(width, height, thumbnailSettings) {
			if (!avaparts.settings.thumbnails.hasOwnProperty(thumbnailSettings.configName)) {
				throw 'Invalid thumbnail configuration name';
			}
			var config = avaparts.settings.thumbnails[thumbnailSettings.configName];
			var canvas = document.createElement('canvas');
			canvas.width = width;
			canvas.height = height;
			var renderer = new Renderer(canvas, {
				stretch: !!thumbnailSettings.stretch,
				x: config.area.x,
				y: config.area.y,
				width: config.area.width,
				height: config.area.height
			});
			renderer.maskIn(config.layers).drawAll();
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
		 * @param settings Object Thumbnail generation settings.
		 * @param [settings.stretch=false] Boolean Indicates whether the avatar
		 * must be stretched to fit the specified width and height exactly.
		 * `false` indicates that the avatar's proportions are maintained.
		 * @param settings.configName String The thumbnail configuration to use.
		 * It must be the name of a valid thumbnail configuration as per the
		 * referred [Avaparts](http://gamepix-server-cs.cloudapp.net/v1/doc)
		 * server (see the
		 * {{#crossLink "AvatarWizard"}}constructor{{/crossLink}}
		 * documentation).
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
		 * @param settings Object Thumbnail generation settings.
		 * @param [settings.stretch=false] Boolean Indicates whether the avatar
		 * must be stretched to fit the specified width and height exactly.
		 * `false` indicates that the avatar's proportions are maintained.
		 * @param settings.configName String The thumbnail configuration to use.
		 * It must be the name of a valid thumbnail configuration as per the
		 * referred [Avaparts](http://gamepix-server-cs.cloudapp.net/v1/doc)
		 * server (see the
		 * {{#crossLink "AvatarWizard"}}constructor{{/crossLink}}
		 * documentation).
		 * @return String A data URI that encodes the generated image in PNG
		 * format.
		 */
		thisObject.getEncodedThumbnail = function (width, height, settings) {
			return getThumbnail(width, height, settings).toDataURL('image/png');
		};

		settings.ready();
	}, function (progress) {
		settings.progress && settings.progress(progress);
	});
}
