describe('Testing Before and After', () => {
    beforeAll(() => {
        console.log('Before function called');
    });

    beforeEach(() => {
        console.log('Before Each function called');

    });
    it('The test case 1', () => {
        console.log('Test case 1 function called');
    });

    it('The test case 2', () => {
        console.log('Test case 2 function called');
    });
    afterEach(() => {
        console.log('After Each function called');
    });

    afterAll(() => {
        console.log('After function called');
    });

   
});