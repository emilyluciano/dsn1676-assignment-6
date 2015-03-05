var $btnShowHide = $('.btn-show-hide');
var $box =$('.box');

var $btnMove =$('.btn-move');
var $diamond =$('.diamond');

var $btnCollapseExpand =$('.btn-collapse-expand');
var $panel =$('.panel');

var $btnBouncein =$('.btn-bounce');
var $circle =$('.circle');

var $btnAppend =$('.btn-append');
var $list =$('.list');


$btnShowHide.on('click', function () {
    $box.toggleClass('js-show-hide');
});

$btnMove.on('click', function () {
 $diamond.toggleClass('js-move');
});

$btnCollapseExpand.on('click', function () {
 $panel.toggleClass('js-collapse-expand');
});
                
$btnBouncein.on('click', function () {
 $circle.addClass('js-bounce-in');
});

$circle.on('webkitAnimationEnd animationend', function () {
    $circle.removeClass('js-bounce-in');
});

$btnAppend.on('click', function () {
    var $li = $('<li>').html('NewList');
    $list.prepend($li);
    $li.toggleClass('js-li');
});