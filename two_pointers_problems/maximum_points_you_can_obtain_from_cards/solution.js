/**
 * this problem can be solved by two pointers approach--O(2k)
 * space complexity--O(1)
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    var l=0,sum=0,max_sum,r;
    while(l<k)
    {
        sum=sum+cardPoints[l];
        l+=1;

    }
    max_sum=sum;

    l=l-1;
    r=cardPoints.length-1;
    while(l>=0)
    {
        sum=sum-cardPoints[l];
        l-=1;
        sum=sum+cardPoints[r];
        r-=1

        if(sum>max_sum)
        {
            max_sum=sum;
        }
    }

    return max_sum;


    
};