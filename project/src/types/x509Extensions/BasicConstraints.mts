export type BasicConstraints = {
	isCA: false
} | {
	isCA: true
	pathLength?: number|undefined
}
