function getDate(sourceData) {
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
    var y=0;
    var datalist=[];
    for(var x=0;x<sourceData.length;x++){
        for(i=0;i<regs.length;i++){
            for(j=0;j<pros.length;j++)
                if(sourceData[x].region==regs[i]&&sourceData[x].product==pros[j]){
                    datalist[y]=sourceData[x];
                    y++;
                }
            }
    }
    return [datalist,regs.length,pros.length];
}