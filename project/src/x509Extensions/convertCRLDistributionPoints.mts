import type {CRLDistributionPoints} from "#~src/types/x509Extensions/CRLDistributionPoints.mts"

export function convertCRLDistributionPoints(
	value: CRLDistributionPoints
): string {
	return Array.isArray(value) ? value.join(",") : value
}
