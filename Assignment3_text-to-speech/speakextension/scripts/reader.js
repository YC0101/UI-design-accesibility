//console.log("Accessibility Rocks!");

$(document).ready(function () {
    //CODE GOES HERE
    var text="";
    $("*:not(body)").hover( function (ev) {
            //EXECUTED WHEN MOUSE ENTERS AN ELEMENT
            $(this).addClass("highlight")
            //speechSynthesis.speak(new SpeechSynthesisUtterance($(this).text()));

            if($(this).is("img")){
                var alttext = $(this).attr("alt")
                var srcofimg = $(this).attr("src")
                //console.log("yes");
                if ($(this).attr('alt')) {
                    //HREF IS NOT BLANK
                    //console.log("alt");
                    text = alttext;
                } else {
                    //HREF IS BLANK
                    console.log("blank");
                    text = srcofimg;
                }
            }
            else{
                text = $(".highlight").text();
            }


            ev.stopPropagation();
        },
        function (ev) {
            //EXECUTED WHEN MOUSE EXITS AN ELEMENT
            $(this).removeClass("highlight")
            $(".highlight").removeClass('highlight')
            //speechSynthesis.cancel();
        }

    );

    document.addEventListener('keydown', function (e) {
        if (e.code == '' || e.code == 'Unidentified' || e.code =='Space'){
            //speak
            speechSynthesis.speak(new SpeechSynthesisUtterance(text));
            e.preventDefault();
        }
        else{
            //stop
            speechSynthesis.cancel();
        }

    });
})