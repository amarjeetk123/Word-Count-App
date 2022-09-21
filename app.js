
let str = "";
document.addEventListener("input", fn_name);
function fn_name() {
    let user_input = document.getElementById("user_input").value
    str = user_input

    
    if (document.getElementById("user_input").value == "") {
        document.getElementById("res").innerHTML = "";
    }
}

// code for letter counting
function check_letter() {
    let count = 0;
    for (let i = 0; i <= str.length - 1; i++) {
        if(str[i]==" " && str[i+1]!=" " && i!=str.length-1){
            continue;
        }
        else{
            count++
        }
    }
    // console.log(count)
    document.getElementById("res").innerHTML = "Total letter is:- " + count

}
// // code for word counting
function check_word() {
    let count = 1;
    for (let i = 0; i <= str.length - 1; i++) {
        if(str[i]==" " && str[i+1]!=" " && i!=str.length-1){
            count++ 
        }
    }
    document.getElementById("res").innerHTML = "Total Word is:- " + count
    // console.log(count)
}

function reset() {
    document.getElementById("user_input").value = ""
    document.getElementById("res").innerHTML = ""
}

