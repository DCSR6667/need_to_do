/**
 * time complexity----O(max(len(num),k)+n/2+n/2)
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */

const reverse=(num)=>
    {
        var low=0;
        var high=num.length-1;
        var temp;
        while(low<high)
        {
            temp=num[low];
            num[low]=num[high];
            num[high]=temp;
            low+=1;
            high-=1;
    
        }
    
    };
    
    var addToArrayForm = function(num, k) {
        var i=0;
        var carry=0;
        var size=num.length;
        reverse(num);
        while(k>0 && i<size)
        {
            var rem=k%10;
            var sum=(num[i]+rem+carry);
            num[i]=(sum%10);
            carry=Math.floor(sum/10);
            i+=1;
            k=Math.floor(k/10);
        }
    
        while(k>0 && i>=size)
        {
            var rem=k%10;
            sum=(rem+carry);
            carry=Math.floor(sum/10);
            num.push(sum%10);
            k=Math.floor(k/10);
    
        }
    
    
    
        while(carry!=0 && i<size)
        {
            sum=(num[i]+carry);
            num[i]=(sum%10);
            carry=Math.floor(sum/10);
            i+=1;
        }
        
        if(carry!=0 && i>=size)
        {
            num.push(carry);
        }
        reverse(num);
        return num;
    
    
        
    };