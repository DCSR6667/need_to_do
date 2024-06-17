

function cyclic_sort(nums)
{
    i=0;
    var temp;
    while(i<nums.length)
        {
            var corpos=nums[i]-1;
            if(corpos<0 || corpos>=nums.length)
                {
                    i+=1;
                    continue;
                } 
            if(nums[i]!=nums[corpos])
                {
                    temp=nums[i];
                    nums[i]=nums[corpos];
                    nums[corpos]=temp;   
                }
            else{
                i+=1

                }

            
        }
}

var nums=[3,4,-1,1];
cyclic_sort(nums);
console.log(nums);