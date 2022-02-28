 /*function printghela() {
        while (true) {

            console.log('ghela issa faggit!!!');
        }
    }*/

 console.log('hello world!!');

 function matrixSum(Alfa) {
     let result = 0;

     for (var i = 0; i < Alfa.length; i++) {
         result += Alfa[i][i];
     }

     return result;
 }
 var A = [
     [1, 2],
     [3, 4]
 ];
 console.log(matrixSum(A));