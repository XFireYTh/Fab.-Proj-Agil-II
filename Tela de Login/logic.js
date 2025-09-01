function testClick(button) {
    button.addEventListener('click', () => {
        alert('Lorem Ipsum dolor sit amet')
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