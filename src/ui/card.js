$(document).ready(function(){
    $('#generate').click(function(){
        $('.card').show().siblings().hide();
    });

    $('#landing').click(function(){
        $('.home').show().siblings().hide();
    });

    $('.card-btn').click(addCard)

    $(".read").click(getAllCard);

    $("tbody").on("click",".deleteCard",null,function(){
        var id = $(this).attr("id");
         deleteCard(id);
      });
      $("tbody").on("click",".editCard",null,function(){
        var id = $(this).attr("id");
         editCard(id);
      });

      $("tbody").on("click",".readCard",null,function(){
        var id = $(this).attr("id");
         getCard(id);
      });


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

function addCard()
 {   //generate card numbers 16 digits
     let numbers = [1,2,3,4,5,6,7,8,9,1,3,6,2,5,7];
    let randNum = '';
    for(let i = 0;i <= numbers.length;i++){
        randNum += Math.floor(Math.random() * 10);
    }

    //generate serial numbers 20 digits
     let serial = [...numbers,1,2,4,6,7];
     let serialNum = '';
     for(let i = 0;i <= serial.length;i++){
        serialNum += Math.floor(Math.random() * 10);
    }

     var data = new Object();
     data.card_number = randNum;
     data.serial_number = serialNum;
     data.amount = $("select.amount").children("option:selected").val();;
     data.validity = new Date(+(new Date()) - Math.floor(Math.random()*10000000000));

     $.ajax(
       {
          type:'POST',
          url: 'http://localhost:3000/scratch-card',
          data: JSON.stringify(data),
          contentType:'application/json',
          success:function(data){
            getCard(data.id);
            console.log("added succesfully");
          },
          error:function(){
             console.log("error");
          }
       }
     );
 }

 // Delete Request
function deleteCard(id){
    console.log("id",id);
    $.ajax(
      {
         type:'DELETE',
         url: 'http://localhost:3000/scratch-card/'+id,
         success:function(data){
           getAllCard();
           console.log("Deleted succesfully");
         },
         error:function(){
            console.log("error");
         }
      }
    );
}

// PUT Request
function editCard()
{
   var data = new Object();
  
   $.ajax(
     {
        type:'PUT',
        url: 'http://localhost:3000/scratch-card/'+data.id,
        data: JSON.stringify(data),
        contentType:'application/json',
        success:function(data){
          getAllCard();
          console.log("Updated succesfully");
        },
        error:function(){
           console.log("error");
        }
     }
   );
 }
})