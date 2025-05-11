import type {AuthorityKeyIdentifier} from "./x509Extensions/AuthorityKeyIdentifier.mts"
import type {SubjectKeyIdentifier} from "./x509Extensions/SubjectKeyIdentifier.mts"
import type {BasicConstraints} from "./x509Extensions/BasicConstraints.mts"
import type {CRLDistributionPoints} from "./x509Extensions/CRLDistributionPoints.mts"
import type {ExtendedKeyUsage} from "./x509Extensions/ExtendedKeyUsage.mts"
import type {KeyUsage} from "./x509Extensions/KeyUsage.mts"
import type {NameConstraints} from "./x509Extensions/NameConstraints.mts"
import type {SubjectAltName} from "./x509Extensions/SubjectAltName.mts"

export type x509ExtensionNames = [
	"AuthorityKeyIdentifier",
	"SubjectKeyIdentifier",
	"BasicConstraints",
	"CRLDistributionPoints",
	"ExtendedKeyUsage",
	"KeyUsage",
	"NameConstraints",
	"SubjectAltName"
]

export type x509Extensions = Partial<{
	"AuthorityKeyIdentifier": AuthorityKeyIdentifier
	"SubjectKeyIdentifier": SubjectKeyIdentifier,
	"BasicConstraints": BasicConstraints,
	"CRLDistributionPoints": CRLDistributionPoints,
	"ExtendedKeyUsage": ExtendedKeyUsage,
	"KeyUsage": KeyUsage,
	"NameConstraints": NameConstraints,
	"SubjectAltName": SubjectAltName
}>

//
// critical extensions are marked with an exclamation mark
//
export type x509ExtensionsCritical = {
	[K in keyof x509Extensions as `!${K}`]: x509Extensions[K]
}
