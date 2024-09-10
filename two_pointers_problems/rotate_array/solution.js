/**
 * brute force approach--O(kn)
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
    var i=1;
    var size=nums.length;
    while(i<=k)
    {
        var last=nums[size-1];
        var j=size-2;
        while(j>=0)
        {
            nums[j+1]=nums[j];
            j-=1;
        }
        nums[0]=last;
        i+=1;

    }
};


/**
 * time complexity---O(n)
 * space complexity--O(n)
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var res=[];
    var size=nums.length;
    var j=size-k;
    var m=j-1;
    while(j<size)
    {
        res.push(nums[j]);
        j+=1;
    }
    var i=0;
    while(i<=m)
    {
        res.push(nums[i]);
        i+=1;
    }
    return res;

    
};