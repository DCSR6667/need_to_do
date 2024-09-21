/**
 * this problem can be solved by fast and slow pointers--O(n)
 * space complexity--O(1)
 * 
 * difficult part is
 * ------------------------------
 * visualizing this problem into linked list cycle is a quite 
 * difficult part
 * 
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var slow=nums[0],fast=nums[0];
    while(fast!=null)
    {
        slow=nums[slow];
        fast=nums[nums[fast]];
        if(slow==fast)
        {
            slow=nums[0];
            while(slow!=fast)
            {
                slow=nums[slow];
                fast=nums[fast];

            }
            return slow;

        }
    }


    
};