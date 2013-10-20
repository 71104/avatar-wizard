/**
 * Manages the composition of a user avatar using predefined graphic parts. This
 * class requires jQuery.
 *
 * The constructor need to fetch a `settings.json` file through AJAX and its
 * methods may not be invoked until this has been done. The user-defined `ready`
 * callback is invoked by the `AvatarWizard` object when it is ready.
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
				$.get('parts/' + name + '.js', function (code) {
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
			if (!drawing) {
				setDimensions();
				requestAnimationFrame(drawAll);
			}
			return thisObject;
		};

		/**
		 * TODO
		 *
		 * @method loadAvatar
		 * @chainable
		 * @param newDescriptor Object TODO
		 */
		thisObject.loadAvatar = function (newDescriptor) {
			descriptor = $.extend({}, newDescriptor);
			drawAll();
			return thisObject;
		};

		/**
		 * TODO
		 *
		 * @method getAvatar
		 * @return Object
		 */
		thisObject.getAvatar = function () {
			return $.extend({}, descriptor);
		};

		/**
		 * TODO
		 *
		 * @method select
		 * @chainable
		 * @param category String TODO
		 * @param type String TODO
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
		 * TODO
		 *
		 * @method setColor
		 * @chainable
		 * @param category String TODO
		 * @param color String TODO
		 */
		thisObject.setColor = function (category, color) {
			if (!drawing) {
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
