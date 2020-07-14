import assert from 'assert';

let carSlotMap = new Map();

let slotCarMap = new Map();

let availableSlots = [];

export const createParking = () => {
    for(let i = 10; i < 36; i++) {
        for(let j = 1; j <= 100; j++) {
            availableSlots.push(i.toString(36).toUpperCase() + "-" + j);
        }
    }
}

export const parkCar = (req, res) => {
    try {
        assert(availableSlots.length > 0);
        const vNumber = req.body.vNumber;
        let POS = Math.floor(Math.random() * Math.floor(availableSlots.length));
        carSlotMap.set(vNumber, availableSlots[POS]);
        slotCarMap.set(availableSlots[POS], vNumber);
        res.status(200).send(availableSlots[POS]);
    } catch(err) {
        res.status(200).send('Sorry, No empty space available.');
    }
}

export const unparkCar = (req,res) => {
    res.send('Provide us your slot number.');
    console.log('In unpark car')
}

export const getInfo = (req, res) => {
    res.send('Provide us your car number or slot number to get information.');
    console.log('In get info')
}