window.onload = function() {
	for(var i = 0; i < divelment.length; i++) {
		setInterval(move, 50);
	}
};

for(var i = 0; i < 30; i++) {
	document.write("<div></div>")
};

var divelment = document.querySelectorAll("div"),
	epath,
	divmoveadd = [],
	divmovey = 0,
	divmoveyadd = [],
	divmove = [];

for(var i = 0; i < divelment.length; i++) {
	divmove[i] = Math.random() * 1 - 0.35;
};

bodyelment = document.querySelector("body").onmousemove = function(e) {
	divmovey = e.pageX / 3000 - 0.255;
};

function move() {
	for(var i = 0; i < divelment.length; i++) {
		if(divmoveadd[i] == undefined || divmoveadd[i] >= document.documentElement.clientHeight + 100) {
			divmoveadd[i] = 0;
			divelment[i].style.backgroundSize = Math.ceil(Math.random() * 15 + 10) + "px";
			divelment[i].style.backgroundImage = "url(img/snowflake" + Math.ceil(Math.random() * 20) + ".png)";
			divmoveyadd[i] = Math.ceil(Math.random() * document.documentElement.clientWidth);
			divelment[i].style.left = divmoveyadd[i] + "px";
		};
		divmoveadd[i] += divmove[i];
		divmoveyadd[i] += divmovey;
		divelment[i].style.top = divmoveadd[i] + "px";
		divelment[i].style.left = divmoveyadd[i] + divmovey + "px";
	};
};