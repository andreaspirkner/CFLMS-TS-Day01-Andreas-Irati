var info_arr = JSON.parse(info);
for (var index in info_arr) {
    if (index == 0) {
        document.getElementById("v-pills-tab").innerHTML +=
            "<a class=\"nav-link active\" id=\"v-pills-" + index + "-tab\" data-toggle=\"pill\" href=\"#v-pills-" + index + "\" role=\"tab\" aria-controls=\"v-pills-" + index + "\" aria-selected=\"true\">\n\t\t" + info_arr[index].Title + "\n\t</a>";
        document.getElementById("v-pills-tabContent").innerHTML +=
            "<div class=\"content tab-pane fade show active\" id=\"v-pills-" + index + "\" role=\"tabpanel\" aria-labelledby=\"v-pills-" + index + "-tab\"> \n\t\t<div class=\"row no-gutters\"> \n\t\t\t<div class=\"col-4\">\n\t\t\t\t<p> " + info_arr[index].Image + "</p>\n\t\t\t</div>\n\t\t\t<div class=\"col-8\">\n\t\t\t\t<h2> " + info_arr[index].Title + "</h2>\n\t\t\t\t<p>" + info_arr[index].Description + "</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>";
    }
    else {
        document.getElementById("v-pills-tab").innerHTML +=
            "<a class=\"nav-link\" id=\"v-pills-" + index + "-tab\" data-toggle=\"pill\" href=\"#v-pills-" + index + "\" role=\"tab\" aria-controls=\"v-pills-" + index + "\" aria-selected=\"true\">\n\t\t\t" + info_arr[index].Title + "\n\t</a>";
        document.getElementById("v-pills-tabContent").innerHTML +=
            "<div class=\"content tab-pane fade show\" id=\"v-pills-" + index + "\" role=\"tabpanel\" aria-labelledby=\"v-pills-" + index + "-tab\"> \n\t\t<div class=\"row no-gutters\"> \n\t\t\t<div class=\"col-4\">\n\t\t\t\t<p> " + info_arr[index].Image + "</p>\n\t\t\t</div>\n\t\t\t<div class=\"col-8\">\n\t\t\t\t<h2> " + info_arr[index].Title + "</h2>\n\t\t\t\t<p>" + info_arr[index].Description + "</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>";
    }
}
