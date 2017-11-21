let props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '), 
	prop,
	el = document.createElement('div');

for (var p = 0; p < props.length; p++) {
	if (typeof el.style[props[p]] !== "undefined") {
		prop = props[p];
		break;
	}
}

let x_angle = 0;
let y_angle = 0;

$('body').keydown((evt) => {
	switch(evt.keyCode) {
		case 37: 
			y_angle += 90;
			break;
		case 38:
			x_angle -= 90;
			evt.preventDefault();
			break;
		case 39:
			y_angle -= 90;
			break;
		case 40: 
			x_angle += 90;
			evt.preventDefault();
			break;
	};
	document.getElementById('cube').style[prop] = "rotateX("+x_angle+"deg) rotateY("+y_angle+"deg)";
});

//tues 3 christy

//jquery method to detect clicks on arrows and initiate cube shift on click
$('.arrow').on("click", function() {
	let id = $(this).attr('id');
	switch(id) {
		case "left":
			y_angle += 90;
			break;
		case "right":
			y_angle -= 90;
			break;
		case "down":
			x_angle -= 90;
			break;
		case "up":
			x_angle += 90;
			break;
	};
	document.getElementById('cube').style[prop] = "rotateX("+x_angle+"deg) rotateY("+y_angle+"deg)";
});
