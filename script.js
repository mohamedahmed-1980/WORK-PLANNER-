
 var hour = JSON.parse(moment().hour());
 $("document").ready(function(){

     // cuurent day is displayed 
    var time = moment().format('MMMM Do YYYY');
   $("#time").text(time).css("color","red").css("text-align","center").css("font-size","2em")

   //  dynamically drow the 8 rows in html

   for(let i = 8; i < 17;i++)
   {
       let currentHour ;

       if ( i > 12){
        currentHour = (i - 12) + " PM ";
       }else {
        currentHour = i + " AM ";
       }
    $(".container").append(
        `<div class="row">
        <div class="col-2 text-white text-center p-4 border border-dark rounded-left"  style="padding:4% ;font-size:1.5em"> `+ currentHour + `</div>
        <div class="col-9 bg-dark ">
          <textarea  type= "text" id="discriptinInput" style="width:max;margin-left:0% "></textarea>
        </div>
        <button    class="col-1 bg-red bg-danger text-white saveBtn " click = "save()">SAVE</button>
      </div>`
    );
   }
  
    // looping over the the first column in every row  

   $('.col-2').each(function(i , element ) {
    let scheduleHour = i + 8 ;
    
    if(hour  > scheduleHour ){
        $(element).css("background","red") // past 

       } else if(hour  == scheduleHour ) {
        $(element).css("background","green") // present 


       }else if (hour < scheduleHour){
        $(element).css("background","blue") // future
  
       }
  });

// saving the input in the text area in the local storage 

   $(".saveBtn").on("click", function(){
   var inputText = $("#discriptinInput").val()

        localStorage.setItem("userData", inputText );
   })
   
  var x = localStorage.getItem("userData");        
        var y = $("#discriptinInput").text(x)
       
})







