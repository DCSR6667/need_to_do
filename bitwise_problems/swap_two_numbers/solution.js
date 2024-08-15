// time complexity----O(1)
// space complexity----O(1)
class Solution {
    get(a,b){
       //code here
       a=a^b;
       b=a^b;
       a=a^b;
       return [a,b];
    }
}