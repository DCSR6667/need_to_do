/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    var count=0;
    while(num>0)
    {
        if(num%2==0)
        {
            num=Math.floor(num/2);
            count+=1;
        }
        else
        {
            num=num-1;
            count+=1;
        }

    }
    return count;
    
};




/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    if(num==0)
    {
        return 0;
    }
    var count=1;
    if(num%2==0)
    {
        var f=numberOfSteps(Math.floor(num/2));
        return f+count;
    }
    else
    {
        var s=numberOfSteps(num-1);
        return s+count;
    }

};