export type ExtendedKeyUsageValue = "serverAuth"      |
                                    "clientAuth"      |
                                    "codeSigning"     |
                                    "emailProtection" |
                                    "timeStamping"    |
                                    "OCSPSigning"     |
                                    "ipsecIKE"        |
                                    "msCodeInd"       |
                                    "msCodeCom"       |
                                    "msCTLSign"       |
                                    "msEFS"

export type ExtendedKeyUsage = ExtendedKeyUsageValue | ExtendedKeyUsageValue[]
