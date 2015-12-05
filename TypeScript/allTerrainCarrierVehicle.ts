class AllTerrainCarrierVehicle extends Vehicle implements TroopCarrier {
	private legs: number;
	private troopsInHold: number;

	troopCapacity: number;
	medicalDroid: boolean;

	constructor(name: string, speed: number, legs: number, troopCapacity: number, hasMedicalDroid: boolean) {
		super(name, speed);
		this.legs = legs;
		this.troopCapacity = troopCapacity;
		this.medicalDroid = hasMedicalDroid;
		this.troopsInHold = 0;
	}

	move(distance: number) {
		return super.move(distance) + ` by walking on ${this.legs} legs`;
	}

	pickup(troops: number): string {
		if (this.troopsInHold + troops > this.troopCapacity) {
			return "Can't pick up that many troops";
		} else {
			this.troopsInHold += troops;
			return "Troops picked up";
		}
	}
}

(function() {
	var ATAT = new AllTerrainCarrierVehicle("AT-AT", 60, 4, 40, true);
	console.log("");
	console.log(ATAT.move(30));
	console.log(ATAT.pickup(35));
	console.log(ATAT.pickup(10));
})();