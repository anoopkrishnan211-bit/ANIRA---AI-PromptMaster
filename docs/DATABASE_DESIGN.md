# PromptMaster AI

## Database Design

### Core Tables

#### users

- `id` UUID primary key
- `email` varchar
- `name` varchar
- `role` varchar
- `tenant_id` UUID
- `subscription_id` UUID
- `created_at` timestamp

#### organizations

- `id` UUID primary key
- `name` varchar
- `plan` varchar
- `created_at` timestamp

#### prompts

- `id` UUID primary key
- `user_id` UUID
- `title` varchar
- `content` text
- `created_at` timestamp

#### prompt_versions

- `id` UUID primary key
- `prompt_id` UUID
- `version` integer
- `content` text
- `created_at` timestamp

#### prompt_scores

- `id` UUID primary key
- `prompt_id` UUID
- `clarity_score` numeric
- `context_score` numeric
- `structure_score` numeric
- `constraint_score` numeric
- `example_score` numeric
- `optimization_score` numeric
- `overall_score` numeric
- `grade` varchar

### Design Notes

- Use tenant-aware foreign keys for all user-owned data
- Index prompt lookups by `user_id`, `tenant_id`, and `created_at`
- Store prompt history as immutable versions
- Keep analysis output normalized for reporting

### Extensibility

Future tables should support:

- Prompt templates
- Subscriptions
- Audit logs
- Governance findings
- Team workspaces

