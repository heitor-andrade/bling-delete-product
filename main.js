counter = 1;
data = '13/07/2020 17'

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function buscar() {
    var enter = new Event('keypress');
    enter.wich = 13;
    enter.keyCode = 13;
    // pegar o input
    console.log(enter);
    let inputBar = document.getElementById('pesquisa-mini');
    
    // colocar o código e acrescentar
    inputBar.value = counter;
    
    // dar enter
    inputBar.dispatchEvent(enter);
    console.log('Chegou aqui pela ', counter, ' vez');
    counter++;
}

function searchDeleteButton () {
    // pegar e filtrar a data
    let linha = Array.from(document.querySelectorAll('tbody tr'));
    let linhaExcluida = linha.filter(el => el.children[0].textContent.includes(data));
    const x = []
    console.log(linhaExcluida, linhaExcluida == x, linhaExcluida.length !== 0)
    if(linhaExcluida.length !== 0){
        linhaExcluida = linhaExcluida[0];
        // pegar e clicar no delete
        deleteButton = linhaExcluida.querySelector('.fas.fa-trash-alt');
        deleteButton.click();
        return true
    }
    return false
}    

function accept() {
    buttons = Array.from(document.querySelectorAll('.ui-button-text'));
    buttonYes = (buttons.filter(button => button.textContent == "Sim" ))[0];
    buttonYes.click();
    console.log('é pra ter deletado');
}

function deletePeca() {
    setInterval(buscar, 4000);
    sleep(1000)
    setInterval(searchDeleteButton, 4000);
    sleep(1000)
    setInterval(accept, 4000);
}

