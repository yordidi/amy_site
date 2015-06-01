var $ = require("../../lib/jquery.js");

$(function(){
   var $pics = $("#pics-box");
   var $li = $pics.find("li");
   var n = 0 , len = $li.length;
   var max_init_count = 4;
   var slide = function(){
       n +=1;
       if (n === len) {
           n = 0;
       }
       var $d =$li.filter(".active").removeClass("active").addClass("prev");
       $li.eq(n).addClass("active").hide().fadeIn({duration : 1000,complete : function(){
           $d.removeClass("prev");
           if (len > max_init_count) {
               var $item = $li.eq(n+max_init_count);
               if ($item[0] && !$item.data("inited")) {
                   $item.data("inited",true);
                   $item.find("img").attr('src',$item.data("src"));
               }
           }
           start();
       }});
   }
   function start(){
       setTimeout(function(){
           slide();
       },5000);
   }
   for (var i = 1, l = Math.min(len,max_init_count); i < l; i++) {
       var $item = $li.eq(i);
       if ($item[0] &&  !$item.data("inited")) {
           $item.data("inited",true);
           $item.find('img').attr("src",$item.data("src"));
       }
   }
   start();
});
