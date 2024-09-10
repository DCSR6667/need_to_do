/**
 * this problem can be solved by two pointers --O(n)
 * space complexity--O(1)
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    var i=0;
    var j=1;
    var res=0;
    while(j<colors.length)
    {
        if(colors[i]==colors[j])
        {
            if(neededTime[i]<neededTime[j])
            {
                res=res+neededTime[i];
                i=j;
                j+=1
            }
            else
            {
                res=res+neededTime[j];
                j+=1;
            }

        }
        else
        {
            i=j;
            j+=1;
        }

    }

    return res;

    
};