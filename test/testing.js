import chai from 'chai';
import request from 'request';

var expect = chai.expect;
var vNumber = "TS 08 TZ 2665"
var slot;
it('Park API', (done) => {
    request.post({
        url:     'http://localhost:5000/parkCar',
        json :    { "vNumber" : vNumber }
    }, (error, response, body) => {
        slot = body;
        expect(response.statusCode).to.equal(200);
        done();
    })
        
})

it('Get Info', (done) => {
    request("http://localhost:5000/getInfo?vNumber="+vNumber, (error, response, body) => {
        var res = JSON.parse(body);
        expect(`{"slot":${res.slot}, "vNumber":${res.vNumber}}`).to.equal(`{"slot":${slot}, "vNumber":${vNumber}}`)
        done();
    })
})

it('UnPark Car', (done) => {
    request.del("http://localhost:5000/unparkCar/"+slot, (error, response, body) => {
        expect(body).to.equal('Thank you for parking with us :)');
        done();
    })
})