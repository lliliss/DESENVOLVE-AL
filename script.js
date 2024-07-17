document.getElementById("more").addEventListener('click', function() {
    const description = document.getElementById("descricao");
    if (descricao.innerHTML.includes("...")) {
        descricao.innerHTML = "A série segue os irmãos Sam Winchester e Dean Winchester que viajam por toda a América em um Chevrolet Impala 1967 preto investigando e combatendo eventos paranormais e outras ocorrências inexplicáveis, muitas delas baseadas em lendas urbanas americanas e folclore, assim como diferentes criaturas sobrenaturais.";
        this.innerText = "Mostrar menos";
    }
    else {
        descricao.innerHTML = "A série segue os irmãos Sam Winchester e Dean Winchester que viajam por toda a América em um Chevrolet Impala 1967 preto investigando e combatendo eventos paranormais e outras..";
        this.innerText = "Mostrar mais";
    }
});

document.getElementById("mostrar-mais").addEventListener('click', function() {
    const description = document.getElementById("details");
    if (details.innerHTML.includes("...")) {
        details.innerHTML = 'Seu primeiro lançamento foi no dia 13 de setembro de 2005. A partir daí, a série foi um sucesso completo. O mistério juntamente com o suspense é super envolvente, fazendo com que você prenda a atenção. Na série, os protagonistas tentam entender o que houve exatamente com a mãe, já que foi morta por um "demônio". Eles embarcam na aventura da procura de respostas, ademais, ainda fazem uma busca pelo pai.';
        this.innerText = "Mostrar menos";
    }
    else {
        details.innerHTML = 'Seu primeiro lançamento foi no dia 13 de setembro de 2005. A partir daí, a série foi um sucesso completo. O mistério juntamente com o suspense é super envolvente, fazendo com que você prenda a atenção. Na série...';
        this.innerText = "Mostrar mais";
    }
});