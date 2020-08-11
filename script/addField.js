// Procurar o botao
document.querySelector("#add-time")

// Quando clicar no botao
.addEventListener('click', cloneField)

// Execcutar uma acao
function cloneField() {
    // Duplicar os campos. Qual campos??
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // Pegar os campos. Quais campos?
    const fields = newFieldContainer.querySelectorAll('input');

    //para cada campo, limpe 
    fields.forEach(field => {
        //limpa os fields
        field.value = ""
    });

    // colocar na pagina: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}