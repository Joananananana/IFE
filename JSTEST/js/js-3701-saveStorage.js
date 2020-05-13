function saveStorage(){
    //判断选择的产品和地区数量  一个地区多个商品 地区在前
    var regs=[];
    var pros=[];
    var regcheck=divreg.getElementsByTagName("input");
    var procheck=divpro.getElementsByTagName("input");
    var j=0;
    for(var i in regcheck){
        if(regcheck[i].checked==true){
            regs[j]=regcheck[i].value;
            j++;
        }
    } 
    j=0;
    for(var i in procheck){
        if(procheck[i].checked==true){
            pros[j]=procheck[i].value;
            j++;
        }
    }
    var table=document.getElementById("dataTable");
    var trs=table.getElementsByTagName("tr");
    var sourcedata=JSON.parse(myStorage.sourcedata);
    for(var i=1;i<trs.length;i++){
        var tds=trs[i].getElementsByTagName("td");
        if(regs.length==1&&pros.length>1){
            var region=tds[0].innerHTML; 
            var product=tds[1].innerHTML;
        }
        else{
            var region=tds[1].innerHTML;
            var product=tds[0].innerHTML;
        }
        var sale=[];
        for(var k=2;k<tds.length;k++){
            var input=tds[k].getElementsByTagName("input");
            sale[k-2]=input[0].value; //必须写input[0] 此时的input为数组
        }
        for(var j=0;j<sourcedata.length;j++){
            if(sourcedata[j].region==region&&sourcedata[j].product==product){
                var index=j;
                break;
            }
        }
        console.log(index);
        sourcedata[index].sale=sale;
    }
    myStorage.sourcedata=JSON.stringify(sourcedata);
}