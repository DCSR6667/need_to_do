/**
 * this problem can be solved by bit wise operations ---O(2**n)
 * the idea is take numbers  from 0 to 2**n-1 in bitwise representation
 * and figure out the answers
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

    var i=0;
    var size=nums.length;
    var power=Math.pow(2,size);
    var final_res=[];
    while(i<=(power-1))
    {
        var res=[];
        var index=0;
        var num=i;
        while(num>0 && index<size)
        {
            var bit=num&1;
            if(bit==1)
            {
                res.push(nums[index]);
            }
            index+=1;
            num=num>>1;

        }
        final_res.push(res);
        i+=1;

    }
    return final_res;
};