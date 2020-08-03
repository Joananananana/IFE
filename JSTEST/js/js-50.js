function factory(role, ID, name) { //工厂模式创建对象
    function Restaurant() {
        this.money = 100000;
        this.seat = 1;
        this.stafflist = [];
    };

    function Waiters() { //服务员列表
        this.list = [];
    }
    Waiters.prototype = {
        addWaiter: function () {
            // var waiter=new Waiter(ID,name,3000,0);
            // this.list.push(waiter);
            if (this.list.length < 3) { //最多三个服务员
                var waiter = new Waiter(1, "Jenny", 3000, 0);
                this.list.push(waiter);
                var imgdiv = document.getElementById("waiterlist");
                var img = document.createElement("img");
                img.src = "img/waiter.jpeg";
                imgdiv.appendChild(img);
            }
        },
        fireWaiter: function () {
            if (this.list.length > 1 && this.list[0].status == 0) {
                this.list.pop();
                var imgdiv = document.getElementById("waiterlist");
                imgdiv.removeChild(imgdiv.childNodes[1]);
            }
        }
    }

    function Staff(ID, name, wages, status) {
        this.ID = ID;
        this.name = name;
        this.wages = wages;
        this.status = status;
    }

    function Waiter(ID, name, wages, status) {
        Staff.call(this, ID, name, wages, status);
    };
    Waiter.prototype = {
        constructor: Waiter,
        setStatus: function (status) {
            this.status = status;
        },
        getStatus: function () {
            return this.status;
        }
    }

    function Cooks() { //厨师列表
        this.list = [];
    }
    Cooks.prototype = {
        addCook: function () {
            // var cook=new Cook(ID,name,10000,0);
            // this.list.push(cook);
            if (this.list.length < 3) {
                var cook = new Cook(2, "Jack", 10000, 0);
                this.list.push(cook);
                var imgdiv = document.getElementById("cooklist");
                var div = document.createElement("div");
                var img = document.createElement("img");
                img.src = "img/cook.jpg";
                imgdiv.appendChild(img);
                var h1 = document.createElement("p");
                h1.style = "float:right;width:50%";

                div.appendChild(img);
                div.appendChild(h1);
                imgdiv.appendChild(div);

            }
        },
        fireCook: function () {
            if (this.list.length > 1 && this.list[0].status == 0) {
                this.list.pop();
                var imgdiv = document.getElementById("cooklist");
                imgdiv.removeChild(imgdiv.childNodes[1]);
            }
        }

    }

    function Cook(ID, name, wages, status) {
        Staff.call(this, ID, name, wages, status);
    }
    Cook.prototype = {
        constructor: Cook,
        setStatus: function (status) { //厨师状态设置为0时 服务员上菜 厨师再次查看是否需要做菜
            this.status = status;
            if (status == 0) {
                waitforServefood();
                waitforCook();
            }

        },
        getStatus: function () {
            return this.status;
        }
    }


    function Customer() {
        this.status = 0; //顾客状态 0为待入座 1为待点菜 2为待上菜 
    }
    Customer.prototype = {
        order: function (seatnum) {
            var ordernum = Math.floor(Math.random() * 3) + 1; // 随机点1到3个菜
            var order = [];
            var idd = [];
            var flag = true;
            for (var i = 0; i < ordernum; i++) {
                var id = Math.floor(Math.random() * 3) + 1; //选择不同菜品id 
                for (var j = 0; j < idd.length; j++) {
                    if (idd[j] == id)
                        flag = false;
                }
                if (flag == true) {
                    var food = new Food(id);
                    order.push(food);
                }
                idd.push(id);
            }
            addlist('eatlist', order, seatnum);
            function addlist(listn, arr, seatnum) { //添加菜单 listn为要添加li的ul的id  第seatnum桌客人点菜 
                var list = document.querySelectorAll("#" + listn)[seatnum]; //  getElementById(listn);
                for (let i = 0; i < arr.length; i++) {
                    var li = document.createElement("li");
                    li.innerHTML = arr[i].name;
                    list.appendChild(li);
                }
            }
            return order;
        },
        setStatus: function (status, seatnum) {
            this.status = status;
            if (status == 1) {
                customerin(seatnum);
            }
        }
    }

    function Food(ID) {
        //this.ID=Math.floor(Math.random()*3)+1; // [n,m] 范围内的随机整数  Math.floor(Math.random() * (m - n + 1)) + n;;
        if (ID == 1) {
            this.id = 1;
            this.name = "鱼香肉丝";
            this.cost = 20;
            this.price = 30;
            this.time = 3;
        }
        if (ID == 2) {
            this.id = 2;
            this.name = "龙井虾仁";
            this.cost = 40;
            this.price = 60;
            this.time = 4;
        }
        if (ID == 3) {
            this.id = 3;
            this.name = "油焖大虾";
            this.cost = 60;
            this.price = 80;
            this.time = 5;
        }
    }
    switch (role) {
        case "Restaurant":
            return new Restaurant();
            break;
        case "Waiters":
            return new Waiters();
        case "Cooks":
            return new Cooks();

        case "Waiter":
            return new Waiter(ID, name, 3000, 0);
            break;

        case "Cook":
            return new Cook(ID, name, 10000, 0);
            break;
        case "Customer":
            return new Customer();
            break;
        case "Food":
            return new Food();
            break;
    }
}

function updateResMoney(cost) { //更新餐厅金额
    var money = document.getElementById("money");
    var m = Number(money.innerHTML);
    money.innerHTML = m - cost;
}


function custumercoming() { //随机到达客人
    // setTimeout(() => {
    //     
    // }, 3000);
    var t = Math.floor(Math.random() * (5)) + 1; //客人可能在1~5s内到达 [n,m] 范围内的随机整数  Math.floor(Math.random() * (m - n + 1)) + n
    //先查看是否有空座位
    var customer = factory("Customer"); //创建一个顾客
    setTimeout(() => {
        let flag = false;
        console.log(t + 's后顾客到')
        for (var i = 0; i < seatinfo.length; i++) {
            if (seatinfo[i] == '') {
                // console.log(seatinfo[i])

                // seatinfo[i] = customer;
                flag = true;
                break;
            }
        }
       // console.log(flag + '座位');
        if (flag == false) { //没有空座位 排队人数小于10  进入排队队列
            if (cuswaitlist.length < 9) {
                cuswaitlist.push(customer);
                var list = document.getElementById("waitinglist");
                var img = document.createElement("img");
                var n = Math.floor(Math.random() * (5)) + 1;
                img.src = "img/" + n + ".jpg";
                img.style.height = "100px";
                img.style.margin = "20px 0 10px 0";
                list.appendChild(img);
            }
            if (cuswaitlist.length == 10) {
                console.log('排队队列太长')
            }
        }
        let ii = i;
        if (flag == true) { //有空座        
            //cuswaitlist查看是否有顾客在排队   
            if (cuswaitlist.length > 0) { //有顾客在排队 此顾客入座
                seatinfo[i] = customer;
                cuswaitlist.splice(0, 1);
                var wlist = document.getElementById("waitinglist");
                wlist.removeChild(wlist.childNodes[2]);
                customer.setStatus(1, ii);
                console.log('有顾客在排队 此顾客入座');
            }
            if (cuswaitlist.length == 0) { //没有顾客排队 直接入座
                seatinfo[i] = customer;
                customer.setStatus(1, ii);
                console.log('没有顾客排队 直接入座');
            }
        }
        custumercoming();
    }, t * 1000);

}


var btnEmcook = document.getElementById("emplyCook");
var btnEmwaiter = document.getElementById("emplyWaiter");
var btnFicook = document.getElementById("fireCook");
var btnFiwaiter = document.getElementById("fireWaiter");
//创建餐厅
var restaurant = factory("Restaurant");
var money = document.getElementById("money");
money.innerHTML = restaurant.money;
var waiters = factory("Waiters");
var cooks = factory("Cooks");
btnEmcook.onclick = function () {
    cooks.addCook();
};
btnEmwaiter.onclick = function () {
    waiters.addWaiter();
}
btnFicook.onclick = function () {
    cooks.fireCook();
}
btnFiwaiter.onclick = function () {
    waiters.fireWaiter();
}

console.log('开始营业');
//保存烹饪菜单 [id,菜名，时间，座位号，菜序]
var cookinglist = [];
//保存等待上菜菜单  [id,菜名，时间，座位号，菜序]
var servefoodlist = [];
//餐厅初始两个厨师 两个服务员
waiters.addWaiter();waiters.addWaiter();
cooks.addCook();cooks.addCook();
//用数组表示三个座位上的顾客 每个元素包含为一个customer对象
var seatinfo = ['', '', ''];
//顾客等待队列  餐厅座位已满顾客则进入等待队列 队列长度小于等于10
var cuswaitlist = [];
//保存每一桌需要支付的金额
var seatpay = [0, 0, 0];
custumercoming();
