# PromptMaster AI

## AI Scoring Engine Specification

The scoring engine is the core intellectual property of PromptMaster AI. It evaluates prompt quality, produces a health score, and recommends improvements.

### Scoring Dimensions

- Clarity
- Context
- Role definition
- Structure
- Constraints
- Examples
- AI optimization

### Evaluation Stages

#### Stage 1: Rule-Based Evaluation

Checks for:

- Prompt length
- Structure
- Role presence
- Constraints
- Formatting

#### Stage 2: AI Evaluation

Analyzes:

- Clarity
- Context
- Completeness
- Ambiguity
- Specificity

#### Stage 3: Weighted Score Calculation

Final score is derived from weighted dimension scores.

#### Stage 4: Recommendation Engine

Outputs:

- Weaknesses
- Improvements
- Best practices

#### Stage 5: Optimization Engine

Produces:

- Enhanced prompt
- Alternative prompt
- Enterprise prompt variant

### Output Model

```json
{
  "clarity": 90,
  "context": 80,
  "role_definition": 70,
  "structure": 85,
  "constraints": 60,
  "examples": 40,
  "optimization": 75,
  "overall_score": 78,
  "grade": "Good"
}
```

### Future Extensions

- Confidence score calculation
- Prompt maturity index
- AI readiness score
- ML-assisted scoring calibration

