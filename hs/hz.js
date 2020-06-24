function tp() {
    var date_time = new Date();
    hour = date_time.getHours();
    if (hour > 0 && hour < 12) {
        document.getElementById("time_periods").innerHTML = "Good morning.";
    }
    if (hour > 12 && hour < 18) {
        document.getElementById("time_periods").innerHTML = "Good afternoon.";
    }
    if (hour > 18 && hour < 24) {
        document.getElementById("time_periods").innerHTML = "Good night.";
    }
}

function master() {
    var x = document.getElementById("master_field");
    if (x.style.display == "none") {
        x.style.display = "block";
    }
        x.style.display = "none";
    }
}

function zoo() {
    var x = document.getElementById("zoo_field");
    if (x.style.display == "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

function slave() {
    var x = document.getElementById("slave_field");
    if (x.style.display == "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}