    //鼠标经过某行 获取某行数据
    function drow(){
        var table=document.getElementById("dataTable");
        var trs=table.getElementsByTagName("tr");
        for(var i=1;i<trs.length;i++)
            trs[i].onmouseover=function(){
                var data=[{product:"",region:"",sale:[]}];
                var tds=this.getElementsByTagName("td");
                data[0].product=tds[0].innerHTML;
                data[0].region=tds[1].innerHTML;
                for(var j=2;j<tds.length;j++){
                     var input=tds[j].getElementsByTagName("input");
                     data[0].sale[j-2]=input[0].value;
                }
                column(data);
                line(data);
            }
        function column(sourceData){        //柱状图
            var color=["lightpink","Lavender","CornflowerBlue","CadetBlue","Khaki","Orange","Tomato","SandyBrown","LightBlue","RoyalBlue","MediumPurple","BlueViolet"] ;
            var svg=document.getElementById("svg");
            svg.innerHTML="";
            var sale=sourceData[0].sale;
            var max=Number(sale[0]);
            for (var i in sale){                  //找出最大值
                var t=Number(sale[i]);
                if(max<t)
                    max=t;
            }
            var each=250/max;                                 //装置图最大高度设置为250
            var height=[];
            var y=[];
            for(var i=0;i<sale.length;i++){
                height[i]=Math.round(each*Number(sale[i]));
                y[i]=300-height[i]-1;      
            }
            var x=[];x[0]=40;
            for(var i=1;i<y.length;i++){
                x[i]=x[i-1]+30;
            }
            var linex=document.createElementNS('http://www.w3.org/2000/svg',"line");
            linex.setAttribute('x1',"30");
            linex.setAttribute('x2',"430");
            linex.setAttribute('y1',"300");
            linex.setAttribute('y2',"300");
            linex.style="stroke:black";
            svg.appendChild(linex);
            var liney=document.createElementNS('http://www.w3.org/2000/svg',"line");
            liney.setAttribute('x1',"30");
            liney.setAttribute('x2',"30");
            liney.setAttribute('y1',"0");
            liney.setAttribute('y2',"300");
            liney.style="stroke:black";
            svg.appendChild(liney);
            for(var i=0;i<height.length;i++){  
                //SVG是基于xml格式的，创建标签节点需要有命名空间 把createElement改成createElementNS就可以了
                var rect=document.createElementNS('http://www.w3.org/2000/svg',"rect"); 
                rect.setAttribute('x',x[i]);
                rect.setAttribute('y',y[i]);
                rect.setAttribute('width',"24");
                rect.setAttribute('height',height[i]);
                rect.style.fill=color[i];
                svg.appendChild(rect);
            }
         }
        function line(sourceData){
            var c=document.getElementById("myCanvas");
            var ctx=c.getContext("2d");
            ctx.clearRect(0,0,c.width,c.height);  
            ctx.beginPath();
            ctx.moveTo(30,300);
            ctx.lineTo(430,300);
            ctx.strokeStyle="black";
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(30,0);
            ctx.lineTo(30,300);
            ctx.strokeStyle="black";
            ctx.stroke();
            var sale=sourceData[0].sale;
            var max=Number(sale[0]);
            for (var i in sale){                  //找出最大值
                var t=Number(sale[i]);
                if(max<t)
                    max=t;
            }
            var each=250/max;                                 //装置图最大高度设置为250
            var height=[];
            var y=[];
            for(var i=0;i<sale.length;i++){
                height[i]=Math.round(each*Number(sale[i]));
                y[i]=300-height[i];      
            }
            var x=[];x[0]=40;
            for(var i=1;i<y.length;i++){
                x[i]=x[i-1]+30;
            }
            for(var i=0;i<height.length;i++){  
                ctx.beginPath();
                ctx.arc(x[i],y[i],5,0,2*Math.PI);
                ctx.fill();
                if(i!=0){
                    ctx.beginPath();
                    ctx.moveTo(x[i-1],y[i-1]);
                    ctx.lineTo(x[i],y[i]);
                    ctx.stroke();
                }
            }
        }   
    }
    function line1(){
        var table=document.getElementById("dataTable");
        var trs=table.getElementsByTagName("tr");
        var data=[];
        for(var i=1;i<trs.length;i++)  {  
                var tds=trs[i].getElementsByTagName("td");
                data[i-1]={product:"",region:"",sale:[]};
                data[i-1].product=tds[0].innerHTML;
                data[i-1].region=tds[1].innerHTML;
                for(var j=2;j<tds.length;j++){
                     var input=tds[j].getElementsByTagName("input");
                     data[i-1].sale[j-2]=input[0].value;
                }
        }
        var color=["CornflowerBlue","lightpink","CadetBlue","Lavender","Khaki","Orange","Tomato","SandyBrown","LightBlue"];
        var sale=[];
        var max=0;
        for(var i=0;i<data.length;i++)
            sale=(sale).concat(data[i].sale);
        for (var i in sale){                  //找出最大值
            var t=Number(sale[i]);
            if(max<t)
                max=t;
            }
        var c=document.getElementById("myCanvas1");
        var ctx=c.getContext("2d");
        ctx.clearRect(0,0,c.width,c.height);  
        for(var i=0;i<data.length;i++)
            linecolor(data[i],color[i],max);
          
    }
    function linecolor(sourceData,color,max){
        var c=document.getElementById("myCanvas1");
        var ctx=c.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(30,300);
        ctx.lineTo(430,300);
        ctx.strokeStyle="black";
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(30,0);
        ctx.lineTo(30,300);
        ctx.strokeStyle="black";
        ctx.stroke();
        var sale=sourceData.sale;
        var each=250/max;                                 //装置图最大高度设置为250
        var height=[];
        var y=[];
        for(var i=0;i<sale.length;i++){
            height[i]=Math.round(each*Number(sale[i]));
            y[i]=300-height[i];      
        }
        var x=[];x[0]=40;
        for(var i=1;i<y.length;i++){
            x[i]=x[i-1]+30;
        }
        for(var i=0;i<height.length;i++){  
            ctx.beginPath();ctx.fillStyle=color;
            ctx.arc(x[i],y[i],5,0,2*Math.PI);
            ctx.fill();
            if(i!=0){
                ctx.beginPath();
                ctx.moveTo(x[i-1],y[i-1]);
                ctx.lineTo(x[i],y[i]);
                ctx.strokeStyle=color;
                ctx.stroke();
            }
        }
    }   
     
    
        
        


  