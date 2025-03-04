//User function Template for javascript
/**
 * time complexity----O(nlogn+log(max_ele-min_ele)*size_of_array)
 * @param {number} n
 * @param {number} k
 * @param {number[]} stalls
 * @returns {number}
*/

class Solution {
    // Function to solve the problem.
    
    calculate_cows(stalls,min_dis,k)
    {
        var i=1;
        var prev_cow=0;
        var total_cows=1;
        while(i<stalls.length)
        {
            if(total_cows==k)
            {
                return total_cows;
            }
            if(stalls[i]-stalls[prev_cow]>=min_dis)
            {
                total_cows+=1;
                prev_cow=i;
                i+=1
            }
            else
            {
                i+=1;
            }
        }
        return total_cows;
        
    }
    aggressiveCows(stalls, k) {
        // your code here
        var low=1;
        var high=Math.max(...stalls)-Math.min(...stalls);
        stalls.sort((a,b)=>a-b);
        var ans;
        while(low<=high)
        {
            var mid=Math.floor((low+high)/2);
            if(this.calculate_cows(stalls,mid,k)>=k)
            {
                ans=mid;
                low=mid+1;
                
            }
            else
            {
                high=mid-1;
                
            }
            
        }
        return ans;
    }
}




//User function Template for javascript
/**
 * time complexity----O(nlogn+(max_ele-min_ele)*size_of_array)
 * @param {number} n
 * @param {number} k
 * @param {number[]} stalls
 * @returns {number}
*/


class Solution {
    // Function to solve the problem.
    
    calculate_cows(stalls,min_dis,k)
    {
        var i=1;
        var prev_cow=0;
        var total_cows=1;
        while(i<stalls.length)
        {
            if(total_cows==k)
            {
                return total_cows;
            }
            if(stalls[i]-stalls[prev_cow]>=min_dis)
            {
                total_cows+=1;
                prev_cow=i;
                i+=1
            }
            else
            {
                i+=1;
            }
        }
        return total_cows;
        
    }
    aggressiveCows(stalls, k) {
        // your code here
        var low=1;
        var high=Math.max(...stalls)-Math.min(...stalls);
        stalls.sort((a,b)=>a-b);
        var ans;
        while(low<=high)
        {
            if(this.calculate_cows(stalls,low,k)>=k)
            {
                ans=low;
                low+=1;
                
            }
            else
            {
                return ans;
            }
            
        }
        return ans;
    }
}