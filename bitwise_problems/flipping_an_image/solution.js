/**
 * time complexity---O(n*n/2)
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {

    var i=0;
    var temp;
    while(i<image.length)
    {
        var low=0;
        var high=image[i].length-1;
        while(low<=high)
        {
            temp=image[i][low]^1;
            image[i][low]=image[i][high]^1;
            image[i][high]=temp;
            low+=1;
            high-=1;

        }
        i+=1;
    }

    return image;
    
};





/**
 * time complexity---O(n*n/2)
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    var i=0;
    while(i<image.length)
    {
     var low=0;
     var high=image[i].length-1;
     while(low<=high)
     {

         temp=image[i][low];
         if(temp==0)
         {
             temp=1;
         }
         else
         {
             temp=0;
         }
         if(image[i][high]==0)
         {
             image[i][low]=1;

         }
         else
         {
             image[i][low]=0
         }
        
        image[i][high]=temp;
        low+=1;
        high-=1;
     }

        
        i+=1
    }

    return image;
    
};