$(document).ready(function () {
    $("a.scrollto").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });


});

var _int;
var _wave;

var _button = document.getElementsByClassName('try_button')[0];
_button.onmouseenter = function (e) {

    var x = e.pageX;
    var y = e.pageY;
    var parTop = _button.offsetTop,
        parLeft = _button.offsetLeft,
        coordX = y - parTop,
        coordY = x - parLeft;

    console.log(coordX, coordY);

    _wave = document.createElement('span');
    _wave.setAttribute('class', 'wave');
    _wave.style.top = coordX + "px";
    _wave.style.left = coordY + "px";
    _wave.style.width = 0;
    _wave.style.height = 0;
    setTimeout(function () {
        _wave.classList.add('fin_size');
    }, 5)


    _button.appendChild(_wave);
};


_button.onmouseleave = function (e) {
    var x = e.pageX;
    var y = e.pageY;
    var parTop = _button.offsetTop,
        parLeft = _button.offsetLeft,
        coordX = y - parTop,
        coordY = x - parLeft;
    _wave.style.top = coordX + "px";
    _wave.style.left = coordY + "px";
    _wave.classList.remove('fin_size');
    setTimeout(function () {
        _button.getElementsByTagName('span')[1].remove();
    }, 10)

};

$('.my-element').paroller();

// _int = setInterval(function () {
//     _brushSize += 10;
//     // console.log(_brushSize);
//     var _brush = document.createElement('div');
//     _brush.setAttribute('class', 'brush');
//     var x = e.pageX,
//         y = e.pageY;
//     _brush.style.top = (y - (_brushSize / 2)) + "px";
//     _brush.style.left = ((x - 100) - (_brushSize / 2)) + "px";
//     _brush.style.height = _brushSize + "px";
//     _brush.style.width = _brushSize + "px";
//     _brush.style.backgroundColor = selected_color;
//
//     _body.appendChild(_brush);
//
// }, 100)
