const pattern1=(row, col)=>
     {
        if (row === 0) {
            return;
        }
        if (col > row) {
            console.log();
            pattern1(row - 1, 1);
            
        } else {
            process.stdout.write("* ");
            pattern1(row, col + 1);
            
    }
};

pattern1(5, 1);