export const workExperiences = [
  {
    id: 1,
    title: "Technical Intern I",
    company: "Cisco",
    duration: "Jun 2026 – Aug 2026",
    location: "Pune, India",
    description: [
      "Developed 5G Core Service Communication Proxy (SCP) guardrails in Go to improve routing safety, handle malformed and suspicious SBI headers, and ensure 3GPP TS 29.500 compliance.",
      "Validated SCP behavior through pyATS, unit, integration, and fuzz testing, with Prometheus metrics and secure logging to improve reliability and observability."
    ]
  },
  {
    id: 2,
    title: "Open Source Contributor",
    company: "Google Summer of Code",
    link: "https://drive.google.com/file/d/1QFOkmFvwHTHbXxYLUNyf4y34l5mXoajB/view?usp=sharing",
    duration: "May 2026 – Sep 2026",
    location: "Remote",
    description: [
      "Engineered TCAMP (HumanAI Foundation)—a 4-stage, fully offline Python pipeline converting noisy multi-speaker clinical audio into structured psychological telemetry.",
      "Architected a segment-level dual-path router (Pyannote 3.1 & WhisperX with DeepFilterNet3 and RMS fallback) and an acoustic QC tagger to eliminate hallucinations.",
      "Built deterministic turn-taking and Gini centralization metrics, paired with local Llama 3.2 for offline dialogue-act and sentiment telemetry."
    ]
  }
];
