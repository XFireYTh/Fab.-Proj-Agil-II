function testClick(button) {
    button.addEventListener('click', () => {
        alert('Lorem Ipsum dolor sit amet');
    });
}
function testInner(camp, submit) {
    n = camp.innerHtml;
    submit.addEventListener('click', () => {

        if (n == "") {

            alert('Campo Vazio');

        } else {

            alert('Campo Preenchido');
            
        }

    });

}

function testValue(campId, testButton = '', divOfElementId) {
    if (testButton != '') {

        n = document.getElementById(campId).value;
        let bt = document.getElementById(testButton);
        bt.addEventListener('click', () => {
            if (n == "") {
                console.log("Campo Vazio");
            } else if (n != "") {
                console.log('Campo Preenchido');
            } else {
                console.log('Campo não detectado');
            }
        });
        
    } else {

        const e = document.createElement('button');
        const a = document.getElementById(divOfElementId);
        a.appendChild(e);
        e.innerHTML = 'Teste';

        a.addEventListener('click', () => {
            if (n == null) {
                console.log("Campo Vazio");
            } else if (n != null) {
                console.log('Campo Preenchido');
            } else {
                console.log('Campo não detectado');
            }
        });
    }
}

testValue('email', 'locate', 'btcont');