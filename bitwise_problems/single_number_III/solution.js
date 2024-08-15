/**
 *time complexity----O(n+n)
 * space---O(1)
 * idea identify the bits which differentiate the two numbers
 * based on that bit we can seperate the two numbers
 * @param {number[]} nums
 * @return {number[]}
 */


var singleNumber = function(nums) {
    var i=0;
    var res=0,b1=0,b2=0,bit;
    while(i<nums.length)
    {
        res=res^nums[i];
        i+=1;
    }
   

    var mask=(res&(res-1))^res;

    i=0;
    while(i<nums.length)
    {
        bit=nums[i]&mask;
        if(bit==0)
        {
            b1=b1^nums[i];
        }
        else
        {
            b2=b2^nums[i];
        }
        i+=1;
    }

    return [b1,b2];
};



/**
 * time complexity----O(n+n+logn)
 * space---O(1)
 * idea identify the bits which differentiate the two numbers
 * based on that bit we can seperate the two numbers
 * @param {number[]} nums
 * @return {number[]}
 */

var get_position=(num)=>
    {
        var count=0,bit;
        while(true)
        {
            bit=num&1;
            count+=1;
            if(bit==1)
            {
                return count;
            }
            num=num>>1;
    
        }    
    
    };
    
    var singleNumber = function(nums) {
        var i=0;
        var res=0,b1=0,b2=0,bit;
        while(i<nums.length)
        {
            res=res^nums[i];
            i+=1;
        }
         var pos=get_position(res);
    
        
        i=0;
        while(i<nums.length)
        {
            bit=(nums[i]>>(pos-1))&1;
            if(bit==0)
            {
                b1=b1^nums[i];
            }
            else
            {
                b2=b2^nums[i];
            }
            i+=1;
        }
    
        return [b1,b2];
    };





