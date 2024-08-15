// time complexity--O(n*pow(2,n))
// space complexity--O(n*pow(2,n))

const subsets_iwd=(s)=>
    {
        res=[[]];
        s=s.split('').sort().join('');
        var i=0;
        while(i<s.length)
            {
                if(s[i]==s[i+1])
                    {
                        i+=1;
                        continue;
                    }
                var j=0;
                var size=res.length;
                while(j<size)
                    {
                        var val=res[j].slice();
                        val.push(s[i]);
                        res.push(val);
                        j+=1;
                    }
                i+=1;


            }

    return res;
        
    

    }

console.log(subsets_iwd("abacbac"));