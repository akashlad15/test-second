jQuery(document).ready(function(){
"use-strict";
$('#slider_scaresel_id').carouFredSel({
    responsive:true,
    width:'100',
    circular:true,
    scroll:{
        item:1,
        duration:500,
        pauseOnHover:true   
    },
    auto:true,
    item:
    {
        visible:{
             min:1,
             max:1
        },

        height:"variable"
    },
    pagination:{
        container:"slider_caresel",
        pageAnchorBuilder:false
    }
});
$(window).scroll(function(){
    var top=$(window).scrollTop();
    if(top>=60){
    $("header").addClass('secondry');
    }
    else if($("header").hasClass('secondry')){
        $("header").removeClass('secondry')
    }

})
});