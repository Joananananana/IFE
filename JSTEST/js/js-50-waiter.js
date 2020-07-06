//每做完一个菜执行此操作 
function waitforServefood() {
    var flag = false; //是否有服务员空闲
    for (var i = 0; i < waiters.list.length; i++) {
        if (waiters.list[i].getStatus() == 0) {
            waiters.list[i].setStatus(1);
            flag = true;
            break;
        }
    }
    if (flag == false) {
        console.log('所有服务员都在忙碌');
    }
    if (flag == true) { //服务员员i上菜
        var foodl = servefoodlist[0];
        console.log('服务员' + i + '为第' + foodl[3] + '桌上' + foodl[1]); //第foodl[3]桌 第foodl[4]个菜
        var cusStatus = document.querySelectorAll("#cusStatus")[foodl[3]];
        servefoodlist.splice(0, 1); //删除servefoodlist列表的第一个菜
        
        setTimeout(() => {
            waiters.list[i].setStatus(0); //释放服务员i的状态
            cusStatus.innerHTML = '正在吃菜';
            var eatlist = document.querySelectorAll("#eatlist")[foodl[3]]; // console.log(eatlist.children.length)
        
            var li = eatlist.childNodes[foodl[4] + 1];
            var t = 3.0.toFixed(1); //开始吃菜 每个菜3s
            var interval = setInterval(() => {
                li.innerHTML = foodl[1] + t;
                t = (t - 0.1).toFixed(1);
                if (t < 0) {
                    li.className = 'already';
                    clearInterval(interval);
                }
            }, 100);
            if(eatlist.childElementCount==++foodl[4]){
                let interval2 = setInterval(() => {
                    var ff = true;
                    for (var j = 1; j < eatlist.children.length + 1; j++) {
                        if (eatlist.childNodes[j].className == '') {
                            ff = false;
                            break;
                        }
                    }
                    console.log(ff)
                    if (ff == true) {
                        clearInterval(interval2);
                        cusStatus.innerHTML = '吃完了准备结账';
                        eatlist.innerHTML = '顾客菜单：'
                        var t1 = 2.0.toFixed(1); //结账
                        var interval1 = setInterval(() => {
                            cusStatus.innerHTML = '结账中' + t1;
                            t1 = (t1 - 0.1).toFixed(1);
                            if (t1 < 0) {
                                clearInterval(interval1);
                                updateResMoney(-seatpay[foodl[3]]);
                                seatpay[foodl[3]] = 0;
                                cusStatus.innerHTML = '顾客离开';
                                customerleaving(foodl[3]);
        
                            }
                        }, 100);
                    }
                }, 1000);
            }
            
        }, 1000);
      
    }
}