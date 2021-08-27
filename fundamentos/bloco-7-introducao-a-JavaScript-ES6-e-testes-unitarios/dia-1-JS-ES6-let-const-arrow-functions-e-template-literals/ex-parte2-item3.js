// 3. Crie uma página que contenha:
//  * Um botão ao qual será associado um event listener ;
//  * Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
//  * Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

window.onload = () => {
  let num = 0;
  const button = document.getElementById('btn');
  button.addEventListener('click', () => {
    const paragraph = document.getElementById('text');
    num += 1;
    paragraph.innerText = `${num} cliques no botão!`;
  });
}
