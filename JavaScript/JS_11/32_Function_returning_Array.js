/**
 * @param {string} strCountryCode 
 * @returns {Array}
 */
function getValidPaymentMethods(strCountryCode) {
    let paymentMethods =[];
    console.log('country code is ' + strCountryCode) ;
    
    switch(strCountryCode.trim().toLowerCase()){
        case 'in':
            paymentMethods.push('debit card - VISA','debit card - MASTERCARD','debit card - RUPAY');
            paymentMethods.push('credit card - VISA','credit card - MASTERCARD');
            paymentMethods.push('Google Pay','PayTM','PhonPe');
            paymentMethods.push('Bank UPI');
            paymentMethods.push('cash on delivery');
            break;
        
        case 'ch':
            paymentMethods.push('debit card - VISA','debit card - MASTERCARD');
            paymentMethods.push('credit card - VISA','credit card - MASTERCARD');
            paymentMethods.push('Apple Pay','Google Pay');
            paymentMethods.push('Twint');
            break;

        case 'uk':
            paymentMethods.push('debit card - VISA','debit card - MASTERCARD');
            paymentMethods.push('credit card - VISA','credit card - MASTERCARD');
            paymentMethods.push('Apple Pay','Google Pay','Paypal');
            break;
            
        case 'usa':
            paymentMethods.push('debit card - VISA','debit card - MASTERCARD','debit card - AMEX');
            paymentMethods.push('credit card - VISA','credit card - MASTERCARD');
            paymentMethods.push('Apple Pay','Google Pay','Paypal');
            break;

        case 'au':
            paymentMethods.push('debit card - VISA','debit card - MASTERCARD');
            paymentMethods.push('credit card - VISA','credit card - MASTERCARD');
            paymentMethods.push('Apple Pay','Google Pay','Paypal');
            break;

        default:
            console.log('=====unsupported country code ==========');
            break;
    }
    return paymentMethods;
}


let paymentMethodsinUK = getValidPaymentMethods('UK');
console.log(paymentMethodsinUK);


//Search 

//Search with name
//Search with name & price
//Search with name, color & price
//search with name, color, price & manufacturer