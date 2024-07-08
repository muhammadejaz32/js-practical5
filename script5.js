let num5 = [1,2,3,4,5];
let index1 = num5.indexOf(3);
num5.splice(index1);
for(var i=0; i<num5.length; i++){
    console.log(num5[i]);
}