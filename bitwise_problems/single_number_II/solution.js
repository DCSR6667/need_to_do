/**
 * this problem can be solved by bitwise operators---O(32*n)
 * space--O(1)
 * the idea is if a number is repeated 3 times then their bits
 * will also repeat 3 times so if we count all the bits then 
 * if it is
 * divisible by 3 means expected bit is 0
 * if it is not divisible by 3 then expected bit is 1
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var i=0;
    var res=0;
    var mask,count;
    while(i<=31)
    {
        var j=0;
        count=0
        while(j<nums.length)
        {
            bit=((nums[j]>>i)&1);
            if(bit==1)
            {
                count+=1;
            }
            j+=1;

        }

        if(count%3!=0)
        {
            mask=1<<i;

        }
        else
        {
            mask=0;
        }
        res=res|mask;
        i+=1;

    }

    return res;
    
};








/**
 * time complexity---O(nlogn+n/3)
 * space complexity---O(1)
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort();
    var i=1;
    while(i<nums.length)
    {
        if(nums[i]!=nums[i-1])
        {
            return nums[i-1];
        }
        i=i+3;
    }
    return nums[nums.length-1];
    
};