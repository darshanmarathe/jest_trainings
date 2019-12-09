const Car =  require('../logic')
const expect  = require('expect');
describe('Test related to speed', () => {
    let car;
    let maruti;
    beforeAll(() => {
        car = {
            name : 'WaganR',
            model : 'LXI',
            company : 'Maruti'
        }
        maruti = new Car(car);
    });
    
    beforeEach(() => {
        maruti.Speed = 0
    });
    
    it('if SP is not set check this', () => {
        expect(maruti.HP).toBeGreaterThanOrEqual(800);
    });

    it('should have max and min speed', () => {
        expect(maruti.MinSpeed).toBe(0);
        expect(maruti.MaxSpeed).toBeLessThanOrEqual(80);
        expect(maruti.Speed).toBe(0);
    });

    it('should Can acclerate', async() => {
        await maruti.Accelrate(100);
        expect(maruti.Speed).toBeLessThanOrEqual(maruti.MaxSpeed);
    }, 15000);

    it('should be 0 for new test', () => {
        expect(maruti.Speed).toBe(maruti.MinSpeed);
    }, 15000);

    test('should decerate', async (done) => {
        await maruti.Accelrate(100);
        let accelratedSpeed = maruti.Speed;
        expect(maruti.Speed).toBeLessThanOrEqual(maruti.MaxSpeed);
        setTimeout(() => {
            expect(maruti.Speed).toBeLessThanOrEqual(accelratedSpeed);
            done()
        }, 2000);
        console.log(maruti.Speed , maruti.MaxSpeed);
         
    }, 15000);

    it('should decerate when hit breck', async () => {
        await maruti.Accelrate(100);
        await maruti.Breck(4)
        expect(maruti.Speed).toBe(maruti.MinSpeed);
    }, 15000);
});