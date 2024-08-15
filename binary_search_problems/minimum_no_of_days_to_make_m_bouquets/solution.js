/**
 * time complexity-----O(log(max_element-min_ele+1)*size_of_array)
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {

    var low=Math.min(...bloomDay);
    var high=Math.max(...bloomDay);
    var ans=-1;
    
    while(low<=high)
    {
        var mid=Math.floor((low+high)/2);
        
        var j=0;
        var no_of_bouquets=0;
        var track_index;
        
        while(j<bloomDay.length)
        {
            var a=j;
            var bloomed_count=0;

            while(a<(j+k))
            {
                if((bloomDay[a]-mid)<=0)
                {
                    bloomed_count+=1;
                }
                else
                {
                    track_index=a;
                }
                a+=1;

            }

            if(bloomed_count==k)
            {
                no_of_bouquets+=1;

                j=j+k;
            }
            else
            {
                j=track_index+1;
            }   
          
        }

       
        if(no_of_bouquets>=m)
        {
            ans=mid;
            high=mid-1;
        }
        else
        {
            low=mid+1;
        }

    }

    return ans;
    
};


/**
 * time complexity----O((max_ele-min_ele+1)*size_of_array)
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {

    var i=Math.min(...bloomDay);
    var n=Math.max(...bloomDay);
    
    while(i<=n)
    {
        
        var j=0;
        var no_of_bouquets=0;
        var track_index;
        
        while(j<bloomDay.length)
        {
            var a=j;
            var bloomed_count=0;

            while(a<(j+k))
            {
                if((bloomDay[a]-i)<=0)
                {
                    bloomed_count+=1;
                }
                else
                {
                    track_index=a;
                }
                a+=1;

            }

            if(bloomed_count==k)
            {
                no_of_bouquets+=1;
                if(no_of_bouquets==m)
                {
                    return i;
                }

                j=j+k;
            }
            else
            {
                j=track_index+1;
            }   
          
        }


      
        

       
        i+=1;

    }

    return -1;
    
};