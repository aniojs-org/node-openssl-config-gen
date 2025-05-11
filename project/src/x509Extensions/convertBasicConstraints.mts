import type {BasicConstraints} from "#~src/types/x509Extensions/BasicConstraints.mts"

export function convertBasicConstraints(
	value: BasicConstraints
): string {
	if (!value.isCA) {
		return "CA:FALSE"
	}

	if (typeof value.pathLength !== "undefined") {
		return `CA:TRUE,pathlen:${value.pathLength}`
	}

	return "CA:TRUE"
}
