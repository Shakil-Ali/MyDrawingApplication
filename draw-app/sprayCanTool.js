function SprayCanTool(){
	
	this.name = "sprayCanTool";
	this.icon = "assets/newspray.jpg";

	var points = 13;
	var spread = 10;

	this.draw = function(){
		var r = random(5,10);
		if(mouseIsPressed){
			for(var i = 0; i < points; i++){
                // sets the strokeWeight
                strokeWeight(1);
                // sets the point
				point(random(mouseX-spread, mouseX + spread), random(mouseY-spread, mouseY+spread));
			}
		}
	};
}
