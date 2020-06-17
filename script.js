var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var multiply = function (a, b) { return a * b; };
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var i = numbers_1[_i];
    for (var _a = 0, numbers_2 = numbers; _a < numbers_2.length; _a++) {
        var j = numbers_2[_a];
        var multiplication = (multiply(i, j));
        document.getElementById("main").innerHTML += "<div> " + j + " x " + i + " = " + multiplication + " </div>";
    }
}
