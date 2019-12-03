
const logic = require('../logic');
const expect = require('expect')

describe('Showing Simple test case output', () => {
    it('should pass the test', async () => {
        
    });

});


describe('String To Array test cases', () => {
    
      
    
    it('it returns a array', () => {
        var item = StringToArray("1|2|3|4");
        expect(item).toStrictEqual([1, 2,3,4]);
    });
    
    
    
    
    it('test that it returns a array when something other num is passed', () => {
        var item = StringToArray("1|as|3|4")
        expect(item).toEqual([1,3,4]);
    });
    
    
    test('test that it returns floats', () => {

        var item = StringToArray("1|1.4|3|4")
        expect(item).toEqual([1,1.4,3,4])
        
    });
    
    
    test('test that it can evaluate fractors', () => {

        var item = StringToArray("1|3/2|3|4")
        expect(item).toEqual([1,1.5,3,4]);
      
    });
    
    
    
    
    test('test that it can evaluate bigger fractors ', () => {
        
        var item = StringToArray("1|3/2|3|1 1/2")
        expect(item).toEqual([1,1.5,3]);
        
    });
    
    
    
    test('test that it can remove the duplicate values ', () => {

        var item = StringToArray("1|3/2|3|1 1/2")

        expect(item).toEqual([1,1.5,3]);
        
        
    });
    
    test('Test Error Happens', () => {
      
      expect(()=> {
       let arr = StringToArray("1|3/2|3|1 1/2|2/0");
      }).not.toThrow();
    
      expect(() => {
        let arr = StringToArray();
        }).toThrow();
      });
});