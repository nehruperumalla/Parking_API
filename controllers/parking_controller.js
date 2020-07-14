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
        slot = availableSlots[POS];
        carSlotMap.set(vNumber, slot);
        slotCarMap.set(slot, vNumber);
        availableSlots.splice(POS, 1);
        res.status(200).send(slot);
    } catch(err) {
        res.status(200).send('Sorry, No empty space available.');
    }
}

export const unparkCar = (req,res) => {
    const SLOT = req.body.slot;
    try {
        assert(slotCarMap.has(SLOT));
        const vNumber = slotCarMap.get(SLOT);
        slotCarMap.delete(SLOT);
        carSlotMap.delete(vNumber);
        availableSlots.push(SLOT);
        res.send('Thank you for parking with us :)');
    } catch(err) {
        res.status(200).send('Sorry, Wrong slot. Please try again.')
    }
}

export const getInfo = (req, res) => {
    res.send('Provide us your car number or slot number to get information.');
    console.log('In get info')
}