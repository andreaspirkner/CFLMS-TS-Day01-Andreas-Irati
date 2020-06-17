//let name1: Array<string> = ["Andreas","Pirkner"]

//document.getElementById("output").innerHTML += ` ${name1[0]}  ${name1[1]} `;
        

let name1: Array<string> = ["Andreas","Pirkner"];
let tentimes: Array<number> = [1,2,3,4,5,6,7,8,9,10]

tentimes.forEach(function (i) {
    
    document.getElementById("output").innerHTML += `${name1[0]} <br>`;
    
});

setTimeout(function() {
   tentimes.forEach(function (i) {
    document.getElementById("output").innerHTML += `${name1[1]} <br>`;
    
});
}, 5000);

