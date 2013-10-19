/**
 * TODO
 *
 * @class AvatarWizard
 * @constructor
 * @param descriptor Object TODO
 * @param canvas Mixed TODO
 * @param ready Function TODO
 */
function AvatarWizard(descriptor, canvas, ready) {
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
			context.scale(width / settings.canonicalWidth, height / settings.canonicalHeight);
		}

		setDimensions();

		descriptor = $.extend({}, descriptor);

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
			drawElement('base');
			drawElement('body');
			drawElement('facial_details');
			drawElement('hair');
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

		$(canvas).resize(function (event) {
			if (!drawing) {
				setDimensions();
				requestAnimationFrame(drawAll);
			}
		});

		/**
		 * TODO
		 *
		 * @method getAvatar
		 * @return Object
		 */
		this.getAvatar = function () {
			return $.extend({}, descriptor);
		};

		/**
		 * TODO
		 *
		 * @method select
		 * @param category String TODO
		 * @param id String TODO
		 */
		this.select = function (category, id) {
			if (functions.hasOwnProperty(category + '/' + id)) {
				descriptor[category] = id;
				drawAll();
				return true;
			} else {
				return false;
			}
		};

		/**
		 * TODO
		 *
		 * @method getThumbnail
		 * @param width Number TODO
		 * @param height Number TODO
		 */
		this.getThumbnail = function (width, height) {
			// TODO
		};
	});
}
