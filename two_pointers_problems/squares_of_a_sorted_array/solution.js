/**
 * this problem can be solved by two pointers pattern--O(n+n)
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    var i=0;
    var j=nums.length-1;
    var res=[];
    while(i<=j)
    {
        if(Math.abs(nums[i])>Math.abs(nums[j]))
        {
            res.push(nums[i]*nums[i]);
            i+=1;
        }
        else
        {
            res.push(nums[j]*nums[j]);
            j-=1;
        }
    }
    return res.reverse();
    
};