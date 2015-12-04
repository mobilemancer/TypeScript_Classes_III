class TerrainVehicle {
	private name: string;
	private speed: number;

	constructor(name: string, speed: number) {
		this.name = name;
		this.speed = speed;
	}

	move(distance: number): string {
		var time = distance / this.speed;
		return `${this.name} moved ${distance} kilometers in ${(time * 60).toFixed(2) } minutes`;
	}
}

(function() {
	console.log("");
	var vehicle = new TerrainVehicle("Test vehicle", 60);
	console.log(vehicle.move(10));
})();
