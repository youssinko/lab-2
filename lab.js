//1. Write an if/else statement
let grade = -4
if( grade >= 80){
    console.log("You Did a good Job")
}else if(grade >= 70){
    console.log("Keep trying")
}else if( grade >= 60){
    console.log("Ehhh")
}else if(grade >= 55){
    console.log("Not too Good")
}else{
    console.log("Bad Grade but You'll Get Em next Time")
}
// 2. write a for loop
for (let i = 10; i <= 90; i+=20){
  console.log(i) 
 
}

for (let j = 20; j <=100; j+=20){
 console.log(j)
}




//3. while loop
let a = 10
while (a<=90) {
    console.log(a)
    a+=20
}
let b = 20
while (b<=100){
    console.log(b)
b+=20
}
//4. while loop
let c = 500
 while (c<=800) {
    if(c%4 === 0 ) {
        console.log(c + "is a multiple of 4")
    }
    c+=1
 }