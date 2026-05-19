# Microsoft Foundry Demo Runbook

## Demo objective

Deliver a 30 to 40 minute first-introduction to Microsoft Foundry for a mixed customer audience, using interactive HTML pages as concept framing and the May 2026 Foundry UI as the live proof surface.

## Lab objective

Deliver a guided 60-minute hands-on exercise where participants build a new Foundry agent, use the pre-assigned model in their project, create agent instructions, validate pre-loaded Azure AI Search content, connect the knowledge source to the agent, and validate grounded responses in Playground.

## Recommended sequence

1. Intro and value story
2. Mental model
3. Agent creation
4. Knowledge and tools
5. Guardrails
6. Traces and evaluation
7. Transition to the hands-on AI Search exercise

## Hands-on environment model

- Foundry projects are pre-created and labeled by participant login names.
- Each project is already connected to a single pre-deployed model.
- One shared pre-created Azure AI Search instance and index are used by the cohort.
- Lab documents are pre-loaded and indexed before the session starts.
- Authentication to Azure AI Search in the lab uses managed identity and RBAC.

## Facilitator assignments and controls

- Verify each attendee is mapped to the project label matching their login before the lab begins.
- Keep a participant-to-project roster visible so support is fast.
- Keep a copy of Search resource name and index name ready for distribution.
- Keep a short list of known validation phrases from pre-loaded documents ready for distribution.
- Verify attendee role assignments before start:
	- `Search Index Data Reader`
- Confirm pre-lab ingestion is complete in the target index before attendees join.

## Pre-demo checklist

- Verify access to the correct Foundry project and agent workspace.
- Prepare one agent with stable instructions.
- Prepare one known-good tool connection.
- Prepare one known-good knowledge source.
- Prepare one trace that is easy to explain.
- Prepare one evaluation or evaluation view worth showing.
- Open the local presentation landing page in a browser.
- Keep the Foundry UI in a second tab or window.

## Demo-risk notes

### Knowledge indexing latency
- Do not rely on new indexing during the talk.
- Use pre-indexed content.

### Tool demo instability
- Use a tool that has already been validated.
- If the tool misbehaves, explain the role of tools conceptually and continue.

### Slow UI or transient service issues
- Use the HTML section pages to continue the narrative while the UI catches up.
- Keep one or two screenshots ready outside the repo if needed.

### Over-explaining configuration
- Keep model, safety, and evaluation discussions at first-intro depth.
- Save deeper implementation details for the exercise or follow-up session.

## Hands-on risk notes

### Project assignment confusion
- Call out the login-to-project labeling pattern before participants begin clicking.
- Pause at minute 5 and verify every participant sees their project home.

### Model mismatch
- Participants should use the model already assigned in their project.
- If model controls are locked or missing, proceed without tuning and continue the lab.

### Search connection failures
- Confirm attendee is signed into the expected tenant/account.
- Confirm `Search Index Data Reader` is assigned.
- Confirm target index name is exact.

### Indexing delay during lab
- Do not perform live ingestion during the lab.
- Insert a timed checkpoint where participants verify pre-loaded documents are searchable before agent testing.

### Lab pacing drift
- Use hard stop checkpoints at 15, 30, 45, and 55 minutes.
- Move blocked participants to facilitator helper lane while the group continues.

## Rehearsal checklist

- Time the overview portion and keep it near 15 to 20 minutes.
- Confirm each section ends with a clear move into the UI.
- Confirm each live move has a fallback line if the UI stalls.
- Practice the bridge into the AI Search file-grounding exercise.

## Hands-on facilitation checklist

- Rehearse the full lab against a stopwatch and keep it to 60 minutes.
- Validate Search resource selection and index access in at least one project.
- Confirm all participant checkpoints in `hands-on-lab-foundry-agent.md` are achievable in sequence.
- Prepare one backup pre-populated index with known-good documents.
- Prepare two helper prompts for participants who finish early.