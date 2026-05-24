# Lakshman · Daily OS

Personal improvement tracker — every day better than yesterday.

---

## DEPLOYMENT — Step by Step

### Step 1: Create the GitHub Repository

1. Go to **github.com** → Sign in as **mlperumal**
2. Click **+** (top right) → **New repository**
3. Repository name: **`dailyos`**
4. Set to **Public**
5. Click **Create repository**

### Step 2: Upload Files

1. On the empty repo page, click **"uploading an existing file"**
2. Drag and drop ALL 5 files from the zip:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
3. Click **Commit changes**

### Step 3: Enable GitHub Pages

1. Go to **Settings** (tab at the top of the repo)
2. Click **Pages** (left sidebar)
3. Under **Source**: select **Deploy from a branch**
4. Under **Branch**: select **main**, leave folder as **/ (root)**
5. Click **Save**
6. Wait 2–3 minutes for the green banner with your URL

Your app is now live at: **https://mlperumal.github.io/dailyos/**

### Step 4: Install on Your Devices

**Android Phone (Chrome):**
1. Open Chrome → go to `https://mlperumal.github.io/dailyos/`
2. Chrome will show an install banner OR tap ⋮ menu → **"Add to Home Screen"**
3. Tap **Install** — the app appears on your home screen
4. It now opens fullscreen like a native app

**iPad (Safari):**
1. Open Safari → go to `https://mlperumal.github.io/dailyos/`
2. Tap the **Share** button (square with arrow)
3. Scroll down → tap **"Add to Home Screen"**
4. Tap **Add**

**Windows Laptop (Chrome):**
1. Open Chrome → go to `https://mlperumal.github.io/dailyos/`
2. Click the **⊕ install icon** in the address bar (right side)
3. Click **Install** — opens as a standalone window

**Mac (Chrome/Edge):**
1. Same as Windows — visit the URL, click install in address bar

---

## HOW TO USE

### Daily Workflow

**Morning (after walking Chase, ~5:45 AM):**
- Open the app
- Set your mood and energy
- Write your 3 priorities for the day
- Start checking off morning routine items

**Throughout the day:**
- Check off routine blocks as you complete them
- Add tasks in the Tasks tab
- Tap bonus habits when you complete them

**Evening (after dinner, ~10 PM):**
- Go to Journal tab
- Write your wins, improvements, daily journal entry
- Log key decisions and gratitude
- Check off evening blocks

**Review (anytime):**
- Insights tab shows your 7-day trend, category breakdown, streak, and AI nudges

### Scoring System

- **Routine blocks**: 8–15 points each (157 total)
- **Bonus habits**: 5–10 points each (36 total)
- **Journal entry**: +10 points
- **3 priorities filled**: +10 points
- **Wins written**: +5 points
- **Improvements written**: +5 points
- **Maximum daily score: 223 points**

---

## SYNCING WITH CLAUDE FOR ANALYSIS

This is the key feature. Your data lives locally on each device (in IndexedDB),
and you can send it to Claude for deep analysis anytime.

### How to Sync

1. Open the app → go to **Insights** tab
2. Tap **"⇧ Copy for Claude"** (or the sync button in the header)
3. This copies your last 30 days of data to clipboard
4. Open **Claude** (claude.ai or the Claude app)
5. Paste the data and ask Claude to analyze it

### What to Ask Claude

- **"Analyze my week"** — Claude will identify patterns, trends, and specific improvements
- **"How am I doing this month?"** — Monthly trend analysis
- **"What should I focus on tomorrow?"** — Targeted recommendations
- **"Compare my mornings vs evenings"** — Category-specific analysis
- **"What patterns do you see in my journal?"** — Qualitative analysis of your entries
- **"Generate a weekly report"** — Formatted summary for personal records

### For Full History Analysis

Use **📥 Export JSON** to download your complete data file, then upload it to Claude
for comprehensive long-term analysis.

---

## DATA STORAGE

- All data is stored **locally on each device** using IndexedDB
- No server, no cloud, no accounts — your data never leaves your device
- Each device maintains its own copy
- Use Export/Import to transfer data between devices if needed
- Use "Copy for Claude" to send data to Claude for analysis

---

## UPDATING THE APP

To update the app with a new version:
1. Go to your GitHub repo
2. Delete old `index.html`
3. Upload the new `index.html`
4. GitHub Pages rebuilds automatically in 2–3 minutes
5. On each device: open the app, it auto-updates via the service worker

If it doesn't update immediately: close the app completely, reopen it,
and it will fetch the latest version.
