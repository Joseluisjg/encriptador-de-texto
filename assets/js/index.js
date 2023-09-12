const encryBtn = document.querySelector('.encrypt');
const decryBtn = document.querySelector('.decrypt');
const textArea = document.querySelector('.textarea');
const textResult = document.querySelector('.container-result');
const copyBtn = document.createElement("button");
copyBtn.textContent = 'Copiar';
copyBtn.classList.add('copy');

const resultArea = document.createElement("div");
resultArea.classList.add('result-area');


function encriptar() {
    let result = textArea.value;
    textResult.classList.remove('flex-result');
    textResult.replaceChildren();
    //Aqui va proceso de encriptar el texto
    result = result.replace('a','ai')
        .replace('e','enter')
        .replace('i','imes')
        .replace('o','ober')
        .replace('u','ufat');

    textResult.append(resultArea);
    resultArea.textContent = result;
    textResult.append(copyBtn);

}

function desencriptar(){
    let result = textArea.value;
    textResult.classList.remove('flex-result');
    textResult.replaceChildren();
    //Aqui va proceso de desencriptar el texto
    result = result.replace('ai','a')
        .replace('enter','e')
        .replace('imes','i')
        .replace('ober','o')
        .replace('ufat','u');

    textResult.append(resultArea);
    resultArea.textContent = result;
    textResult.append(copyBtn);
}

function copiar(){
    textArea.value = resultArea.textContent;
}

encryBtn.addEventListener("click",encriptar);
decryBtn.addEventListener("click",desencriptar);
copyBtn.addEventListener("click",copiar);
