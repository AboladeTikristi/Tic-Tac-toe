
const myPlay = ()=>{
	var myshow=document.getElementById("myShow");
	divone.style.display="none";
	myshow.style.display="block";
};
const myBegin = ()=>{
	

	/*start.innerHTML=a;*/

if (inp1.value == "" || inp2.value == "") {
read.innerHTML ="Please input yours names";
};

if (inp1.value!=="" && inp2.value!==""&& start.innerHTML=="START") {
	read.innerHTML= "<div  style='color:white;text-align:center;margin-top:10px;'>WELCOME!!!<br>GOODLUCK PLAYERS</div>"
	intel.innerHTML= inp1.value + " plays X first and "+ inp2.value + " plays O second." 
	
	};

	if (start.innerHTML=="END") {
		var myshow=document.getElementById("myShow");
	

		/*intel.innerHTML="";
		inp1.value="";
		inp2.value="";
		start.innerHTML="START";
		score1.innerHTML="0";
		score2.innerHTML="0";


		var take =document.getElementsByClassName("tic");
		

		for (var i = 0; i < take.length; i++) {

			take[i].disabled=false;
			take[i].innerHTML="";

		};*/
document.location.reload(true);
	};

	
};
var b=true;
var r=true;
var w=true;
const myFill = (event,a,c)=>{

var score1= document.getElementById("score1");
var score2= document.getElementById("score2");
if (inp1.value == "" || inp2.value == "") {
read.innerHTML ="Please input yours names";
event.target.innerHTML="";
}

	else if (b && event.target.innerHTML=="") {
		b=false;
		event.target.innerHTML= "X";
		intel.innerHTML= inp1.value +" has played,  " + inp2.value +" Its your turn";
	}
	else if( !b && event.target.innerHTML=="") {
		b=true;
		event.target.innerHTML="O";
		intel.innerHTML= inp2.value +" has played, " + inp1.value +" Its your turn";
	}
	

	if ( r && one.innerHTML == "X" && two.innerHTML == "X" && three.innerHTML=="X"||r && four.innerHTML == "X" && five.innerHTML == "X" && six.innerHTML=="X"||r && seven.innerHTML == "X" && eight.innerHTML == "X" && nine.innerHTML=="X"||r && one.innerHTML == "X" && four.innerHTML == "X" && seven.innerHTML=="X"||r && two.innerHTML == "X" && five.innerHTML == "X" && eight.innerHTML=="X"||r && three.innerHTML == "X" && six.innerHTML == "X" && nine.innerHTML=="X"||r && one.innerHTML == "X" && five.innerHTML == "X" && nine.innerHTML=="X"||r && three.innerHTML == "X" && five.innerHTML == "X" && seven.innerHTML=="X") {
		var take =document.getElementsByClassName("tic");
		r=false;

		for (var i = 0; i < take.length; i++) {
			take[i].disabled=true;
		};
	++score1.innerHTML;
	start.innerHTML="END";
	intel.innerHTML= inp1.value +" has won click on REPLAY or END";
	read.innerHTML="you've won";
		

	}

else if ( r && one.innerHTML == "O" && two.innerHTML == "O" && three.innerHTML=="O"||r && four.innerHTML == "O" && five.innerHTML == "O" && six.innerHTML=="O"||r && seven.innerHTML == "O" && eight.innerHTML == "O" && nine.innerHTML=="O"||r && one.innerHTML == "O" && four.innerHTML == "O" && seven.innerHTML=="O"||r && two.innerHTML == "O" && five.innerHTML == "O" && eight.innerHTML=="O"||r && three.innerHTML == "O" && six.innerHTML == "O" && nine.innerHTML=="O"||r && one.innerHTML == "O" && five.innerHTML == "O" && nine.innerHTML=="O"||r && three.innerHTML == "O" && five.innerHTML == "O" && seven.innerHTML=="O") {
		var take =document.getElementsByClassName("tic");
		r=false;
		++score2.innerHTML;

	for (var i = 0; i < take.length; i++) {
			take[i].disabled=true;
		};
	start.innerHTML="END";
	intel.innerHTML=inp2.value +" has won click on REPLAY or END";
	read.innerHTML="you've won";
	
	

}
var score1=document.getElementById("score1");
var Tie =document.getElementById("Tie");

/*if ( r&&score1.innerHTML==score2.innerHTML && score1.innerHTML!="0"||score2.innerHTML!="0") {

	read.innerHTML="We have a tie";
	++Tie.innerHTML;
};*/
if (score1.innerHTML<score2.innerHTML) {
	read.innerHTML="player2 wins";
};

};
const myDelete = ()=>{
	var take =document.getElementsByClassName("tic");
	one.innerHTML="";	
	two.innerHTML="";	
	three.innerHTML="";	
	four.innerHTML="";	
	five.innerHTML="";	
	six.innerHTML="";	
	seven.innerHTML="";	
	eight.innerHTML="";	
	nine.innerHTML="";
	intel.innerHTML= inp1.value + " has played already" + inp2.value +" takes the next turn";	
	 read.innerHTML=" ";
	 for (var i = 0; i < take.length; i++) {
			take[i].disabled=false;
			r=true;
		};
	/*b=true;
	event.target= "onclick";
return myFill(event);*/
	/*for (var i = 0; i < take.length; i++) {
			take[i].innerHTML="";
			start.innerHTML="START";
			take[i].disabled=false;
			read.innerHTML="";
		};*/
		
	
};

