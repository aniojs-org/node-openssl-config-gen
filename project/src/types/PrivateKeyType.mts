export type RSAPrivateKeyType = {
	type: "rsa"
	keySize: 2048 | 4096
}

export type ECDSAPrivateKeyType = {
	type: "ecdsa"
	curve: "secp384r1"
}

export type PrivateKeyType = RSAPrivateKeyType | ECDSAPrivateKeyType
