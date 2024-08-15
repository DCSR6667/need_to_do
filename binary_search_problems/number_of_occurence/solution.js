// time complexity----O(logn+logn)
class Solution
{

    search(arr,n,target,left_most)
    {
        var low=0;
        var high=n-1;
        var ans=-1;
        while(low<=high)
        {
            var mid=Math.floor((low+high)/2);
            
            if(target>arr[mid])
            {
                low=mid+1;
            }
            else if(target<arr[mid])
            {
                high=mid-1;
            }
            else
            {
                ans=mid;
                if(left_most)
                {
                    high=mid-1;
                }
                else
                {
                    low=mid+1;
                }
            }
            
        }
        
        return ans;
        
    }
    
    
    
    count(arr,n,target){
        //code here
       var left_most=this.search(arr,n,target,true);
       if(left_most==-1)
       {
           return 0;
           
       }
       else
       {
           var right_most=this.search(arr,n,target,false);
           return (right_most-left_most+1);
       }
        
       
}


}