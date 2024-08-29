/**
 * brute force approach---O(3n)
 * space --O(n)
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    var i=0;
    var temp=[];
    while(i<nums.length)
    {
        if(nums[i]%2==0)
        {
            temp.push(nums[i]);
            
        }
        i+=1;
    }
    i=0;
    while(i<nums.length)
    {
        if(nums[i]%2!=0)
        {
            temp.push(nums[i]);
        }
        i+=1;
    }

    var m=0,i=0,j=1;
    var n=Math.floor(nums.length/2);
    while(j<nums.length)
    {
        nums[i]=temp[m];
        nums[j]=temp[n];
        i+=2;
        j+=2;
        m+=1;
        n+=1;
    }

    return nums;
    
};


/**
 * this problem can be solved by two pointers approach--O(n)
 * space--O(1)
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    
    var i=0,j=1;
    var n=nums.length;
    var temp;
    while(i<n && j<n)
    {
        while(i<n && nums[i]%2==0)
        {
            i+=2;
        }
        while(j<n && nums[j]%2!=0)
        {
            j+=2;
        }

        if(i<n && j<n)
        {
            temp=nums[i];
            nums[i]=nums[j];
            nums[j]=temp;
            i+=2;
            j+=2;

        }

        
    }

    return nums;
};