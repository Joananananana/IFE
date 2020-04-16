
 window.onload=function(){
     document.getElementById("add-btn").onclick=add;
     document.getElementById("minus-btn").onclick=minus;
     document.getElementById("times-btn").onclick=times;
     document.getElementById("divide-btn").onclick=divide;
     document.getElementById("trans-btn").onclick=dec2bin;
     document.getElementById("console").onclick=Mutiplethree;
     document.getElementById("consoletimes").onclick=times99;
 }
 
 function times99(){
    // document.write("<table border='1'>");
    // for(var i=1;i<10;i++){
    //     document.write("<tr>");
    //     for(var j=1;j<i+1;j++){
    //         var c=i*j;
    //         var times=i.toString()+"*"+j.toString()+"="+c;
    //         console.log(times);
    //         document.write("<td style=\"width: 100px;\">");
    //         document.write(times);
    //         document.write("</td>");
    //     }
    //     document.write("</tr>");
    // }
    // document.write("</table>");
    var table=document.createElement("table");
    table.border="1";
    for(var i=1;i<10;i++){
            var tr=document.createElement("tr");
            for(var j=1;j<i+1;j++){
                var c=i*j;
                var times=i.toString()+"*"+j.toString()+"="+c;
                console.log(times);
                var td=document.createElement("td");
                td.style.width="100px";
                td.innerHTML=times;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
     var father=document.getElementById("body");
     father.insertBefore(table,father.childNodes[28]);
}
 function Mutiplethree(){
    var Mut="";
    for(var i=1; i<101;i++){
        var Mutiple=i;
        if(i==3) Mutiple="PA";
        if(i!=3){
            var arr=String(i).split("");
            for(var j=0;j<arr.length;j++){
                if( parseInt(arr[j])==3)
                Mutiple="PA";
            }
        }
        
        console.log(Mutiple);
        
        Mut=Mut+Mutiple+'\n';
        
    }
    
    console.log(Mut);
    document.getElementById("result3").innerHTML=Mut;
 }
function add(){
    var a= document.getElementById("first-number").value;
    var b=document.getElementById("second-number").value;
    var c=parseFloat(a)+parseFloat(b);
    document.getElementById("result").innerHTML=c;
    try{
        if(a=="") throw "输入不能为空！";
        if(isNaN(a)||isNaN(b)) throw "输入必须为数字！";
    }
    catch(err){
        document.getElementById("result").innerHTML=err;
    }
    
}
function minus(){
    var a= document.getElementById("first-number").value;
    var b=document.getElementById("second-number").value;
    var c=parseFloat(a)-parseFloat(b);
    document.getElementById("result").innerHTML=c;
    try{
        if(a=="") throw "输入不能为空！";
        if(isNaN(a)||isNaN(b)) throw "输入必须为数字！";
    }
    catch(err){
        document.getElementById("result").innerHTML=err;
    }
}
function times(){
    var a= document.getElementById("first-number").value;
    var b=document.getElementById("second-number").value;
    var c=parseFloat(a)*parseFloat(b);
    document.getElementById("result").innerHTML=c;
    try{
        if(a=="") throw "输入不能为空！";
        if(isNaN(a)||isNaN(b)) throw "输入必须为数字！";
    }
    catch(err){
        document.getElementById("result").innerHTML=err;
    }
}
function divide(){
    var a= document.getElementById("first-number").value;
    var b=document.getElementById("second-number").value;
    var c=parseFloat(a)/parseFloat(b);
    document.getElementById("result").innerHTML=c;
    try{
        if(a=="") throw "输入不能为空！";
        if(isNaN(a)||isNaN(b)) throw "输入必须为数字！";
        if(b==0) throw "除数不能为0";
    }
    catch(err){
        document.getElementById("result").innerHTML=err;
    }
}
function dec2bin() {
    var a=document.getElementById("dec-number").value;
    var d=a;
    var c=document.getElementById("bin-bit").value;
    
    var b="";
    var i=1;
    while((parseInt(d/2))!=0){
        b=String(d%2).concat(b);
        d=parseInt(d/2);
        i++;
    }
    b=d+b;
    for(var j=i;j<c;j++)
       b=0+b;
    document.getElementById("result2").innerHTML=b;
    try{
        
        if(c<i)
        console.log("输入位数小于实际位数！");
        if(parseInt(a)!=a || a<0)
        throw "输入必须为非负整数！";
    }
    catch(err){
        document.getElementById("result2").innerHTML=err;
    }
   
}