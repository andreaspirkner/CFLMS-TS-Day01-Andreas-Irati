var names = ["Acilio", "Theo", "Marina", "Serri"];
/*for (let index in names){
    document.getElementById("main").innerHTML += `${index} <hr>`
}

names.forEach(function(i) {
    document.getElementById("main").innerHTML += `${i} <hr>`*/
for (var index in names) {
    document.getElementById("main").innerHTML += index + " " + names[index] + " <hr>";
}
