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
 /**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var m=nums1.length,n=nums2.length;
    var left;

    if(m>n)
    {
        return findMedianSortedArrays(nums2,nums1);
    }

    left=Math.floor((m+n)/2);
    if((m+n)%2!=0)
    {
        left+=1;
    }
    var low=0;
    var high=nums1.length;
    var l1,l2,r1,r2;
    while(low<=high)
    {
        var mid1=Math.floor((low+high)/2);
        var mid2=left-mid1;
        l1=-Infinity,l2=-Infinity,r1=Infinity,r2=Infinity;
        if(mid1-1>=0) {l1=nums1[mid1-1];}
        if(mid2-1>=0) {l2=nums2[mid2-1];}
        if(mid1<m) {r1=nums1[mid1];}
        if(mid2<n) {r2=nums2[mid2];}

        if(l1<=r2 && l2<=r1)
        {
            if((m+n)%2==0)
            {
                return (Math.max(l1,l2)+Math.min(r1,r2))/2;

            }
            else
            {
                return Math.max(l1,l2);
            }

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
   


    
};




/**
 * we dont need to merge and store all the elements because they asked median
 * 1..first find the ind1 and ind2 where our answers needs to store
 * 2..then based on that maintain the res_ind and find the ind1_ele
 * and ind2_ele
 * time conplexity----O(max(m,n))
 * space complexity--O(1)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var m=nums1.length,n=nums2.length;
    var ind1=Math.floor((m+n-1)/2);
    var ind2=ind1+1;
    var ind1_ele,ind2_ele;
    var i=0,j=0;
    var res_ind=0;
    while(i<m && j<n)
    {
        if(nums1[i]<nums2[j])
        {
            if(res_ind==ind1)
            {
                ind1_ele=nums1[i];
            }
            if(res_ind==ind2)
            {
                ind2_ele=nums1[i];
            }
            i+=1;
            res_ind+=1;
        }
        else
        {
            if(res_ind==ind1)
            {
                ind1_ele=nums2[j];
            }
            if(res_ind==ind2)
            {
                ind2_ele=nums2[j];
            }
            j+=1;
            res_ind+=1;

        }
    }

        while(i<m)
        {
            if(res_ind==ind1)
            {
                ind1_ele=nums1[i];
            }
            if(res_ind==ind2)
            {
                ind2_ele=nums1[i];
            }
            i+=1;
            res_ind+=1;

        }

        while(j<n)
        {
            if(res_ind==ind1)
            {
                ind1_ele=nums2[j];
            }
            if(res_ind==ind2)
            {
                ind2_ele=nums2[j];
            }
            j+=1;
            res_ind+=1;

        }


        if((m+n)%2==0)
        {
            return (ind1_ele+ind2_ele)/2;

        }
        else
        {
            return ind1_ele;

        }

    
    
};


/**
 * time complexity----O(max(m,n))
 * space complexity----O(m+n)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var i=0,j=0;
    var res=[];
    while(i<nums1.length && j<nums2.length)
    {
        if(nums1[i]<nums2[j])
        {
            res.push(nums1[i])
            i+=1;
        }
        else
        {
            res.push(nums2[j])
            j+=1;
        }
    }
    while(i<nums1.length)
    {
        res.push(nums1[i]);
        i+=1
    }
    while(j<nums2.length)
    {
        res.push(nums2[j]);
        j+=1
    }

    var len=res.length;
    var mid=Math.floor((0+len-1)/2);
    if(len%2==0)
    {
        return (res[mid]+res[mid+1])/2;



    }
    else
    {
        return res[mid];

    }
    
};