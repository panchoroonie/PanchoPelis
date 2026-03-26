# Panchopelis 

A personal movie and TV show streaming desktop app built with Electron. Search for any movie or show and watch it directly in the app with progress tracking.

---

## Installation

### Windows
Download and run `Panchopelis-Setup-1.0.0.exe`

### Mac
Download and open `Panchopelis-1.0.0.dmg`, then drag the app to your Applications folder.

> **Mac users:** If macOS blocks the app on first launch, right click the app → Open → Open Anyway.

---

## Running From Source

### Prerequisites
- [Node.js](https://nodejs.org)
- [Git](https://git-scm.com)
- A free [TMDB API account](https://www.themoviedb.org)

### 1. Clone the repo
```bash
git clone https://github.com/panchoroonie/PanchoPelis
cd PanchoPelis
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up your search.js
The `search.js` file is gitignored to keep the API token private. A template is provided:

```bash
# Mac/Linux
cp js/search.example.js js/search.js

# Windows
copy js\search.example.js js\search.js
```

Then open `js/search.js` and replace `YOUR_TOKEN_HERE` with your TMDB Bearer token.

### 4. Get a TMDB API token
- Create a free account at [themoviedb.org](https://www.themoviedb.org)
- Go to Settings → API
- Copy your **API Read Access Token**
- Paste it into `js/search.js`

### 5. Run the app
```bash
npm start
```

### 6. Build a distributable
```bash
npm run build
```
Output will be in the `dist/` folder.

---

## Usage

- **Movies** — go to the Movies page, type a movie title and hit Search. Click any result to watch it.
- **Shows** — go to the Shows page, type a show title and hit Search. Click any result to watch it. Use the built in episode selector to navigate seasons and episodes.
- **Progress Tracking** — the app automatically saves your watch progress. Next time you open a movie or show it resumes where you left off.

---

## Project Structure

```
PanchoPelis/
├── main.js             ← Electron entry point (creates the app window)
├── index.html          ← Home page
├── movies.html         ← Movie search page
├── shows.html          ← TV show search page
├── player.html         ← Video player page
├── assets/
│   └── icon.ico        ← App icon
├── css/
│   └── style.css       ← All styles
└── js/
    ├── search.example.js   ← Template for search.js (safe to commit)
    ├── search.js           ← Your local search file with real token (gitignored)
    └── player.js           ← Player logic and progress tracking
```

---

## Tech Stack

- [Electron](https://www.electronjs.org) — desktop app wrapper
- HTML / CSS / JavaScript
- [TMDB API](https://www.themoviedb.org/documentation/api) — movie and show data
- [VidKing](https://vidking.net) — video player embed
- localStorage — watch progress tracking

---

*Personal project — not for public distribution.*
