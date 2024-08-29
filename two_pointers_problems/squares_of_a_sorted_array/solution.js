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



/**
 * this problem can be solved by two pointers pattern--O(n+n/2)
 * @param {number[]} nums
 * @return {number[]}
 */

const reverse=(nums)=>
    {
        var low=0;
        var high=nums.length-1;
        var temp;
        while(low<high)
        {
            temp=nums[low];
            nums[low]=nums[high];
            nums[high]=temp;
            low+=1;
            high-=1;
            
        }
    
    
    };
    
    
    var sortedSquares = function(nums) {
        var res=[];
        var low=0;
        var high=nums.length-1;
        while(low<=high)
        {
            if((nums[low]*nums[low])<(nums[high]*nums[high]))
            {
                res.push(nums[high]*nums[high]);
                high-=1;
            }
            else
            {
                res.push(nums[low]*nums[low]);
                low+=1;
            }
        }
        reverse(res);
        return res;
    
        
    };