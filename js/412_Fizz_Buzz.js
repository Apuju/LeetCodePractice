/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let arrResult = [];
    let iNum = 1;
    while(iNum<=n){
        if(iNum>2&&iNum%3===0){
            if(iNum>4&&iNum%5===0)
                arrResult.push("FizzBuzz");
            else
                arrResult.push("Fizz");
        }
        else if(iNum>4&&iNum%5===0)
            arrResult.push("Buzz");
        else
            arrResult.push(iNum.toString());
        iNum++;
    }
    return arrResult;
};