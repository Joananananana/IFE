window.onload=function(){
    var allcheckreg=document.getElementById("allcheckreg");
    var checkreg1=document.getElementById("checkreg1");
    var checkreg2=document.getElementById("checkreg2");
    var checkreg3=document.getElementById("checkreg3");
    var allcheckpro=document.getElementById("allcheckpro");
    var checkpro1=document.getElementById("checkpro1");
    var checkpro2=document.getElementById("checkpro2");
    var checkpro3=document.getElementById("checkpro3");
    var divreg=document.getElementById("divreg");
    var divpro=document.getElementById("divpro");
    var div=document.getElementById("table-wrapper");
    var table=document.getElementsByTagName("table");
    var data=getDate();
    createTable(data);
    drow();
    line1();
    allcheckreg.onclick=function(){
        //allcheckreg.checked在点击时已经改变
        if(allcheckreg.checked==true){   //全选
            if(checkreg1.checked==false)
                checkreg1.click();
            if(checkreg2.checked==false)
                checkreg2.click();
            if(checkreg3.checked==false)
             checkreg3.click();
        }   
    }
    allcheckpro.onclick=function(){
        if(allcheckpro.checked==true){
            if(checkpro1.checked==false)
                checkpro1.click();
            if(checkpro2.checked==false)
                checkpro2.click();
            if(checkpro3.checked==false)
                checkpro3.click();

        }
    }
    divreg.onclick=function(e){
        //若此checkbox为唯一勾选的 则不能取消勾选
        target=e.target;
        if(checkreg1.checked==false&&checkreg2.checked==false&&checkreg3.checked==false)
            target.click();
        else{
            if(target.checked==false&&allcheckreg.checked==true)
                allcheckreg.click();
            if(table) div.innerHTML="";
            var data=getDate();
            createTable(data);
            drow();
            line1();
        }
    }
    divpro.onclick=function(e){
        target=e.target;
        if(checkpro1.checked==false&&checkpro2.checked==false&&checkpro3.checked==false)
            target.click();
        else{
            if(target.checked==false&&allcheckpro.checked==true)
                allcheckpro.click();
            if(table) div.innerHTML="";
            var data=getDate();
            createTable(data);
            drow();
            line1();
        }
    }

 
}