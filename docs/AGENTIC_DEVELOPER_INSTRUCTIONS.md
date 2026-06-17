# PromptMaster AI

## Agentic Developer Instructions

These instructions define how coding agents should operate on the PromptMaster AI codebase.

### Architecture Constraints

- Preserve the API-first SaaS architecture
- Keep prompt analysis logic modular
- Keep multi-tenant boundaries explicit
- Avoid hidden side effects in scoring logic

### Coding Standards

- Prefer clear, typed interfaces
- Keep business rules in domain modules
- Keep UI components composable and accessible
- Add tests with every meaningful feature

### Documentation Standards

- Update API docs when endpoints change
- Document scoring changes
- Keep technical assumptions visible

### Testing Requirements

- Add unit tests for scoring and parsing logic
- Add integration tests for API behavior
- Add E2E tests for critical user flows

### Security Requirements

- Validate all inputs
- Protect against prompt injection
- Avoid leaking secrets or tenant data
- Preserve auditability for governance actions

### Definition of Done

A feature is done only when it is:

- Implemented
- Tested
- Documented
- Secure
- Deployable

