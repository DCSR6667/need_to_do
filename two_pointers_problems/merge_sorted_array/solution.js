/**
 * time complexity----O(m+n)
 * space complexity---O(1)
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var i=m-1,j=n-1;
    var k=m+n-1;
    while(j>=0)
    {
        if(nums1[i]>nums2[j])
        {
            nums1[k]=nums1[i];
            k-=1;
            i-=1;
        }
        else
        {
            nums1[k]=nums2[j];
            k-=1;
            j-=1;
        }
    }
    
};