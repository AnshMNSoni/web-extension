console.log("[v0] Floating Dock: Initializing...")

// Inject dock HTML dynamically
const dockHTML = `
<div class="floating-dock-root" id="dockRoot">
  <div class="dock-list" id="dock">
    <div id="addBtn">+</div>
  </div>
</div>

<div id="dock-modal">
  <div class="modal-content">
    <input type="text" id="nameInput" placeholder="Shortcut Name">
    <input type="text" id="urlInput" placeholder="Shortcut URL">
    <input type="text" id="iconInput" placeholder="Icon (Emoji or Image URL)">
    <div class="modal-actions">
      <button id="cancelBtn">Cancel</button>
      <button id="saveBtn">Save</button>
    </div>
  </div>
</div>
`

document.body.insertAdjacentHTML("beforeend", dockHTML)
console.log("[v0] Floating Dock: HTML injected")

const dock = document.getElementById("dock")
const addBtn = document.getElementById("addBtn")
const modal = document.getElementById("dock-modal")
const cancelBtn = document.getElementById("cancelBtn")
const saveBtn = document.getElementById("saveBtn")
const nameInput = document.getElementById("nameInput")
const urlInput = document.getElementById("urlInput")
const iconInput = document.getElementById("iconInput")

// Function to check if a string is an image URL
function isImageURL(url) {
  return /\.(jpg|jpeg|png|gif|svg|webp|bmp)$/i.test(url)
}

// Declare chrome variable
const chrome = window.chrome

function loadShortcuts() {
  if (!chrome || !chrome.storage) {
    console.error("[v0] Chrome storage API not available")
    return
  }

  chrome.storage.local.get(["shortcuts"], (result) => {
    console.log("[v0] Loaded shortcuts:", result.shortcuts)
    const shortcuts = result.shortcuts || []
    shortcuts.forEach((shortcut) => {
      renderShortcut(shortcut)
    })
  })
}

function renderShortcut(shortcutData) {
  const { name, url, icon } = shortcutData

  const newShortcut = document.createElement("div")
  newShortcut.className = "shortcut"
  newShortcut.setAttribute("title", name || url)
  newShortcut.setAttribute("data-url", url)

  // If icon is an image URL, use <img>; else use emoji/text
  if (isImageURL(icon)) {
    const img = document.createElement("img")
    img.src = icon
    img.alt = name || url
    img.style.width = "100%"
    img.style.height = "100%"
    img.style.objectFit = "cover"
    img.style.borderRadius = "12px"
    newShortcut.appendChild(img)
  } else {
    newShortcut.textContent = icon
  }

  // Click to open URL
  newShortcut.addEventListener("click", () => {
    window.open(url, "_blank")
  })

  // Right-click to delete
  newShortcut.addEventListener("contextmenu", (e) => {
    e.preventDefault()
    if (confirm(`Delete shortcut "${name || url}"?`)) {
      dock.removeChild(newShortcut)
      deleteShortcutFromStorage(url)
    }
  })

  dock.insertBefore(newShortcut, addBtn)
}

function saveShortcutToStorage(shortcutData) {
  if (!chrome || !chrome.storage) {
    console.error("[v0] Chrome storage API not available")
    return
  }

  chrome.storage.local.get(["shortcuts"], (result) => {
    const shortcuts = result.shortcuts || []
    shortcuts.push(shortcutData)
    chrome.storage.local.set({ shortcuts })
    console.log("[v0] Shortcut saved:", shortcutData)
  })
}

function deleteShortcutFromStorage(url) {
  if (!chrome || !chrome.storage) {
    console.error("[v0] Chrome storage API not available")
    return
  }

  chrome.storage.local.get(["shortcuts"], (result) => {
    const shortcuts = result.shortcuts || []
    const filtered = shortcuts.filter((s) => s.url !== url)
    chrome.storage.local.set({ shortcuts: filtered })
    console.log("[v0] Shortcut deleted:", url)
  })
}

// Show modal
addBtn.addEventListener("click", () => {
  modal.style.display = "flex"
  console.log("[v0] Modal opened")
})

// Close modal
cancelBtn.addEventListener("click", () => {
  modal.style.display = "none"
})

// Save new shortcut
saveBtn.addEventListener("click", () => {
  const name = nameInput.value.trim()
  const url = urlInput.value.trim()
  const icon = iconInput.value.trim() || "🔗"

  if (!url) {
    alert("Please enter a URL")
    return
  }

  const shortcutData = { name, url, icon }

  renderShortcut(shortcutData)
  saveShortcutToStorage(shortcutData)

  modal.style.display = "none"

  // Reset inputs
  nameInput.value = ""
  urlInput.value = ""
  iconInput.value = ""
})

loadShortcuts()
console.log("[v0] Floating Dock: Ready!")
