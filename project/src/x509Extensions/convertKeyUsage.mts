import type {KeyUsage} from "#~src/types/x509Extensions/KeyUsage.mts"

export function convertKeyUsage(
	value: KeyUsage
): string {
	return Array.isArray(value) ? value.join(",") : value
}
