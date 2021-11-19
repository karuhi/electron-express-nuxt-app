// Modules to control application life and create native browser window
const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "src/electron/preload.js"),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile("src/electron/index.html");

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

var express = require("express");
var expressApp = express();
const cors = require("cors");

const server = require("./server");
const api = require("./server/api");

expressApp.use(cors());
expressApp.use(
  express.urlencoded({
    extended: true,
  })
);
expressApp.use(express.json());
expressApp.use("/", server);
expressApp.use("/api", api);

// Listen the server
var listener = expressApp.listen(8080, "0.0.0.0", function () {
  console.log("server is running:" + listener.address().port);
});
