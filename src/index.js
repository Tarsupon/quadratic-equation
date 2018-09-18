 module.exports = function solveEquation(equation) {
  // your implementation
     let str = [];
     let A;
     let B;
     let C;
     let D,ds, mbmds, mbpds, x1, x2, x3, x4, arr1, arr2;
     str = equation.split(" ");
      A = parseInt(str[0]);
        if (str[3] == '-'){
          B = parseInt(str[4]);
          B = B * (-1);
        } 
        else{
          B = parseInt(str[4]);
        }
        if (str[7] == '-'){
          C = parseInt(str[8]);
          C = C * (-1);
        }
        else{
          C = parseInt(str[8]);
        }
        D = B * B - 4 * A * C;
        ds = Math.sqrt(D);
        if (B >= 0) {
          mbmds = -B - ds;
          x1 = Math.round( mbmds / (2 * A));
          x2 = Math.round( 2 * C / mbmds);
            if (x1 < x2) arr1 = [x1 , x2];
            else arr1 = [x2 , x1]
          return arr1;
        } else {
          mbpds = -B + ds;
          x3 = Math.round(2 * C / mbpds);
          x4 = Math.round( mbpds / (2 * A));
            if (x3 < x4) arr2 = [x3,x4];
            else arr2 = [x4, x3];
          return arr2;
        }
      }
     