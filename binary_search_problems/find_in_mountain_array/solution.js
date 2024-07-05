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
        while(low<=high)
        {
            var mid=Math.floor((low+high)/2);
            var first=arr.get(mid-1);
            var middle=arr.get(mid);
            var last=arr.get(mid+1);
            if((middle>last) && (middle>=first))
            {
                return mid;
            }
            else if((middle>last) && (middle<first))
            {
                high=mid-1;
            }
            else if(middle<=last)
            {
                low=mid+1;
            }
        }
    
        return -1;
    
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