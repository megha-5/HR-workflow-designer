# 🧩 HR Workflow Designer

This is a small prototype of a **workflow builder** where an HR admin can visually create processes like onboarding, approvals, and automated steps.

I built this as part of a frontend case study, with a focus on **how the system is structured and behaves**, rather than making the UI look perfect.

---

## 🚀 What it does

* Lets you create a workflow using a drag-and-drop canvas
* Supports different types of nodes:

  * Start
  * Task
  * Approval
  * Automated Step
  * End
* You can connect nodes to define a flow
* Clicking a node opens a form to configure it
* There’s a sandbox panel to simulate how the workflow runs

---

## 🧠 How I approached it

Since this was a **time-boxed assignment (4–6 hours)**, I focused on:

* Keeping the code clean and easy to extend
* Separating UI, logic, and data clearly
* Making sure the core features actually work end-to-end

I avoided spending too much time on styling and instead prioritized structure and functionality.

---

## 🏗️ Project structure

```id="wpp4bx"
src/
 ├── components/   → Canvas, Sidebar, Forms, Sandbox
 ├── nodes/        → Custom node UIs for React Flow
 ├── store/        → Global state (Zustand)
 ├── api/          → Mock API functions
 ├── hooks/        → Workflow validation logic
```

---

## ⚙️ Key decisions

**State management (Zustand)**
I used Zustand because it’s simple and works well for managing shared state like nodes, edges, and selected node.

**Custom node types**
Instead of using default nodes, I created separate components for each type. This makes it easier to extend later.

**Dynamic forms**
Each node type has its own form (Task, Approval, etc.), instead of using one generic form.

**Mock API layer**
I kept API calls separate so it can easily be replaced with a real backend later.

---

## 🧪 Workflow simulation

There’s a simple “Run” button that:

* Validates the workflow (e.g., checks if Start node exists)
* Sends data to a mock API
* Shows step-by-step execution logs

This helped me demonstrate how the workflow actually behaves.

---

## ⚖️ Trade-offs

* I didn’t focus on UI design or styling
* Validation is basic (no cycle detection yet)
* No backend or persistence (everything is in-memory)

Given more time, I would definitely improve these.

---

## ▶️ How to run

```bash id="0jfqna"
npm install
npm run dev
```

---

## 📌 What I would improve next

* Add better validation (like cycle detection)
* Highlight errors directly on nodes
* Export/import workflows as JSON
* Add undo/redo support
* Improve UI using Tailwind or a design system

---

## 🙌 Final note

This project is mainly about showing how I think when building frontend systems —
how I structure code, manage state, and handle dynamic UI — especially under time constraints.

---
