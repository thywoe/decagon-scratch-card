$(document).ready(function(){

     // GET Request
 function getAllCard()
 {
     $.ajax(
       {
          type:'GET',
          url: 'http://localhost:3000/scratch-card',
          success:function(data){
           $("tbody").empty();
            for(var i = 0; i < data.length; i++){
          console.log("data",data);

         $("tbody").append("<tr>" + "<td>"+data[i].card_number+"</td>"+"<td>"+data[i].serial_number+"</td>"+ "<td>"+ data[i].amount+"</td>"+ "<td>"+ data[i].validity+"</td>"+"<td><button id="+data[i].id+" class='readCard'>Read</button></td>"+"<td><button id="+data[i].id+" class='editcard'>Edit</button></td>"+"<td><button id="+data[i].id+" class='deleteCard'>Delete</button></td>"+"</tr>");
        }
          },
          error:function(){
            console.log("error");
          }
       }
     );
 }

 function getCard(id){
    console.log("id",id);
    $.ajax(
      {
         type:'GET',
         url: 'http://localhost:3000/scratch-card/'+id,
         success:function(data){
           $('tbody').empty();
           $('tbody').append("<tr>"+ "<td>"+ data.card_number+ "</td>" + "<td>"+ data.serial_number + "</td>" + "<td>"+ data.amount + "</td>"+ "<td>"+ data.validity + "</td>" + "</tr>");
           console.log("Deleted succesfully");
         },
         error:function(){
            console.log("error");
         }
      }
    );
}

})