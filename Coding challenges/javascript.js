var number = window.prompt("number");
if(18<=number<=50){
    console.log("eligible for job ");
}
else if(number>50){
    console.log("please enjoy retirement time ");
}
else if(0<=number<18){
    console.log(" not eligible for job ");
}
else{
    console.log("age can not be negative value ");
}

