## Exercício ##

PS: Esse são os arquivos de nome index.html

1. Crie uma função que mude o texto na tag 'p' para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

3. Crie uma função que mude a cor do quadrado vermelho para branco.

4. Crie uma função que corrija o texto da tag 'h1'.

5. Crie uma função que modifique todo o texto da tag 'p' para maiúsculo.

6. Crie uma função que exiba o conteúdo de todas as tags 'p' no console.

## Exercícios do conteúdo ##

#### Parte II - Qual seletor usar? ####

PS: Esse são os arquivos de nome conteudo-pt2a e 2b

```javascript
<!DOCTYPE html>
<html>
  <body>
    <header>
      <h2 id="page-title">Título</h2>
      <p id="paragraph">Dê uma cor para este parágrafo!</p>
      <h4 id="subtitle">Subtítulo</h4>
      <p id="second-paragraph">Segundo parágrafo!</p>
    </header>
    <script>
      const paragraph = document.getElementById("paragraph");
      paragraph.style.color = "red";
    </script>
  </body>
</html>
```

1. Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.

2. Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.

3. Por fim, recupere o subtítulo e altere-o também.

4. Adicione uma classe igual para os dois parágrafos.

5. Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName ;

6. Altere algum estilo do primeiro deles.

7. Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName .

#### Parte III - Qual seletor usar? ####

PS: Esse são os arquivos de nome conteudo-pt3

Antes de iniciar, crie um arquivo HTML e um CSS na pasta exercises/5_1 e copie os códigos abaixo:

```javascript
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Administrador do Tempo</title>
  </head>
  <body id="container">
    <header id="header-container">
      <h1>Administrador do Tempo da Trybe</h1>
    </header>

    <section class="emergency-tasks">
      <div>
        <h3>Urgente e Importante</h3>
      </div>
      <div>
        <h3>Urgente e Não-Importante</h3>
      </div>
    </section>

    <section class="no-emergency-tasks">
      <div>
        <h3>Não-Urgente e Importante</h3>
      </div>
      <div>
        <h3>Não-Urgente e Não-Importante</h3>
      </div>
    </section>

    <footer id="footer-container">
      <div>&copy; Trybe</div>
    </footer>
    <script src="script.js"></script>
  </body>
</html>
```
```css
* {
  margin: 0;
}

#container {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
}

#header-container {
  color: white;
  padding: 20px;
}

.emergency-tasks {
  display: inline-block;
  height: 400px;
  margin: 56px 0;
  width: 400px;
}

.emergency-tasks div {
  height: 198px;
}
.emergency-tasks h3 {
  color: white;
  margin-top: 10px;
  padding: 10px;
}

.no-emergency-tasks {
  display: inline-block;
  height: 400px;
  width: 400px;
}

.no-emergency-tasks div {
  height: 198px;
}

.no-emergency-tasks h3 {
  color: white;
  margin-top: 10px;
  padding: 10px;
}

#footer-container {
  color: white;
  font-weight: 700;
  padding: 15px;
  text-align: center;
}
```

1. Vamos consolidar a manipulação dos elementos HTML , colocando a cor do Administrador de Tempo da Trybe como na imagem abaixo usando apenas o JavaScript!

2. Crie um arquivo JavaScript com o nome de "script.js" na pasta exercises/5_1 e coloque seus conhecimentos de getElementBy e querySelector em prática.

3. Crie também um arquivo CSS e copie o código abaixo para adicionar estilo à página. Fique a vontade para soltar a criatividade e alterar o arquivo como desejar!