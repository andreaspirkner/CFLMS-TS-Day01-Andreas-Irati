const numbers: Array<number> = [1,2,3,4,5,6,7,8,9,10]

let multiply = (a,b) => a*b;

for(let i of numbers){
	for(let j of numbers){
		let multiplication = (multiply(i,j))
		document.getElementById("main").innerHTML += `<div> ${j} x ${i} = ${multiplication} </div>`
	}
}