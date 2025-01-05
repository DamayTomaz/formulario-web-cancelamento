// Função para criar a mensagem de estorno
function criarMensagem() {
  // Captura os valores dos campos do formulário
  const nomePaciente = document.getElementById("nomePaciente").value;
  const codigoAtendimento = document.getElementById("codigoAtendimento").value;
  const valorFaturado = parseFloat(document.getElementById("valorFaturado").value) || 0;
  const valorPago = parseFloat(document.getElementById("valorPago").value) || 0;
  const codigoCV = document.getElementById("codigoCV").value;
  const codigoCAP = document.getElementById("codigoCAP").value;
  const dataPagamento = document.getElementById("dataPagamento").value;

  // Calcula o valor da devolução
  const valorDevolucao = valorPago - valorFaturado;

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
    - Data de Pagamento: ${dataPagamento}

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
  const valorFaturado = parseFloat(document.getElementById("valorFaturado").value) || 0;
  const valorPago = parseFloat(document.getElementById("valorPago").value) || 0;

  // Calcula o valor da devolução
  const valorDevolucao = valorPago - valorFaturado;

  // Cria a mensagem formatada para o cliente
  const mensagemClient = `
    Olá, ${nomePaciente}!

    Gostaria de informar que, após a análise do seu pagamento,
     verificamos que o valor pago foi superior ao valor da conta.
      Então, vamos realizar um estorno no valor de R$ ${valorDevolucao.toFixed(2)}.

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
  const texto = document.getElementById("resultado").querySelector("pre").innerText;
  
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
    alert("Nenhum texto para copiar. Por favor, clique em 'Criar Mensagem' primeiro.");
  }
}
function copiarTextoClient() {
  const texto = document.getElementById("client").querySelector("pre").innerText;
  
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
    alert("Nenhum texto para copiar. Por favor, clique em 'Criar Mensagem' primeiro.");
  }
}