$(document).ready(function () { //WHEN DOCUMENT IS READY START FUNCTION
	
	//AUTOMATICALLY HIDE ANSWERS
	$('.faq-answer').hide();
	
	//WHEN A FAQ QUESTION IS CLICKED...
    $('.faq-question').click(function () { 
	
        //THE ANSWER TO THE CLICKED QUESTSION IS THE NEXT SIBLING ELEMENT
		
        var answer = $(this).next('.faq-answer'); 

        //ALL FAQ ANSWERS THAT AREN'T THE SELECTED ANSWER SLIDE UP (COLLAPSE)
		
        $('.faq-answer').not(answer).slideUp();  // Slide up (collapse) all answers except the one that is clicked

        //THE SELECTED ANSWER SLIDE DOWN (SHOW)
		
        answer.slideToggle(); 
    });
});
