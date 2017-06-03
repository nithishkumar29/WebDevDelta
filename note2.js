function addnote(){
	var text = document.getElementById("sticky-text").value;

var para = document.createElement("P");
para.setAttribute("id","para");
document.getElementById("txt").appendChild(para);
document.getElementById("para").innerHTML = text;



var del = document.createElement("BUTTON");
del.setAttribute("id","delnote");
del.setAttribute("onclick","rm()");
del.setAttribute("title","Delete this note!");
var x = document.createTextNode("X");
del.appendChild(x);

var edit = document.createElement("BUTTON");
edit.setAttribute("id","editnote");
edit.setAttribute("onclick","edit()");
edit.setAttribute("title","Edit note!");
var e = document.createTextNode("Edit");
edit.appendChild(e);

var btns = document.createElement("DIV");
btns.setAttribute("id","btns");
btns.appendChild(edit);
btns.appendChild(del);


document.body.appendChild(btns);
document.body.appendChild(para);

}
function rm(){
	alert("Are you sure?");
	document.body.removeChild(para);
	document.body.removeChild(btns);
	document.getElementById("sticky-text").value = '';
}
var x = 1;
function edit(){
	if(x===1){
		alert("Type new text in the box and hit Edit again!");
		x++;
	}
	var text2 = document.getElementById("sticky-text").value;
	document.getElementById("para").innerHTML = text2;
}
