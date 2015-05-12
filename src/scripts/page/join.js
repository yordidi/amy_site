require("../mod/head.js");
var $ = require("../lib/jquery.js");

$(function(){
    var $nav = $("#jobs-nav");
    var $dt = $("#jobs-dt");
    var $dts = $dt.children();
    var $navs = $nav.find("li");

    $navs.click(function(e){
        e.preventDefault();
        var index = $(this).index();
        $navs.removeClass("selected");
        $(this).addClass("selected");
        $dts.hide().eq(index).show();
    })
});
