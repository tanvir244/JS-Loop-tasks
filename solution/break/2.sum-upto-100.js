
let sum = 0;
for(let i = 1; i <= 200; i++){
    if(i >= 100){
        break;
    }
    console.log(i);
    sum = sum + i;
    console.log("total:", sum);
}