import { app, BrowserWindow, ipcMain } from "electron";
import path from "node:path";
import searchGoogleMaps from "./google-maps-scrape"

process.env.DIST = path.join(__dirname, "../dist");
process.env.VITE_PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, "../public");

let window: BrowserWindow | null;
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];

async function createWindow() {
  window = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  window.webContents.on("did-finish-load", () => {
    window?.webContents.send(
      "main-process-message",
      new Date().toLocaleString()
    );
  });

  if (VITE_DEV_SERVER_URL) {
    window.loadURL(VITE_DEV_SERVER_URL);
  } else {
    window.loadFile(path.join(process.env.DIST, "index.html"));
  }

  // window.webContents.openDevTools();
}
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    window = null;
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});



app.whenReady().then(createWindow);

ipcMain.on("start-scraping", async (event, arg) => {
  try {
    const results = await searchGoogleMaps(arg);
    event.reply("scraping-done", results);
  } catch (error) {
    event.reply("scraping-error", error);
  }
});