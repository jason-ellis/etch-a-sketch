$(document).ready(function() {
	var $squares;
	var mode = "normal";
	// Create new Pad
	function newPad(padSize) {
		// Canvas is a "pad" made up of "squares"
		var $sketchpad = $("#sketchpad");
		var padHeight = $($sketchpad).height();
		var padWidth = $($sketchpad).width();

		// Clear existing squares before creating new squares
		$sketchpad.html("");

		var padRow = "";

		for(var i = 0; i < padSize; i++) {
			padRow += "<div class='square'></div>";
		};

		for(var i = 0; i < padSize; i++) {
			$($sketchpad).append(padRow);
		};

		$squares = $("div .square");
		var squareH = (padHeight / padSize) + "px";
		var squareW = (padWidth / padSize) + "px";
		$($squares).css("height", squareH);
		$($squares).css("width", squareW);
		squareHover();
	}; // end newPad

	newPad(16);

	function squareHover() {
		if(mode == "normal") {
			$($squares).mouseenter(function() {
				$(this).css("background-color", "darkgray");
			});
		}
		else if(mode == "random") {
			$($squares).mouseenter(function() {
				$(this).css("background-color", getRandomColor());
			});
		};
	}; // end squareHover

	$("#reset:button").click(function() {
		do {
			var newPadSize = prompt("Please enter a new size.");
			newPad(newPadSize);
		}
		while (isNaN(newPadSize));
	}); // end reset button click

	$("#normal:button").click(function() {
		mode = "normal";
		do {
			var newPadSize = prompt("Please enter a new size.");
			newPad(newPadSize);
		}
		while (isNaN(newPadSize));
	}); // end normal button click

	$("#random:button").click(function() {
		mode = "random";
		do {
			var newPadSize = prompt("Please enter a new size.");
			newPad(newPadSize);
		}
		while (isNaN(newPadSize));
	}); // end random button click

	function getRandomColor() {
    	var letters = '0123456789ABCDEF'.split('');
    	var color = '#';
    	for (var i = 0; i < 6; i++ ) {
        	color += letters[Math.floor(Math.random() * 16)];
    	}
    	return color;
	}; // end getRandomColor

}); // end ready
