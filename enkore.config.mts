import {
	createConfig,
	createTargetJSNodeOptions,
	createAutogeneratedFile
} from "enkore/spec/factory"

import fs from "node:fs"
import path from "node:path"

function getx509ExtensionNames(projectRoot: string) {
	const extensionsDir = path.join(
		projectRoot, "project", "src", "types", "x509Extensions"
	)

	let extensionNames: {extensionName: string, propName: string}[] = []

	for (const entry of fs.readdirSync(extensionsDir)) {
		if (!entry.endsWith(".mts")) continue

		const extensionName = entry.slice(0, -4)
		let propName = lcfirst(extensionName)

		if (extensionName === "CRLDistributionPoints") {
			propName = "crlDistributionPoints"
		}

		extensionNames.push({
			extensionName,
			propName
		})
	}

	return extensionNames
}

function lcfirst(str: string) {
	return str.slice(0, 1).toLowerCase() + str.slice(1)
}

export const config: unknown = createConfig({
	target: {
		name: "js-node",
		options: createTargetJSNodeOptions({

		})
	},

	autogeneratedFiles: [
		createAutogeneratedFile({
			destinationPath: "project/src/types/x509Extensions.mts",
			generator(session) {
				const extensionNames = getx509ExtensionNames(session.project.root)

				let code = ``

				for (const {extensionName} of extensionNames) {
					code += `import type {${extensionName}} from "./x509Extensions/${extensionName}.mts"\n`
				}

				code += "\n"
				code += `export type x509Extensions = Partial<{\n`

				for (const {extensionName, propName} of extensionNames) {
					code += `\t"${propName}": ${extensionName},\n`
					code += `\t"!${propName}": ${extensionName},\n`
				}

				code += `}>\n`

				return code
			}
		}),

		createAutogeneratedFile({
			destinationPath: "project/src/types/x509ExtensionNames.mts",
			generator(session) {
				let code = `export type x509ExtensionNames = [\n`

				for (const {propName} of getx509ExtensionNames(session.project.root)) {
					code += `\t"${propName}",\n`
					code += `\t"!${propName}",\n`
				}

				code += `]\n`

				return code
			}
		}),

		createAutogeneratedFile({
			destinationPath: "project/src/getx509ExtensionNames.mts",
			generator(session) {
				let code = ``

				code += `import type {x509ExtensionNames} from "./types/x509ExtensionNames.mts"\n\n`
				code += `export function getx509ExtensionNames(): x509ExtensionNames {\n`

				code += `\treturn [\n`

				for (const {propName} of getx509ExtensionNames(session.project.root)) {
					code += `\t\t"${propName}",\n`
					code += `\t\t"!${propName}",\n`
				}

				code += `\t]\n`

				code += `}\n`

				return code
			}
		}),

		createAutogeneratedFile({
			destinationPath: "project/src/_generatex509ExtensionSection.mts",
			generator(session) {
				let code = ``

				code += `import type {x509Extensions} from "#~export/x509Extensions.mts"\n\n`
				code += `import type {x509ExtensionNames} from "#~src/types/x509ExtensionNames.mts"\n\n`

				for (const {extensionName} of getx509ExtensionNames(session.project.root)) {
					const fn = `convert${extensionName}`

					code += `import {${fn}} from "#~src/x509Extensions/${fn}.mts"\n`
				}

				code += `\n`
				code += `export function _generatex509ExtensionSection(\n`
				code += `\textensions: x509Extensions,\n`
				code += `\textensionName: x509ExtensionNames[number]\n`
				code += `): string {\n`

				code += `\t`

				let first = true

				for (const {propName, extensionName} of getx509ExtensionNames(session.project.root)) {
					code += `if (extensionName ===  "${propName}" ||\n`
					code += `\t${" ".repeat(first ? 4 : 11)}extensionName === "!${propName}") {\n`
					code += `\t\tconst value = extensions[extensionName]\n\n`
					code += `\t\tif (typeof value === "undefined") return ""\n\n`

					code += `\t\treturn convert${extensionName}(value);\n`

					code += `\t} else `

					first = false
				}

				code += `{\n`

				code += `\t\tthrow new Error(\`Unknown extension name '\${extensionName}'.\`);\n`

				code += `\t}\n`

				code += `}\n`

				return code
			}
		})
	]
})
