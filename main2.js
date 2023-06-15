player1=localStorage.getItem("player1");
player2=localStorage.getItem("player2");

document.getElementById("p1name").innerHTML=player1+": ";
document.getElementById("p2name").innerHTML=player2+": ";

player1score=0;
player2score=0;
 
document.getElementById("p1score").innerHTML=player1score;
document.getElementById("p2score").innerHTML=player2score;
document.getElementById("qt").innerHTML="question turn"+player1;
document.getElementById("at").innerHTML="answer turn"+player2;

function send(){
    var number1= parseInt(document.getElementById("number").value);
   var number2= parseInt(document.getElementById("number2").value);
   var result=number1+number2;

    console.log(result);
var output=document.getElementById("output").value
var output= result.value
     n1="+"
     f_output=number1+n1+number2


     input_word='<h4 id="h4word">Q. '+f_output+'</h4>'
    answer='<br>Answer<input type="text" id="i1"> <br>'
    button='<input type="button" id="b1" value="check" onclick="check()">'
    row=input_word+answer+button;
    document.getElementById("output").innerHTML=row
    document.getElementById("word").value=""
}
function check(){
    get_ans= document.getElementById("i1").value
    
    if(result==get_ans){
       if(at=="player1"){
          player1score=player1score+1
          document.getElementById("p1score").innerHTML=player1score;
       }
       else{
           player2score=player2score+1
           document.getElementById("p2score").innerHTML=player2score;
       }
    }
    if(qt=="player1"){
       qt="player2"
       document.getElementById("qt").innerHTML="question turn  "+player2;
    }
    else{
       qt="player1"
       document.getElementById("qt").innerHTML="question turn  "+player1;
    }

    if(at=="player1"){
       at="player2"
       document.getElementById("at").innerHTML="answer turn"+player2;
    }
    else{
       at="player1"
       document.getElementById("at").innerHTML="answer turn"+player1;
    }
    document.getElementById("output").innerHTML=""
}
   