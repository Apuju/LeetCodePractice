/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    let nPigs = Math.log(buckets)/Math.log(minutesToTest/minutesToDie+1);
    return (nPigs%1!==0)?Math.ceil(nPigs):nPigs;
};