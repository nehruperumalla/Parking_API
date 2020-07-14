import express from 'express';

const router = express.Router();

//Park the Car
router.post('/parkCar', (req, res) => {
    res.send('Provide us your car number we will allocate you an empty slot.');
    console.log('In park car')
})

//Unpark the Car
router.delete('/unparkCar', (req,res) => {
    res.send('Provide us your slot number.');
    console.log('In unpark car')
})

//Info of Car/Slot
router.get('/getInfo', (req, res) => {
    res.send('Provide us your car number or slot number to get information.');
    console.log('In get info')
})

export default router;