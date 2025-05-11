import type {DistinguishedName} from "./DistinguishedName.mts"

export type DistinguishedNamePolicyValue = "match" | "supplied" | "optional" | undefined

export type DistinguishedNamePolicy = Partial<{
	[field in Exclude<keyof DistinguishedName, "domain">]: DistinguishedNamePolicyValue
}>
