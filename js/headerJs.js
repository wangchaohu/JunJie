/**
 * Created by Administrator on 2017/6/2 0002.
 */
function showTime() {
    var days=new  Array ("日", "一", "二", "三", "四", "五", "六");
    var currentDT = new Date();
    var y,m,date,day,theDateStr;

    y = currentDT.getFullYear(); //四位整数表示的年份
    m = currentDT.getMonth() + 1; //月
    date = currentDT.getDate(); //日
    day = currentDT.getDay(); //星期

    theDateStr = "今天是" + y+"年"+  m +"月"+date+"日 星期"+days[day]+"，欢迎光临俊洁洗涤！！！ ";

    document.getElementById("time").innerHTML = theDateStr;
}