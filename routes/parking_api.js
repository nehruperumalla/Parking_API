import express from 'express';
import { parkCar, unparkCar, getInfo } from '../controllers/parking_controller.js';
const router = express.Router();

//Park the Car
router.post('/parkCar', parkCar);

//Unpark the Car
router.delete('/unparkCar', unparkCar);

//Info of Car/Slot
router.get('/getInfo', getInfo);

export default router;