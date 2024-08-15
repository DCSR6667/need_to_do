// time complexity---O(no of digits)
/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(num) {
    var count=0;
        while(num>0)
            {
                last=num&1;
                if(last==1)
                    {
                        count+=1;
                    }
                num=num>>1;

            }
            return count;

    
};

// time complexity---O(no of set bits)
/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(num) {
    var count=0;
        while(num>0)
            {
                num=num&(num-1);
                count+=1

            }
        return count;
    
};

