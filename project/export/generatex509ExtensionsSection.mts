import type {x509Extensions} from "./x509Extensions.mts"
import {getx509ExtensionNames} from "#~src/getx509ExtensionNames.mts"
import {_generatex509ExtensionSection} from "#~src/_generatex509ExtensionSection.mts"

export function generatex509ExtensionsSection(
	extensions: x509Extensions
): string {
	let section = ``

	// make sure only one variant of an extension is specified
	// (e.g. specifying "basicConstraints" and "!basicConstraints" is invalid)
	for (const extensionName of getx509ExtensionNames()) {
		if (extensionName.startsWith("!")) continue

		if (hasExtension(extensionName) && hasExtension(`!${extensionName}`)) {
			throw new Error(
				`cannot specify extension twice. offending extension: '${extensionName}'.`
			)
		}
	}

	for (const extensionName of getx509ExtensionNames()) {
		const value = _generatex509ExtensionSection(
			extensions, extensionName
		)

		if (!value.trim().length) continue

		const isCritical = extensionName.startsWith("!")

		if (isCritical) {
			section += `${extensionName.slice(1)} = critical,${value}\n`
		} else {
			section += `${extensionName} = ${value}\n`
		}
	}

	return section

	function hasExtension(extensionName: string) {
		return extensionName in extensions
	}
}
