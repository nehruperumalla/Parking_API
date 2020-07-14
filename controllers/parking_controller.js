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
    res.send('Provide us your car number we will allocate you an empty slot.');
    console.log('In park car')
}

export const unparkCar = (req,res) => {
    res.send('Provide us your slot number.');
    console.log('In unpark car')
}

export const getInfo = (req, res) => {
    res.send('Provide us your car number or slot number to get information.');
    console.log('In get info')
}