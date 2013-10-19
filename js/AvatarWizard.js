/**
 * TODO
 *
 * @class AvatarWizard
 * @constructor
 * @param canvas Mixed TODO
 * @param ready Function TODO
 */
function AvatarWizard(canvas, ready) {
	var thisObject = this;
	$.getJSON('settings.json', function (settings) {
		var functions = {};

		canvas = $(canvas);
		var context = canvas[0].getContext('2d');

		function setDimensions() {
			var width = canvas.innerWidth();
			var height = canvas.innerHeight();
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
				functions[category + '/' + descriptor[category]](context);
				return true;
			} else {
				return false;
			}
		}

		function drawAll() {
			functions.shadow(context);
			if (!drawElement('special_bottom')) {
				drawElement('base');
				drawElement('body');
			}
			if (!drawElement('special_head')) {
				drawElement('mouth');
				drawElement('eyes');
				drawElement('facial_details');
				drawElement('hair');
			}
			drawElement('accessories');
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
		 * TODO
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
		 * @param id String TODO
		 */
		thisObject.select = function (category, id) {
			if (functions.hasOwnProperty(category + '/' + id)) {
				descriptor[category] = id;
				drawAll();
			} else {
				throw 'Unregistered category or image ID: "' + category + '", "' + id + '"';
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
				// TODO
				requestAnimationFrame(drawAll());
			}
			return thisObject;
		};

		/**
		 * TODO
		 *
		 * @method getThumbnail
		 * @param width Number TODO
		 * @param height Number TODO
		 * @return HTMLElement TODO
		 */
		thisObject.getThumbnail = function (width, height) {
			// TODO
		};

		/**
		 * TODO
		 *
		 * @method getEncodedThumbnail
		 * @param width Number TODO
		 * @param height Number TODO
		 * @return String TODO
		 */
		thisObject.getEncodedThumbnail = function (width, height) {
			// TODO
		};
	});
}
