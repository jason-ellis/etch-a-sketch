$(document).ready(function() {
	var $squares;
	// Create new Pad
	function newPad(padSize) {
		// Canvas is a "pad" made up of "squares"
		var $sketchpad = $("#sketchpad");
		var padHeight = $($sketchpad).height();
		var padWidth = $($sketchpad).width();
		
		// Clear existing squares before creating new squares
		$sketchpad.html("");
		
		console.log(padHeight);
		console.log(padWidth);
		for(var i = 0; i < padSize*padSize; i++) {
			$($sketchpad).append("<div class='square'></div>");
		};
		$squares = $(".square");
		var squareH = (padHeight / padSize) + "px";
		var squareW = (padWidth / padSize) + "px";
		$($squares).css("height", squareH);
		$($squares).css("width", squareW);
		squareHover();
	}; // end newPad
	
	newPad(16);
	
	function squareHover() {
		$($squares).mouseenter(function() {
			$(this).css("background-color", "darkgray");
		});
	};
	
	$("#reset:button").click(function() {
		console.log("made it to submit");
		var newPadSize = prompt("Please enter a new pad size.");
		newPad(newPadSize);
	});
	
}); // end ready