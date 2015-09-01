$(document).ready(function() {

	var numberPerSide = 16;

	$("<button id='reset'>Reset</button>").appendTo('body');
	$("#reset").after("<button id='resize'>Resize</button");

	$("<div id='container'></div>").appendTo('body');

	var initialize = function () {
		for (var i = 0; i < (numberPerSide); i++) {
			$('<div class="bricks bricksize uncolored"></div>').appendTo('#container');	
		}
	};

	initialize();

	$('.bricks').hover(function() {
		$(this).addClass("colored");
	});

	$('#reset').click(function() {
		$('.bricks').removeClass("colored");	
	});

	$('#resize').click(function() {
		var numberPerSide = prompt("How many bricks per side?");
		$('.bricks').remove();
		var newSize = 512 / numberPerSide;
		totalBricks = numberPerSide * numberPerSide;
		for (var i = 0; i < totalBricks; i++) {
			$('<div class="bricks bricksize uncolored"></div>').appendTo('#container');
		}
		$('.bricksize').height(newSize).width(newSize);
		alert(newSize);
		$('.bricks').hover(function() {
		$(this).addClass("colored");
		});
	});

	

});