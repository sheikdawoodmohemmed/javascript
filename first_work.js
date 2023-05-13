function sample(){
    var user=document.getElementById("usr").value;
    var user1=document.getElementById("usr1").value;
    var user2=document.getElementById("usr2").value;
    var user3=document.getElementById("usr3").value;

    var tbl=document.getElementById("tblid");

    tbl.innerHTML="<tr><td> Name:</td><td>"+user+"</td></tr> <tr><td> AGE:</td><td>"+user1+"</td></tr> <tr><td> DOB:</td><td>"+user2+"</td></tr> <tr><td> father name:</td><td>"+user3+"</td></tr>"

}

// var trin=10;
// var bus=10;
// document.write("trai-time"+(trin==10 || bus==0));
