$("document").on("click", function (event){
    $.ajax("/api/burgers", {
        type: "GET",
        data: "burgers"
    }).then(
        function(){
            location.reload();
        }
    )
});