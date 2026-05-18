# Microsoft Foundry Hands-On Lab

## Build a grounded agent with Azure AI Search in 60 minutes

This lab is designed for first-time Foundry users and is intended to fill a full one-hour session.

## Lab outcomes

By the end of the lab, you will:

1. Create a new Foundry agent in your assigned project.
2. Use your project's pre-deployed model.
3. Write practical instructions for your agent.
4. Upload PDFs for indexing.
5. Confirm documents are indexed in Azure AI Search.
6. Add Azure AI Search as agent knowledge.
7. Test and validate grounded responses in Playground.

## Environment assumptions

- You were assigned one of 10 pre-created Foundry projects.
- Each project already has one pre-deployed model.
- The class shares one Azure AI Search service.
- A pre-created storage account exists for document ingestion.
- Search connection in this lab uses managed identity and RBAC.

## What you need before minute 0

Make sure you have the following from the facilitator:

- Your Foundry project name.
- Azure AI Search index name for this lab.
- Storage account container path or upload location details.
- A small PDF set (2-3 files) for upload.
- Confirmation that your identity has `Search Index Data Reader` on the shared Search service.
- Confirmation that your identity has `Storage Blob Data Reader` on the storage container.
- If you will upload files in-lab, confirmation that your identity has `Storage Blob Data Contributor`.

## 60-minute agenda

- 00:00-05:00: Verify access and locate assigned project.
- 05:00-15:00: Create agent and confirm model.
- 15:00-25:00: Write and save instructions.
- 25:00-40:00: Upload PDFs and verify indexing.
- 40:00-50:00: Connect Azure AI Search as knowledge.
- 50:00-58:00: Test in Playground.
- 58:00-60:00: Completion check and recap.

## Step-by-step instructions

### Phase 0: Verify access and project assignment (00:00-05:00)

1. Open the Foundry portal and sign in.
2. From your project list, open your assigned project.
3. Confirm left navigation shows at least: Agents, Models, Knowledge, Data, and Guardrails.
4. Keep this lab document open in a separate window or side-by-side tab.

Checkpoint:

- You can open your assigned project and see the Foundry navigation.

If blocked:

- Ask facilitator to confirm you were assigned the correct project name.
- Refresh the page and re-open the project from the projects list.

### Phase 1: Create a new agent and confirm model (05:00-15:00)

1. In left navigation, click Agents.
2. Click the create action for a new agent (for example: New agent, Create agent, or +).
3. Enter agent details:
   - Name: `lab-agent-<your-initials>`
   - Description: `Answers questions using indexed PDF knowledge.`
4. Save or create the agent.
5. On the agent configuration view, locate the Model section.
6. Confirm the pre-deployed model is selected for your project.
7. If selection is required, choose the available project model and save.

Checkpoint:

- Agent exists and shows a model selected.

If blocked:

- If no model appears, continue without changing model settings and notify facilitator.
- If agent creation errors, refresh Agents and verify whether agent was created before retrying.

### Phase 2: Create and save instructions (15:00-25:00)

1. In the agent view, locate Instructions.
2. Paste the following starter instructions:

```text
You are a helpful assistant that answers questions using only the connected knowledge source.

Rules:
- Use retrieved document content as your primary source.
- If the answer is not present in the retrieved content, clearly say you do not have enough information.
- Keep responses concise and practical.
- Do not invent policy details or numbers.
```

3. Save instructions.
4. Navigate away and back to the Instructions panel to confirm persistence.

Checkpoint:

- Instructions are saved and still visible after refresh/navigation.

If blocked:

- Try saving shorter text first, then paste full version.
- Hard refresh and retry save.

### Phase 3: Upload PDFs and verify indexing (25:00-40:00)

1. Open Data or the document-ingestion area configured by your facilitator.
2. Choose the provided storage-backed upload flow.
3. Upload 2-3 PDFs from the lab package.
4. Confirm each file shows upload success.
5. Start or confirm indexing for the target Azure AI Search index.
6. Wait for indexing status to show completion or ready state.
7. Validate indexing by searching a known phrase from one uploaded PDF in Search validation UI (or query preview if available).

Suggested validation phrases:

- A policy title from your PDF.
- A unique heading or section phrase.

Checkpoint:

- At least one uploaded document is discoverable in the target index.

If blocked:

- Verify index name with facilitator.
- Verify RBAC assignments with facilitator (`Search Index Data Reader`, `Storage Blob Data Reader`, and `Storage Blob Data Contributor` if uploading).
- Confirm files are valid PDFs and not encrypted.
- If indexing is still pending after several minutes, proceed with facilitator-provided fallback indexed files.

### Phase 4: Add Azure AI Search as knowledge (40:00-50:00)

1. Return to your agent page.
2. Open Knowledge.
3. Click add/connect knowledge.
4. Select Azure AI Search.
5. Enter connection details exactly:
   - Search resource: select the shared Azure AI Search resource from the tenant resource picker.
   - Authentication: managed identity or Microsoft Entra (no key entry).
   - Index name: provided lab index
6. Test connection if the UI provides a test action.
7. Save the knowledge connection.
8. Verify the knowledge source appears as active/connected on the agent.

Checkpoint:

- Knowledge source is attached to the agent and reports healthy/connected.

If blocked:

- Re-check index name spelling.
- Confirm you are signed in with the expected tenant and account.
- Confirm your identity has `Search Index Data Reader` on the Search service.
- Wait a few minutes and retry if role assignments were changed recently.

### Phase 5: Test in Playground (50:00-58:00)

1. Open Playground for your agent.
2. Run prompt A (instruction check):

```text
What sources are you allowed to use for answers?
```

Expected:

- The answer reflects instruction constraints and does not claim unrestricted knowledge.

3. Run prompt B (grounded knowledge check):

```text
Summarize the key policy points from the uploaded documents.
```

Expected:

- Response references indexed content and stays aligned to uploaded PDFs.

4. Run prompt C (out-of-scope check):

```text
What is our company reimbursement policy for items not covered in the documents?
```

Expected:

- The agent states insufficient evidence or asks for clarifying source content instead of inventing details.

5. If Traces is available, inspect one run and confirm retrieval was used.

Checkpoint:

- You have at least one grounded response and one safe out-of-scope response.

### Phase 6: Completion and recap (58:00-60:00)

Complete this checklist:

- Agent created.
- Model confirmed.
- Instructions saved.
- PDFs uploaded.
- Index contains uploaded content.
- Knowledge source connected.
- Playground tests completed.

If you finished early:

1. Refine instructions to enforce shorter answer format.
2. Re-run prompts and compare behavior.
3. Add one extra test prompt that requires cross-document synthesis.

## Troubleshooting quick guide

### Problem: Cannot create agent

- Refresh Agents list and retry.
- Confirm project assignment and permissions with facilitator.

### Problem: Model is missing

- Use the project default model if shown.
- If no model appears, continue lab steps and request facilitator fix.

### Problem: Search connection test fails

- Validate sign-in tenant/account.
- Validate `Search Index Data Reader` assignment.
- Validate `Storage Blob Data Reader` assignment.
- If uploading files, validate `Storage Blob Data Contributor` assignment.
- Validate index name.

### Problem: No grounded answers in Playground

- Confirm index actually has searchable content.
- Confirm knowledge source is attached to this specific agent.
- Re-run with a phrase known to exist in uploaded documents.

## Facilitator checkpoint calls (for live delivery)

- Minute 10: everyone confirms agent exists.
- Minute 25: everyone confirms instructions saved.
- Minute 40: everyone confirms indexed document retrieval.
- Minute 50: everyone confirms knowledge source connected.
- Minute 58: everyone confirms one grounded response.