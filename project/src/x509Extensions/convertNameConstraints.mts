import type {NameConstraints} from "#~src/types/x509Extensions/NameConstraints.mts"
import {convertSubjectAltName} from "./convertSubjectAltName.mts"

export function convertNameConstraints(
	value: NameConstraints
): string {
	const constraints = Array.isArray(value) ? value : [value]

	if (!constraints.length) return ""

	return constraints.map(constraint => {
		const name = convertSubjectAltName(constraint.value)

		return `${constraint.constraintType};${name}`
	}).join(",")
}
