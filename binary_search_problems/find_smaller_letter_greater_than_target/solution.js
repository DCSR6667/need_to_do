/**
 * binary search---O(logn)
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    var low=0;
    var high=letters.length-1;
    var count=0
    while(low<=high)
    {
        if(low==high)
        {
            count+=1;
        }
        if(count==2)
        {
            return letters[low];
        }
        var mid=Math.floor((low+high)/2);
        if(letters[mid]==target)
        {
            low=mid+1;
        }
        else if(target<letters[mid])
        {
            high=mid;
        }
        else
        {
            low=mid+1;
        }

    }


        return letters[0];
    
};



/**
 * 
 * linear search----O(n)
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    var i=0;
   
    while(i<letters.length)
    {
        if(target==letters[i])
        {
            i+=1;
        }
        else if(target>letters[i])
        {
            i+=1;
        }
        else
        {
            return letters[i];

        }
    }
    return letters[0];
    
};