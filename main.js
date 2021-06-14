$(document).ready(()=>{
var id=0;
var timerLimit=new Array(); //stores input time
var clock=new Array(); //useless

async function t1(t,m,s){
    if(m==timerLimit[$(t).parent().parent().attr('id')])return;
    if(s==59){s=0;$(t).html(++m+":"+s);}
    $(t).html(m+":"+s++);
    await setTimeout(()=>t1(t,m,s),1000);
    //await pause(t);
}

function pause(t){
   return new Promise(r=>setTimeout(r,t));
}

//t1($("#time"),0,0);

    function getItem(data){
        let l=$("<li>");
        
        let v= $("<div>",{id:'item-box',"class":"flex-container","style":"justify-content:space-between"});
        let b=$("<button>",{id:'can',"class":"item-box-btn"});
        b.html("X");
        b.click((event)=>{remove(event)});
        let bicn=$("<div>",{"class":"button-icn1"});
        b.append(bicn);
        let time= $("<div id=t>");
        time.html("5:00");
        v.append(b);
        v.append($("<div>",{"style":"align-self:center"}).html(data.toString()));
        v.append(time);
        l.append(v);
        l.attr('id',""+id++);
        l.click((event)=>toggleTimer(l));
        return l;
    } 

    function toggleTimer(item){
        let id=$(item).attr('id');
        console.log($(item).find("#t"));
        clock[id]=t1($(item).find("#t"),0,0);
    }

    $("#ad").click(()=>{
        t=$("input").val();
        if(t.length>0){
        let time=window.prompt("Enter Time in mins.\nNOTE: Default will be taken 5min if you skip this","5");
        let litem=getItem(t);
        litem.find('#t').html(time);
        timerLimit[litem.attr('id')]=parseInt(time);
        $("ul").append(litem);
        $("input").val("");}
    });

    function remove(event){console.log($(event.target).parent().parent().remove())}
});