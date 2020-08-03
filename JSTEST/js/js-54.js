//足球场 长90m 宽60米 1m对应            rem=5m  m=rem/5
//运动员速度 99 12m/s 1 3m/s  最高速度VMax = 3 + (VNum - 1) * ( 9 / 98 )
//99  2.4rem/s  1 3/5rem/s  
/** @type {HTMLCanvasElement} */  
function factory(role) {
    function soccerField() {
        this.width = 1000;
        this.height = 700;
        this.rem=0.05 * this.width //以this.width的二十分之一为一个单位 
        this.creatField();
    }
    soccerField.prototype = {
        creatField: function () {
            var rem=this.rem;
            var div=document.querySelector('#all');
            var canvas=document.getElementById("bottom");
            canvas.width=this.width;
            canvas.height=this.height;
            canvas.style='background-color: #1e6f46';
            div.appendChild(canvas);
            var ctx = canvas.getContext("2d");
            ctx.translate(rem,rem);
            ctx.strokeStyle = "rgb(255, 255, 255)";
            ctx.fillStyle = 'rgb(255, 255, 255)'
            ctx.beginPath();
            ctx.rect(0, 0, 18 * rem, 12 * rem); //外框
            ctx.rect(0, 0, 9 * rem, 12 * rem); //左半场
            ctx.rect(09 * rem, 0, 9 * rem, 12 * rem); //右半场
            ctx.rect(0, 2 * rem, 3 * rem, 8 * rem); //左
            ctx.rect(0, 4 * rem, rem, 4 * rem);
            ctx.rect(18 * rem - 3 * rem, 2 * rem, 3 * rem, 8 * rem) //右
            ctx.rect(18 * rem - rem,4 * rem, rem, 4 * rem);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(9 * rem,  6 * rem, 2 * rem, 0, 2 * Math.PI); //中圈
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(9 * rem, 6 * rem, 2, 0, 2 * Math.PI); //开球点
            ctx.fill();
            ctx.beginPath();
            ctx.arc(2 * rem, 6 * rem, 2, 0, 2 * Math.PI); //左 罚球点
            ctx.fill();
            ctx.beginPath();
            ctx.arc(18 * rem - 2 * rem, 6 * rem, 2, 0, 2 * Math.PI); //右 罚球点
            ctx.fill();
            ctx.beginPath();
            ctx.arc(2 * rem, 6 * rem, 2 * rem, 2 * Math.PI / 12 * 10, 2 * Math.PI / 12 * 2, false); //左罚球区
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(18 * rem - 2 * rem, 6 * rem, 2 * rem, 2 * Math.PI / 12 * 4, 2 * Math.PI / 12 * 8); //右罚球区
            ctx.stroke();

        },
        getRem:function(){
            return this.rem;
        }      
    }
    switch(role){
        case 'field':
            return new soccerField();
            break;
    }
}
function ballPlayer(rem){
    this.rem=rem;
    this.v=random(1,99);
    this.maxv=3 + (this.v - 1) * ( 9 / 98 );
    this.x=random(0,18*rem); 
    this.y=random(0,9*rem);  
    this.createPlayer();
}
ballPlayer.prototype={
    run:function(x2,y2){
        var canvas=document.getElementById("top");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0,0,canvas.width,canvas.height);
        this.createPlayer();
    },
    createPlayer:function(){
        var rem=this.rem;
        var canvas=document.getElementById("top");
        if(canvas){
            var ctx = canvas.getContext("2d");
            ctx.translate(rem,rem);
            ctx.beginPath();
            ctx.arc(this.x,this.y,0.15*rem,0,2*Math.PI);
            ctx.fillStyle='rgb(230, 130, 18)'
            ctx.fill();
        }
    }
}
//创建足球场
var field=factory('field');
//创建一个运动员
var player=new ballPlayer(field.getRem());

function random(min,max) {
    return Math.floor(Math.random()*(max-min)) + min;
}