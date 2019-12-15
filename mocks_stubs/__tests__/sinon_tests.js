const sinon = require('sinon');
const Car = require('../logic')
const expect =  require('expect')
const axios = require('axios');
describe('Test the car runs', () => {
    let car;
    let maruti;
  
  
    
    it('if SP is not set check this', async (done) => {

        
        car = {
            name : 'WaganR',
            model : 'LXI',
            company : 'Maruti'
        }

        var getCall = sinon.stub(axios , 'get').returns({
            data : {
              HP : 800
            }
          });

        maruti = new Car(car);
        
        setTimeout(async () => {
            expect(maruti.HP).toBeGreaterThanOrEqual(800);
            expect(getCall.callCount).toBe(1)
            done();
        }, 1000);
    });

});