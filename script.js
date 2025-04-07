function formatarData(data) {
  const [ano, mes, dia] = data.split('-');
  return `${dia}/${mes}/${ano}`;
}
// Função para criar a mensagem de estorno
function criarMensagem() {
  // Captura os valores dos campos do formulário
  const nomePaciente = document.getElementById("nomePaciente").value;
  const codigoAtendimento = document.getElementById("codigoAtendimento").value;
  const valorFaturado =
    parseFloat(document.getElementById("valorFaturado").value) || 0;
  const valorPago = parseFloat(document.getElementById("valorPago").value) || 0;
  const codigoCV = document.getElementById("codigoCV").value;
  const codigoCAP = document.getElementById("codigoCAP").value;
  const dataPagamento = document.getElementById("dataPagamento").value;

  // Calcula o valor da devolução
  const valorDevolucao = valorPago - valorFaturado;
  // Formata as datas para o formato DD/MM/AAAA
  const dataPagamentoFormatada = formatarData(dataPagamento);
  // Cria a mensagem formatada para o estorno
  const mensagem = `
    Gostaria de solicitar o estorno referente ao atendimento:

    - Nome do Paciente: ${nomePaciente}
    - Código de Atendimento: ${codigoAtendimento}
    - Valor Faturado: R$ ${valorFaturado.toFixed(2)}
    - Valor Pago: R$ ${valorPago.toFixed(2)}
    - Valor da devolução: R$ ${valorDevolucao.toFixed(2)}
    - CV ou Código de Autorização: ${codigoCV}
    - Excluir o contas a pagar: ${codigoCAP}
    - Data de Pagamento: ${dataPagamentoFormatada}

    Agradeço pela atenção e aguardo instruções.

    Atenciosamente.
  `;

  // Exibe a mensagem de estorno
  const resultadoDiv = document.getElementById("emailMensagem");
  resultadoDiv.style.display = "block";
  resultadoDiv.querySelector("pre").innerText = mensagem;
}

// Função para criar a mensagem para o cliente
function criarMensagemCliente() {
  // Captura os valores dos campos do formulário
  const nomePaciente = document.getElementById("nomePaciente").value;
  const valorFaturado =
    parseFloat(document.getElementById("valorFaturado").value) || 0;
  const valorPago = parseFloat(document.getElementById("valorPago").value) || 0;

  // Calcula o valor da devolução
  const valorDevolucao = valorPago - valorFaturado;

  // Cria a mensagem formatada para o cliente
  const mensagemClient = `
    Olá, ${nomePaciente}!

    Gostaria de informar que, após a análise do seu pagamento,
     verificamos que o valor pago foi superior ao valor da conta.
      Então, vamos realizar um estorno no valor de R$ ${valorDevolucao.toFixed(
        2
      )}.

    Aqui estão os detalhes:

    Valor Pago: R$ ${valorPago.toFixed(2)}
    Valor da Conta: R$ ${valorFaturado.toFixed(2)}
    Valor a ser Estornado: R$ ${valorDevolucao.toFixed(2)}
    O estorno será feito em breve e, dependendo do banco,
     pode levar alguns dias úteis para aparecer no seu extrato.
    Qualquer dúvida, estamos à disposição! 

    Atenciosamente.
  `;

  // Exibe a mensagem para o cliente
  const resultadoDivClient = document.getElementById("client");
  resultadoDivClient.style.display = "block";
  resultadoDivClient.querySelector("pre").innerText = mensagemClient;
}

// Função para copiar a mensagem para a área de transferência
function copiarTexto() {
  const texto = document
    .getElementById("resultado")
    .querySelector("pre").innerText;

  if (texto) {
    // Cria um elemento de área de transferência temporário
    const tempInput = document.createElement("textarea");
    tempInput.value = texto;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Alerta informando que o texto foi copiado
    alert("Texto copiado para a área de transferência!");
  } else {
    alert(
      "Nenhum texto para copiar. Por favor, clique em 'Criar Mensagem' primeiro."
    );
  }
}
function copiarTextoClient() {
  const texto = document
    .getElementById("client")
    .querySelector("pre").innerText;

  if (texto) {
    // Cria um elemento de área de transferência temporário
    const tempInput = document.createElement("textarea");
    tempInput.value = texto;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Alerta informando que o texto foi copiado
    alert("Texto copiado para a área de transferência!");
  } else {
    alert(
      "Nenhum texto para copiar. Por favor, clique em 'Criar Mensagem' primeiro."
    );
  }
}

// Função para criar a mensagem de estorno
function criarMensagemNegativa() {
  // Captura os valores dos campos do formulário
  const nomeRemetente = document.getElementById("nomeRemetente").value;
  const nomePaciente2 = document.getElementById("nomePaciente2").value;
  const valorFaturado2 =
    parseFloat(document.getElementById("valorFaturado2").value) || 0;
  const nomeConvenio = document.getElementById("nomeConvenio").value;
  const motivo = document.getElementById("motivo").value;
  const dataInicio = document.getElementById("dataInicio").value;
  const dataFinal = document.getElementById("dataFinal").value;

    // Formata as datas para o formato DD/MM/AAAA
    const dataInicioFormatada = formatarData(dataInicio);
    const dataFinalFormatada = formatarData(dataFinal);
  // Cria a mensagem formatada para o estorno
  const mensagemNegativa = `
Olá! Me chamo ${nomeRemetente}, do setor de caixa da Santa Casa.

Referente ao fechamento da conta da paciente:
${nomePaciente2}
- Convenio:${nomeConvenio}
- Valor da conta fechada: R$ ${valorFaturado2}
- Motivo: ${motivo}
- Período de internação: ${dataInicioFormatada} a ${dataFinalFormatada}

Segue a fatura em anexo para análise.

Em caso de dúvidas, favor entrar em contato diretamente com a central de autorização do convênio
 para tratar sobre a negativa.

Canais de contato do convênio:
- (21) 2123-6720
- (21) 2123-6811
- (21) 2123-6212

Estou à disposição para quaisquer esclarecimentos adicionais.`;

  // Exibe a mensagem de estorno
  const resultadoDiv = document.getElementById("mensagemNegativa");
  resultadoDiv.style.display = "block";
  resultadoDiv.querySelector("pre").innerText = mensagemNegativa;
}
function copiarTextoConvenio() {
  const texto = document
    .getElementById("mensagemNegativa")
    .querySelector("pre").innerText;

  if (texto) {
    // Cria um elemento de área de transferência temporário
    const tempInput = document.createElement("textarea");
    tempInput.value = texto;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Alerta informando que o texto foi copiado
    alert("Texto copiado para a área de transferência!");
  } else {
    alert(
      "Nenhum texto para copiar. Por favor, clique em 'Criar Mensagem' primeiro."
    );
  }
}

//Criar mensagem do débito do cliente

// Função para criar a mensagem de estorno
// Função para criar a mensagem de cobrança negativa
function criarMensagemNegativa() {
  // Captura os valores inseridos no formulário
  const nomeRemetente = document.getElementById('nomeRemetente2').value;
  const nomePaciente = document.getElementById('nomePaciente3').value;
  const valorFaturado = document.getElementById('valorFaturado3').value;
  const valorPago = document.getElementById('valorPago2').value;
  const motivoDebito = document.getElementById('motivoDebito').value;
  const nomeConvenio = document.getElementById('nomeConvenio').value;
  const dataInicio = document.getElementById('dataInicio').value;
  const dataFinal = document.getElementById('dataFinal').value;

  // Verifica se todos os campos foram preenchidos
  if (!nomeRemetente || !nomePaciente || !valorFaturado || !valorPago || !motivoDebito || !nomeConvenio || !dataInicio || !dataFinal) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Calcula a diferença entre o valor faturado e o valor pago
  const saldoDevedor = (parseFloat(valorFaturado) - parseFloat(valorPago)).toFixed(2);

  // Gera a mensagem de cobrança negativa
  const mensagem = `
    Prezado(a) ${nomeRemetente},

    Informamos que o paciente ${nomePaciente}, que estava internado de ${dataInicio} a ${dataFinal}, tem um débito referente ao valor de R$ ${valorFaturado}, mas foi pago apenas R$ ${valorPago}.
    O saldo devedor é de R$ ${saldoDevedor}.
    
    Motivo do débito: ${motivoDebito}.
    
    Convênio: ${nomeConvenio}.
    
    Solicitamos que a diferença seja quitada o mais breve possível.

    Atenciosamente,
    Departamento de Cobrança
  `;

  // Exibe a mensagem na página
  const mensagemDiv = document.getElementById('mensagemNegativa');
  mensagemDiv.querySelector('pre').textContent = mensagem;
}

// Função para copiar a mensagem gerada para a área de transferência
function copiarTextoConvenio() {
  const mensagemText = document.querySelector('#mensagemNegativa pre').textContent;
  
  if (mensagemText) {
    // Cria um elemento temporário para copiar o texto
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = mensagemText;
    document.body.appendChild(tempTextArea);
    
    // Seleciona e copia o texto
    tempTextArea.select();
    document.execCommand('copy');
    
    // Remove o elemento temporário
    document.body.removeChild(tempTextArea);
    
    alert('Texto copiado com sucesso!');
  } else {
    alert('Nenhuma mensagem gerada para copiar!');
  }
}
