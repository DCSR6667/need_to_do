/**
 * brute force approach--O(n2)
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var i=0;
    var area,w,h,max=-Infinity;
    while(i<height.length)
    {
        var j=i+1;
        while(j<height.length)
        {
            w=(j-i);
            h=Math.min(height[i],height[j]);
            area=w*h;
            if(area>max)
            {
                max=area;
            }
            j+=1;

        }
        i+=1;
    }

    return max;
    
};

/**
 * how to identify two pointers pattern
 * =========================================
 * we need to get max area=(width*height) so if we take one pointer at the start
 * and another at the end then we may have high probability of 
 * getting max area because of max width between two pointers
 * ========================================================
 * this problem can be solved by two pointers approach--O(n)
 * space complexity--O(1)
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var low=0;
    var high=height.length-1;
    var max_area=Math.log(0);
    var area;
    while(low<high)
    {
        area=(high-low)*Math.min(height[low],height[high]);
        if(area>max_area)
        {
            max_area=area;
        }
        if(height[low]<height[high])
        {
            low+=1;
        }
        else
        {
            high-=1;
        }

    }
    return max_area;
    
};