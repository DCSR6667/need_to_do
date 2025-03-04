/**
 * this problem can be solved by binary search pattern
* low=0
* high=minsizedarray.length;
* [0,1,2,3]
* if i take 0 elements from minsized array
* if i take 1 elements from minsized array
* if i take 2 elements from minsized array
* if i take 3 elements from minsized array
* 
* why minsized array?
* can do on any array but doing binary search on min sized array will be 
* beneficial
* 
* 
* time complexity---O(log(min(m,n)))
* space complexity--O(1)
**/


 class Solution {
    kthElement(a, b, k) {
        // code here
        
        var m=a.length;
        var n=b.length;
        if (a>b)
        {
            return this.kthElement(b,a,k);
        }
        
        var low=Math.max(0,k-n);
        var high=Math.min(k,m);
        var left=k;
        while(low<=high)
        {
            var mid1=Math.floor((low+high)/2);
            var mid2=left-mid1;
            var l1=-Infinity,l2=-Infinity,r1=Infinity,r2=Infinity;
            if(mid1-1>=0) l1=a[mid1-1];
            if(mid2-1>=0) l2=b[mid2-1];
            if(mid1<m) r1=a[mid1];
            if(mid2<n) r2=b[mid2];
            if(l1<=r2 && l2<=r1)
            {
                return Math.max(l1,l2);
            }
            else if(l1>r2)
            {
                high=mid1-1;
            }
            else if(l2>r1)
            {
                low=mid1+1;
            }
        }
    }
}



// time complexity--O(k)
// space complexity---O(1)

class Solution {
    kthElement(a, b, k) {
        // code here
        var i=0,j=0;
        var m=a.length,n=b.length;
        var res_ind=0;
        while(i<m && j<n)
        {
            if(a[i]<b[j])
            {
                if(res_ind==k-1)
                {
                    return a[i];
                }
                i+=1;
                res_ind+=1;
            }
            else
            {
                if(res_ind==k-1)
                {
                    return b[j];
                }
                j+=1;
                res_ind+=1;
                
                
            }
        }
        
        while(i<m)
        {
             if(res_ind==k-1)
                {
                    return a[i];
                }
                i+=1;
                res_ind+=1;
            
            
        }
        
        while(j<n)
        {
             if(res_ind==k-1)
                {
                    return b[j];
                }
                j+=1;
                res_ind+=1;
            
            
        }
    }
}


// time complexity---O(max(a,b))
// space complexity--O(a+b)
class Solution {
    kthElement(a, b, k) {
        // code here
        var res=[];
        var m=a.length,n=b.length;
        var i=0,j=0;
        while(i<m && j<n)
        {
            if(a[i]<b[j])
            {
                res.push(a[i]);
                i+=1
            }
            else
            {
                res.push(b[j]);
                j+=1;
            }
        }
        
        while(i<m)
        {
            res.push(a[i]);
            i+=1;
        }
        while(j<n)
        {
            res.push(b[j]);
            j+=1;
        }
        
        return res[k-1];
    }
}