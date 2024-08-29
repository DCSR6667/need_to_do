/**
 * time complexity--O(no_of_words*len_of_each_word)
 * space--O(n)
 * @param {string} s
 * @return {string}
 */

const reverse=(arr,i)=>
    {
        var samp=[...arr[i]];
        var low=0;
        var high=samp.length-1;
        var temp;
       
       
        while(low<high)
        {
            temp=samp[low];
            samp[low]=samp[high];
            samp[high]=temp;
            low+=1;
            high-=1;
    
        }
        arr[i]=samp.join("");
    
    };
    
    
    var reverseWords = function(s) {
        var arr=s.split(" ");
        var i=0;
        while(i<arr.length)
        {
            reverse(arr,i);
            i+=1;
        }
        return arr.join(" ");
    
        
    };