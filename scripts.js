document.getElementById('fone').addEventListener('input', function (e) {
    let input = e.target.value;
    

    input = input.replace(/\D/g, '');
    
    console.log(input);
    if (input.length <= 10) {
        input = input.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else {
        input = input.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    }
    console.log(input);
    console.log(e.target.value = input);
    e.target.value = input;
});