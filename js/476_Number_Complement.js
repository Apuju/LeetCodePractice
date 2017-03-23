/**
 * @param {number} num
 * @return {number}
 * e.g. 1011 + 0100 = 1111 = 10000 - 1 => 0100 = 10000 - 1 - 1011
 */
var findComplement = function(num) {
    return Math.pow(2,Math.floor(Math.log2(num))+1)-1-num;
};
