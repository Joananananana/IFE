//工厂模式
function factory(role,ID,name){
    function Restaurant() {
            this.money=100000;
            this.seat=1;
            this.stafflist=[];
        };
        Restaurant.prototype.recruit=function(name,work){
            if(work==1){//1为服务员
                //var waiter=Onewaiter.getInstance(this.stafflist.length+1,name,3000);
                this.stafflist.push([this.stafflist.length+1,name,3000,1]);
            }
            if(work==2){//2为厨师
                //var cook=Onecook.getInstance(this.stafflist.length+1,name,10000);
                this.stafflist.push([this.stafflist.length+1,name,10000,2]);
            }
        }
        Restaurant.prototype.fire=function(name){
            for(var i=0 in this.stafflist){
                if(this.stafflist[i][1]==name){
                    this.stafflist.splice(i,1);
                    break;
                }
            }
    }  
    function Staff(ID,name,wages){
        this.ID=ID;
        this.name=name;
        this.wages=wages;
    }
    //服务员类单例模式
    var Onewaiter =(function(){         
        var instance = null;
        function Waiter(ID,name,wages){
            Staff.call(this,ID,name,wages);
        };
        Waiter.prototype = {
            constructor: Waiter,
            finishwork: function(para){      
                
                if(para==1){
                    waiterMove(2);//服务员从顾客移动到厨师位置
                    console.log('Waiter: 把菜单传递给厨师！(0.5s)');
                }
                if(para==2){
                    waiterMove(1);//服务员从厨师移动到顾客位置
                    console.log('Waiter:上菜了！(0.5s)'); //上菜
                }
                if(para==3){
                    waiterMove("5");//服务员从顾客移动到中间
                    console.log('Waiter: 顾客结账！');
                }
            }
        };
        return {
            name: 'OneWaiter',
            getInstance: function(ID,name,wages){
                if( instance === null ){
                    instance = new Waiter(ID,name,wages);
                }
                return instance;              //返回实例
            }
        };
    })();
    //厨师类单例模式
    var Onecook =(function(){         
        var instance = null;
        function Cook(ID,name,wages){
            Staff.call(this,ID,name,wages);
        };
        Cook.prototype = {
            constructor: Cook,
            finishwork: function(){
                console.log('Cooker: The meal is ready!');
            }
        };
        return {
            name: 'OneCook',
            getInstance: function(ID,name,wages){
                if( instance === null ){
                    instance = new Cook(ID,name,wages);  //创建厨师
                }
                return instance;              //返回实例
            }
        };
    })();
    //顾客类
    function Customer(){}
        Customer.prototype={
            order:function(){
                var ordernum=Math.floor(Math.random()*3)+1; // 随机点1到3个菜
                var order=[];
                var idd=[];
                var flag=true;
                for(var i=0;i<ordernum;i++){
                    var id=Math.floor(Math.random()*3)+1;//选择不同菜品id 
                    for(var j=0;j<idd.length;j++){
                        if(idd[j]==id)
                        flag=false;
                    }
                    if(flag==true){
                        var food=new Food(id);
                        order.push(food);
                    }
                    idd.push(id);
                }
                return order;
            },
        }
//菜品类
    function Food(ID){
            //this.ID=Math.floor(Math.random()*3)+1; // [n,m] 范围内的随机整数  Math.floor(Math.random() * (m - n + 1)) + n;;
            if(ID==1){
                this.name="鱼香肉丝";
                this.cost=20;
                this.price=30;
                this.time=1;
            }
            if(ID==2){
                this.name="龙井虾仁";
                this.cost=40;
                this.price=60;
                this.time=2;
            }
            if(ID==3){
                this.name="油焖大虾";
                this.cost=60;
                this.price=80;
                this.time=3;
            }
    }
        switch(role){
            case "Restaurant":
                return new Restaurant();
                break;

            case "Waiter":
                return Onewaiter.getInstance(ID,name,3000);
                break;
            
            case "Cook":
                return Onecook.getInstance(ID,name,10000);
                break;
            case "Customer":
                return new Customer();
                break;
            case "Food":
                return new Food();
                break;
        }
    }
    //服务员位置移动
    function waiterMove(direction){
        if(direction==1)//从左向右移动
            {
                var imgleft=0;
                for(var i=0;i<10;i++){
                    imgleft+=50;
                    let left=imgleft;
                    setTimeout(function(){
                        picwaiter.style.margin="0 0 0 "+left+"px";
                    },50)
                }
            }
        if(direction==2)//从右向左移动
        {
            var imgright=500;
            for(var i=0;i<10;i++){
                imgright-=50;
                let right=imgright;
                setTimeout(function(){
                    picwaiter.style.margin="0 0 0 "+right+"px";
                },50)
            }}
        if(direction==3)//从中间向右移动
            {
                var imgleft=250;
                for(var i=0;i<10;i++){
                    imgleft+=25;
                    let left=imgleft;
                    setTimeout(function(){
                        picwaiter.style.margin="0 0 0 "+left+"px";
                    },50)
                }}
        if(direction==4)//从中间向左移动
        {
            var imgright=250;
            for(var i=0;i<10;i++){
                imgright-=25;
                let right=imgright;
                setTimeout(function(){
                    picwaiter.style.margin="0 0 0 "+right+"px";
                },50)
            }}
        if(direction==5){ //从右边回到中间
            var imgright=500;
            for(var i=0;i<10;i++){
                imgright-=25;
                let right=imgright;
                setTimeout(function(){
                    picwaiter.style.margin="0 0 0 "+right+"px";
                },50)
            }}
        }
    var restaurant=factory("Restaurant");
    var waiter=factory("Waiter",restaurant.stafflist.length+1,"Jenny");
    restaurant.recruit('Jenny',1);
    var cook=factory("Cook",restaurant.stafflist.length+1,"Jack");
    restaurant.recruit('Jack',2);
    // var customer=factory("Customer");
    // console.log(customer.order());
    var money=document.getElementById("money"); //餐厅余额
    money.innerHTML=restaurant.money;
    var cooking=document.getElementById("cooking"); //厨师正在烹饪的菜单板块
    var menu=document.getElementById("menu"); //厨师正在烹饪的菜单
    var eating=document.getElementById("eating");
    var eatlist=document.getElementById("eatlist");//顾客正在吃的菜单
    var sta=document.getElementById("sta");  //厨师状态
    var picwaiter=document.getElementById("picwaiter");
    var seat=document.getElementById("seat");
    var log=document.getElementById("log");
        //log.insertAdjacentHTML('beforeend','开始营业<br/>');
        console.log('开始营业');
    Procedure();
    
    
    function Procedure(){
        let p1=new Promise(
            (resolve,reject)=>{
                setTimeout(
                    function(){
                        seat.src="custom.jpg";
                        console.log("过了2秒，顾客来了！");
                        waiterMove(3);//服务员移动到顾客位置
                        setTimeout(
                        function(){
                            console.log('过了0.5秒，顾客开始点菜');
                            setTimeout(
                            function(){
                                var customer=factory("Customer");
                                var order=customer.order();   //顾客点菜
                                sta.style.display="none";        //隐藏厨师free
                                var ordernum=order.length;
                                var cooktime=0;
                                var foodname="";
                                var foodcost=0;
                                var food=[]; //烹饪时间
                                for(var i=0;i<ordernum;i++){
                                    cooktime+=order[i].time;
                                    foodname+=order[i].name;
                                    foodcost+=order[i].cost;
                                    food.push([order[i].name,order[i].time,order[i].price]);
                                    cooking.style.display="block"; //增加厨师正在烹饪的菜单
                                    var menuli=document.createElement("li");
                                    menuli.innerHTML=order[i].name;
                                    menu.appendChild(menuli);
                                }
                                
                                var money=document.getElementById("money");           //显示餐厅金额
                                var m=Number(money.innerHTML);
                                money.innerHTML=m-foodcost;
                                console.log('过了2秒，顾客点了'+ordernum+'个菜,'+foodname+',烹饪需要'+cooktime+'秒');
                                setTimeout(
                                    function(){
                                        waiter.finishwork(1);
                                        resolve(food); //过了0.5秒，服务员把菜单交给厨师
                                    },500 
                                )
                            },2000
                            );
                        },500
                );
                    },2000
                );
            }
        );
        p1.then(         //厨师做菜
            function(val){   
                var t=0;
                var price=0;
                for(var i=0;i<val.length;i++){   //厨师不必等待服务员上菜后再开始做另一个菜
                    var t=t+val[i][1];  //for循环一直在进行无法异步，用叠加菜品烹饪时间记录每一个菜烹饪完成的时间
                    let ii=i;//循环会改变i值 无法在异步事件时获取正确的i
                    price+=val[ii][2];
                    setTimeout(
                        function(){
                            let p2=new Promise(
                                (resolve,reject)=>{
                                    setTimeout(
                                    function(){
                                        console.log('过了'+val[ii][1]+'秒，'+val[ii][0]+'做好了');
                                        resolve([val[ii][0],price]);   //name price
                                    }
                                    )
                                }
                            )
                            p2.then(
                                function(val){
                                    setTimeout(
                                        function(){
                                            waiter.finishwork(2);//上菜
                                            eating.style.display="block";
                                            var eatli=document.createElement("li"); //添加顾客正在品尝的菜单
                                            eatli.innerHTML=val[0];
                                            eatlist.appendChild(eatli);
                                            setTimeout(      
                                                function(){
                                                    eatlist.removeChild(eatlist.childNodes[1]);
                                                    if(eatlist.childElementCount==0){
                                                        eating.style.display="none";
                                                        if(menu.childElementCount==0)
                                                            var m=Number(money.innerHTML);         //结账
                                                            waiter.finishwork(3);
                                                            money.innerHTML=m+val[1];
                                                            seat.src="seat.jpg";
                                                            

                                                    }
                                                },3000    //每份菜食用时间3s
                                            )
                                        },500 //    //服务员上菜时间0.5s
                                    )
                                    if(menu.childElementCount!=0){      //服务员上菜后若还有菜品未上则立即回到厨师身边
                                        waiterMove(2);                    //服务员移动到厨师位置
                                    }
                                    menu.removeChild(menu.childNodes[1]); //为什么是1     //服务员上菜后删除厨师菜单上的这个菜
                                    if(menu.childElementCount==0){ //所有菜品烹饪完成 
                                        cooking.style.display="none";   
                                        sta.style.display="block";
                                    }
                                }
                            )
                        },t*1000   //做每个菜的时间     
                    )
                    
                    
                }
            }    
        )
    }    