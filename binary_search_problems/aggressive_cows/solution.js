//User function Template for javascript
/**
 * time complexity----O(nlogn+log(max_ele-min_ele)*size_of_array)
 * @param {number} n
 * @param {number} k
 * @param {number[]} stalls
 * @returns {number}
*/

class Solution {
    //Function to solve the problem.
    solve(n, k, stalls) {
        //your code here
        stalls.sort((a, b) => a - b);
        var low=1;
        var ans;
        var high=Math.max(...stalls)-Math.min(...stalls);
        while(low<=high)
        {
            var cows_count=1;
            var last_cow=stalls[0];
            var j=1;
            var mid=Math.floor((low+high)/2);
            while(j<n)
            {
                if((stalls[j]-last_cow)>=mid)
                {
                    cows_count+=1;
                    last_cow=stalls[j];
                }
                j+=1;
                
            }
         
            
            if(cows_count>=k)
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
    //Function to solve the problem.
    solve(n, k, stalls) {
        //your code here
        stalls.sort((a, b) => a - b);
        var i=1;
        var ans;
        var n=Math.max(...stalls)-Math.min(...stalls);
        while(i<=n)
        {
            var cows_count=1;
            var last_cow=stalls[0];
            var j=1;
            while(j<n)
            {
                if((stalls[j]-last_cow)>=i)
                {
                    cows_count+=1;
                    last_cow=stalls[j];
                }
                j+=1;
                
            }
         
            
            if(cows_count>=k)
            {
                ans=i;
                i+=1;
                
            }
            else
            {
                break;
            }
            
        
        }
        
        
        return ans;
    }
}