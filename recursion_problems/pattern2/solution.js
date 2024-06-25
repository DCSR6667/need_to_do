const pattern2=(row, col)=>
    {
       if (row === 0) {
           return;
       }
       if (col > row) {
           pattern2(row - 1, 1);
           console.log();
           
       } else {
           pattern2(row, col + 1);
           process.stdout.write("* ");
           
   }
};

pattern2(5, 1);