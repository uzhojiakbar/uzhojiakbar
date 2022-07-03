function clockFunction() {
	var data = new Date();
	var clock = document.querySelector('.clock');
	var hour = data.getHours();
	var minute = data.getMinutes();
	var second = data.getSeconds();
	if (hour < 10) {
		hour = '0' + hour
	};
	if (minute < 10) {
		minute = '0' + minute
	};
	if (second < 10) {
		second = '0' + second;
	};
	clock.innerHTML = hour + ':' + minute + ':' + second;
	var t = setTimeout(clockFunction, 500)
}
