$(document).ready(function () {
    //CODE GOES HERE
    var text="";
    var image;
    var zoomnum = 1.0;
    var mag = 1.0;
    let x =0;
    var scrollingInterval;
    var scrollingSpeed = 10;
    var isImg = false;
    var display = false;

    //Zoom in/out and Graphical Zoom in/out
    $(document).keydown(function(e) {
        e.preventDefault();
        if (e.key === "=") {
            zoomnum = zoomnum+0.1;
            document.body.style.zoom = zoomnum;
            console.log("+ " + "zoomnum:"+zoomnum)
        }
        if (e.key === "-") {
            zoomnum = zoomnum-0.1;
            document.body.style.zoom = zoomnum;
            console.log("-"+ "zoomnum:"+zoomnum);
        }

        let dH = $(document).height();
        let wH = $(window).height();
        let dWidth = $(document).width();
        let wWidth = $(window).width();
        let sub = (dWidth*0.1)/2;
        let sub2 = (dH-wH)/2;
        if(e.key === "+") {
            mag = mag +0.1;
            $('body').css('transform', 'scale('+mag.toString()+')');
            $('body').css('position', 'relative').css("transform-origin", "left top");

        }
        else if(e.key === "_"){
            mag = mag - 0.1;
            $('body').css('transform', 'scale('+mag.toString()+')');
            $('body').css('position', 'relative').css("transform-origin", "left top");
        }

        if ((e.key == " " || e.code == 'Unidentified' || e.code =='Space')&&!display){
            $('.refrac').remove();
            if(isImg){
                $('body').append($("<img id=’mydiv’ class='refrac'src='" +image+"'></img>"));
                isImg = false;
            }
            else{
                $('body').append($("<div id=’mydiv’ class='refrac'>"+text+"</div>"));
                isImg = false;
            }
            display=true;
            e.preventDefault();
        }
        else if((e.key == " " || e.code == 'Unidentified' || e.code =='Space')&&display){
            $('.refrac').remove();
            isImg = false;
            display=false;
        }
    });

    //Scrolling
    //Using setInterval is much better than doing scrollLeft+=speed
    //interval make the transformation smooth and gentle
    $(document).on('mousemove', function(m) {
        x = m.clientX;
        const dWidth = $(document).width();
        const wWidth = $(window).width();
        //console.log(x +" "+dWidth+" "+wWidth);
        if(dWidth > wWidth){
            if(x<100){
                //detect how if there is more content things on the left
                console.log("x<100")
                console.log($(document).scrollLeft())
                if($(document).scrollLeft() > 0 && !scrollingInterval){
                    console.log("Scroll left2" + $(document).scrollLeft());
                    scrollingInterval = setInterval(function() {
                        $(document).scrollLeft($(document).scrollLeft() - scrollingSpeed);
                    }, 5);
                    //$(document).scrollLeft($(document).scrollLeft() - 20);
                }
            }
            else if(x>wWidth - 100){
                console.log(x>wWidth-100)
                console.log($(document).scrollLeft())
                //detect if content in the right
                if($(document).scrollLeft() < dWidth-wWidth && !scrollingInterval){
                    scrollingInterval = setInterval(function() {
                        $(document).scrollLeft($(document).scrollLeft() + scrollingSpeed);
                    }, 5);
                    //$(document).scrollLeft($(document).scrollLeft() + 20);
                }
            }
            else{
                clearInterval(scrollingInterval);
                scrollingInterval=null;
            }
        }
    });

    //Refactoring Content
    $("*:not(body)").hover( function (ev) {
            //EXECUTED WHEN MOUSE ENTERS AN ELEMENT
            $(this).addClass("highlight")

            if($(this).is("img")){
                image = $(this).attr('src');
                isImg = true;
            }
            else{
                text = $(".highlight").text();
                isImg = false;
            }
            ev.stopPropagation();
        },
        function (ev) {
            //EXECUTED WHEN MOUSE EXITS AN ELEMENT
            $(this).removeClass("highlight")
            $(".highlight").removeClass('highlight')
            isImg=false;
        }
    );


})