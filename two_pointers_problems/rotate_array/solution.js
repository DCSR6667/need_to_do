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




/**
 * logic is reversing the array
 * this problem can be solved by two pointers--O(n/2+n/2)
 * space complexity--O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const reverse=(nums,i,j)=>
    {
        var temp;
        while(i<j)
        {
            temp=nums[i];
            nums[i]=nums[j];
            nums[j]=temp;
            i+=1;
            j-=1;
            
        }
    
    };
    
    var rotate = function(nums, k) {
        var size=nums.length;
        k=k%size;
        
        reverse(nums,0,size-1);
        
        reverse(nums,0,k-1);
        reverse(nums,k,size-1);
        
    };