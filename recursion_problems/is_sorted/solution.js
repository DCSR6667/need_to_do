const is_sorted=(nums,i)=>
{
    if(i==nums.length-1)
        {
            return true;
        }
    if(nums[i]<nums[i+1])
        {
            return is_sorted(nums,i+1);
        }
    else{
        return false;
    }

};

var nums=[1,2,3,4,1,20];
console.log(is_sorted(nums,0));