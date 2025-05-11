import type {x509ExtensionNames} from "./types/x509Extensions.mts"

export function getx509ExtensionNames(): x509ExtensionNames {
	return [
		"AuthorityKeyIdentifier",
		"SubjectKeyIdentifier",
		"BasicConstraints",
		"CRLDistributionPoints",
		"ExtendedKeyUsage",
		"KeyUsage",
		"NameConstraints",
		"SubjectAltName"
	]
}
