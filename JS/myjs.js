function showTime(){
    var show_day=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
    var time=new Date();
    var year=time.getFullYear();
    var month=time.getMonth()+1;
    var date=time.getDate();
    var day=time.getDay();
    var hour=time.getHours();
    var minutes=time.getMinutes();
    var second=time.getSeconds();
    month<10?month='0'+month:month;
    date<10?date='0'+date:date;
    hour<10?hour='0'+hour:hour;
    minutes<10?minutes='0'+minutes:minutes;
    second<10?second='0'+second:second;
    document.getElementById('header_content_right').innerHTML='今天是：' + year + '年' + month + '月' + date + '日' + ' ' + hour + ':' + minutes + ':' + second + ' ' + show_day[day];
}
setInterval("showTime()",1000);

function proTime(){
    var temp;
    temp=document.getElementById("pro");
    if(temp.value<10)
        temp.value=temp.value+1;
    else            
        temp.value=0;            
}
setInterval("proTime()",1000);

function changestylegreen(){
    if(confirm("切换主题为绿色？"))
        document.getElementById("changecss").href="css/mystyle_green.css";
}
function changestyleblue(){
    if(confirm("切换主题为蓝色？"))
        document.getElementById("changecss").href="css/mystyle_blue.css";
}

function js(){
    var bds=document.getElementById("bds");
    var jg=document.getElementById("jg");
    jg.value=eval(bds.value);
}