import type {SubjectAltName} from "#~src/types/x509Extensions/SubjectAltName.mts"

export function convertSubjectAltName(
	value: SubjectAltName
): string {
	const subjectAltNames = Array.isArray(value) ? value : [value]

	if (!subjectAltNames.length) return ""

	return subjectAltNames.map(subjectAltName => {
		return `${subjectAltName.sanType}:${subjectAltName.value}`
	}).join(",")
}
