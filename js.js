// // let Button = document.querySelector('.first-button');
// // let About = document.querySelector('#introduction');
// // Button.onclick = function() {
// //     About.style.display = 'block'
// // }
// let Cv = document.querySelector('.second-button');
// let cV = document.querySelector('.third-button');
// function clicker() {
//     if (cv == click) {
        
//     }
// }
// // id = setInterval(frame, 5);

// // function frame() {
// //   if (/* test for finished */) {
// //     clearInterval(id);
// //   } else {
// //     /* code to change the element style */ 
// //   }
// // }
// function myMove() {
//     let id = null;
//     const elem = document.getElementById("animate");
//     let pos = 0;
//     clearInterval(id);
//     id = setInterval(frame, 5);
//     function frame() {
//       if (pos == 350) {
//         clearInterval(id);
//       } else {
//         pos++;
//         elem.style.top = pos + 'px';
//         elem.style.left = pos + 'px';
//       }
//     }
//   }
//   let button = document.getElementById('Btn');
//  document.getElementById('btn').addEventListener(function myFunction() {
  
//  })
//  myFunction()
//  function myFunction() {
//   if (button == 'click') {
//     document.getElementById('btn').innerHTML = 'equal'
//   } else {
//     document.getElementById('btn').innerHTML = 'not equal'
//   }
  
//  }
 
//  addEventListener(function ourFunction() {

// })

// ourFunction()
//  function ourFunction() {
//   if (button != 'click') {
//     document.getElementById('btn').innerHTML = ''
//   } else {
//     document.getElementById('btn').innerHTML = ''
// }
//  }


 const text = document.querySelector('.text');
 const listen = document.querySelector('.listen');

 text.addEventListener('click', function () {
  //  listen.style.color = 'red';
  //  text.addEventListener('clicked', function () {
  //   listen.style.color = 'white'
  // })
  if (text.className == "open") {
    text.className = "";
    listen.innerHTML = "Show more";
  } else {
    text.className = "open";
    listen.innerHTML = "Show less";
  }
 })
const body = document.querySelector('.body');
 const part = document.querySelector('.pTa');
//  const parts = document.querySelector('.ptA');
 part.addEventListener('click', function () {
   if (part.className == 'open') {
     part.className = ''
    //  parts.style.display = 'none';
     body.style.backgroundColor = 'black'
     listen.style.color = 'white'
   } else {
     part.className = 'open';
    //  parts.style.display = 'block'
     body.style.backgroundColor = 'white'
     listen.style.color = 'black'
   }
 })
 