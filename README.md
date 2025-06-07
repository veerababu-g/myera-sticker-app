# Getting Started with Create React App

This project 
# 🎨 React Konva Sticker App

A fun and interactive canvas web app built with React + Konva, where users can add, drag, delete, and download stickers — including their own custom images.

---

## 🚀 Features

- 🖼️ Add image stickers by clicking buttons (default or custom images)
- 🖐️ Drag stickers freely on the canvas
- 🗑️ Double-click any sticker to delete it
- 💾 Download the canvas as a PNG
- ⚙️ Built with `react-konva`, `konva`, and `use-image`

---

## 📁 Folder Structure
src/
├── components/
│ ├── Canvas.js
│ ├── StickerButton.js
│ └── DownloadButton.js
├── styles/
│ └── App.css
└── App.js


---

## 🛠️ Getting Started

1. **Clone and Install**:
   ```bash
   npx create-react-app sticker-canvas-app
   cd sticker-canvas-app
   npm install react-konva konva use-image
Stage and Layer from Konva render the canvas.

Stickers are added to React state and drawn as <Image /> nodes.

Dragging and deletion update state in real-time.

toDataURL() is used to download canvas snapshot.


project output link  : https://myera-sticker-app-wine.vercel.app/

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


