/**
 * time complexity---O(no of set bits)
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    var ans=(start^goal);
    var count=0;
    while(ans>0)
    {
        ans=(ans&(ans-1));
        count+=1;
    }
    return count;
    
};