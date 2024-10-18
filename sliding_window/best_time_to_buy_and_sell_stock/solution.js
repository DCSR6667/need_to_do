/**
 * this problem can be solved by brute force approach--O(n2)
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var maxprofit=0;
    var i=0;
    while(i<prices.length)
    {
        var j=i+1;
        var profit;
        while(j<prices.length)
        {
            profit=prices[j]-prices[i];
            if(profit>maxprofit)
            {
                maxprofit=profit;
                console.log(maxprofit);
            }
            j+=1;
            
        }
        i+=1;
    }
    return maxprofit;
    
};



/**
 * this problem can be solved by sliding window pattern--O(n)
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    var start=0;
    var end=start+1;
    var maxprofit=0;
    while(end<prices.length)
    {
        if(prices[start]>prices[end])
        {
            start=end;
            end=end+1;
        }
        else
        {
            var profit=prices[end]-prices[start];
            if(profit>maxprofit)
            {
                maxprofit=profit;
            }
            end=end+1;

        }
    }
    return maxprofit
};