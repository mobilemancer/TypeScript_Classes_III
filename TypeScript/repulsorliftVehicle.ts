abstract class RepulsorliftVehicle {
	private maxSpeed: number;
	private armaments: string;
	public passengers: number;

	constructor(maxSpeed: number, passengers: number, armaments?: string) {
		this.maxSpeed = maxSpeed;
		this.passengers = passengers;
		this.armaments = armaments;
	}

	abstract pickUpPassengers(noOfPassengers: number): string;

	fire(): string {
		if (!!this.armaments) {
			return `${this.armaments} fired!`;
		} else {
			return "No armaments to fire!";
		}
	}
}
// 
// (function() {
// 	console.log("");
// 	var testSpeeder = new RepulsorliftVehicle(400, 2);
// 	console.log(testSpeeder.fire());
// })();