$(document).ready(function() {  
	  jQuery(function(){
			jQuery('ul.menu').superfish({
				delay		: 600,
				animation	: {opacity:'show',height:'show'},
				speed		: 'fast',
				autoArrows	: false,
				dropShadows : false					   	
			});
		});
	
	//accordion begin
	$("#accordion dt").eq(0).addClass("active");
	$("#accordion dd").eq(0).show();

	$("#accordion dt").click(function(){
		$(this).next("#accordion dd").slideToggle("slow")
		.siblings("#accordion dd:visible").slideUp("slow");
		$(this).toggleClass("active");
		$(this).siblings("#accordion dt").removeClass("active");
		return false;
	});
});