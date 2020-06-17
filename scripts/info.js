$(document).ready(function(){
		let i = 0;
		for(i = 0; i < info.Info.length; i++)
		{
            
        $(".content .col-4:eq("+i+")").append("<p>" + info.Info[i].Image + "</p>");
        $(".content .col-8:eq("+i+")").append("<h2>" + info.Info[i].Title + "</h2>");
		$(".content .col-8:eq("+i+")").append("<p>" + info.Info[i].Description + "</p>");
           
	}
});

