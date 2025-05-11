import type {DistinguishedName} from "./DistinguishedName.mts"
import {getDistinguishedNameFields} from "#~src/getDistinguishedNameFields.mts"

export function generateDistinguishedNameSection(
	distinguishedName: DistinguishedName
): string {
	let section = ``

	for (const field of getDistinguishedNameFields()) {
		if (!(field in distinguishedName)) continue
		if (typeof distinguishedName[field] === "undefined") continue

		if (field === "domain") {
			const domainComponents = distinguishedName[field].split(".").reverse()

			for (const [index, domainComponent] of domainComponents.entries()) {
				section += `${index}.domainComponent = "${domainComponent}"\n`
			}
		} else {
			section += `${field} = "${distinguishedName[field]}"\n`
		}
	}

	return section
}
