// for(var i=0;i<5;i++){            //same i for ech iteration
//     setTimeout(function(){       //this function has closure over loop, thus always prints 4
//         console.log("i = "+i);
//     },i*1000);
// }

// for(var j = 0;j<5;j++){
//     setTimeout(function(){
//         var k = j;               //also has closure over loop, always print 4
//         console.log("k = "+k);
//     },j*1000);
// }

// for(var f = 0;f<5;f++){
//     setTimeout(function(){
//         let g = f;               //also has closure over loop, always print 4
//         console.log("f = "+f+"  g = " + g);
//     },f*1000);
// }


//=============================================

// for(var a = 0;a<5;a++){
//     (function(){
//         var b = a;
//         setTimeout(function(){
//             console.log("a = "+a+"  b = "+b);
//         },a*1000);
//     })();
// }

for (var c = 0; c < 5; c++) {                //c is same for each iteration
    let d = c;                               //new d for each iteration
    setTimeout(function () {
        console.log("c = "+c+"  d = " + d);
    }, c * 1000);
}

// for(let e = 0;e<5;e++){                 //e variable is declared for each iteration, thus different "e"s are created for eacj iteration
//     setTimeout(function(){
//         console.log("e = "+e);
//     },e*1000);
// }

