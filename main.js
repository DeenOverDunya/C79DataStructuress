studentarray=[];
function submit()
{
var studentname1=document.getElementById("name1").value;
var studentname2=document.getElementById("name2").value;
var studentname3=document.getElementById("name3").value;
var studentname4=document.getElementById("name4").value;
studentarray.push(studentname1);
studentarray.push(studentname2);
studentarray.push(studentname3);
studentarray.push(studentname4);
console.log(studentarray);
document.getElementById("display_name").innerHTML=studentarray;
document.getElementById("submitbutton").style.display="none";
document.getElementById("sortbutton").style.display="inline-block";
}

function sorting()
{
studentarray.sort();
console.log(studentarray)
document.getElementById("display_name").innerHTML=studentarray;
}
