const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, 'miniNode')));
const port = 3000;
//API Key
//rnd_whG9BF6E05evkbFjts1JAtCOMAgr


// app.get('/', (req, res) => {
//     
//   });

// Define the endpoint to fetch installed applications
app.get('/deployedApps', async (req, res) => {
    try {
        // TODO: Fetch and return the list of installed apps from Render API
        const deployedApps = await fetchInstalledApps();
        res.json(deployedApps);
    } catch (error) {
        console.log("oppppppppppps!!");
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Function to fetch installed apps from Render API
async function fetchInstalledApps() {
    const sdk = require('api')('@render-api/v1.0#jw0325lr5hblce');
    sdk.auth('rnd_whG9BF6E05evkbFjts1JAtCOMAgr');
    try {
        const response = await sdk.getServices({ limit: '20' });
        const data = response.data;
        //res.sendFile(path.join(__dirname, 'miniNode', 'index.html'));
        console.log(data);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

// Start the Express app
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});