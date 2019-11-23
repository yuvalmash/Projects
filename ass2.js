function check() {
    var q1 = document.quiz.q1.value;
    var q2 = document.getElementById("q2").value;
    var checked = document.getElementsByClassName("checked");
    var q4 = slider2.value;
    var q5 = document.getElementById("section5input").value;
    var sum = 0;
    document.getElementById("padd").style.paddingTop="50px";
    

    if (q1 == "First") {
        sum++;

    }
    if (q2 == "Third") {
        sum++;
    }

    if (checked[2].checked === false && checked[0].checked === true && checked[1].checked === false && checked[3].checked === false){
        sum++;
    }

    if (q4==4) {
        sum++;
    }

    if (q5 == 1996){
        sum++;
    }   

    
    document.getElementById("first").innerHTML = "you got: ";
    document.getElementById("correct").innerHTML = sum;
    document.getElementById("last").innerHTML = "out of 5 correct!";

}

var slider1 = document.getElementById("myRange1");
var slider2 = document.getElementById("myRange2");
var slider3 = document.getElementById("myRange3");
var slider4 = document.getElementById("myRange4");

var output1 = document.getElementById("bar1");
var output2 = document.getElementById("bar2");
var output3 = document.getElementById("bar3");
var output4 = document.getElementById("bar4");

slider1.oninput = function () {
    output1.innerHTML = this.value;
}
slider2.oninput = function () {
    output2.innerHTML = this.value;
}
slider3.oninput = function () {
    output3.innerHTML = this.value;
}
slider4.oninput = function () {
    output4.innerHTML = this.value;
}




