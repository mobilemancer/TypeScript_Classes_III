interface TroopCarrier {
	troopCapacity: number;
	medicalDroid: boolean;
	pickup(troops: number): string;
}