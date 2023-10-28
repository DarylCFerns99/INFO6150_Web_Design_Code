$(document).ready(() => {
    $(".start").click(() => {
        $("ul")
            .animate({
                width: "50%"
            })
            .animate({
                fontSize: "15px"
            })
            .animate({
                borderWidth: "30"
            })
            .addClass("red");
    });

    $(".filter").click(() => {
        if ($("input[value=odd]").is(":checked")) {
            $("ul li").removeClass("highlight");
            $("ul li")
                .filter(index => index%2 === 0)
                .addClass("highlight");
        } else if ($("input[value=even]").is(":checked")) {
            $("ul li").removeClass("highlight");
            $("ul li")
                .filter(index => index%2 !== 0)
                .addClass("highlight");
        }
    });
    
    $(".reset").click(() => {
        $("ul li").removeClass("highlight");
    });
});