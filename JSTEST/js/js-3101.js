window.onload=function(){
    var reg=document.getElementById("region-select");
    var pro=document.getElementById("product-select");
    var table=document.getElementsByTagName("table");
    var div=document.getElementById("table-wrapper");
    selectChange();  //第一次载入页面时显示默认地区的数据
    reg.onchange=selectChange;
    pro.onchange=selectChange;
    //...............................................................................................................
    function selectChange(){
        var datalist=getDate();              //获取数据
        if(table) div.removeChild(div.childNodes[0]);
        createTable(datalist);
    }
    function getDate() {
        var index=reg.selectedIndex;
        var region=reg.options[index].value;    
        var index=pro.selectedIndex;
        var product=pro.options[index].value;
        var datalist=[];
        var j=0;
        for(var i in sourceData){
                if(sourceData[i].region==region&&sourceData[i].product==product){
                    datalist[j]=sourceData[i];
                    j++;
                }
            }
        return datalist;
    }
    function createTable(datalist){
        var table=document.createElement("table");
        //创建表头
        var tr=document.createElement("tr");
        var list=["商品","地区","1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
        for(var i=0 in list){
            var td=document.createElement("td");
            td.innerHTML=list[i];
            tr.appendChild(td);
        }
        table.appendChild(tr); 
       //表格内容
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
        div.appendChild(table);     
    }
}

