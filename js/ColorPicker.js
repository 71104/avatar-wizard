function ColorPicker(huePicker, brightnessPicker) {
	EventEmitter.call(this);
	var thisObject = this;

	this.register('hue');
	this.register('pick');

	var hue = 0;
	var saturation = 1;
	var brightness = 0.5;

	function getColor() {
		return 'hsl(' + Math.round(hue * 360) + ', ' + Math.round(saturation * 100) + '%, ' + Math.round(brightness * 100) + '%)';
	}

	function setHue(x, y) {
		saturation = x;
		hue = y;
		thisObject.emit('hue', hue, saturation);
		thisObject.emit('pick', getColor());
	}

	function setBrightness(x, y) {
		brightness = 1 - y;
		thisObject.emit('pick', getColor());
	}

	function handle(element, handler) {
		element = $(element);
		var width = element.innerWidth();
		var height = element.innerHeight();
		element.mousedown(function (event) {
			if (event.which === 1) {
				handler(event.clientX / width, event.clientY / height);
				return false;
			}
		}).mousemove(function (event) {
			if (event.which === 1) {
				handler(event.clientX / width, event.clientY / height);
				return false;
			}
		}).mouseup(false);
	}

	handle(huePicker, setHue);
	handle(brightnessPicker, setBrightness);

	this.getColor = getColor;
}