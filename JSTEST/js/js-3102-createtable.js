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
                var td=document.createElement("td");
                td.innerHTML=sale[j];
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
                var td=document.createElement("td");
                td.innerHTML=sale[j];
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
                var td=document.createElement("td");
                td.innerHTML=sale[j];
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
                var td=document.createElement("td");
                td.innerHTML=sale[j];
                tr.appendChild(td);
            }
            tr.appendChild(td);
            table.appendChild(tr);
        }
    }
    var div=document.getElementById("table-wrapper");
    div.appendChild(table);

    
}