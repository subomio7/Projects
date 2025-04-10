$(document).ready(function () { //WHEN DOCUMENT IS READY START FUNCTION
	
	//DESCRIPTION HIDDEN AUTOMATICALLY
	$('.description').hide();
	
	//WHEN IMAGE IS CLICKED FUNCTION STARTS
    $('.image').click(function () { 
	
        //WITHIN THE SIBLING ELEMENT OF IMAGE SELECTED (.collapse), FIND THE DESCRIPTION AND TOGGLE DOWN
		var description = $(this).siblings('.collapse').find('.description');
		
		description.slideToggle();
    });
});
