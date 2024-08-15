/**
 * time complexity---O(n+10n)
 * space complexity--O(1)
 * integer datatype has 4 bytes of memory which has 32 bits
here in this problem the max value 1000 which can be stored in 10 bits
1.so the logic is store x value and y value in x memory only
2.after storing split the x and y  values and store it from the end of the array


 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {

    var i=0;
    j=n;
    while(i<n)
    {
        nums[i]=nums[i]<<10;
        nums[i]=nums[i]|nums[j];
        i+=1;
        j+=1;
    }
    i=n-1;
    j=2*n-1;
    while(i>=0)
    {
        var k=0;
        var res=0;
        while(k<10)
        {
            var last=(nums[i]&1)<<k;
            var res=res |last;
            nums[i]=nums[i]>>1;
            k+=1;
        }
        
        nums[j]=res;
        nums[j-1]=nums[i];
    
        i-=1;
        j-=2;
    }
    return nums;
};











/**
 * time complexity----O(n)
 * space complexity---O(2n)
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {

    var i=0;
    var j=n;
    var res=[];
    while(j<2*n)
    {
        res.push(nums[i]);
        res.push(nums[j]);
        i+=1;
        j+=1;
    }
    return res;

};