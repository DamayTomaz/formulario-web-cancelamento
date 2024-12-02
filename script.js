// Função para criar a mensagem formatada
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

  // Cria a mensagem formatada com quebras de linha
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
  
  // Seleciona o div "resultado" e exibe a mensagem com formatação preservada
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.style.display = "block"; // Exibe o div
  resultadoDiv.querySelector("pre").innerText = mensagem; // Usa <pre> para manter o formato
}
function criarMensagemCliente() {
  // Captura os valores dos campos do formulário
  const nomePaciente = document.getElementById("nomePaciente").value;
  const valorFaturado = parseFloat(document.getElementById("valorFaturado").value) || 0;
  const valorPago = parseFloat(document.getElementById("valorPago").value) || 0;
  const dataPagamento = document.getElementById("data").value;

  // Calcula o valor da devolução
  const valorDevolucao = valorPago - valorFaturado;

  // Cria a mensagem formatada com quebras de linha
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

  // Seleciona o div "resultado" e exibe a mensagem com formatação preservada
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.style.display = "block"; // Exibe o div
  resultadoDiv.querySelector("pre").innerText = mensagem; // Usa <pre> para manter o formato
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
    alert("Nenhum texto para copiar. Por favor, clique em 'Criar Email' primeiro.");
  }
}
