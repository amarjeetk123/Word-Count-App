
let str = "";
document.addEventListener("input", fn_name);
function fn_name() {
    let user_input = document.getElementById("user_input").value
    str = user_input

    
    if (document.getElementById("user_input").value == "") {
        document.getElementById("res").innerHTML = "";
    }
}


function check() {
    let count = 0;
    for (let i = 0; i <= str.length - 1; i++) {
        count++
    }
    console.log(count)
    document.getElementById("res").innerHTML = "Total Word is:- " + count
    console.log(count)
    document.getElementById("res").innerHTML = "Total Word is:- " + count
}

function reset() {
    document.getElementById("user_input").value = ""
    document.getElementById("res").innerHTML = ""
}

