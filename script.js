let articleList = ["ARTICLE 1", "ARTICLE 2", "ARTICLE 3", "ARTICLE 4", "ARTICLE 5", "ARTICLE 6", "ARTICLE 7", "ARTICLE 8"]
var htmlText = ""
for (i = 0; i < articleList.length; i++) {
    let article = articleList[i];
    htmlText += "<div class='article-list-item'>" + article + "</div>";
}
$(".article-list").html(htmlText);

$("header").velocity("fadeIn", function () {
    $(".arrow").velocity(
        { translateY: "10px" },
        { duration: 800, loop: true }
    );
});
$(".arrow").click(function () {
    $(".article-list").velocity({ opacity: 0.8 }, function () {
        $(this)
            .velocity("scroll", 600)
            .velocity({ opacity: 1 });
    });
});