/**
 * brute force approach===O(m*n)
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    var i=0;
    var res=[];
    while(i<spells.length)
    {
        var j=0;
        var count=0;
        
        while(j<potions.length)
        {
            if(spells[i]*potions[j]>=success)
            {
                count+=1;
            }
            j+=1;

        }
        res.push(count);
        i+=1;
    }
    return res;
    
};