    let container = document.getElementById('fizzBuzzContainer');

    for (let i = 1; i <= 100; i++) {
        let elemento = document.createElement('div');
        elemento.classList.add( 'quadrato','d-flex','justify-content-center','m-1');

        if (i % 3 == 0 && i % 5 == 0) {
            elemento.textContent = 'FizzBuzz';
            elemento.classList.add('bg-warning');
        } 
        else if (i % 3 == 0) {
            elemento.textContent = 'Fizz';
            elemento.classList.add('bg-primary');
        } 
        else if (i % 5 == 0) {
            elemento.textContent = 'Buzz';
            elemento.classList.add('bg-danger');
        } 
        else {
            elemento.textContent = i;
            elemento.classList.add('bg-success');
        }

        container.append(elemento);
}