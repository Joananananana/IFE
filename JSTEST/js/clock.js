var dom=document.getElementById("clock")
var ctx=dom.getContext("2d")
var width=ctx.canvas.width
var height=ctx.canvas.height
var r=width/2
var rem=width/200
function drawBackground(){
    ctx.save();
    ctx.translate(r,r)       //重新映射画布上的 (0,0) 位置
    ctx.beginPath()            //起始一条路径
    ctx.lineWidth=2*rem;
    ctx.arc(0,0,r-ctx.lineWidth/2,0,2*Math.PI,false)       //context.arc(x,y,r,sAngle,eAngle,counterclockwise);
    ctx.stroke()
    var hourNumbers=[3,4,5,6,7,8,9,10,11,12,1,2]
    ctx.font=18*rem+'px Arial'
    ctx.textAlign="center"      // 	context.textAlign="center|end|left|right|start";设置或返回文本内容的当前对齐方式
    ctx.textBaseline="middle"   // 	context.textBaseline="alphabetic|top|hanging|middle|ideographic|bottom";设置或返回在绘制文本时的当前文本基线
    hourNumbers.forEach(function(number,i){
        var rad=2*Math.PI/12*i;  //弧度
        var x=Math.cos(rad)*(r-28*rem)
        var y=Math.sin(rad)*(r-28*rem)
        ctx.fillText(number,x,y)    //context.fillText(text,x,y,maxWidth);
    })
    for(var i=0;i<60;i++){
        var rad=2*Math.PI/60*i;
        var x=Math.cos(rad)*(r-13*rem);
        var y=Math.sin(rad)*(r-13*rem);
        ctx.beginPath();
        if(i%5===0){
            ctx.fillStyle='#111'
            ctx.arc(x,y,2*rem,0,2*Math.PI,false);
        }
        else{
            ctx.fillStyle='#ccc'
            ctx.arc(x,y,2*rem,0,2*Math.PI,false);
        }
        ctx.fill();
    }
}
function drawHour(hour,minute){
    ctx.save();    //保存当前环境的状态
    ctx.beginPath();
    var rad=2*Math.PI/12*hour+2*Math.PI/12/60*minute;
    ctx.rotate(rad)               //context.rotate(angle);旋转当前的绘图
    ctx.lineWidth=6*rem;
    ctx.lineCap='round';      //context.lineCap="butt|round|square";设置或返回线条末端线帽的样式
    ctx.moveTo(0,10*rem);
    ctx.lineTo(0,-r/2);
    ctx.stroke();
    ctx.restore();  // 	返回之前保存过的路径状态和属性
}
function drawMinute(minute){
    ctx.save();
    ctx.beginPath();
    var rad=2*Math.PI/60*minute;
    ctx.rotate(rad)
    ctx.lineWidth=3*rem;
    ctx.lineCap='round';
    ctx.moveTo(0,10*rem);
    ctx.lineTo(0,-r+35*rem);
    ctx.stroke();
    ctx.restore();
}
function drawSecond(second){
    ctx.save();
    ctx.beginPath();
    var rad=2*Math.PI/60*second;
    ctx.rotate(rad)
    ctx.moveTo(-2*rem,20*rem);
    ctx.lineTo(2*rem,20*rem);
    ctx.lineTo(1,-r+30*rem);
    ctx.lineTo(-1,-r+30*rem);
    ctx.lineTo(-2*rem,20*rem);
    ctx.lineCap='square'
    ctx.stroke();
    ctx.restore();
}
function drawDot(){
    ctx.beginPath();
    ctx.fillStyle='#fff'
    ctx.arc(0,0,3*rem,0,2*Math.PI,false);
    ctx.fill();
}
function draw(){
    ctx.clearRect(0,0,width,height);
    drawBackground();
    var now=new Date();
    var hour=now.getHours();
    var minute=now.getMinutes();
    var second=now.getSeconds();
    drawHour(hour,minute);
    drawMinute(minute);
    drawSecond(second);
    drawDot();
    ctx.restore()
}
draw();
setInterval(() => {
    draw();
}, 1000);