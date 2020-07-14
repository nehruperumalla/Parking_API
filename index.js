import express from 'express';
import bodyParser from 'body-parser';
import parkingRoutes from './routes/parking_api.js';
import rateLimit from 'express-rate-limit';

const app = express();
const PORT = 5000;

const limiter = rateLimit({
    windowMs: 10 * 1000,
    max: 10,
    message: 'Too many request from this IP, please try again later :)'
});

app.use(limiter);

app.use(bodyParser.json());

app.use('/', parkingRoutes);

app.listen(PORT, () => console.log(`Server Running on : http://localhost:${PORT}`))