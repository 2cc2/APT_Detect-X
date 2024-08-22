# 数据特征
```json
[
    {
        "CVE ID": "CVE-2019-0211",
        "ATT&CK Name": "Use After Free",
        "Description": "In Apache HTTP Server 2.4 releases 2.4.17 to 2.4.38, with MPM event, worker or prefork, code executing in less-privileged child processes or threads (including scripts executed by an in-process scripting interpreter) could execute arbitrary code with the privileges of the parent process (usually root) by manipulating the scoreboard. Non-Unix systems are not affected.",
        "Reference URL": "https://www.exploit-db.com/exploits/46676/",
        "CVSS Base Score": 7.2,
        "Severity": "HIGH",
        "Published Date": "2019-04-08T22:29Z",
        "Last Modified Date": "2024-07-25T14:58Z",
        "Abstraction": null,
        "Status": "Stable",
        "Alternate Terms": "::TERM:Dangling pointer:DESCRIPTION:a pointer that no longer points to valid memory, often after it has been freed::TERM:UAF:DESCRIPTION:commonly used acronym for Use After Free::TERM:Use-After-Free::",
        "Likelihood Of Attack": null,
        "Typical Severity": null,
        "Related Attack Patterns": "",
        "Execution Flow": null,
        "Prerequisites": null,
        "Skills Required": null,
        "Resources Required": null,
        "Indicators": null,
        "Consequences": null,
        "Mitigations": null,
        "Example Instances": null,
        "Related Weaknesses": "::NATURE:ChildOf:CWE ID:825:VIEW ID:1000:ORDINAL:Primary::NATURE:ChildOf:CWE ID:672:VIEW ID:1003:ORDINAL:Primary::NATURE:ChildOf:CWE ID:672:VIEW ID:1305:ORDINAL:Primary::NATURE:ChildOf:CWE ID:672:VIEW ID:1340:ORDINAL:Primary::NATURE:CanPrecede:CWE ID:120:VIEW ID:1000::NATURE:CanPrecede:CWE ID:123:VIEW ID:1000::",
        "Taxonomy Mappings": "::TAXONOMY NAME:ISA/IEC 62443:ENTRY ID:Part 4-1:ENTRY NAME:Req SI-1::TAXONOMY NAME:7 Pernicious Kingdoms:ENTRY NAME:Use After Free::TAXONOMY NAME:CLASP:ENTRY NAME:Using freed memory::TAXONOMY NAME:CERT C Secure Coding:ENTRY ID:MEM00-C:ENTRY NAME:Allocate and free memory in the same module, at the same level of abstraction::TAXONOMY NAME:CERT C Secure Coding:ENTRY ID:MEM01-C:ENTRY NAME:Store a new value in pointers immediately after free()::TAXONOMY NAME:CERT C Secure Coding:ENTRY ID:MEM30-C:ENTRY NAME:Do not access freed memory:MAPPING FIT:Exact::TAXONOMY NAME:Software Fault Patterns:ENTRY ID:SFP15:ENTRY NAME:Faulty Resource Use::",
        "Notes": "",
        "logs": [
            "192.168.0.1 - - [01/Aug/2024:08:04:11 +0000] \"GET / HTTP/1.1\" 200 394 \"-\" \"Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0\"",
            "192.168.0.1 - - [01/Aug/2024:08:04:12 +0000] \"GET /favicon.ico HTTP/1.1\" 404 489 \"http://192.168.0.2/\" \"Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0\"",
            "192.168.0.1 - - [01/Aug/2024:08:07:36 +0000] \"POST / HTTP/1.1\" 200 222 \"http://192.168.0.2/\" \"Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0\"",
            "192.168.0.1 - - [01/Aug/2024:08:07:39 +0000] \"GET / HTTP/1.1\" 200 357 \"-\" \"Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0\"",
            "192.168.0.1 - - [01/Aug/2024:08:08:27 +0000] \"POST / HTTP/1.1\" 200 222 \"http://192.168.0.2/\" \"Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0\"",
            "192.168.0.1 - - [01/Aug/2024:08:08:29 +0000] \"GET / HTTP/1.1\" 200 357 \"-\" \"Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0\"",
            "192.168.0.1 - - [01/Aug/2024:08:08:55 +0000] \"POST / HTTP/1.1\" 200 222 \"http://192.168.0.2/\" \"Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0\"",
            "192.168.0.1 - - [01/Aug/2024:08:09:06 +0000] \"POST / HTTP/1.1\" 200 258 \"http://192.168.0.2/\" \"Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0\"",
            "192.168.0.1 - - [01/Aug/2024:08:09:32 +0000] \"POST / HTTP/1.1\" 200 222 \"http://192.168.0.2/\" \"Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0\"",
            "192.168.0.1 - - [01/Aug/2024:08:09:36 +0000] \"GET /var/www/html/uploadfiles/eval.php.jpg HTTP/1.1\" 404 453 \"-\" \"Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0\"",
            "192.168.0.1 - - [01/Aug/2024:08:09:41 +0000] \"GET /var/www/html/uploadfiles/eval.php HTTP/1.1\" 404 453 \"-\" \"Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0\"",
            "192.168.0.1 - - [01/Aug/2024:08:30:22 +0000] \"GET / HTTP/1.1\" 200 394 \"-\" \"Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0\"",
            "192.168.0.1 - - [01/Aug/2024:08:30:28 +0000] \"POST / HTTP/1.1\" 200 258 \"http://192.168.0.2/\" \"Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0\"",
            "192.168.0.1 - - [01/Aug/2024:08:30:36 +0000] \"POST / HTTP/1.1\" 200 259 \"http://192.168.0.2/\" \"Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0\"",
            "192.168.0.1 - - [01/Aug/2024:08:32:25 +0000] \"POST / HTTP/1.1\" 200 258 \"http://192.168.0.2/\" \"Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0\"",
            "192.168.0.1 - - [01/Aug/2024:08:37:31 +0000] \"POST / HTTP/1.1\" 200 258 \"http://192.168.0.2/\" \"Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0\"",
            "192.168.0.1 - - [01/Aug/2024:08:48:35 +0000] \"POST / HTTP/1.1\" 200 258 \"http://192.168.0.2/\" \"Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0\""
        ],
        "pcap":[
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:34010 > 192.168.0.2:http S",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:34010 > 192.168.0.2:http S",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:34010 SA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:34010 SA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:34010 > 192.168.0.2:http A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:34010 > 192.168.0.2:http A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:34010 > 192.168.0.2:http PA / Raw",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "load": "<StrField (Raw,Padding).load>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:34010 > 192.168.0.2:http PA / Raw",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "load": "<StrField (Raw,Padding).load>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:34010 A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:34010 A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:34010 PA / Raw",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "load": "<StrField (Raw,Padding).load>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:34010 PA / Raw",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "load": "<StrField (Raw,Padding).load>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:34010 > 192.168.0.2:http A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:34010 > 192.168.0.2:http A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:34010 FA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:34010 FA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:34010 > 192.168.0.2:http FA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:34010 > 192.168.0.2:http FA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:34010 A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:34010 A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:34022 > 192.168.0.2:http S",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:34022 > 192.168.0.2:http S",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:34022 SA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:34022 SA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:34022 > 192.168.0.2:http A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:34022 > 192.168.0.2:http A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:34022 > 192.168.0.2:http PA / Raw",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "load": "<StrField (Raw,Padding).load>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:34022 > 192.168.0.2:http PA / Raw",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "load": "<StrField (Raw,Padding).load>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:34022 A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:34022 A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:34022 PA / Raw",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "load": "<StrField (Raw,Padding).load>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:34022 PA / Raw",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "load": "<StrField (Raw,Padding).load>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:34022 > 192.168.0.2:http A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:34022 > 192.168.0.2:http A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:34022 FA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:34022 FA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:34022 > 192.168.0.2:http FA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:34022 > 192.168.0.2:http FA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:34022 A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:34022 A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:38416 > 192.168.0.2:http S",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:38416 > 192.168.0.2:http S",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:38416 SA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:38416 SA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:38416 > 192.168.0.2:http A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:38416 > 192.168.0.2:http A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:38416 > 192.168.0.2:http PA / Raw",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "load": "<StrField (Raw,Padding).load>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:38416 > 192.168.0.2:http PA / Raw",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "load": "<StrField (Raw,Padding).load>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:38416 A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:38416 A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:38416 PA / Raw",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "load": "<StrField (Raw,Padding).load>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:38416 PA / Raw",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "load": "<StrField (Raw,Padding).load>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:38416 FA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:38416 FA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:38416 > 192.168.0.2:http A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:38416 > 192.168.0.2:http A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:38416 > 192.168.0.2:http FA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:38416 > 192.168.0.2:http FA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:38416 A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:38416 A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:46052 > 192.168.0.2:http S",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:46052 > 192.168.0.2:http S",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:46052 SA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:46052 SA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:46052 > 192.168.0.2:http A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:46052 > 192.168.0.2:http A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:46052 > 192.168.0.2:http PA / Raw",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "load": "<StrField (Raw,Padding).load>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:46052 > 192.168.0.2:http PA / Raw",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "load": "<StrField (Raw,Padding).load>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:46052 A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:46052 A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:46052 PA / Raw",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "load": "<StrField (Raw,Padding).load>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:46052 PA / Raw",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "load": "<StrField (Raw,Padding).load>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:46052 > 192.168.0.2:http A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:46052 > 192.168.0.2:http A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:46052 FA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:46052 FA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:46052 > 192.168.0.2:http FA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:46052 > 192.168.0.2:http FA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:46052 A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:46052 A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:47990 > 192.168.0.2:http S",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:47990 > 192.168.0.2:http S",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:47990 SA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:47990 SA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:47990 > 192.168.0.2:http A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:47990 > 192.168.0.2:http A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:47990 > 192.168.0.2:http PA / Raw",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "load": "<StrField (Raw,Padding).load>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:47990 > 192.168.0.2:http PA / Raw",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "load": "<StrField (Raw,Padding).load>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:47990 A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:47990 A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:47990 PA / Raw",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "load": "<StrField (Raw,Padding).load>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:47990 PA / Raw",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "load": "<StrField (Raw,Padding).load>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:47990 > 192.168.0.2:http A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:47990 > 192.168.0.2:http A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:47990 FA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:47990 FA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:47990 > 192.168.0.2:http FA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:47990 > 192.168.0.2:http FA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:47990 A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:47990 A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:39430 > 192.168.0.2:http S",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:39430 > 192.168.0.2:http S",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:39430 SA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:39430 SA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:39430 > 192.168.0.2:http A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:39430 > 192.168.0.2:http A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:39430 > 192.168.0.2:http PA / Raw",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "load": "<StrField (Raw,Padding).load>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:39430 > 192.168.0.2:http PA / Raw",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "load": "<StrField (Raw,Padding).load>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:39430 A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:39430 A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:39430 PA / Raw",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "load": "<StrField (Raw,Padding).load>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:39430 PA / Raw",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "load": "<StrField (Raw,Padding).load>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:39430 > 192.168.0.2:http A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:39430 > 192.168.0.2:http A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:39430 FA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:39430 FA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:39430 > 192.168.0.2:http FA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:39430 > 192.168.0.2:http FA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:39430 A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:39430 A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:39438 > 192.168.0.2:http S",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:39438 > 192.168.0.2:http S",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:39438 SA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:39438 SA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:39438 > 192.168.0.2:http A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:39438 > 192.168.0.2:http A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:39438 > 192.168.0.2:http PA / Raw",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "load": "<StrField (Raw,Padding).load>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:39438 > 192.168.0.2:http PA / Raw",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "load": "<StrField (Raw,Padding).load>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:39438 A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:39438 A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:39438 PA / Raw",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "load": "<StrField (Raw,Padding).load>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:39438 PA / Raw",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "load": "<StrField (Raw,Padding).load>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:39438 > 192.168.0.2:http A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:39438 > 192.168.0.2:http A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:39438 FA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:39438 FA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:39438 > 192.168.0.2:http FA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.1:39438 > 192.168.0.2:http FA",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:39438 A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            },
            {
                "summary": "CookedLinuxV2 / IP / TCP 192.168.0.2:http > 192.168.0.1:39438 A",
                "time": {},
                "layers": {
                    "<member 'name' of 'Packet' objects>": {
                        "sport": "<ShortEnumField (TCP,TCPerror).sport>",
                        "dport": "<ShortEnumField (TCP,TCPerror).dport>",
                        "seq": "<IntField (TCP,TCPerror).seq>",
                        "ack": "<IntField (TCP,TCPerror).ack>",
                        "dataofs": "<BitField (TCP,TCPerror).dataofs>",
                        "reserved": "<BitField (TCP,TCPerror).reserved>",
                        "flags": "<FlagsField (TCP,TCPerror).flags>",
                        "window": "<ShortField (TCP,TCPerror).window>",
                        "chksum": "<XShortField (TCP,TCPerror).chksum>",
                        "urgptr": "<ShortField (TCP,TCPerror).urgptr>",
                        "options": "<TCPOptionsField (TCP,TCPerror).options>"
                    }
                }
            }
        ]
    },
]
```