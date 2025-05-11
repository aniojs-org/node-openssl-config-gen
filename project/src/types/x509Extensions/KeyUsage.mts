export type KeyUsageValue = "digitalSignature" |
                            "nonRepudiation"   |
                            "keyEncipherment"  |
                            "dataEncipherment" |
                            "keyAgreement"     |
                            "keyCertSign"      |
                            "cRLSign"          |
                            "encipherOnly"     |
                            "decipherOnly"

export type KeyUsage = KeyUsageValue | KeyUsageValue[]
