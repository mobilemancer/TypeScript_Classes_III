class AllTerrainVehicle extends Vehicle {
	private legs: number;

	constructor(name: string, speed: number, legs: number) {
		super(name, speed);
		this.legs = legs;
	}

	move(distance: number) {
		return super.move(distance) + ` by walking on ${this.legs} legs`;
	}
}

(function() {
	console.log("");
	var ATST = new AllTerrainVehicle("AT-ST", 90, 2);
	console.log(ATST.move(30));
})();