$(document).ready(()=>{
var id=0;

    function getItem(data){
        let l=$("<li>");
        let v= $("<div>",{"class":"item-box"});
        let b=$("<button>",{id:'can',"class":"item-box-btn"});
        b.html("X");
        b.click((event)=>{remove(event)});
        let bicn=$("<div>",{"class":"button-icn1"});
        b.append(bicn);
        v.append(b);
        v.append(" "+data);
        l.append(v);
        l.attr('id',""+id++);
        return l;
    } 

    $("#ad").click(()=>{
        t=$("input").val();
        if(t.length>0)
        $("ul").append(getItem(t));
    });

    function remove(event){console.log($(event.target).parent().parent().remove())}
});