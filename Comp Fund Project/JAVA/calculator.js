//JQUERY TO ENSURE LOAN TERM IS LESS THAN 30 YEARS
$(document).ready(function () {
	$('#button').click(function(event) {
		//RETRIEVES INPUT VALUE OF LOAN TERM
		const loanTerm= Number($('#loanTerm').val().trim()); 
	
		//CONDITION OF INPUT
		if (loanTerm > 30) {
			alert('The maximum loan term we offer is 30 years. Please enter a valid loan term.');
			event.preventDefault(); //PREVENTS FROM SUBMITTING ANYWAY
			return; //LEAVES FUNCTION
		}
		
		var loanAmount =$('#loanAmount').val().trim();
		var monthlyIncome=$('#monthlyIncome').val().trim();
		
		if (loanAmount == "") {
				alert("Please enter loan amount.");
				return;
		}
		
		if (loanTerm == "") {
				alert("Please enter loan term.");
				return;
		}
		
		if (monthlyIncome == "") {
				alert("Please enter your monthly income.");
				return;
		}
		
		Mortgage();
		
	});
});

function Mortgage() {
    const loanAmount = document.getElementById('loanAmount').value; //CURRENTLY STRINGS
    const loanTerm = document.getElementById('loanTerm').value;  
	const monthlyIncome = document.getElementById('monthlyIncome').value;

	//VALUES FOR FORMULA
	const r = 0.045/12;
	const n = Number(loanTerm) * 12;

    //FORMULA
	const result = ((Number(loanAmount) * Number(r) * ((1+r)**n))/ (((1+r)**n) -1)).toFixed(2);

    //RESULT
    document.getElementById('result').textContent = "Monthly Payment: £" + result;
	 $('#result').addClass('monthly-payment');

	//MAX ELIGIBILE MONTHLY PAYMENT
	const eligibility = Number(monthlyIncome) * 0.3;
	
	//TOTAL PAYMENT
	const totalPayment = Number(loanTerm) * 12 * Number(result);
	
	//TOTAL INTEREST
	const totalInterest = (Number(result) * (12 * Number(loanTerm)))-Number(loanAmount);
	
	//REMAINING INCOME
	const remainingIncome = Number(monthlyIncome) - Number(result);

	//CONDITION FOR LOAN
	let eligibilityMessage;
	if (Number(result) > eligibility) {
		eligibilityMessage = "Loan DENIED: The monthly payment is greater that 30% of your monthly income.";
	} else {
		eligibilityMessage= "Loan ACCEPTED: The monthly payment is less than 30% of your monthly income!";
		eligibilityMessage +=" Your Total Payment: £" + totalPayment.toFixed(2) + ".";
		eligibilityMessage += " Your Total Interest Payment: £" + totalInterest.toFixed(2) + ".";
		eligibilityMessage += " Your Remaining Monthly Income: £" + remainingIncome.toFixed(2) + ".";
	}
	
	//RESULT
	document.getElementById('eligibility').textContent= eligibilityMessage;
	$('#eligibility').addClass('eligibility-message');
	
	//EXTRA INFO
	document.getElementById('totalPayment').textContent= totalPayment;
	document.getElementById('totalInterest').textContent= totalInterest;	
	document.getElementById('remainingIncome').textContent= remainingIncome;

	
}

	