import express from 'express';
import bodyParser from 'body-parser';
import parkingRoutes from './routes/parking_api.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/', parkingRoutes);

app.listen(PORT, () => console.log(`Server Running on : http://localhost:${PORT}`))