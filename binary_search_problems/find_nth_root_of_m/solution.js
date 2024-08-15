/**
 * time complexity----O(log(m*n)==log(m)+log(n))
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
class Solution {
    
    
    power(base,num)
    {
        var ans=1;
        while(num>0)
        {
            var bit=num&1;
            if(bit==1)
            {
                ans=ans*base;
            }
            base=base*base;
            num=num>>1;
        }
        
        return ans;
    }
    
    
  NthRoot(n, m) {
    //code here
    var low=0;
    var high=m;
    
   
    while(low<=high)
    {
        var mid=Math.floor((low+high)/2);
        if(this.power(mid,n)==m)
        {
            return mid;
        }
        else if(this.power(mid,n)>m)
        {
            high=mid-1;
        }
        else if(this.power(mid,n)<m)
        {
            low=mid+1;
        }
    }
    return -1;
  }
}




/**
 * time complexity----O(n*logm)
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
class Solution {
    NthRoot(n, m) {
      //code here
      var low=0;
      var high=m;
      while(low<=high)
      {
          var mid=Math.floor((low+high)/2);
          if(Math.pow(mid,n)==m)
          {
              return mid;
          }
          else if(Math.pow(mid,n)>m)
          {
              high=mid-1;
          }
          else 
          {
              low=mid+1;
          }
      }
      return -1;
    }
  }




/**
 * time complexity---O(m*n)
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
class Solution {
    NthRoot(n, m) {
      //code here
      var i=1;
      while(i<=m)
      {
          if(Math.pow(i,n)==m)
          {
              return i;
          }
          i+=1;
      }
      
      return -1;
      
    }
  }