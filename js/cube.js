	
/*	sárga   kék      piros     zöld      fehér
	norvég  dán      brit      német     svéd
	víz     tea      tej       kávé      sör
	Dunhill Marlboro Pall Mall Rothmanns Winfield
	macska  lo       papagáj   hal       kutya
	*/
	
  /* 4      5        1         2          3
     5      3        1         4          2
     5      2        4         1          3
     3      2        1         5          4
     2      4        1         5          3
	*/ 
var Colors=["","piros","zöld","fehér","sárga","kék"];
var Nations=["","brit","svéd","dán","német","norvég"];
var Drinks=["","kávé","tea","sör","tej","víz"];
var Cigars=["","Pall Mall","Marlboro","Dunhill","Winfield","Rothmanns"];
var Animals=["","papagáj","macska","kutya","lo","hal"];

var colorCols={"select-css-color-1":0,"select-css-color-2":1,"select-css-color-3":2,"select-css-color-4":3,"select-css-color-5":4 };
var nationCols={"select-css-nation-1":0,"select-css-nation-2":1,"select-css-nation-3":2,"select-css-nation-4":3,"select-css-nation-5":4 };
var drinkCols={"select-css-drink-1":0,"select-css-drink-2":1,"select-css-drink-3":2,"select-css-drink-4":3,"select-css-drink-5":4 };
var cigarCols={"select-css-cigar-1":0,"select-css-cigar-2":1,"select-css-cigar-3":2,"select-css-cigar-4":3,"select-css-cigar-5":4 };
var animalCols={"select-css-animal-1":0,"select-css-animal-2":1,"select-css-animal-3":2,"select-css-animal-4":3,"select-css-animal-5":4 };



var colr = [4,5,1,2,3];
var nationr = [5,3,1,4,2];
var drinkr = [5,2,4,1,3];
var cigarr= [3,2,1,5,4];
var animalr = [2,4,1,5,3];
var colorchoosen = [0,0,0,0,0];
var nationchoosen = [0,0,0,0,0];
var drinkchoosen = [0,0,0,0,0];
var animalchoosen = [0,0,0,0,0];
var cigarchoosen = [0,0,0,0,0];

 //var current_locale = getCurrentLocale();
window.onload = function() {
var	h1 = document.getElementById("cl");
	var	nds = 0; 
	var	tes = 0; 
    var s = 0;
	var t;
	var	seconds=0;
	var	minutes=0;
	var	hours=0;
	//console.log(current_locale);
function add(){
		seconds++;
		if (seconds >= 60) {
			seconds = 0;
			minutes++;
			if (minutes >= 60) {
				minutes = 0;
				hours++;
			}
		}
		h1.innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00") 
								+ ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
							":" + (seconds > 9 ? seconds : "0" + seconds);
		t = setTimeout(add, 1000);
	};

function clearT(){
		h1.textContent = "00:00:00";
		seconds = 0; minutes = 0; hours = 0;
	};	
	
 function startT() {
		stop();
		clearT();
		t = setTimeout(add, 1000);
	};
	
function stop() {
		clearTimeout(t);
		
	};
	
function checkResult(){
	if (JSON.stringify(colorchoosen) == JSON.stringify(colr) && 
		JSON.stringify(nationchoosen) == JSON.stringify(nationr) &&
		JSON.stringify(drinkchoosen) == JSON.stringify(drinkr) &&
		JSON.stringify(animalchoosen) == JSON.stringify(animalr) &&
		JSON.stringify(cigarchoosen) == JSON.stringify(cigarr) ){
			alert("congratution, you solved!");
			stop();
	}
	/*console.log(colorchoosen +" " + colr);
	console.log(nationchoosen +" " + nationr);
	console.log(animalchoosen+ "  " + animalr);
	console.log(cigarchoosen+ "  " + cigarr);
	console.log(drinkchoosen+ "  " + drinkr);
	*/
}
var started=false;
var droplistcolor= document.getElementsByClassName("select-css-color");
for(var i = 0, j = droplistcolor.length; i < j; i++)
{
	
	for (var col  in  Colors){
		var Option = document.createElement("OPTION");
		Option.text = Colors[col];
		Option.value = Colors[col];
		droplistcolor[i].appendChild(Option);
	}
	
	
	droplistcolor[i].addEventListener("change",function(){
		  
		  var selCol = colorCols[this.id];
		  colorchoosen[selCol ] = this.selectedIndex;
		  checkResult();
		  
		 if (started == false){
			startT();
			started = true;
		 }
	});
}

var droplistcigar= document.getElementsByClassName("select-css-cigar");
for(var i = 0, j = droplistcigar.length; i < j; i++)
{
	/*for  (var ci=0; ci<Cigars.length;ci++){
		var option = document.createElement("OPTION");
		var txt= document.createTextNode(Cigars[ci]);
		option.appendChild(txt);
		droplistcigar[i].insertBefore(option,droplistcigar[i].lastChild);
		
	}*/
	for (var col  in  Cigars){
		var Option = document.createElement("OPTION");
		Option.text = Cigars[col];
		Option.value = Cigars[col];
		droplistcigar[i].appendChild(Option);
	}
	droplistcigar[i].addEventListener("change",function(){
		 var selCol = cigarCols[this.id];
		 cigarchoosen[selCol ] = this.selectedIndex; 
		 
		 if (started == false){
			startT();
			started = true;
		 }
		 checkResult();
	});
}

var droplistanimal= document.getElementsByClassName("select-css-animal");
for(var i = 0, j = droplistanimal.length; i < j; i++)
{
	/*for  (var ci=0; ci<Animals.length;ci++){
		var option = document.createElement("OPTION");
		var txt= document.createTextNode(Animals[ci]);
		option.appendChild(txt);
		droplistanimal[i].insertBefore(option,droplistanimal[i].lastChild);
	}*/
	for (var col  in  Animals){
		var Option = document.createElement("OPTION");
		Option.text = Animals[col];
		Option.value = Animals[col];
		droplistanimal[i].appendChild(Option);
	}
	droplistanimal[i].addEventListener("change",function(){
		  
		 var selCol = animalCols[this.id];
		 animalchoosen[selCol ] = this.selectedIndex; 
		 if (started == false){
			startT();
			started = true;
		 }
		 checkResult();
	});
}

var droplistdrink= document.getElementsByClassName("select-css-drink");
for(var i = 0, j = droplistdrink.length; i < j; i++)
{
	/*for  (var ci=0; ci<Drinks.length;ci++){
		var option = document.createElement("OPTION");
		var txt= document.createTextNode(Drinks[ci]);
		option.appendChild(txt);
		droplistdrink[i].insertBefore(option,droplistdrink[i].lastChild);
	}*/
	for (var col  in  Drinks){
		var Option = document.createElement("OPTION");
		Option.text = Drinks[col];
		Option.value = Drinks[col];
		droplistdrink[i].appendChild(Option);
	}
	droplistdrink[i].addEventListener("change",function(){
		 var selCol = drinkCols[this.id];
		 drinkchoosen[selCol ] = this.selectedIndex;  
		if (started == false){
			startT();
			started = true;
		 }
		 checkResult();
	});
}
var droplistnation= document.getElementsByClassName("select-css-nation");
for(var i = 0, j = droplistnation.length; i < j; i++)
{
	/*for  (var ci=0; ci<Nations.length;ci++){
		var option = document.createElement("OPTION");
		var txt= document.createTextNode(Nations[ci]);
		option.appendChild(txt);
		droplistnation[i].insertBefore(option,droplistnation[i].lastChild);
		console.log("Cigars" + Nations[ci]);
	}*/
	for (var col  in  Nations){
		var Option = document.createElement("OPTION");
		Option.text = Nations[col];
		Option.value = Nations[col];
		droplistnation[i].appendChild(Option);
	}
	droplistnation[i].addEventListener("change",function(){
		  var selCol =nationCols[this.id];
		 nationchoosen[selCol ] = this.selectedIndex; 
		 if (started == false){
			startT();
			started = true;
		 }
		 checkResult();
	});
}


}