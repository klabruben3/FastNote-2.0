# FastNote

**FastNote is a lightweight task manager built with vanilla JavaScript, HTML, and CSS.**

It lets users quickly create tasks, assign a specific time to them, and automatically complete those tasks when the configured time is reached.

The project was built as a small experiment in browser state, time-based behavior, keyboard interaction, and UI animation without relying on any frameworks or external dependencies.

---

## Demo

FastNote runs entirely in the browser.

Clone the repository and open `index.html`, or use the hosted version if available.

---

## Features

### Quick task entry

Tasks can be added by:

* Typing into the input
* Pressing `Enter`
* Clicking the Add button

The goal is to make adding something feel immediate rather than requiring a multi-step form.

---

### Timed tasks

Each task can be assigned a specific:

* Hour
* Minute
* Second

FastNote continuously compares the task's target time with the current system time.

When the configured time is reached, the task automatically transitions into its completed state.

Conceptually:

```text
Create task
    ↓
Assign time
    ↓
Watch system clock
    ↓
Target reached
    ↓
Complete task
    ↓
Animate removal
```

---

### Automatic completion

When a timed task reaches its target, FastNote:

* Displays a completion check
* Crosses out the task
* Runs the completion animation
* Removes the task from the active list

This makes the timer part of the task behavior rather than a separate countdown interface.

---

### Live clock

FastNote includes a lightweight clock interaction for quickly checking the current date and time.

The clock can be exposed through the interface using pointer or keyboard interaction.

---

### Keyboard shortcuts

FastNote was designed to remain usable without relying entirely on the mouse.

Current keyboard interactions include:

```text
Enter
Add task

Ctrl
Reveal current date/time

Ctrl + `
Clear tasks
```

Tab navigation also works across interactive controls.

---

## How It Works

The app is intentionally simple.

The main flow looks like this:

```text
User input
    ↓
Task object
    ↓
Render task
    ↓
Optional target time
    ↓
Clock comparison
    ↓
Completion behavior
```

The browser handles all state and timing logic directly.

There is no frontend framework, backend service, or build process involved.

---

## Time Matching

Timed tasks use the user's local system clock.

A configured time can conceptually be represented as:

```js
{
  hours: 14,
  minutes: 30,
  seconds: 0
}
```

FastNote checks the current time and triggers the task's completion behavior when the target is reached.

This project focuses on simple clock-based triggers rather than a complex scheduling engine.

---

## Interaction & Animation

A large part of FastNote is the small interaction layer around the task list.

The UI includes:

* Hover feedback
* Button transitions
* Task completion states
* Text strike-through
* Fade-out behavior
* Keyboard-triggered actions

The animations are implemented with browser-native HTML, CSS, and JavaScript.

No animation library is required.

---

## Technology

FastNote is built with:

* **JavaScript**
* **HTML**
* **CSS**
* Browser timing APIs
* DOM event handling

There are no framework or runtime dependencies.

---

## Running Locally

Clone the repository:

```bash
git https://github.com/klabruben3/FastNote-2.0.git
cd FastNote-2.0
```

Then open:

```text
index.html
```

in a modern browser.

No installation, local server, package manager, or build step is required.

---

## Project Structure

The project is intentionally small.

A typical structure looks like:

```text
fastnote/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

The exact file names may vary depending on the current version of the repository.

---

## Why This Project Exists

FastNote was primarily an exercise in building interactive application behavior directly with browser APIs.

The project explores concepts such as:

* DOM creation and removal
* Event listeners
* Keyboard input
* Time comparison
* UI state
* CSS transitions
* Small interaction patterns
* Keeping application logic understandable without a framework

It is deliberately simple enough that the full application flow can be inspected without navigating a larger architecture.

---

## Open Source

FastNote is public and open source.

You are welcome to:

* Fork it
* Modify the task behavior
* Add persistence
* Change the timer model
* Reuse the UI interactions
* Extend it into a larger productivity tool
* Use it as a learning project

The project is intentionally small and easy to experiment with.

---

## Possible Extensions

Some natural directions for the project include:

* Local storage persistence
* Countdown-based timers
* Repeating tasks
* Task editing
* Categories
* Notifications
* Sound alerts
* Multiple timer modes
* Better mobile interaction
* Custom completion animations

FastNote does not need to become a large productivity platform, though.

Its main value is that it demonstrates a focused interaction model with very little code.

---

## Final Note

FastNote is built around a simple idea:

> **Write something down, give it a time, and let the interface handle the rest.**

The project is small by design and serves as a straightforward example of how much interactive behavior can be built with the browser alone.
