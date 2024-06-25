const subsets=(input)=>
     {
    let res = [[]];
    for (let i = 0; i < input.length; i++) {
        let size = res.length;
        for (let j = 0; j < size; j++) {
            let val = res[j].slice();
            val.push(input[i]);
            res.push(val);
        }
    }
    return res;
};



console.log(subsets("abb"));
