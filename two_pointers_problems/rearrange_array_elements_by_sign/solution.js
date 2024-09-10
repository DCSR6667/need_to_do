/**
 * this problem can be solved by two pointers
 * time complexity--O(n+n)
 * space complexity--O(n)
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    var pos=[];
    var neg=[];
    var size=nums.length;
    var i=0;
    while(i<size)
    {
        if(nums[i]>0)
        {
            pos.push(nums[i]);
        }
        else
        {
            neg.push(nums[i]);
        }

        i+=1;

    }

    i=0;
    var j=0;
    var k=0;
    while(i<pos.length)
    {
        nums[k]=pos[i];
        i+=1;
        k+=1;
        nums[k]=neg[j];
        j+=1;
        k+=1;
    }
    return nums;
    
};



/**
 * this problem can be solved by two pointers approach
 * time complexity---O(n+n)
 * space complexity--O(n)
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    var res=[];
    var size=nums.length;
    var i=0;
    while(i<size)
    {
        res.push(0);
        i+=1;
    }

    i=0;
    var j=1;
    var k=0;
    while(k<size)
    {
        if(nums[k]>0)
        {
            res[i]=nums[k];
            k+=1;
            i+=2;
        }
        else
        {
            res[j]=nums[k];
            k+=1;
            j+=2;
        }
    }

    return res;
    
};