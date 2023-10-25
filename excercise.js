// // ex01
// let button= document.getElementById("background");
// button.addEventListener("click", changeColor);
// function changeColor() {
//     let id=document.getElementById("content");
//         let r= Math.floor(Math.random() * 256); 
//         let g= Math.floor(Math.random() * 256);
//         let b= Math.floor(Math.random() * 256);
//         let rbg= "rgb(" + r + "," + g + "," + b + ")";
//         id.style.backgroundColor=rbg;
// }
// // ex02
// let button1=document.getElementById("changeText");
// button1.addEventListener("click", changeText);
// function changeText() {
//     let text=document.getElementsByClassName("text1");
//     let char="Hello World"
//     let textrandom="";
//     for (let i = 0; i <char.length; i++) {
//         textrandom +=char.charAt(Math.floor(Math.random()* char.length));
//     }
//     text[0].innerHTML= textrandom;
// }
// // ex03
// let button2=document.getElementById("Up");
// let button3=document.getElementById("Down");
// let textUpDown=document.getElementsByClassName("text2");
// button2.addEventListener("click", changeUp);
// button3.addEventListener("click", changeDown)
// function changeUp() {
//     textUpDown.style.fontSize="20px";
// }
// function changeDown() {
//     textUpDown.style.fontSize="2px";
    
// }

// // ex04
// let li=document.getElementsByClassName("listadd");
//    li.addEventListener("mouseover", changeAdd);
// function changeAdd() {l
//     let ul=document.getElementById("list");
//     ul.classList.add("ListNew")
// console.log(ul);
    
// }


// ex05
let button4=document.getElementById("showText");
button4.addEventListener("click", show);
function show() {
    let value=document.getElementsByTagName("input");
    let string=value.showtime.value;
    alert(`Nội dung là: ${string}`);
    
}
