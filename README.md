# 30DayMapChallenge - Day 24: Places and their names

Places and their names visualization (Vue 3 + D3). Deployable to GitHub Pages.

## Demo & Repo

- Demo:
  `https://kevin7261.github.io/30DayMapChallenge-24_Places-and-their-names/`
- Repo:
  `https://github.com/kevin7261/30DayMapChallenge-24_Places-and-their-names`

## Features

- Places and their names visualization
- Tunable visualization settings; tooltips and responsive layout
- Correct base path for static hosting:
  `'/30DayMapChallenge-24_Places-and-their-names/'`
- Data decoupled under `public/data/`

## Tech Stack

- Vue 3, Vue Router, Pinia
- D3.js (drawing, transforms, zoom)
- Bootstrap 5, Font Awesome

## Data

- Roads: `public/data/geojson/final_roads_in_taipei.geojson` (道路線)
- Boundary: `public/data/geojson/臺北市區界圖_20220915.geojson`

## Project Structure

```
src/
├─ tabs/
│  └─ MapTab.vue            # map + arrow rendering
├─ stores/
│  ├─ dataStore.js          # visualization flags/data
│  └─ defineStore.js        # settings
├─ router/
│  └─ index.js              # base: '/30DayMapChallenge-24_Places-and-their-names/'
└─ main.js

public/
└─ data/
   └─ geojson/

vue.config.js               # publicPath: '/30DayMapChallenge-24_Places-and-their-names/'
```

## Quick Start

Requirements: Node.js 16+, npm 7+

```bash
git clone https://github.com/kevin7261/30DayMapChallenge-24_Places-and-their-names.git
cd 30DayMapChallenge-24_Places-and-their-names/website/30DayMapChallenge-24_Places-and-their-names
npm install
npm run serve
```

Dev URL: `http://localhost:8080/30DayMapChallenge-24_Places-and-their-names/`

## Build & Deploy

```bash
npm run build     # outputs dist/
npm run deploy    # publish to GitHub Pages via gh-pages
```

Keep `publicPath` and router base aligned with the repo name.

## Scripts

```bash
npm run lint
npm run lint:fix
npm run prettier
npm run format
```

## License

MIT
