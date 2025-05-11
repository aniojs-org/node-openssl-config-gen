export type DistinguishedNameFields = [
	"domain",
	"countryName",
	"stateOrProvinceName",
	"localityName",
	"organizationName",
	"organizationalUnitName",
	"commonName",
	"emailAddress"
]

export type DistinguishedNameField = DistinguishedNameFields[number]

export type DistinguishedName = Partial<{
	[Value in DistinguishedNameField]: string
}>
