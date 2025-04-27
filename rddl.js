// function -> dahijj ashiglah bolomjtoi kodnii tsugluulga 
// define/ uusgeh  -> function funcName(){}
//argument/parametr-> func-iin zaaval avah utga 
function hello(name, age, gender){
    console.log("hello"+ name );
    console.log("i am "+ age +"years old ");

}
// call/duudaj ajluulah 
hello("  Bat ",25, );//--->> ENE DUUDAJ AJILUULJ BAIGAA
hello("  Suvd ", 20, );

function niilber(too1, too2){
    console.log(too1+too2);
}
niilber(5,30);
niilber(90922, 2228);

function zereg(a){
    console.log(a*a)
}
zereg(20)

function nas(a) {
   // alert("Таны төрсөн он: " + (2025 - a));
  }
  
  nas(20);
//DOM-> Document-> html bga buh kodiig helne 
console.log(document);
var h1 = document.getElementsByTagName('h1')[0];
console.log(h1);
//var name . style . styleName ="value ";
h1.style.color= "yellow";
h1.style.fontSize= "70px"
//var Name. innerText = "newText";
h1.innerText= "Bye Bye ";

var h2= document.getElementsByTagName("h2")[0];
console.log(h2);
function change(){
    h2.style.color= "green";
    h2.innerText= "changed";
}
var p= document.getElementsByTagName("p")[0];
console.log(p);
function change(){
    p.style.backgroundColor="Blue";
    p.innerText="BLACK";
}
var input = document.getElementsByTagName("input")[0];

function find() {
    var p1 = document.getElementsByTagName('p')[1];
    var p2 = document.getElementsByTagName('p')[2];
    var nas = Number(input.value);

    if (nas > 0 && nas <= 120) {
        p1.innerText = "Tanii tursun on: " + (2025 - nas);
        p1.style.color = "green";

        p2.innerText = "Ta 10 jiliin daraa " + (nas + 10) + " nastai bolno .";
        p2.style.color = "black";
    } else if (nas > 120) {
        p1.innerText = "Hun engej naslah bolomjgui!";
        p1.style.color = "red";

        p2.innerText = "";
    } else if (nas <= 0) {
        p1.innerText = "Ta turuugui bn !";
        p1.style.color = "yellow";

        p2.innerText = ""; 
    } else {
        p1.innerText = "Nasaa zuv oruulchaarai zaluu!";
        p1.style.color = "yellow";

        p2.innerText = ""; 
    }
}
