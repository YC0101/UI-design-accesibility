$(document).ready(function () {
    //CODE GOES HERE
    var state = 'none' // horizontal_scanning, vertical_scanning
    var scanRate = 100;

    var x_c = 0;
    var y_c = 0;

    var inputBox;
    var upperCase;
    var shift;
    var keyboardState = false;

    $('body').append('<div id = "x" class = "linex">');
    $('body').append('<div id = "y" class = "liney">');

    setInterval(function() {
        paint();
    }, 100);

    function paint() {
        if(state == 'horizontal_scanning') {
            document.getElementById("x").style.width = (x_c + "px");
            x_c = x_c + 1;
            // update position of your horizontal scan bar
        } else if(state == 'vertical_scanning') {
            document.getElementById("y").style.height = (y_c + "px");
            y_c = y_c + 1;
            // update position of your vertical scan bar
        } else {
            // do nothing
        }
    }
    $(document).keydown(function(e) {
        if(e.key == ' ') {
            e.preventDefault();
            if(state == 'horizontal_scanning') {
                state = 'vertical_scanning'
            } else if(state == 'vertical_scanning') {
                document.getElementById("x").style.width = ("0px");
                document.getElementById("y").style.height = ("0px");
                var click = document.elementFromPoint(x_c,y_c);
                simulateClick(click);

                //check textbox
                if($(click).is("input[type='text'], textarea")){
                    inputBox = click;
                }
                state = 'none'
                y_c = 0;
                x_c = 0;
            } else {
                state = 'horizontal_scanning'
            }

            //check keyboard
            if(keyboardState == true){
                useKeyboard(inputBox, click);
            }
            // update state here, given current state
            e.stopPropagation();
            return false;
        }
    });

    //var elementtoclick = document.elementFromPoint(x_c, y_c);
    //simulateClick(elementtoclick);
    function simulateClick(element) {
        if (!element) return;
        var dispatchEvent = function (elt, name) {
            var clickEvent = document.createEvent('MouseEvents');
            clickEvent.initEvent(name, true, true);
            elt.dispatchEvent(clickEvent);
        };
        dispatchEvent(element, 'mouseover');
        dispatchEvent(element, 'mousedown');
        dispatchEvent(element, 'click');
        dispatchEvent(element, 'mouseup');
    };

    //scroll button
    var buttonup = $('<button type = "button" id = "up" class = "up">&and;</button>');
    var buttondown = $('<button type = "button" id = "down" class = "down">&or;</button>');

    var scrollpercent = document.body.scrollHeight/10;

    buttonup.click(function(){
        $('html,body').animate({
            scrollTop: $(document).scrollTop() - scrollpercent},1000);
    });
    buttondown.click(function(){
        $('html,body').animate({
            scrollTop: $(document).scrollTop() + scrollpercent},1000);
    });
    $("body").append(buttonup);
    $("body").append(buttondown);

    //add keyboard

    var keyboardbtn = $('<button type = "button" id = "keyboardbtn" class = "keyboardbtn">keyboard</button>');
    $('body').append('<div id = "spaceForKeyboard" class = "spaceForKeyboard"></div>');

    $.get("https://sarahmorrisonsmith.com/accessibility/keyboard.html", function (data) {
        $("body").append(data);
        //Hidding the keyboard initially
        $('.keyboard').hide();

        $('.key').on("mousedown", function (e) {
            e.preventDefault();
        });
        $('.keyboard').on("mousedown", function (e) {
            e.preventDefault();
        });

        $('.key').on("click", function (e) {
            e.preventDefault();

            //inputBox =
            if(inputBox == null){
                alert("No Text Area selected!")
            }
            if(inputBox != null){
                let innerText = $(this).text().replace(/[\s\n]+/g, "");

                if (innerText === "CapsLock") {
                    upperCase = !upperCase;
                    return;
                }

                if(innerText === "Shift") {
                    shift = true;
                }

                if (!upperCase && !shift) {
                    innerText = innerText.toLowerCase();
                }


                console.log(innerText);
                switch (innerText) {
                    case "backspace":
                        $(inputBox).val($(inputBox).val().slice(0, $(inputBox).val().length - 1));
                        break;
                    case "enter":
                        $(inputBox).val($(inputBox).val() + "\n");
                        break;
                    case "":
                        $(inputBox).val($(inputBox).val() + " ");
                        break;
                    case "tab":
                        $(inputBox).val($(inputBox).val() + "    ");
                        break;
                    case "Shift":
                        shift = true;
                        break;
                    case "<,":
                        if(shift){
                            $(inputBox).val($(inputBox).val() + innerText.charAt(0));
                            shift = false;
                        }
                        else{
                            $(inputBox).val($(inputBox).val() + innerText.charAt(1));
                        }
                        break;
                    case ">.":
                        if(shift){
                            $(inputBox).val($(inputBox).val() + innerText.charAt(0));
                            shift = false;
                        }
                        else{
                            $(inputBox).val($(inputBox).val() + innerText.charAt(1));
                        }
                        break;
                    case "?/":
                        if(shift){
                            $(inputBox).val($(inputBox).val() + innerText.charAt(0));
                            shift = false;
                        }
                        else{
                            $(inputBox).val($(inputBox).val() + innerText.charAt(1));
                        }
                        break;
                    case ":;":
                        if(shift){
                            $(inputBox).val($(inputBox).val() + innerText.charAt(0));
                            shift = false;
                        }
                        else{
                            $(inputBox).val($(inputBox).val() + innerText.charAt(1));
                        }
                        break;
                    case "\"\'":
                        if(shift){
                            $(inputBox).val($(inputBox).val() + innerText.charAt(0));
                            shift = false;
                        }
                        else{
                            $(inputBox).val($(inputBox).val() + innerText.charAt(1));
                        }
                        break;
                    case "{[":
                        if(shift){
                            $(inputBox).val($(inputBox).val() + innerText.charAt(0));
                            shift = false;
                        }
                        else{
                            $(inputBox).val($(inputBox).val() + innerText.charAt(1));
                        }
                        break;
                    case "}]":
                        if(shift){
                            $(inputBox).val($(inputBox).val() + innerText.charAt(0));
                            shift = false;
                        }
                        else{
                            $(inputBox).val($(inputBox).val() + innerText.charAt(1));
                        }
                        break;
                    case "|\\":
                        if(shift){
                            $(inputBox).val($(inputBox).val() + innerText.charAt(0));
                            shift = false;
                        }
                        else{
                            $(inputBox).val($(inputBox).val() + innerText.charAt(1));
                        }
                        break;
                    case "_-":
                        if(shift){
                            $(inputBox).val($(inputBox).val() + innerText.charAt(0));
                            shift = false;
                        }
                        else{
                            $(inputBox).val($(inputBox).val() + innerText.charAt(1));
                        }
                        break;
                    case "+=":
                        if(shift){
                            $(inputBox).val($(inputBox).val() + innerText.charAt(0));
                            shift = false;
                        }
                        else{
                            $(inputBox).val($(inputBox).val() + innerText.charAt(1));
                        }
                        break;
                    case "!1":
                        if(shift){
                            $(inputBox).val($(inputBox).val() + innerText.charAt(0));
                            shift = false;
                        }
                        else{
                            $(inputBox).val($(inputBox).val() + innerText.charAt(1));
                        }
                        break;
                    case "@2":
                        if(shift){
                            $(inputBox).val($(inputBox).val() + innerText.charAt(0));
                            shift = false;
                        }
                        else{
                            $(inputBox).val($(inputBox).val() + innerText.charAt(1));
                        }
                        break;
                    case "#3":
                        if(shift){
                            $(inputBox).val($(inputBox).val() + innerText.charAt(0));
                            shift = false;
                        }
                        else{
                            $(inputBox).val($(inputBox).val() + innerText.charAt(1));
                        }
                        break;
                    case "$4":
                        if(shift){
                            $(inputBox).val($(inputBox).val() + innerText.charAt(0));
                            shift = false;
                        }
                        else{
                            $(inputBox).val($(inputBox).val() + innerText.charAt(1));
                        }
                        break;
                    case "%5":
                        if(shift){
                            $(inputBox).val($(inputBox).val() + innerText.charAt(0));
                            shift = false;
                        }
                        else{
                            $(inputBox).val($(inputBox).val() + innerText.charAt(1));
                        }
                        break;
                    case "^6":
                        if(shift){
                            $(inputBox).val($(inputBox).val() + innerText.charAt(0));
                            shift = false;
                        }
                        else{
                            $(inputBox).val($(inputBox).val() + innerText.charAt(1));
                        }
                        break;
                    case "&7":
                        if(shift){
                            $(inputBox).val($(inputBox).val() + innerText.charAt(0));
                            shift = false;
                        }
                        else{
                            $(inputBox).val($(inputBox).val() + innerText.charAt(1));
                        }
                        break;
                    case "*8":
                        if(shift){
                            $(inputBox).val($(inputBox).val() + innerText.charAt(0));
                            shift = false;
                        }
                        else{
                            $(inputBox).val($(inputBox).val() + innerText.charAt(1));
                        }
                        break;
                    case "(9":
                        if(shift){
                            $(inputBox).val($(inputBox).val() + innerText.charAt(0));
                            shift = false;
                        }
                        else{
                            $(inputBox).val($(inputBox).val() + innerText.charAt(1));
                        }
                        break;
                    case ")0":
                        if(shift){
                            $(inputBox).val($(inputBox).val() + innerText.charAt(0));
                            shift = false;
                        }
                        else{
                            $(inputBox).val($(inputBox).val() + innerText.charAt(1));
                        }
                        break;
                    case "~`":
                        if(shift){
                            $(inputBox).val($(inputBox).val() + innerText.charAt(0));
                            shift = false;
                        }
                        else{
                            $(inputBox).val($(inputBox).val() + innerText.charAt(1));
                        }
                        break;
                    default:
                        $(inputBox).val($(inputBox).val() + innerText);
                        shift = false;
                }
            }

        });
    });

    keyboardbtn.mousedown(function(e){
        e.preventDefault();
    });

    keyboardbtn.click(function(e){
        e.preventDefault();
        keyboardState = !keyboardState;

        if (keyboardState) {
            $('.keyboard').show();
        } else {
            $('.keyboard').hide();
        }
    });

    $('body').append(keyboardbtn);



    function useKeyboard(inputBox,element){
        var input = $('element').text();
        input = $.trim(input);
        console.log(input);

        if(input.length ==1){
            if(upperCase || shift){
                $(inputBox).val($(inputBox).val()+input);
                shift = false;
            }
            else{
                input = input.toLowerCase();
                $(inputBox).val($(inputBox).val() + input);
            }
        }

        if(input == "CapsLock"){
            if(upperCase){
                upperCase = false;
            }
            else{
                upperCase = true;
            }
        }

        //



    }
})