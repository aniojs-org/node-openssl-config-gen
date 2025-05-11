import type {DistinguishedNamePolicy} from "./DistinguishedNamePolicy.mts"

import {getDistinguishedNameFields} from "#~src/getDistinguishedNameFields.mts"

export function generateDistinguishedNamePolicySection(
	policy: DistinguishedNamePolicy
): string {
	let section = ``

	// DistinguishedNamePolicy has the *exact* same fields as
	// DistinguishedName, except "domain" is missing
	for (const field of getDistinguishedNameFields()) {
		if (field === "domain") continue
		if (!(field in policy)) continue
		if (typeof policy[field] === "undefined") continue

		section += `${field} = ${policy[field]}\n`
	}

	return section
}
