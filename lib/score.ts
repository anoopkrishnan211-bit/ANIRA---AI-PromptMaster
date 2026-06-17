export function scorePrompt(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const hasRole = /you are|act as|as a/i.test(text);
  const hasStructure = /bullet|table|steps|checklist|format|summary/i.test(text);
  const hasConstraints = /must|should|avoid|do not|limit|return/i.test(text);
  const hasExamples = /example|for instance|e\.g\./i.test(text);
  const hasRisk = /risk|security|compliance|pii|policy/i.test(text);
  const clarity = Math.min(96, 46 + Math.floor(words / 2) + (hasRole ? 12 : 0));
  const context = Math.min(95, 42 + (words > 18 ? 18 : 8) + (hasExamples ? 12 : 0));
  const role = hasRole ? 84 : 56;
  const structure = hasStructure ? 86 : 61;
  const constraints = hasConstraints ? 79 : 52;
  const optimization = Math.min(94, 54 + (hasStructure ? 10 : 0) + (hasConstraints ? 8 : 0));
  const governance = hasRisk ? 91 : 68;
  const overall = Math.round(
    clarity * 0.18 +
      context * 0.18 +
      role * 0.14 +
      structure * 0.14 +
      constraints * 0.12 +
      (hasExamples ? 72 : 46) * 0.12 +
      optimization * 0.1 +
      governance * 0.02
  );

  const grade = overall >= 85 ? "Excellent" : overall >= 72 ? "Good" : overall >= 58 ? "Fair" : "Weak";
  const color = overall >= 85 ? "Green" : overall >= 72 ? "Yellow" : overall >= 58 ? "Amber" : "Red";

  return {
    clarity,
    context,
    role,
    structure,
    constraints,
    examples: hasExamples ? 76 : 41,
    optimization,
    governance,
    overall,
    grade,
    color,
    hasRisk,
    hasExamples
  };
}
