# Task Timer App ⏰

A minimal interactive task manager built with **vanilla JavaScript**, **HTML**, and **CSS** — no frameworks, no dependencies.  
Add tasks, set custom time triggers, and watch them auto-complete when their time hits.

---

## 🚀 Features

- 🧠 **Smart Input** – Add tasks by pressing `Enter`, or click the Add button.
- ⏲️ **Real-Time Clock** – Hover or press `Ctrl` to show the current date and time.
- ⏳ **Timed Tasks** – Assign a specific time (hours, minutes, seconds) to each task.  
  When the clock reaches the set time, the task automatically completes and disappears with an animation.
- 🎨 **Interactive Animations** – Smooth CSS effects on hover, transitions, and completions.
- ♿ **Keyboard Friendly** – Full support for `Enter`, `Ctrl`, and tab navigation.
- 💾 **No Libraries Needed** – 100% plain JavaScript; no React, Vue, or frameworks.

---

## 🧩 How It Works

1. **Add a Task**

   - Type your task in the input bar.
   - Press `Enter` or click the **Add** button.

2. **Set a Time**

   - Click on the task’s time display to open the time editor.
   - Enter hours, minutes, and seconds, then hit the confirm button.

3. **Automatic Completion**

   - When your system time matches the set time, the task will:
     - Animate a checkmark ✅
     - Cross out the text
     - Fade out and remove itself automatically

4. **Quick Reset**
   - Press `Ctrl + \`` (backtick) to instantly clear all tasks.

---

## ⚙️ Project Setup

1. Clone or download the repo:
   ```bash
   git clone https://github.com/yourusername/task-timer-app.git
   cd task-timer-app
   ```
2. Open the index.html file directly in your browser.

No server required — it runs purely in the browser.
