$(document).ready(()=>{
var id=0;
var timerStatus=new Array();

async function t1(){
    i=0;
    $("#t1").html(i++);
}

async function t2(){
    i=0;
    $("#t2").html(i++);
}

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
        timerStatus[id]=0;//timer not running
        l.attr('id',""+id++);
        l.click(toggleTimer(l));
        return l;
    } 

    function toggleTimer(item){
    }

    $("#ad").click(()=>{
        t=$("input").val();
        if(t.length>0){
        let time=window.prompt("Enter Time in mins. \n NOTE: Default will be taken 5min if you skip this","5");
        $("ul").append(getItem(t));
        $("input").val("");}
    });

    function remove(event){console.log($(event.target).parent().parent().remove())}
});