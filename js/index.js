// var date= new Date();
// console.log(date)

// var year=date.getFullYear()
// console.log("Happy new Year:"+ year)

// var second=date.getSeconds()
// console.log("current second:"+second)

// var month=date.getMonth()
// if(month==0){
//     console.log("Current Month: January")
// }
// var second=date.getDate()
// console.log("Date:Today is the 23rd")
// var names=date.getUTCDate()
// console.log(names)




// // date 
// var date= new Date();
// var day=date.getDay()
// if(day==0){
//     console.log("Today is Sunday")
// }
// if(day==1){
//     console.log("Today is Monday")
// }
// if(day==2){
//     console.log("Today is Tuesday")
// }
// if(day==3){
//     console.log("Today is Wednesday")
// }
// if(day==4){
//     console.log("Today is Thirsday")
// }
// if(day==5){
//     console.log("Today is Friday")
// }
// if(day==6){
//     console.log("Today is Saturday")
// }


// var head=document.getElementById("heading1")
// head.innerHTML="MORSHAEDUL ALOM"

// document.getElementById("heading2").innerHTML="bye"
// document.getElementById("heading3").innerHTML="bye"

// document.getElementsByClassName("para1")[0].innerHTML=" Morshaedul alom"
// document.getElementsByClassName("para2")[0].innerHTML="Sabrina alom"

// document.getElementsByTagName("h1")[0].innerHTML="MORSHAEDUL ALOM"
// document.getElementsByTagName("h1")[1].innerHTML="SABIB SINAN "
// document.getElementsByTagName("h1")[2].innerHTML="SABRINA ALOM"


function even_or_odd(number) {
 
    let num=number
    if( num %2==0){
      console.log("Even number")
    }
    else{
      console.log("Odd number")
    }
     return num;
      
    }
    even_or_odd(14)