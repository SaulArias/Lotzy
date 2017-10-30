$(document).ready(function() {
	w1=400;
   	SetWidth();
   	function SetWidth(){
		new_w=$(window).width();
	}
	w=new_w;
	k=-1;
	function setBg(pos){
		$('.bg_slider').css({backgroundPosition:pos});	
	}
		now=~~((w-w1)/2)-w1;
		pos=now+'px 95px';
		setBg(pos);
	
	setInterval(SetNew,600);
	function SetNew(){
		new_w=$(window).width();
		now=now-(w-new_w)/2;
		pos=now+'px 95px';
		setBg(pos);
		w=new_w;
	}
	
	jQuery(function(){
		jQuery('ul.menu').superfish({
			delay		: 600,
			animation	: {opacity:'show'},
			speed		: 'normal',
			autoArrows	: false,
			dropShadows : false					   	
		});
	});
 });
$(window).load(function() {
   $('#slider').nivoSlider({
        effect:'fade', //Specify sets like: 'fold,fade,sliceDown, sliceDownLeft, sliceUp, sliceUpLeft, sliceUpDown, sliceUpDownLeft' 
        slices:1,
        animSpeed:300,
        pauseTime:7000,
        startSlide:0, //Set starting Slide (0 index)
        directionNav:false, //Next & Prev
        directionNavHide:false, //Only show on hover
        controlNav:true, //1,2,3...
        controlNavThumbs:false, //Use thumbnails for Control Nav
        controlNavThumbsFromRel:false, //Use image rel for thumbs
        controlNavThumbsSearch: '.jpg', //Replace this with...
        controlNavThumbsReplace: '_thumb.jpg', //...this in thumb Image src
        keyboardNav:true, //Use left & right arrows
        pauseOnHover:false, //Stop animation while hovering
        manualAdvance:false, //Force manual transitions
        captionOpacity:1, //Universal caption opacity
        beforeChange: function(){},
        afterChange: function(){},
        slideshowEnd: function(){} //Triggers after all slides have been shown
    });
});