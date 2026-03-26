//tellinig electron how to run my app

const{ app, BrowserWindow } = require('electron');
const path = require('path');

//this functin create hte actual app window
function createWindow(){
    const win = new BrowserWindow({
        width:1280,
        height: 800,
        webPreferences: {
            nodeIntegration: false
        }
    });

    // block all new windows works like an AD blocker for the API
    win.webContents.setWindowOpenHandler(() => {
        return {action : 'deny' }
    })

    // tell electron to load index.hrml as the starting page
    win.loadFile('index.html');
}

//make window when electron is ready
app.whenReady().then(() => {
    createWindow();
});

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){ //'darwin' is Mac bro what
        app.quit;
    }
});
