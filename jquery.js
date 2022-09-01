//Create a button , on click of which you should be able to hide a paragraph text, 
$(`button`).click(function (){
    $("p").toggle();
    $(".he").hide();
    $("#spann").toggle();
  
})

//Create an ajax call, by using this api "https://jsonplaceholder.typicode.com/todos/12" and print the title as the heading of the page

$(`button`).click(function(){
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/todos/12",
        type:"GET",
        success:function(data){
            console.log(data);
            document.getElementsByTagName("p")[2].innerText=data.title;

        }
    })
})