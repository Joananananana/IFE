function createTable(data){
    var datalist=data[0];
    var table=document.createElement("table");
    table.id="dataTable";
    var regnum=data[1];
    var pronum=data[2];
    if(pronum==1&&regnum>1){                     //商品选择一个 地区选择多个
        //创建表头
        var tr=document.createElement("tr");
        var list=["商品","地区","1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
        for(var i=0 in list){
            var td=document.createElement("td");
            td.innerHTML=list[i];
            tr.appendChild(td);
        }
        table.appendChild(tr); 
        for(var i=0;i<datalist.length;i++){
            var tr=document.createElement("tr");
            var td=document.createElement("td");
            td.innerHTML=datalist[i].product;
            if(i==0) 
                td.rowSpan=regnum; 
            else 
                td.style.display="none";
            tr.appendChild(td);
            var td=document.createElement("td");
            td.innerHTML=datalist[i].region;
            tr.appendChild(td);
            var sale=datalist[i].sale;
            for(var j=0;j<sale.length;j++){
                var td=document.createElement("td");td.id="number";
                var input=document.createElement("input");
                input.value=sale[j];
                input.id="input";
                input.readOnly="true";
                td.appendChild(input);
                var img=document.createElement("img");
                img.src="../Pic/ICON_03.png";
                img.style.display="none";
                td.appendChild(img);
                var btnno=document.createElement("input");
                btnno.type="button";
                btnno.id="no";
                btnno.value="N";
                btnno.style.display="none";
                td.appendChild(btnno);
                var btnyes=document.createElement("input");
                btnyes.type="button";
                btnyes.id="yes";
                btnyes.value="Y";
                btnyes.style.display="none";
                td.appendChild(btnyes);
                tr.appendChild(td);
            }
            tr.appendChild(td);
            table.appendChild(tr);
        }

    }
    else if(pronum>1&&regnum==1){ //商品选择多个 地区选择一个
        //创建表头
        var tr=document.createElement("tr");
        var list=["地区","商品","1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
        for(var i=0 in list){
            var td=document.createElement("td");
            td.innerHTML=list[i];
            tr.appendChild(td);
        }
        table.appendChild(tr); 
        for(var i=0;i<datalist.length;i++){
            var tr=document.createElement("tr");
            var td=document.createElement("td");
                td.innerHTML=datalist[i].region;
            if(i==0) 
                td.rowSpan=pronum;
            else 
                td.style.display="none";    
            tr.appendChild(td);
            
            var td=document.createElement("td");
            td.innerHTML=datalist[i].product;
            tr.appendChild(td);
            var sale=datalist[i].sale;
            for(var j=0;j<sale.length;j++){
                var td=document.createElement("td");td.id="number";
                var input=document.createElement("input");
                input.value=sale[j];
                input.id="input";
                input.readOnly="true";
                td.appendChild(input);
                var img=document.createElement("img");
                img.src="../Pic/ICON_03.png";
                img.style.display="none";
                td.appendChild(img);
                var btnno=document.createElement("input");
                btnno.type="button";
                btnno.id="no";
                btnno.value="N";
                btnno.style.display="none";
                td.appendChild(btnno);
                var btnyes=document.createElement("input");
                btnyes.type="button";
                btnyes.id="yes";
                btnyes.value="Y";
                btnyes.style.display="none";
                td.appendChild(btnyes);
                tr.appendChild(td);
            }
            tr.appendChild(td);
            table.appendChild(tr);
        }

    }
    else if(pronum>1&&regnum>1){ //商品选择多个 地区选择多个
        //创建表头
        var tr=document.createElement("tr");
        var list=["商品","地区","1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
        for(var i=0 in list){
            var td=document.createElement("td");
            td.innerHTML=list[i];
            tr.appendChild(td);
        }
        table.appendChild(tr); 
        for(var i=0;i<datalist.length;i++){
            var tr=document.createElement("tr");
            var td=document.createElement("td");
                td.innerHTML=datalist[i].product;
            if(datalist[i-1]==undefined||datalist[i].product!=datalist[i-1].product) 
                td.rowSpan=regnum;
            else td.style.display="none";    
            tr.appendChild(td);
            var td=document.createElement("td");
            td.innerHTML=datalist[i].region;
            tr.appendChild(td);
            var sale=datalist[i].sale;
            for(var j=0;j<sale.length;j++){
                var td=document.createElement("td");td.id="number";
                var input=document.createElement("input");
                input.value=sale[j];
                input.id="input";
                input.readOnly="true";
                td.appendChild(input);
                var img=document.createElement("img");
                img.src="../Pic/ICON_03.png";
                img.style.display="none";
                td.appendChild(img);
                var btnno=document.createElement("input");
                btnno.type="button";
                btnno.id="no";
                btnno.value="N";
                btnno.style.display="none";
                td.appendChild(btnno);
                var btnyes=document.createElement("input");
                btnyes.type="button";
                btnyes.id="yes";
                btnyes.value="Y";
                btnyes.style.display="none";
                td.appendChild(btnyes);
                tr.appendChild(td);
            }
            tr.appendChild(td);
            table.appendChild(tr);
        }

    }
    else{
        var tr=document.createElement("tr");
        var list=["商品","地区","1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
        for(var i=0 in list){
            var td=document.createElement("td");
            td.innerHTML=list[i];
            tr.appendChild(td);
        }
        table.appendChild(tr); 
        for(var i=0;i<datalist.length;i++){
            var tr=document.createElement("tr");
            var td=document.createElement("td");
            td.innerHTML=datalist[i].product;
            tr.appendChild(td);
            var td=document.createElement("td");
            td.innerHTML=datalist[i].region;
            tr.appendChild(td);
            var sale=datalist[i].sale;
            for(var j=0;j<sale.length;j++){
                var td=document.createElement("td");td.id="number";
                var input=document.createElement("input");
                input.value=sale[j];
                input.id="input";
                input.readOnly="true";
                td.appendChild(input);
                var img=document.createElement("img");
                img.src="../Pic/ICON_03.png";
                img.style.display="none";
                td.appendChild(img);
                var btnno=document.createElement("input");
                btnno.type="button";
                btnno.id="no";
                btnno.value="N";
                btnno.style.display="none";
                td.appendChild(btnno);
                var btnyes=document.createElement("input");
                btnyes.type="button";
                btnyes.id="yes";
                btnyes.value="Y";
                btnyes.style.display="none";
                td.appendChild(btnyes);
                tr.appendChild(td);
            }
            tr.appendChild(td);
            table.appendChild(tr);
        }
    }
    var div=document.getElementById("table-wrapper");
    div.appendChild(table);
    
    //鼠标经过td 显示img 点击input变为可以修改 隐藏img 变为两个按钮
    table.onmouseover=function(e){
        var target=e.target;
        var value=target.value;
        if(target.id=="number"){
            var imgs=target.getElementsByTagName("img"); 
            var inputs=target.getElementsByTagName("input");//第一个input是输入框
            imgs[0].style.display="block";
            inputs[1].style.display="none";
            inputs[2].style.display="none";
            target.onclick=function(){
                inputs[0].removeAttribute("readOnly");
                var value=inputs[0].value;
                //给所有input输入框增加一个onblur事件，在事件中增加对于输入内容的判断，是否为正确的数字，是的话什么都不做，不是的话弹出提示框（alert）
                inputs[0].onblur=function(e){
                    if(isNaN(Number(e.target.value))){
                        alert('输入必须为数字');
                        e.target.value=value;    //若不为数字则返回更改前的值
                    }
                }
                imgs[0].style.display="none";
                inputs[1].style.display="block";//no按钮
                inputs[1].onclick=function(){
                    inputs[0].value=value;
                }
                inputs[2].style.display="block";//yes按钮
                inputs[2].onclick=function(){
                    saveStorage;
                    drow();
                    line1();
                }
            }
        }
    }
    table.onmouseout=function(e){
        var target=e.target;
        var value=target.value;
        if(target.id=="number"){
            var imgs=target.getElementsByTagName("img");
            var inputs=target.getElementsByTagName("input");
            imgs[0].style.display="none";
            inputs[0].readOnly="true";
            inputs[1].style.display="none";
            inputs[2].style.display="none";
        }
    }
  
}
