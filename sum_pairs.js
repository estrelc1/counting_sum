function sumPairs(ArrayNum, X) {
    let c = 0;
    let l = 0;
    let r = ArrayNum.length -1;

    while (l < r) {
        let sum = ArrayNum[l] + ArrayNum[r];
        if (sum == X) {
            c++;
            l++;
            r--;
        }
        else if(sum < X){
            l++;
        }
        else{
            r--
        }
    }
    return c;



}

let Array;
let X;

let output;
X= 1
Array = [3, 4, 5, 6]
// Output: 0
output = sumPairs(Array, X);
console.log(output)

X = 15
Array= [0, 15, 32, 2000, 15000]
// Output: 1
output = sumPairs(Array, X);
console.log(output)

X =  42
Array=  [1, 1, 10, 32, 41]
output = sumPairs(Array, X);
console.log(output)
// Output: 2
