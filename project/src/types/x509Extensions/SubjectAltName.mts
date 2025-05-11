export type SubjectAltNameTypes = [
	"email",
	"URI",
	"DNS",
	"RID",
	"IP",
	"dirName",
	"otherName"
]

export type SubjectAltNameType = SubjectAltNameTypes[number]

export type SubjectAltName = {
	sanType: SubjectAltNameType
	value: string
} | {
	sanType: SubjectAltNameType
	value: string
}[]
