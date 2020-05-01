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
        }
    }

    // function getDate() {
    //     var regs=[];
    //     var pros=[];
    //     var regcheck=divreg.getElementsByTagName("input");
    //     var procheck=divpro.getElementsByTagName("input");
    //     var j=0;
    //     for(var i in regcheck){
    //         if(regcheck[i].checked==true){
    //             regs[j]=regcheck[i].value;
    //             j++;
    //         }
    //     } 
    //     j=0;
    //     for(var i in procheck){
    //         if(procheck[i].checked==true){
    //             pros[j]=procheck[i].value;
    //             j++;
    //         }
    //     }
    //     var y=0;
    //     var datalist=[];
    //     for(var x=0;x<sourceData.length;x++){
    //         for(i=0;i<regs.length;i++){
    //             for(j=0;j<pros.length;j++)
    //                 if(sourceData[x].region==regs[i]&&sourceData[x].product==pros[j]){
    //                     datalist[y]=sourceData[x];
    //                     y++;
    //                 }
    //             }
    //     }
    //     return [datalist,regs.length,pros.length];
    // }
    // function createTable(data){
    //     var datalist=data[0];
    //     var table=document.createElement("table");
    //     var regnum=data[1];
    //     var pronum=data[2];
    //     if(pronum==1&&regnum>1){                     //商品选择一个 地区选择多个
    //         //创建表头
    //         var tr=document.createElement("tr");
    //         var list=["商品","地区","1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
    //         for(var i=0 in list){
    //             var td=document.createElement("td");
    //             td.innerHTML=list[i];
    //             tr.appendChild(td);
    //         }
    //         table.appendChild(tr); 
    //         for(var i=0;i<datalist.length;i++){
    //             var tr=document.createElement("tr");
    //             if(i==0) {
    //                 var td=document.createElement("td");
    //                 td.innerHTML=datalist[i].product;
    //                 td.rowSpan=regnum;
    //                 tr.appendChild(td);
    //             }
    //             var td=document.createElement("td");
    //             td.innerHTML=datalist[i].region;
    //             tr.appendChild(td);
    //             var sale=datalist[i].sale;
    //             for(var j=0;j<sale.length;j++){
    //                 var td=document.createElement("td");
    //                 td.innerHTML=sale[j];
    //                 tr.appendChild(td);
    //             }
    //             tr.appendChild(td);
    //             table.appendChild(tr);
    //         }

    //     }
    //     else if(pronum>1&&regnum==1){ //商品选择多个 地区选择一个
    //         //创建表头
    //         var tr=document.createElement("tr");
    //         var list=["地区","商品","1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
    //         for(var i=0 in list){
    //             var td=document.createElement("td");
    //             td.innerHTML=list[i];
    //             tr.appendChild(td);
    //         }
    //         table.appendChild(tr); 
    //         for(var i=0;i<datalist.length;i++){
    //             var tr=document.createElement("tr");
    //             if(i==0) {
    //                 var td=document.createElement("td");
    //                 td.innerHTML=datalist[i].region;
    //                 td.rowSpan=pronum;
    //                 tr.appendChild(td);
    //             }
    //             var td=document.createElement("td");
    //             td.innerHTML=datalist[i].product;
    //             tr.appendChild(td);
    //             var sale=datalist[i].sale;
    //             for(var j=0;j<sale.length;j++){
    //                 var td=document.createElement("td");
    //                 td.innerHTML=sale[j];
    //                 tr.appendChild(td);
    //             }
    //             tr.appendChild(td);
    //             table.appendChild(tr);
    //         }

    //     }
    //     else if(pronum>1&&regnum>1){ //商品选择多个 地区选择多个
    //         //创建表头
    //         var tr=document.createElement("tr");
    //         var list=["商品","地区","1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
    //         for(var i=0 in list){
    //             var td=document.createElement("td");
    //             td.innerHTML=list[i];
    //             tr.appendChild(td);
    //         }
    //         table.appendChild(tr); 
    //         for(var i=0;i<datalist.length;i++){
    //             var tr=document.createElement("tr");
    //             if(datalist[i-1]==undefined||datalist[i].product!=datalist[i-1].product) {
    //                 var td=document.createElement("td");
    //                 td.innerHTML=datalist[i].product;
    //                 td.rowSpan=regnum;
    //                 tr.appendChild(td);
    //             }
    //             var td=document.createElement("td");
    //             td.innerHTML=datalist[i].region;
    //             tr.appendChild(td);
    //             var sale=datalist[i].sale;
    //             for(var j=0;j<sale.length;j++){
    //                 var td=document.createElement("td");
    //                 td.innerHTML=sale[j];
    //                 tr.appendChild(td);
    //             }
    //             tr.appendChild(td);
    //             table.appendChild(tr);
    //         }

    //     }
    //     else{
    //         var tr=document.createElement("tr");
    //         var list=["商品","地区","1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
    //         for(var i=0 in list){
    //             var td=document.createElement("td");
    //             td.innerHTML=list[i];
    //             tr.appendChild(td);
    //         }
    //         table.appendChild(tr); 
    //         for(var i=0;i<datalist.length;i++){
    //             var tr=document.createElement("tr");
    //             var td=document.createElement("td");
    //             td.innerHTML=datalist[i].product;
    //             tr.appendChild(td);
    //             var td=document.createElement("td");
    //             td.innerHTML=datalist[i].region;
    //             tr.appendChild(td);
    //             var sale=datalist[i].sale;
    //             for(var j=0;j<sale.length;j++){
    //                 var td=document.createElement("td");
    //                 td.innerHTML=sale[j];
    //                 tr.appendChild(td);
    //             }
    //             tr.appendChild(td);
    //             table.appendChild(tr);
    //         }
    //     }
    //     div.appendChild(table);     
    // }
}