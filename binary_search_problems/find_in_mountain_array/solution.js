/**
 *this problem can be solved by binary search----O(logn)
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */


 const binary_search=(target,arr,low,high,asc)=>
    {
            
            while(low<=high)
                {
                    var mid=Math.floor((low+high)/2);
                    var ele=arr.get(mid);
                    if(ele==target)
                        {
                            return mid;
                        }
                    else if(target<ele)
                        {
                            if(asc)
                                {
                                    high=mid-1;
    
                                }
                            else{
                                low=mid+1;
    
                            }
    
                        }
                    else{
                        if(asc)
                            {
                                low=mid+1;
    
    
                            }
                        else{
                            high=mid-1;
                            
                        }
    
                    }
                }
    
            return -1;
    
    
    };
    
    
    const get_peak_index=(arr)=>
    {
       var low=0;
       var high=arr.length()-1;
       var prev,next;
       while(low<high)
       {
           var mid=Math.floor((low+high)/2);
           prev=(mid>0)?arr.get(mid-1):-Infinity;
           next=(mid<arr.length()-1)?arr.get(mid+1):-Infinity;
           curr=arr.get(mid);
        
           if(curr>prev && curr>next)
           {
               return mid;
           }
           else if(curr>prev && curr<next)
           {
               low=mid+1; 
           }
           else if(curr<prev && curr>next)
           {
               high=mid-1;
           }
           else if(curr<prev && curr<next)
           {
               low=mid+1;
           }
    
       }
       return low;
       
    
    };
    
    
    
    /**
     * @param {number} target
     * @param {MountainArray} mountainArr
     * @return {number}
     */
    var findInMountainArray = function(target, mountainArr) {
        var peakindex=get_peak_index(mountainArr);
        var left=binary_search(target,mountainArr,0,peakindex,true);
        if(left==-1)
        {
            return binary_search(target,mountainArr,peakindex+1,mountainArr.length()-1,false);
        }
        else
        {
            return left;
        }
        
    };