window.addEventListener('load', () => {
    const numberBtn = document.querySelectorAll('#data-number');
    const operaBtn = document.querySelectorAll('#data-opera');
    const deleteBtn = document.getElementById('data-delete');
    const igualBtn = document.getElementById('data-igual');
    let input = document.querySelector('.display');
    let operaActual = '';
    let operaAnterior = '';
    let resultado = undefined;
    let operacion = '';
    //Eventos!

    numberBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            operaActual = operaActual.toString() + btn.innerText.toString();
            input.value = operaActual;
        })
    });

    operaBtn.forEach(btnOpera => {
        btnOpera.addEventListener('click', () => {
            operacion = btnOpera.innerText;

            operaAnterior = operaActual;
            operaActual = '';
            input.value = '';
        })
    });

    igualBtn.addEventListener('click', () => {
        input.value = '';
        let anterior = Number(operaAnterior);
        let actual = Number(operaActual);
        console.log(operacion)
        if(operacion) {
            switch(operacion) {
                case '+':
                    resultado = anterior + actual;
                    break;
                case '-':
                    resultado = anterior - actual;
                    break;
                case 'x':
                    resultado = anterior * actual;
                    break;
                case '/':
                    resultado = anterior / actual;
                    break;
                default:
                    return;
            }
            operaActual = '';
            operaAnterior = '';
            operacion = '';
            input.value = resultado;
        }else {
            alert('Debe ingresar al menos dos valores y una operacion')
        }
    });

    deleteBtn.addEventListener('click', () => {
        operaActual = '';
        operaAnterior = '';
        operacion = '';
        resultado = undefined;
        input.value = '';
    });
})

