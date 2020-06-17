var movie= $(".movie");
        var counter=$(".likes");
   $("#sort").on("click", function(){
       for (let i=0; i<movie_array.length;i++){
        $(movie[i]).css("order",-$(counter[i]).text());
       } 
   }) 