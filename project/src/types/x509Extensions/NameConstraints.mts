import type {SubjectAltName} from "./SubjectAltName.mts"

type NonArray<T> = T extends unknown[] ? never : T

export type ConstraintType = "permitted" | "excluded"

export type NameConstraints = {
	constraintType: ConstraintType
	value: NonArray<SubjectAltName>
} | {
	constraintType: ConstraintType
	value: NonArray<SubjectAltName>
}[]
