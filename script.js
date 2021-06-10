let count = 0;

$(".sub").click(function() {
    let age = $(".age").val();
    let candy = $(".candy").val();
    let taste = $(".taste").val();
    $(".resp").append("<p>" + " You are " + age + " years old" + " and you like candy that is " + candy + " and " + taste + ". </p>").show();
    count = count + 1;
    $(".count").text(count);
});