let var1=document.getElementById("screen");
let a=[];
let theOperation;
string="";
let a1;
let b1;
let ans=0;
for(i=0;i<10;i++){
	a[i]=document.getElementById(i);
	a[i].addEventListener("click",function(e){
	string=string+this.id;
	var1.innerHTML=string;
	});
}

let answer=document.getElementById("ans");
answer.addEventListener("click",function(e){
	if (ans!=0){
		string=ans;
		var1.innerHTML="ANS";
	}

});

let ops=Array.from(document.getElementsByClassName("ops"));
ops.forEach(function(e){
		
		e.addEventListener("click",function(e){
		if(this.id!=="equal"&&this.id!=="del"&&this.id!=="ac"){
		theOperation=this.id;
		a1=parseFloat(string);
		string="";
		var1.innerHTML=string;
		}
			
		else if(this.id=="ac"){
			a1=0;
			b1=0;
			string="";
			var1.innerHTML=string;
		}
		else if(this.id=="del"){
			string=string.slice(0,-1);
			var1.innerHTML=string;

		}

			else{
			b1=parseFloat(string);
			operator(theOperation,a1,b1);
		}
		}

	);
});


function addition(a,b){
return (a+b);
}

function subtraction(a,b){
return (a-b);
}

function multiply(a,b){
	return (a*b);
}

function division(a,b){
	if(b==0){
		var1.innerHTML="ERROR";
		return
	}
	return (a/b);
}

function operator(op,a,b){
if (op=="plus"){
			ans=addition(a,b);
			string=addition(a,b).toString();
			var1.innerHTML=string;
}
else if (op=="sub"){
	ans=subtraction(a,b);
	string=(subtraction(a,b)).toString();
	var1.innerHTML=string;
}
else if (op=="mul"){
	ans=multiply(a,b);
	string=(multiply(a,b)).toString();
	var1.innerHTML=string;
}
else if (op=="div"){
	ans=division(a,b);
	string=(division(a,b)).toString();
	var1.innerHTML=string;
}
else{
	console.log("ERROR")
}
}
