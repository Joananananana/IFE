function customerin(seatnum) { //顾客入座
    console.log('顾客入座第' + seatnum + '桌');
    var seat = document.querySelectorAll("#seat")[seatnum];
    seat.src = "img/custom.jpg";
    waitforOrder(seatnum); //将座位号传入
}
function waitforOrder(seatnum) {
    var cusStatus = document.querySelectorAll("#cusStatus")[seatnum];
    var timeleft2 = document.querySelectorAll("#timeleft2")[seatnum];
    var t = 2.0.toFixed(1);
    var interval = setInterval(() => {
        cusStatus.innerHTML = '顾客即将开始点菜';
        timeleft2.innerHTML = t;
        t = (t - 0.1).toFixed(1);
        if (t < 0) {
            clearInterval(interval);
            cusStatus.innerHTML = '顾客开始点菜';
        }
    }, 100);
    let p1 = Promise.resolve();
    p1 = p1.then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                var cusStatus = document.querySelectorAll("#cusStatus")[seatnum];
                var timeleft2 = document.querySelectorAll("#timeleft2")[seatnum];
                var t = 2.0.toFixed(1);
                var interval = setInterval(() => {
                    timeleft2.innerHTML = t;
                    t = (t - 0.1).toFixed(1);
                    if (t < 0) {
                        cusStatus.innerHTML = '顾客点菜完成';
                        seatinfo[seatnum].status = 2;
                        timeleft2.innerHTML = '';
                        clearInterval(interval);
                    }
                }, 100);
            }, 2000);                //2s后顾客开始点菜 
            setTimeout(() => {
                resolve(seatnum);
            }, 4000);                //2s后点完菜
        })
    }).then((seatnum) => {
        let customer = factory("Customer");
        let order = customer.order(seatnum); //顾客点菜
        var cost = 0;                               //菜品cost
        var pay = 0;                                //菜品金额
        for (var i = 0; i < order.length; i++) {
            cost += order[i].cost;
            pay += order[i].price;
        }
        seatpay[seatnum] = pay;
        updateResMoney(cost);                           //更新餐厅金额
        return new Promise((resolve, reject) => {
            setTimeout(() => {                          //获取菜单 1s后厨师开始做菜
                resolve(order);
            }, 1000);
        })
    }).then((order) => { //传过来的菜单
        for (let i = 0; i < order.length; i++) { //将id,菜名、做菜时间、桌位号、菜序 存入cookinglist
            var clist = document.getElementById("clist");
            var li = document.createElement("li");
            li.innerHTML = order[i].name;
            clist.appendChild(li);
            cookinglist.push([order[i].id, order[i].name, order[i].time, seatnum, i]);
            waitforCook();   //厨师做菜
        }
    })
}
function customerleaving(seatnum) { //顾客离开 
    console.log(seatnum + '离开')
    seatinfo[seatnum] = '';
    var customers = document.getElementById("customer");
    var thiscus = customers.querySelectorAll('img')[seatnum];
    thiscus.src = "img/seat.jpg";
}