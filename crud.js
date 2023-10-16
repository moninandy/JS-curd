var row= null;
function Submit(){
    var dataEntered=retrieveData();


    console.log(dataEntered);
    var readData= readingDataStorage(dataEntered);
   if(dataEntered == false){
    msg.innerHTML=`<h3 style="color:white";>please Enter Details</h3>`;
   }else{

    if(row == null){
        insert(readData);
        msg.innerHTML="data inserted";
    }
    else{
        update();
        msg.innerHTML=" Data Updated!";
    }
}
   document.getElementById("form").reset();  
}
function retrieveData(){

    var rollno= document.getElementById("rollno").value;
    var name =document.getElementById("name").value;
    var course=document.getElementById("course").value;
    var mark=document.getElementById("mark").value;

    var arr=[rollno,name,course,mark];
    if(arr.includes("")){
        return false;
    }
    else{

    return arr;
    }

}

function readingDataStorage(dataEntered){
    var r1=localStorage.setItem("rollno",dataEntered[0]);
    var n1=localStorage.setItem("name",dataEntered[1]);
    var c1=localStorage.setItem("course",dataEntered[2]);
    var m1=localStorage.setItem("mark",dataEntered[3]);


    var r2=localStorage.getItem("rollno",r1);
    var n2=localStorage.getItem("name",n1);
    var c2=localStorage.getItem("course",c1);
    var m2=localStorage.getItem("mark",m1);

    var arr=[r2,n2,c2,m2];
    return arr;


}
function insert(readData){
    var row=table.insertRow();
    row.insertCell(0).innerHTML=readData[0];
    row.insertCell(1).innerHTML=readData[1];
    row.insertCell(2).innerHTML=readData[2];
    row.insertCell(3).innerHTML=readData[3];
    row.insertCell(4).innerHTML=`<button class="btn btn-info" onClick="onEdit(this)"> Edit</button> <button class="btn btn-danger"onClick="remove(this)">Delete</button>`;

}

function onEdit(td){
     row=td.parentElement.parentElement;
    document.getElementById('rollno').value=row.cells[0].innerHTML;
    document.getElementById('name').value=row.cells[1].innerHTML;
    document.getElementById('course').value=row.cells[2].innerHTML;
    document.getElementById('mark').value=row.cells[3].innerHTML;

}
function update(td){
    row.cells[0].innerHTML=document.getElementById("rollno").value;
    row.cells[1].innerHTML=document.getElementById("name").value;
row.cells[2].innerHTML=document.getElementById("course").value;
row.cells[3].innerHtml=document.getElementById("mark").value;
row =null;
}

function remove(td){
    var ans=confirm("are you sure want to delete this");
    if(ans == true){
    row=td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
    }
}

// var find=document.getElementById("search").value;
// var but=document.getElementById("sb").value;

// function searchfun(){
//     if()
// }
// but.addEventListener

 const search=() =>{
 let filter=document.getElementById('search').value.toUpperCase();

 let mytable=document.getElementById('table');
 let tr=mytable.getElementsByTagName('tr');
 //console.log(tr);
 for( var i=0;i<tr.length;i++){
    let td= tr[i].getElementsByTagName('td')[0];
    //console.log(td);
     if(td){
         let textValue =td.textContent || td.innerHTML;
         if(textValue.toUpperCase().indexOf(filter)> -1){
             tr[i].style.display= "";

         }
        else{
              tr[i].style.display= "none";
          }  

     }
 }
 }
