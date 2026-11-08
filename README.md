# IAMST – Website institucional

Website da **IA Manutenção e Soluções Técnicas, Lda.** (TI e Segurança Eletrónica), Beira, Moçambique.
Site estático (HTML, CSS e JavaScript simples), sem instalação nem compilação.

## Estrutura

```
index.html          Página única (início, serviços, sobre, projetos, clientes, contactos)
css/style.css       Estilos (cores do logótipo: azul #3E4095, vermelho #ED3237)
js/config.js        >>> AQUI adiciona fotos, projetos e clientes <<<
js/main.js          Lógica do site (slides, menu, formulário)
fonts/              Fonte Grandview
img/logo.png        Logótipo
img/projetos/       Fotos dos trabalhos realizados
img/clientes/       Logotipos dos clientes
img/hero/           Imagem de fundo do topo (opcional)
```

## Publicar no GitHub Pages (grátis)

1. Crie um repositório no GitHub (ex.: `iamst-website`).
2. Envie **todo o conteúdo** desta pasta para a raiz do repositório (botão *Add file → Upload files*, arrastando os ficheiros e pastas).
3. Vá a **Settings → Pages**, em *Build and deployment* escolha *Deploy from a branch*, ramo `main`, pasta `/ (root)` e guarde.
4. Ao fim de 1 a 2 minutos o site fica em `https://SEU-UTILIZADOR.github.io/iamst-website/`.

Domínio próprio (ex.: iamst.co.mz): em *Settings → Pages → Custom domain* indique o domínio e crie no seu fornecedor de DNS o registo indicado pelo GitHub (CNAME para `SEU-UTILIZADOR.github.io`).

## Adicionar ou trocar fotos

Abra `js/config.js`. Os campos `img` vazios mostram uma ilustração provisória.

**Fotos de trabalhos (slides)**
1. Coloque a foto em `img/projetos/` (recomendado: formato horizontal 16:9, largura de 1600 px, JPG ou WebP, abaixo de 400 KB).
2. No projeto correspondente, escreva o caminho, por exemplo: `img: "img/projetos/cctv-01.webp"`.
3. Para um projeto novo, copie uma linha `{t:"…",c:"…",d:"…",img:"…",alt:"…"}` e preencha. Categorias: `TI`, `Segurança Eletrónica` ou `Complementares`.

**Logotipos de clientes**
1. Coloque o logótipo em `img/clientes/` (PNG com fundo transparente, cerca de 400 px de largura).
2. Preencha: `{n:"Nome do cliente", img:"img/clientes/cliente1.png"}`.

**Imagem do topo:** coloque a foto em `img/hero/` e escreva `hero: "img/hero/topo.jpg"`.

Depois de guardar, faça *commit* no GitHub e o site atualiza em instantes.

## Notas

- **Formulário de contacto:** ao enviar, abre o programa de email do visitante com a mensagem preenchida para `geral@iamst.co.mz`. Para receber diretamente sem abrir o email, ligue um serviço como Formspree ou Web3Forms ao formulário.
- **Imagens provisórias:** as ilustrações dos projetos e as marcas "Cliente 1…8" são genéricas. Substitua-as por trabalhos e clientes reais.
- **Fonte Grandview:** é uma fonte da Microsoft. Confirme que a licença permite uso na web antes de publicar.
- **Horário de atendimento:** não consta no perfil empresarial; pode acrescentá-lo na barra do topo e na secção de contactos em `index.html`.
