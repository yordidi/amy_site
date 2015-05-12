require("../mod/head.js");
require("./index/pic.js");
var $ = require("../lib/jquery.js");

$(function(){
   var $win = $(window);
   var $prd_sw = $("#prd-sw");
   var $intros = $("#prd_intros")
   var $prd = $("li.prd-dt",$intros);
   var t ;
   var $lis = $prd_sw.find("li.prd-ico").mouseenter(function(e){
        e.stopPropagation();
        if ($(this).hasClass("selected")) {
            if ($intros.is(":visible") && false) {
                $intros.slideUp(function(){
                    $lis.removeClass("selected");
                });    
            }
            return;
        }
        if (t) {
            clearTimeout(t);
            t = null;
        }
        var  $d = $(this);
        t = setTimeout(function(){
            $lis.removeClass("selected");
            var index = $d.addClass("selected").index();
            $prd.hide().eq(index).fadeIn(800);
            $intros[0].className = "intros intro_"+index; 
        },300);
    
        
        if ($intros.is(":hidden")) {
            var scl_top = $win.scrollTop();
            $intros.slideDown({duration : 500,step : function(dis){
                if (dis && dis <= 300 ) {
                    $win.scrollTop(scl_top + dis);        
                }
            }});    
        }
   });
   $intros.click(function(e){
        e.stopPropagation(); 
   });
   /**
   $('body').on("click.hideintro",function(e){
       if ($intros.is(":visible")) {
            $intros.slideUp(function(){
                $lis.removeClass("selected");
            });    
       }
   });
   **/

   var MB_TEXT = [
       {text :["美丽服务诚意精选，AMILY专属礼宾","只为最好的你"],title: "AMILY-妳的专属美丽管家" },
       {text : ["完美的O2O体验,美丽达人亲身体验报告",
"轻触手机,完成华丽变身"
],title: "几步成就你的美荔"},
       {text :["丰富的专题推荐,迅速找到你的喜爱 ","倾心打造AMILY专属美丽礼遇,让你找到被爱的感觉"],title: "换一种方式爱美"}
   ];

   var cur_ind = 0 , max_len = MB_TEXT.length;
   var $mb_word = $("#mb-word-box").delegate("a.l-arrow","click",function(e){
       e.preventDefault();
       if (cur_ind <= 0) {
           cur_ind = max_len-1;
       } else {
           cur_ind -= 1;
       }
       showWord(cur_ind);
   }).delegate("a.r-arrow","click",function(e){
       e.preventDefault();
       if (cur_ind >= max_len-1) {
           cur_ind = 0;
       } else {
           cur_ind += 1; 
       }
       showWord(cur_ind)
   });

   var $mb_tit = $mb_word.find(".tit-hd") , $mb_ct = $mb_word.find(".inf-p");

   function showWord(cur_ind){
       var obj = MB_TEXT[cur_ind];
       $mb_tit.text(obj.title);
       $mb_ct.html((function(data){
           var html = [];
           for (var i = 0, l = data.length; i < l; i++) {
               html.push('<p class="inf" >',data[i],'</p>');
           }
           return html.join("");
       })(obj.text));
   }

   



});
