var list1=[]
var list2=[]
var list3=[]
var list4=[]

var n=1;
var x=0;

/*function Add_new_Row()
{
    var AddRow = document.getElementById('show');
    var NewRow= AddRow.insertRow(n);

    list1[x] = document.getElementById("name").value;
    list2[x] = document.getElementById("last_name").value;
    list3[x] = document.getElementById("email").value;
    list4[x] = document.getElementById("age").value;

    var cel1=NewRow.insertCell(0);
    var cel2=NewRow.insertCell(1);
    var cel3=NewRow.insertCell(2);
    var cel4=NewRow.insertCell(3);

    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];

    n++;
    x++;
}


function ADD_NEW_ROW()
{
    const inpKey = document.getElementById("Key");
    const inpValue = document.getElementById("Name");
    const button_24 = document.getElementById("button");
    const local_out = document.getElementById("isOutput");

    const key = inpKey.value;
    const val = inpValue.value;

    if (key && val){
        localStorage.setItem(key,val);
    }

    for (let i = 0;i < localStorage.length;i++)
    {
        const key = localStorage.key(i);
        const val = localStorage.getItem(key);

        isOutput.innerHTML += `${key} : ${val} <br>`;
        document.getElementById("isOutput").style.color = "#FFFFFF";
    }
}*/


function Change_Color_Navy()
{
    document.body.style.backgroundColor = "#000080";
}

/*const button_1 = document.getElementById('button_1');

button_1.addEventListener('click',function onCLick(event){
    document.body.style.backgroundColor = "#000080";
});*/

function Change_Color_Pink()
{
    document.body.style.backgroundColor = "#FF69B4";
}
function Change_Color_Yellow()
{
    document.body.style.backgroundColor = "#FFFF00";
}
function Change_Color_Green()
{
    document.body.style.backgroundColor = "	#ADFF2F";
}
function Change_Color_Black()
{
    document.body.style.backgroundColor = "#000000";
}

var container = document.getElementById('container');

function Change_Font_Sizes()
{
    document.getElementById("container").style.fontSize = "10px";
}
function Change_Font_Sizen()
{
    document.getElementById("container").style.fontSize = "25px";
}
function Change_Font_Sizel()
{
    document.getElementById("container").style.fontSize = "50px";
}
function Reset()
{
    document.getElementById("container").style.fontSize = "medium";
}