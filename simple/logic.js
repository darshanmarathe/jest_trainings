/* 
a function which will accept a string and return array of intergers




*/

  const removeDups = function(names) {
  let unique = {};
  names.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique)
  .map((x) => parseFloat(x))
  .sort(function(a,b) { return a - b;});
}

module.exports = removeDups;


module.exports =  StringToArray = function(str) {
    
    function evalNumber(str) {
        if(str.indexOf('/')  === -1)
            return;
        else
            {
                return eval(str.split(" ")[0] || 0)  
            + eval(str.split(" ")[1] || 0)
            }
    }
    return removeDups(str.split('|')
    .map(s => {

        if(isNaN(s)){
            return evalNumber(s);
        }else{
            return parseFloat(s);
        }
    })
    .filter(x => x !== undefined));
}