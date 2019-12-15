
const Car = require('../logic')
const expect =  require('expect')
describe('Test the car runs', () => {
    let car;
    let maruti;
  
  
    
    it('if SP is not set check this', async (done) => {


        car = {
            name : 'WaganR',
            model : 'LXI',
            company : 'Maruti'
        }
        maruti = new Car(car);
        
        setTimeout(async () => {
            expect(maruti.HP).toBeGreaterThanOrEqual(800);
            done();
        }, 1000);
    });

});