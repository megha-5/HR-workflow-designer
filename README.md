# 🧩 HR Workflow Designer

This is a small prototype of a **workflow builder** where an HR admin can visually create processes like onboarding, approvals, and automated steps.

I built this as part of a frontend case study, focusing more on **how the system is structured and works**, rather than making the UI look perfect.

---

## 🚀 What it does

* Drag-and-drop workflow canvas
* Supports multiple node types:

  * Start
  * Task
  * Approval
  * Automated Step
  * End
* Connect nodes to define flow
* Click a node to configure it
* Run the workflow in a sandbox to see execution

---

## 📸 Screenshots

### Workflow Creation & Canvas

![Workflow Creation](assets/workflow.png)

### Node Configuration

The right panel allows editing node-specific fields like title, assignee, and actions.

### Workflow Simulation

You can run the workflow and see step-by-step execution logs.

### Validation Example

Basic validation ensures things like presence of a Start node before execution.

---

## 🧠 How I approached it

This was a **time-boxed (4–6 hours)** assignment, so I focused on:

* Keeping the architecture clean
* Separating UI, logic, and API layers
* Making sure core functionality works end-to-end

I intentionally avoided spending too much time on styling.

---

## 🏗️ Project structure

```
src/
 ├── components/   → Canvas, Sidebar, Forms, Sandbox
 ├── nodes/        → Custom React Flow nodes
 ├── store/        → Global state (Zustand)
 ├── api/          → Mock API layer
 ├── hooks/        → Workflow validation logic
```

---

## ⚙️ Key decisions

**Zustand for state**
Used for simplicity and clean state handling (nodes, edges, selection).

**Custom node types**
Each node has its own component → easier to extend.

**Dynamic forms**
Different forms based on node type instead of one generic form.

**Mock API separation**
API logic is isolated so it can be replaced with a real backend later.

---

## 🧪 Workflow simulation

* Validates workflow (e.g., Start node exists)
* Sends data to mock API
* Displays step-by-step execution logs

---

## ⚖️ Trade-offs

* UI is basic (focused on functionality)
* Validation is minimal (no cycle detection yet)
* No backend persistence

---

## ▶️ How to run

```bash
npm install
npm run dev
```

---

## 📌 What I would improve next

* Better validation (cycle detection, disconnected nodes)
* Highlight errors visually on nodes
* Export/import workflow as JSON
* Undo/redo support
* Improved UI (Tailwind / design system)

---

## 🙌 Final note

This project reflects how I approach building frontend systems —
focusing on **clean structure, scalability, and working functionality**, especially under time constraints.

---
