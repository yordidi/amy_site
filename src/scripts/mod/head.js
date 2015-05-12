var $ = require("../lib/jquery.js");

function init(){
    var $hd = $("#hd-nav"),
        $sm_menu = $hd.find("div.js-menu"),
        $all_menu = $hd.find("div.js-allmenu");
    
    var $wx_btn = $("#weixin-btn");
    var wx_expand = false;
    var $wx_code = $wx_btn.find(".wx-code");
    $wx_btn.click(function(e){
        e.preventDefault();
        if (!wx_expand) {
            $wx_code.slideDown(function(){
                $wx_btn.addClass("active");
            });
            wx_expand = true;
        } else {
            wx_expand = false;
            $wx_code.slideUp(function(){
                $wx_btn.removeClass("active");
            });
        }
    });
    $wx_btn.mousedown(function(e){
       e.stopPropagation(); 
    });
    $wx_code.mousedown(function(e){
       e.stopPropagation(); 
    });

    $('body').mousedown(function(){
        if (wx_expand) {
            wx_expand = false;
            $wx_code.slideUp(function(){
                $wx_btn.removeClass("active");
            });
        }
    });

    /** 
    $short_menu.click(function(){
        $sm_menu.hide();
        $sm_menu.find("i.mu").removeClass("animated rotateIn");
        $all_menu.find("i.mu").addClass("animated rotateIn");
        $all_menu.show();
    });
    $all_menu.delegate("i.mu","click",function(){
        $all_menu.hide();
        $all_menu.find("i.mu").removeClass("animated rotateIn");
        $sm_menu.show();
        $sm_menu.find("i.mu").addClass("animated rotateIn");
    });
    $hd.delegate(".hi-frd","click",function(){
        $sm_menu.hide();
        $sm_menu.find("i.wm").removeClass("animated rotateIn");
        $all_menu.find("i.wm").addClass("animated rotateIn");
        $all_menu.show();
    });
    $all_menu.delegate("i.wm","click",function(){
        $all_menu.hide();
        $all_menu.find("i.wm").removeClass("animated rotateIn");
        $sm_menu.show();
        $sm_menu.find("i.wm").addClass("animated rotateIn");
    });

    $hd.on("mousedown",function(e){
        e.stopPropagation();
    });
    $('body').on("mousedown.hdhide",function(){
        $all_menu.hide();
        $all_menu.find("i.mu").removeClass("animated rotateIn");
        $sm_menu.show();
        $sm_menu.find("i.mu").addClass("animated rotateIn");
    });
    **/


}
$(function(){
    init();
})
