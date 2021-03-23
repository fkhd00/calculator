let var1=document.getElementById("screen");
let a=[];
let theOperation
string="";
let a1;
let b1;
let ans=undefined;
let an=0;			//what would happen if you enter ANS before doing any calculations ?
let ANScount=0;    // to clear bugs related to ANS button and make it work as intended
let opsCount=0;   //introduced to clear out multiple operators inputs to one and to not change a1 while doing so
let dotCount=0;

for(i=0;i<10;i++){
	a[i]=document.getElementById(i);
	a[i].addEventListener("click",function(e){
	string=string+this.id;
	var1.innerHTML=string;
	});
}

a[10]=document.getElementById(".")                     //dot functionality
a[10].addEventListener("click",function(e){
	dotCount=dotCount+1
	if(dotCount==1){
	string=string+this.id;
	var1.innerHTML=string;
	}
	else return
});

let answer=document.getElementById("ans");			// Behaviour of ANS button
answer.addEventListener("click",function(e){
	if (an!=0){
		string=ans;
		a1=ans;
		ANScount=1;
		var1.innerHTML="ANS";
	}

});

let ops=Array.from(document.getElementsByClassName("ops"));
ops.forEach(function(e){
		
		e.addEventListener("click",function(e){
		if(this.id!=="equal"&&this.id!=="del"&&this.id!=="ac"){
		opsCount=opsCount+1;                         //look at opsCount declaration
		if(ANScount==1){	
			ANScount=0;
		}
		else if(opsCount==1){							//look at opsCount declaration
			a1=parseFloat(string);
		}

		theOperation="";
		theOperation=this.id;
		console.log(theOperation);
		string="";
		var1.innerHTML=string;
		dotCount=0;
		}
		
	//	else if(this.id!=="equal"&&this.id!=="del"&&this.id!=="ac"&&opsCount>1){


	//	}
		
		else if(this.id=="ac"){
			allClear();
			var1.innerHTML=string;
		}
		else if(this.id=="del"){
			if(string[-1]=="."){
				dotCount=0;
			}
			string=string.slice(0,-1);
			var1.innerHTML=string;

		}

		else{
			 	if(an!=0){	
			 	opsCount=0;
			 	dotCount=0;				//this logic is to keep doing operation on the last number if you keep pressing equal
			 	a1=ans;
			 	operator(theOperation,a1,b1);
			 			}
			
			 	else{
			 	b1=parseFloat(string);
			 	opsCount=0;						//equal operation
			 	dotCount=0;
				operator(theOperation,a1,b1);
					}


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
		var1.innerHTML="Aint yo tryin tobe cheeky eh ?";
		return
	}
	return (a/b);
}

function operator(op,a,b){
if (op=="plus"){
			if(ANScount==1){
				ANScount=0;
				var1.innerHTML=a1.toString();
				return;

			}
			else { 
			ans=addition(a,b);
			ans=Math.round((ans + Number.EPSILON) * 100) / 100;

			string=ans.toString();
			var1.innerHTML=string;
			an=1;
			}	
}
else if (op=="sub"){
	
	if(ANScount==1){
				ANScount=0;
				var1.innerHTML=a1.toString();
				return;
			}

	else{
	ans=subtraction(a,b);
	ans=ans=Math.round((ans+ Number.EPSILON) * 100) / 100;
	string=(ans.toString());
	var1.innerHTML=string;
	an=1;
}
}
else if (op=="mul"){
	if(ANScount==1){
				ANScount=0;
				var1.innerHTML=a1.toString();
				return;
			}
else{
	ans=multiply(a,b);
	ans=ans=Math.round((ans+ Number.EPSILON) * 100) / 100;
	string=(ans.toString());
	var1.innerHTML=string;
	an=1;
	}
}
else if (op=="div"){
if(ANScount==1){
				ANScount=0;
				var1.innerHTML=a1.toString();
				return;
	}

	else{
	ans=division(a,b);
	ans=ans=Math.round((ans+ Number.EPSILON) * 100000000) / 100000000;
	string=(ans.toString());
	var1.innerHTML=string;
	an=1;
}
}
else{
	var1.innerHTML="Math Error";
	allClear();
}
}

function allClear(){
			a1=0;
			b1=0;
			an=0;
			ans=0;
			dotCount=0;
			string="";

}
