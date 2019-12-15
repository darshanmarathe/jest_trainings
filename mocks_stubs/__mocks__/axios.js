const axios = {
    get: jest.fn(() => {
      return {
        data : {
          HP : 800
        }
      };
    }),
    then: jest.fn((callback) => {
      callback( 
        {  
        data : {
            HP : 800
          }
    });
  })
}


module.exports =  axios;
