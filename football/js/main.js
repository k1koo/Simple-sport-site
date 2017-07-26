function check(){

	let question1 = document.quiz.question1.value;
	let question2 = document.quiz.question2.value;
	let question3 = document.quiz.question3.value;
	let correct = 0;
	
	if(question1 == "Greece"){
		correct++;
	}
	if(question2 == "5"){
		correct++;
	}
	if(question3 == "real"){
		correct++;
	}
	
	let messages = ["Great!", "You can do better :)", "Just awful!!!"];
	let pictures = ["imgs/gif4.gif","imgs/gif3.gif","imgs/gif5.gif"];
	
	let range = 0;
	
	if(correct < 1){
		range = 2;
	}
	if(correct > 0 && correct < 3){
		range = 1;
	}
	if (correct > 2){
		range = 0;
	}
	
	document.getElementById("after_submit").style.visibility="visible";
	
	document.getElementById("message").innerHTML = messages[range];
	document.getElementById("message").style.fontSize="20px";
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";
	document.getElementById("picture").src = pictures[range];
}
