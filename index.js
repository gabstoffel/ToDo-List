import express from 'express';
import apiRoutes from './routes/api.js';
import path from 'path';
const app = express();
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

let PORT = 3030;

app.use('/api', apiRoutes);
app.use(express.static(path.join(__dirname, "client")));
app.listen(PORT, () => {
    console.log(`Server Running on port: ${PORT}`)
})