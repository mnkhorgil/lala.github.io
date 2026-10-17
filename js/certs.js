// Certificates, newest first. Each item: [name, issuer key, date, credential id]
// Issuer keys are defined in CERT_ISSUERS below. The credential link is built from the id.
const CERT_ISSUERS = {
    secureflag: {
      name: "SecureFlag",
      cls: "sf",
      url: (id) => "https://www.secureflag.com/s?" + id,
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg>'
    },
    udemy: {
      name: "Udemy",
      cls: "ud",
      url: (id) => "https://www.udemy.com/certificate/" + id + "/",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-4 9 4-9 4-9-4z"/><path d="M7 11.5V16c1.5 1.5 3 2 5 2s3.5-.5 5-2v-4.5"/></svg>'
    }
  };
  
  window.CERTS = [
    ["OWASP Mobile Top 10 in Android Learning Path", "secureflag", "Sep 2026", "38b90462-db17-4e5f-ac55-2d0c4d44f965"],
    ["Intermediate Secure Coding in Objective-C Learning Path", "secureflag", "Sep 2026", "9c001eba-35e2-42d1-b6ab-3689980f1a02"],
    ["PCI DSS with Kotlin Learning Path", "secureflag", "Sep 2026", "c32a24d2-daaf-4b9a-b115-3c928b3cd0b5"],
    ["Intermediate Secure Coding in Swift Learning Path", "secureflag", "Sep 2026", "b2e1d2d8-c20c-4855-a471-1c4591f5986e"],
    ["Intermediate Secure Coding in Android With Kotlin Learning Path", "secureflag", "Sep 2026", "ccd5e4c7-6443-40bc-ac00-e1873d5bc10b"],
    ["OWASP Mobile Top 10 in Swift Learning Path", "secureflag", "Sep 2026", "216d7263-cbe8-4703-b1c5-208e89420823"],
    ["OWASP Mobile Top 10 in Objective-C Learning Path", "secureflag", "Sep 2026", "9dddf690-372c-44c7-ad92-ec923cca9c06"],
    ["OWASP Mobile Top 10 in React Native Learning Path", "secureflag", "Sep 2026", "bd1e06a9-dcdd-412b-90f3-477ca3b84141"],
    ["Intermediate Secure Coding in Java Learning Path", "secureflag", "Mar 2026", "8d0d9492-9a83-4709-8b3a-a2cad8ed67c1"],
    ["OWASP Top 10:2025 in Java Learning Path", "secureflag", "Mar 2026", "e84154ed-f32e-4574-8c58-5328271eff0e"],
    ["Java Design Patterns & SOLID Design Principles", "udemy", "Feb 2025", "UC-13c7b542-4b96-4e7c-9491-33a63857770c"],
    ["React Testing Library with Jest/Vitest", "udemy", "Feb 2025", "UC-7791137b-c815-4850-b676-b0c5193fd4c8"]
  ];