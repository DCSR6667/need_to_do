class Solution {
    // Function to check if Kth bit is set or not.
    checkKthBit(n, k) {
        // code here
        n=n>>k;
        var bit=n&1;
        if(bit==1)
        {
            return true;
        }
        else
        {
            return false;
        }
        
    }
}



class Solution {
    // Function to check if Kth bit is set or not.
    checkKthBit(n, k) {
        // code here
        if((n & (1<<k))!==0)
        {
            return true;
        }
        else
        {
            return false;
        }
       
    }
}