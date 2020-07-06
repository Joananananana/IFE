function waitforCook() {
    //当前烹饪菜单为空  可以不做反应  每次烹饪菜单增加时 会触发此函数
    //烹饪菜单不为空 
    if (cookinglist[0]) {
        var flag = false; //标记是否有厨师状态为空闲
        for (var j = 0; j < cooks.list.length; j++) {
            if (cooks.list[j].getStatus() == 0) {
                cooks.list[j].setStatus(1);
                flag = true;
                break;
            }
        }
        if (flag == false) { //所有厨师都在忙碌  间隔1s执行waitforCook函数
            var interval = setInterval(() => {
                waitforCook();
                console.log('所有厨师都在忙碌')
                if (cookinglist.length < 1) {
                    clearInterval(interval);
                }
            }, 1000);
        }
        if (flag == true) { //厨师j空闲   
            //在厨师图标旁显示正在做的菜品 计时器
            var list = document.getElementById("cooklist");
            let h1 = list.querySelectorAll("p")[j];
            let addservelist = cookinglist[0];
            let context = cookinglist[0][1];
            h1.innerHTML = context;
            let t = cookinglist[0][2];
            let t1 = t.toFixed(1);
            var interval = setInterval(() => {
                h1.innerHTML = context + t1;
                t1 = (t1 - 0.1).toFixed(1);
                if (t1 < 0) {
                    h1.innerHTML = "";
                    clearInterval(interval);
                }
            }, 100);
            //删除cookinglist烹饪列表
            cookinglist.splice(0, 1);
            var clist = document.getElementById("clist");
            clist.removeChild(clist.childNodes[1]);
            //厨师j做菜品i 清空厨师图标旁的菜品 厨师状态设为0  设置的定时器时间比菜品烹饪时间略长   
            setTimeout(() => {
                console.log('厨师' + j + '做好了' + context);

                //添加待上菜 servefoodlist
                servefoodlist.push(addservelist); //console.log(servefoodlist);
                cooks.list[j].setStatus(0); // waitforCook(); //释放厨师时，再继续查看是否做菜
                // waitforServefood();
            }, t * 1200);
        }
    }
}