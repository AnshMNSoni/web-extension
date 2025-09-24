# Floating Dock - Chrome Extension

A simple macOS-like floating dock that appears on every webpage and provides quick navigation shortcuts.
Features:
- Floating dock with default shortcuts (Twitter, GitHub, LinkedIn, YouTube)
- Add new shortcuts (name, URL, optional emoji/icon)
- Click to open shortcuts in a new tab
- Right-click to remove a shortcut
- Persists shortcuts using `chrome.storage.sync`

## Installation (developer mode)
1. Download and unzip the `Floating Dock.zip`.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" (top-right).
4. Click "Load unpacked" and select the `Floating Dock` folder.
5. The extension will inject the dock into pages. To add a shortcut, click the ➕ button on the dock.

## Notes
- To edit or reset defaults, go to Chrome DevTools -> Application -> Storage -> Extension Storage and remove `_floatingDockBookmarks` key, or programmatically clear `chrome.storage.sync`.
- Default icons are emoji characters. You can edit `content.js` to fetch favicons or use images if desired.
