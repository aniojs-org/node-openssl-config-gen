import type {ExtendedKeyUsage} from "#~src/types/x509Extensions/ExtendedKeyUsage.mts"

export function convertExtendedKeyUsage(
	value: ExtendedKeyUsage
): string {
	return Array.isArray(value) ? value.join(",") : value
}
