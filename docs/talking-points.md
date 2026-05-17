# Microsoft Foundry Intro Talking Points

## 1. Foundry value story

### Speaker bullets
- Foundry is where teams turn model capability into usable AI agents.
- The platform story is bigger than prompting: build, ground, control, observe, and improve.
- The second half of the session moves into a simple hands-on exercise grounded in AI Search files.

### Short script
When customers first see Foundry, they often assume it is mainly a place to access models. The stronger story is that it gives teams one environment to create agents, connect them to enterprise context, apply controls, and improve them over time.

### Live cue
Open the Foundry UI and orient the audience to the left navigation and the tabs inside an agent.

## 2. Mental model

### Speaker bullets
- Agents are the composition layer.
- Models provide capability, knowledge provides relevance, tools provide action.
- Guardrails, traces, and evaluation make the platform enterprise-ready.

### Short script
Treat Foundry as a lifecycle rather than a collection of menus. You define an agent, give it a model, connect it to knowledge and tools, place guardrails around it, and then inspect and improve the results.

### Live cue
Point to Agents, Tools, Knowledge, Guardrails, Traces, and Evaluation and tie them back to the lifecycle.

## 3. Build an agent

### Speaker bullets
- Keep the first agent simple.
- Use instructions to define role and scope, not every edge case.
- Move quickly into testing so the audience sees speed and approachability.

### Short script
I am intentionally not overcomplicating the first agent. I want you to see that defining a useful role and testing it can happen quickly, and then the real power comes from what we connect next.

### Live cue
Create or open the demo agent, point out the model briefly, and explain the instructions pane.

## 4. Knowledge and tools

### Speaker bullets
- Knowledge helps the agent know better.
- Tools help the agent do more.
- Most useful enterprise agents need both.

### Short script
An agent becomes materially more useful when it can answer from trusted organizational context and call out to systems or actions. That is the point where it stops being a generic assistant and becomes a business tool.

### Live cue
Show one preconfigured knowledge source, one preconfigured tool, then ask a Playground question that demonstrates one of them.

## 5. Guardrails

### Speaker bullets
- Customers ask about control almost immediately.
- Safety should be presented as a platform concern, not a prompt trick.
- Keep this section short and confidence-building.

### Short script
Foundry is built for teams that need confidence, not just capability. I do not need to walk through every setting today. I just want to show you that the platform has a deliberate control surface for responsible operation.

### Live cue
Open Guardrails and show one or two examples at a high level.

## 6. Traces and evaluation

### Speaker bullets
- Traces explain what happened on a specific run.
- Evaluation measures quality over time.
- This is the bridge from a clever demo to an operational system.

### Short script
The reason serious teams care about platforms like this is not only that the first answer can be good. It is that they can inspect behavior, understand what happened, and improve the system deliberately instead of guessing.

### Live cue
Show one prepared trace and one prepared evaluation artifact.

## 7. Transition to the exercise

### Speaker bullets
- The audience has now seen the platform map.
- The hands-on exercise stays intentionally basic.
- AI Search grounding gives a concrete first scenario.

### Short script
Now that you have seen the core Foundry story, we can make it real with a simple exercise. We are going to build a basic agent that answers questions grounded in files, which is one of the easiest and most understandable starting points for a first project.

### Live cue
Move to the exercise setup and explain that the narrow scope is intentional.

## 8. Hands-on kickoff script (1 hour)

### Speaker bullets
- Everyone has one pre-created Foundry project with one pre-deployed model.
- We will use one shared Azure AI Search instance and one pre-created storage account.
- You will complete the full flow: create agent, add instructions, ingest PDFs, connect knowledge, and test.
- We will stop at timed checkpoints so nobody falls behind.

### Short script
For the next hour, we are switching from overview into build mode. Each of you has a project ready to go with a model already available. We will move through this as a guided lab, and I will call out checkpoints so you can confirm you are in the right place before we continue. By the end, you will have a working agent grounded in documents you uploaded and indexed.

### Live cue
Open `docs/hands-on-lab-foundry-agent.md`, share the minute-by-minute checkpoints, and have participants confirm project assignment before starting minute 0.