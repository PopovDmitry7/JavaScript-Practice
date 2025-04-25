function isValidEmail(email){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if(reg.test(email))
        return true;

    return false;
}

function extractUsername(email){
    //either could use split by @, the final variant using regex
    return email.match(/^([^@]*)@/)[1];
}

console.log(isValidEmail('arnold.teodor@mamamia.com'));
console.log(isValidEmail('arnold.teodor@mamamia'));
console.log(isValidEmail('@mamamia'));
console.log(isValidEmail('popovprotop@gmail.com'));

console.log(extractUsername('popovprotop@gmail.com'));