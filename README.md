# Floating Dock - Chrome Extension

A macOS-style floating dock for quick navigation on any website. Add shortcuts to your favorite websites and access them from a sleek, minimalist dock that appears on the right side of your screen.

## Features

- **Persistent Storage**: All shortcuts are saved and persist across browser sessions
- **Easy to Use**: Click the "+" button to add new shortcuts
- **Customizable Icons**: Use emojis or image URLs for shortcut icons
- **Quick Access**: Click any shortcut to open it in a new tab
- **Delete Shortcuts**: Right-click any shortcut to delete it
- **macOS-style Design**: Beautiful, minimalist interface with smooth animations

## Installation

### Step 1: Download the Extension
Download or extract the extension files to a folder on your computer.

### Step 2: Open Chrome Extensions Page
1. Open Google Chrome
2. Go to `chrome://extensions/` (or click Menu → More Tools → Extensions)

### Step 3: Enable Developer Mode
- Toggle the **"Developer mode"** switch in the top-right corner

### Step 4: Load the Extension
1. Click **"Load unpacked"**
2. Select the folder containing the extension files
3. The Floating Dock extension should now appear in your extensions list

### Step 5: Start Using
- Visit any website
- Look for the floating dock on the right side of the screen
- Hover over it to reveal the dock
- Click the "+" button to add shortcuts

## How to Use

### Add a Shortcut
1. Click the "+" button on the dock
2. Enter:
   - **Shortcut Name**: A name for your shortcut (optional)
   - **Shortcut URL**: The website URL (required)
   - **Icon**: An emoji or image URL (optional, defaults to 🔗)
3. Click "Save"

### Open a Shortcut
- Click any shortcut icon to open it in a new tab

### Delete a Shortcut
- Right-click any shortcut and confirm deletion

## File Structure

\`\`\`
floating-dock/
├── manifest.json      # Extension configuration
├── content.js         # Main extension logic
├── style.css          # Styling
└── README.md          # This file
\`\`\`

## Technical Details

- **Storage**: Uses Chrome's `chrome.storage.local` API for persistent data
- **Compatibility**: Works on all websites
- **Performance**: Lightweight and non-intrusive

## Troubleshooting

### Dock not appearing?
- Make sure the extension is enabled in `chrome://extensions/`
- Try refreshing the page

### Shortcuts not saving?
- Check that the extension has storage permissions
- Try clearing Chrome cache and reloading the extension

### Icon not displaying?
- Ensure the image URL is valid and accessible
- Try using an emoji instead

## Version History

- **v1.1**: Added persistent storage with Chrome storage API
- **v1.0**: Initial release

---

Enjoy your Floating Dock!
