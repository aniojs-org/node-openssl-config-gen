import type {DistinguishedNameFields} from "./types/DistinguishedName.mts"

export function getDistinguishedNameFields(): DistinguishedNameFields {
	return [
		"domain",
		"countryName",
		"stateOrProvinceName",
		"localityName",
		"organizationName",
		"organizationalUnitName",
		"commonName",
		"emailAddress"
	]
}
