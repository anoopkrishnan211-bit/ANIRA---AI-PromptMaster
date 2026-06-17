export const promptPresets = [
  {
    name: "Operations blog",
    prompt:
      "Create a blog post about AI adoption for operations leaders. Make it practical, structured, and include risks, examples, and a closing checklist."
  },
  {
    name: "Consulting brief",
    prompt:
      "Rewrite this prompt so it gives a consulting-grade answer with constraints, role clarity, output format, and one example."
  },
  {
    name: "Support automation",
    prompt:
      "Compare three prompt versions and choose the strongest one for customer support automation. Explain the tradeoffs and recommend one."
  },
  {
    name: "Governed prompt",
    prompt:
      "Act as a compliance reviewer. Audit the prompt for PII, security risk, missing constraints, and policy gaps. Return a short risk summary."
  }
] as const;

export const workflow = [
  {
    key: "analyze",
    title: "Analyze",
    copy: "Score prompt health, surface gaps, and assign a quality grade."
  },
  {
    key: "optimize",
    title: "Optimize",
    copy: "Rewrite weak prompts with stronger structure, context, and constraints."
  },
  {
    key: "compare",
    title: "Compare",
    copy: "Rank versions and choose the strongest prompt for the task."
  },
  {
    key: "govern",
    title: "Govern",
    copy: "Detect risk, policy issues, and prompt safety concerns."
  }
] as const;

export const recentAnalyses = [
  { name: "Market Research Summary", model: "GPT-5.5", score: 92, grade: "A-", risk: "Low" },
  { name: "Customer Support Reply", model: "Claude", score: 74, grade: "B", risk: "Medium" },
  { name: "Sales Follow-up Draft", model: "GPT-5.5", score: 65, grade: "C+", risk: "High" },
  { name: "Product Brief Rewrite", model: "Gemini", score: 88, grade: "A", risk: "Low" }
];

export const templateCategories = [
  { title: "Marketing", description: "Campaign briefs, ad copy, and launch messaging." },
  { title: "Sales", description: "Outbound emails, discovery summaries, and proposals." },
  { title: "Coding", description: "Code generation, review, and debugging prompts." },
  { title: "HR", description: "Interview guides, policy drafts, and onboarding prompts." },
  { title: "Project Management", description: "Meeting notes, planning, and delivery prompts." },
  { title: "Customer Support", description: "Response macros, escalation handling, and tone control." }
];

export const historyEntries = [
  {
    version: "v1",
    title: "Original prompt",
    score: 58,
    note: "Too vague and missing output format."
  },
  {
    version: "v2",
    title: "Optimized prompt",
    score: 76,
    note: "Added role, examples, and constraints."
  },
  {
    version: "v3",
    title: "Enterprise prompt",
    score: 88,
    note: "Includes governance, audience, and success criteria."
  }
];

export const governanceChecks = [
  { label: "PII exposure", value: "Low", detail: "No direct personal data detected." },
  { label: "Security risk", value: "Moderate", detail: "Recommend tighter instruction boundaries." },
  { label: "Policy violations", value: "None", detail: "No clear policy conflicts found." },
  { label: "Prompt injection", value: "Low", detail: "No malicious override language detected." }
];

export const comparePrompts = [
  {
    id: "prompt-a",
    label: "Prompt A",
    prompt:
      "Write a launch email for a new analytics product. Make it persuasive, concise, and include a CTA."
  },
  {
    id: "prompt-b",
    label: "Prompt B",
    prompt:
      "Act as a SaaS copywriter. Write a launch email for a new analytics product aimed at operations leaders. Use a clear subject line, 3 value bullets, one proof point, and a CTA."
  },
  {
    id: "prompt-c",
    label: "Prompt C",
    prompt:
      "You are a SaaS copywriter. Create a launch email for an analytics product. Include audience, pain point, proof, benefit bullets, a CTA, and keep it under 150 words."
  }
] as const;

export const workspaceStats = [
  { label: "Prompt Health", value: "82", trend: "+8", detail: "Up from last week" },
  { label: "Active Teams", value: "14", trend: "+3", detail: "Across 4 workspaces" },
  { label: "Governed Prompts", value: "128", trend: "+19", detail: "Reviewed this month" },
  { label: "Enterprise Readiness", value: "91%", trend: "+6%", detail: "Security + compliance" }
];

export const activityFeed = [
  { title: "Operations team published 4 new prompts", time: "2h ago" },
  { title: "Governance review cleared 2 sensitive prompts", time: "5h ago" },
  { title: "Marketing workspace adopted template pack", time: "Yesterday" },
  { title: "Customer support prompt scores improved by 11%", time: "2 days ago" }
];

export const billingSummary = {
  plan: "Team",
  seats: "8 / 12",
  nextInvoice: "$249",
  renewal: "14 days"
};

export const workspaceMembers = [
  { name: "Sarah J.", role: "Workspace owner", access: "Admin" },
  { name: "David R.", role: "Prompt editor", access: "Editor" },
  { name: "Priya K.", role: "Governance reviewer", access: "Reviewer" },
  { name: "Mike L.", role: "Template curator", access: "Editor" }
];

export const workspacePolicies = [
  "Require approval for sensitive prompt edits",
  "Route governance failures to the admin queue",
  "Restrict template publishing to editors",
  "Keep prompt history for 90 days"
];
