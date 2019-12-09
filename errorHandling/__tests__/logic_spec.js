const Car = require("../logic");
const expect = require("expect");

describe("Car test suite", () => {
    let car;
    beforeAll(() => {
        car = {};
    });

    it("Should throw when car is created with black name", () => {
        expect(() => {
            var mycar = new Car(car);
        }).toThrow("Oops car name cant be blank ");
    });

    it("Should throw when car is created with black name", () => {
        expect(() => {
            car.name = "WaganR";

            var mycar = new Car(car);
        }).toThrow();
    });
    it("Should throw when car is created with black name", () => {
        expect(() => {
            car.model = "LXI";

            var mycar = new Car(car);
        }).toThrow();
    });
    it("Should throw when car is created with black name", () => {
        expect(() => {
            car.company = "Maruti";

            var mycar = new Car(car);
        }).not.toThrow();
    });


    //TODO :: Need to cherck this
    it("should not have more thean 10000 Horse power", () => {
         expect.assertions(2)
         car.name = "Flanker";
         car.model = "30Mki";
         car.company = "Sukhoi";

         car.HP = 110000;
         var mycar = new Car(car);
        // RETURN is Super important 
         return mycar.Accelrate(100).then(data => {
             console.log(data);
           
         }).catch(e => {
             expect(e.message).toBe('Are you flying a sukhoi');
             expect(e).not.toBe(undefined);

        });
    }, 150000);

    //TODO :: Need to cherck this
    it("should not have more thean 10000 Horse power", async () => {
        expect.assertions(2)
        car.name = "Flanker";
        car.model = "30Mki";
        car.company = "Sukhoi";

        car.HP = 110000;
        var mycar = new Car(car);
       // RETURN is Super important 
       try {
           await mycar.Accelrate(100)
       } catch (e) {
        expect(e.message).toBe('Are you flying a sukhoi');
        expect(e).not.toBe(undefined);

       }
   }, 150000);


});



