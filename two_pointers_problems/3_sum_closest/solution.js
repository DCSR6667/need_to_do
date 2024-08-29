// VISIT PYTHON  CODE FOR BETTER UNDERSTANDING


/**
 * this problem can be solved by brute force approach--O(n3)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var min_dis=Infinity;
    var  ans;
    var i=0;
    var distance;
    while(i<nums.length)
    {
        var j=i+1;
        while(j<nums.length)
        {
            var k=j+1;
            while(k<nums.length)
            {
                var distance=Math.abs(target-(nums[i]+nums[j]+nums[k]));
                if(distance<min_dis)
                {
                    min_dis=distance
                    ans=nums[i]+nums[j]+nums[k];
                }
                k+=1;

            }
            j+=1;
        }

        i+=1;
    }

    return ans;
    
};





/**
 * this problem can be solved by two pointers approach---O(n2)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>a-b);
    var min_dis=Infinity;
    var closest_sum;
    var dis;
    var i=0;
    while(i<nums.length)
    {
        var low=i+1;
        var high=nums.length-1;
        while(low<high)
        {
            dis=Math.abs(target-(nums[i]+nums[low]+nums[high]));
            if(dis==0)
            {
                return (nums[i]+nums[low]+nums[high]);
            }
           else if(dis<min_dis)
            {
                min_dis=dis;
                closest_sum=nums[i]+nums[low]+nums[high];

            }
            
            if((nums[i]+nums[low]+nums[high])>target)
            {

                high-=1;

            }
            else
            {
                low+=1;

            }
            
        }

        i+=1;
    }

    return closest_sum;
    
};