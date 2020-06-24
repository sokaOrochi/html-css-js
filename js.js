function myFun() {
    document.getElementById("demo").innerHTML = "hihihi";
}


function aaa() {
    window.alert(5 + 6);
}


var x;
x = 5;
function bbb() {
    document.getElementById("bbb").innerHTML = x;
}

function ddd() {
    var f, t;
    f = ["a", "b", "c"];

    t = "<ul>";
    f.forEach(lll);
    t += "</ul>";

    document.getElementById("demo").innerHTML = t;
}

function lll(value) {
    t += "<li>" + value + "</li>";
}