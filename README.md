# Flag System

International nautical alphabet visualization system.

## Overview

The Flag System is a web application that allows users to visualize words using the international nautical flag alphabet. It provides an interactive interface for exploring how words look when represented by maritime signal flags.

## Features

- Enter custom words or generate random ones
- View flag visualizations in Standard or Grid mode 
- Change background colors/patterns for better viewing
- Track word history for easy reference
- Export flag visualizations
- Adjust maximum word length as needed

## Technologies

- React 18
- Next.js 14
- TypeScript
- Tailwind CSS
- Lucide React (for icons)

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/GsusFC/FLAGSystem.git
cd FLAGSystem
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000/flag-system](http://localhost:3000/flag-system) in your browser to see the application.

## Usage

- Type letters in the input field to see their flag representations
- Toggle between Standard and Grid view modes using the toggle switch
- Use the "RANDOM WORD" button to generate random flag combinations
- Click on words in the history section to quickly recall previous entries
- Adjust the maximum word length using the slider
- Change the background style with the "CHANGE BG" button
- Export flag visualizations with the "EXPORT SVG" button

## Project Structure

```
FLAGSystem/
├── src/
│   ├── app/
│   │   └── flag-system/
│   │       └── page.tsx  # Main page component
│   ├── components/
│   │   └── flag-system/
│   │       ├── DisplayModeToggle.tsx  # Toggle between display modes
│   │       ├── FlagCanvas.tsx         # Canvas for flag visualization
│   │       ├── FlagControls.tsx       # User input controls
│   │       ├── FlagHistory.tsx        # Word history component
│   │       └── FlagSystem.tsx         # Main system component
│   ├── contexts/
│   │   └── FlagHistoryContext.tsx     # Context for word history
│   └── lib/
│       └── flag-system/
│           └── flagMap.ts             # Flag data and helpers
└── package.json
```

## License

This project is licensed under the MIT License.

## Acknowledgments

- International Maritime Organization for the nautical flag standardization
- Adapted from the original Spanish UI to an English version
