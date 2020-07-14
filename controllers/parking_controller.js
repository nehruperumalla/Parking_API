import assert from 'assert';
import e from 'express';

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
        const slot = availableSlots[POS];
        carSlotMap.set(vNumber, slot);
        slotCarMap.set(slot, vNumber);
        availableSlots.splice(POS, 1);
        res.status(200).send(slot);
    } catch(err) {
        if(err.name == 'AssertionError') {
            res.status(200).send('Sorry, No empty space available.');
        } else {
            res.status(500).send('Something went wrong');
        }
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
        res.status(200).send('Thank you for parking with us :)');
    } catch(err) {
        if(err.name == 'AssertionError') {
            res.status(200).send('Sorry, Wrong slot. Please try again.');
        } else {
            res.status(500).send('Something went wrong');
        }
    }
}

export const getInfo = (req, res) => {
    const slot = req.query.slot;
    const vNumber = req.query.vNumber;
    if(slot !== undefined && slotCarMap.has(slot)) {
        res.status(200).send({
            slot : slot,
            vNumber : slotCarMap.get(slot)
        })
    } else if(vNumber !== undefined && carSlotMap.has(vNumber)) {
        res.status(200).send({
            slot : carSlotMap.get(vNumber),
            vNumber : vNumber
        })
    } else {
        res.status(400).send('No Record Found!')
    }
}