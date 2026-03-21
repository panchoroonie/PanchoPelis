# Panchopelis 

A personal movie and TV show streaming app. Search for any movie or show and watch it directly in the browser.

---

## Setup

### 1. Clone the repo
```bash
git clone https://github.com/panchoroonie/PanchoPelis
cd PanchoPelis
```

### 2. Set up your search.js
The `search.js` file is not included in the repo to keep the API token private. A template is provided:

```bash
cp js/search.example.js js/search.js
```

Then open `js/search.js` and replace `YOUR_TOKEN_HERE` with your real TMDB Bearer token.

### 3. Get a TMDB API token
- Create a free account at [themoviedb.org](https://www.themoviedb.org)
- Go to Settings → API
- Copy your **API Read Access Token**
- Paste it into `js/search.js`

### 4. Open the app
Open `index.html` in your browser or use a local server like VS Code Live Server.

---

## Usage

- **Movies** — go to the Movies page, type a movie title in the search bar and hit Search. Click any result to watch it.
- **Shows** — go to the Shows page, type a show title and hit Search. Click any result to watch it. Use the built in episode selector to navigate seasons and episodes.

---

## Project Structure

```
PanchoPelis/
├── index.html          ← Home page
├── movies.html         ← Movie search page
├── shows.html          ← TV show search page
├── player.html         ← Video player page
├── css/
│   └── style.css       ← All styles
└── js/
    ├── search.example.js   ← Template for search.js (safe to commit)
    ├── search.js           ← Your local search file with real token (gitignored)
    └── player.js           ← Player logic
```

---

## Tech Stack

- HTML / CSS / JavaScript
- [TMDB API](https://www.themoviedb.org/documentation/api) — movie and show data
- [VidKing](https://vidking.net) — video player embed

---

*Personal project — not for public distribution.*
