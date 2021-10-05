/*
 *  Script com a logica do questionário.
 *  Neste exercício o objetivo é complementar o script implementando a lógica do botão próximo.
 *  Diversas funçoes já estão implementadas e podem/devem ser usadas.
 *  Mas se necessário, você pode modifica-las e/ou adicionar novas funções.
 */

// variável para armazenar as questões vindas do arquivo
var questoes = null;
// pontuação atual do usuário
var pontuacao = 0;
// índice da pergunta atual. Lembrando que inicia em 0.
var indiceQuestaoAtual = 0;

// Função que popula o html com a questão atual
function mostrarQuestao() {
  var questao = questoes[indiceQuestaoAtual];
  document.getElementById('pergunta').innerText = questao.pergunta;
  document.getElementById('label-opcao1').innerText = questao.alternativas[0];
  document.getElementById('label-opcao2').innerText = questao.alternativas[1];
  document.getElementById('label-opcao3').innerText = questao.alternativas[2];
  document.getElementById('label-opcao4').innerText = questao.alternativas[3];
  removeTodosChecked();
}

// Função que atualiza a pontuação na página
function atualizarPontuacao() {
  document.getElementById('pontuacao').innerText = pontuacao;
}

// Função que garante que nenhuma opção esteja selecionada
function removeTodosChecked() {
  document.querySelector('input[name="resposta"]:checked').checked = false;
}
 
// Desabilita o questionário após finalizar o questionario
function desabilitaQuestionario() {
  document.getElementsByName('resposta').forEach((e) => (e.disabled = true));
  document.querySelector('button.proximo').style.display = 'none';
  document.querySelector('button.reiniciar').style.display = 'initial';
}

// Habilita o questionário ao reiniciar
function reiniciarQuestionario() {
  document.getElementsByName('resposta').forEach((e) => (e.disabled = false));
  document.querySelector('button.proximo').style.display = 'initial';
  document.querySelector('button.reiniciar').style.display = 'none';
  pontuacao = indiceQuestaoAtual = 0;
  atualizarPontuacao();
  mostrarQuestao();
}

/*  ======== COMPLEMENTE/CRIE ESSA FUNÇÃO ========
 *  Essa função processa a resposta, i.e., ao clicar em 'Próximo'.
 *  Observe que essa função será chamada somente quando o questionário estiver aberto
 *  Portanto, você deverá:
 *    - buscar pela opção selecionada (elemento DOM) e obter o valor dele (o valor será o índice da resposta)
 *    - se não houver resposta selecionada:
 *      > apresente um alerta infomando que o usuário deve selecionar uma opção antes
 *    - se tiver selecionado uma opção:
 *      > compare o valor com a "resposta" da questão e incremente a pontuação se estiver correta
 *      > atualize a pontuação chamando o método 'atualizarPontuacao'
 *      > incremente a variável 'indiceQuestaoAtual' em uma unidade para passar para a próxima pergunta
 *      > se não houverem mais perguntas:
 *        > apresente a pontuação do usuário e desabilite o questionário (função 'desabilitaQuestionario')
 *      > senão:
 *        > chame a função 'mostrarQuestao' para mostrar a próxima pergunta
 *    - feito :D
 */
function processarResposta() {
  // TODO (implementar)
	if(document.querySelector('input[name = resposta]:checked')){//verifica se há seleção
  		if (document.querySelector('input[name = resposta]:checked').value == questoes[indiceQuestaoAtual++].resposta){//verifica se esta correto
  			pontuacao+=10;
  		}else{
  			pontuacao-=5;
  		}
		atualizarPontuacao();
		if (indiceQuestaoAtual < questoes.length) {
			mostrarQuestao();
		}else{
			document.querySelector('button.reiniciar').style.display = 'inline';
		}
  		
	}else{
		alert(`por favor, selecione alguma resposta`);	
	}
	
}

// pontuação atual do usuário
var pontuacao = 0;
// índice da pergunta atual. Lembrando que inicia em 0.
var indiceQuestaoAtual = 0;
// variável para armazenar as questões vindas do arquivo
var questoes = [
  {
    pergunta: 'O que HTML significa?',
    alternativas: [
      'Home Tool Markup Language',
      'Hyperlinks and Text Markup Language',
      'Hyper Text Markup Language',
      'Hyper Text Main Language',
    ],
    resposta: 2,
  },
  {
    pergunta: 'O que CSS significa?',
    alternativas: [
      'Cascading Style Sheets',
      'Computer Style Sheets',
      'Colorful Style Sheets',
      'Creative Style Sheets',
    ],
    resposta: 0,
  },
  {
    pergunta: 'Quem está trabalhando nas especificações da web atualmente?',
    alternativas: [
      'Mozilla',
      'O World Wide Web Consortium (WWWC)',
      'Google',
      'Microsoft',
    ],
    resposta: 1,
  },
  {
    pergunta: 'Quais destas tags não possuem valor semântico?',
    alternativas: ['<header>', '<em>', '<b>', '<strong>'],
    resposta: 2,
  },
  {
    pergunta: 'Não é um tipo válido em JS:',
    alternativas: ['string', 'number', 'object', 'smallint'],
    resposta: 3,
  },
];

// Mostra a pergunta
mostrarQuestao();
