class SpeederBike extends RepulsorliftVehicle {
	constructor(maxSpeed: number, passengers: number, armaments: string) {
		super(maxSpeed, passengers, armaments);
	}

	pickUpPassengers(noOfPassengers: number): string {
		if (noOfPassengers > this.passengers) {
			return "Can't fit that many passengers";
		} else {
			return "Passenger get's on and holds on for dear life";
		}
	}
}

(function() {
	console.log("");
	var model74Z: SpeederBike = new SpeederBike(350, 1, "Ax-20 blaster cannon");
	console.log(model74Z.pickUpPassengers(3));
	console.log(model74Z.pickUpPassengers(1));
	console.log(model74Z.fire());
})();