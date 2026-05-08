<style>
  /* Estilos gerais */
  .tech-header {
    background: linear-gradient(135deg, #4CAF50 0%, #2196F3 100%);
    border-radius: 24px;
    padding: 2rem;
    margin-bottom: 2rem;
    color: white;
    text-align: center;
  }
  .stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }
  .stat-card {
    text-align: center;
    padding: 1.5rem;
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
  .stat-number {
    font-size: 2.5rem;
    font-weight: bold;
    color: #4CAF50;
  }
  
  /* DASHBOARD INTERATIVO - SIMULADOR DE AUTOMAÇÃO */
  .dashboard-live {
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    border-radius: 24px;
    padding: 1.5rem;
    margin: 2rem 0;
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    border: 1px solid rgba(76, 175, 80, 0.3);
  }
  .dashboard-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .dashboard-title {
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
  }
  .dashboard-title span {
    color: #4CAF50;
  }
  .status-badge {
    background: #4CAF50;
    color: white;
    padding: 0.3rem 1rem;
    border-radius: 30px;
    font-size: 0.8rem;
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }
  .agenda-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 0.8rem;
    margin-bottom: 1.5rem;
  }
  .time-slot {
    background: rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 0.8rem 0.5rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid rgba(255,255,255,0.1);
    color: white;
    font-size: 0.8rem;
  }
  .time-slot.available {
    background: rgba(76, 175, 80, 0.2);
    border-color: #4CAF50;
  }
  .time-slot.available:hover {
    background: #4CAF50;
    transform: scale(1.05);
    cursor: pointer;
  }
  .time-slot.reserved {
    background: rgba(255, 152, 0, 0.3);
    border-color: #FF9800;
    position: relative;
  }
  .time-slot.reserved::after {
    content: '⏳';
    position: absolute;
    top: -5px;
    right: -5px;
    font-size: 0.7rem;
  }
  .time-slot.booked {
    background: rgba(158, 158, 158, 0.3);
    border-color: #9e9e9e;
    text-decoration: line-through;
    cursor: not-allowed;
  }
  .time-slot.selected {
    background: #2196F3;
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(33,150,243,0.5);
  }
  .dashboard-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255,255,255,0.1);
  }
  .info-card {
    background: rgba(255,255,255,0.05);
    border-radius: 12px;
    padding: 0.8rem;
    text-align: center;
  }
  .info-label {
    color: rgba(255,255,255,0.6);
    font-size: 0.7rem;
  }
  .info-value {
    color: #4CAF50;
    font-size: 1.2rem;
    font-weight: bold;
  }
  .log-area {
    background: rgba(0,0,0,0.5);
    border-radius: 12px;
    padding: 1rem;
    margin-top: 1rem;
    max-height: 150px;
    overflow-y: auto;
    font-family: monospace;
    font-size: 0.7rem;
    color: #4CAF50;
  }
  .log-entry {
    padding: 0.2rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }
  .log-time {
    color: #FF9800;
  }
  .btn-action {
    background: linear-gradient(135deg, #4CAF50, #2196F3);
    border: none;
    color: white;
    padding: 0.6rem 1.2rem;
    border-radius: 30px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s;
  }
  .btn-action:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 20px rgba(76,175,80,0.4);
  }
  .problem-card, .solution-card {
    padding: 1.5rem;
    border-radius: 16px;
    margin: 1rem 0;
  }
  .problem-card { background: #ffebee; border-left: 4px solid #f44336; }
  .solution-card { background: #e8f5e9; border-left: 4px solid #4CAF50; }
  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }
  .feature-item {
    padding: 1.5rem;
    background: white;
    border-radius: 16px;
    text-align: center;
    transition: transform 0.3s;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  .feature-item:hover { transform: translateY(-5px); }
  .feature-icon { font-size: 2.5rem; }
  .comparison-table {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin: 2rem 0;
  }
  .comparison-item {
    padding: 1.5rem;
    border-radius: 16px;
    text-align: center;
  }
  .comparison-item.old { background: #ffebee; border: 1px solid #f44336; }
  .comparison-item.new { background: #e8f5e9; border: 1px solid #4CAF50; }
  .progress-bar {
    background: #e0e0e0;
    border-radius: 10px;
    height: 8px;
    margin: 0.5rem 0;
  }
  .progress-fill {
    background: #4CAF50;
    height: 100%;
    border-radius: 10px;
    width: 0%;
  }
  .metric-bubble {
    background: #4CAF50;
    color: white;
    border-radius: 20px;
    padding: 0.2rem 0.6rem;
    font-size: 0.7rem;
  }
</style>

<div class="tech-header">
  <h1 style="color: white;">🚀 UnBilidade</h1>
  <p>Sistema de Gestão Inteligente para Clínicas de Fisioterapia</p>
</div>

## 📊 Contexto de Negócio

O setor de clínicas de fisioterapia enfrenta um desafio único: **o tempo é o produto**. Cada hora não atendida representa receita perdida.

<div class="stats">
  <div class="stat-card"><div class="stat-number">62%</div><div>Usam WhatsApp para agendamento</div></div>
  <div class="stat-card"><div class="stat-number">28%</div><div>Cancelamentos de última hora</div></div>
  <div class="stat-card"><div class="stat-number">15h/sem</div><div>Gastas com agendamento manual</div></div>
</div>

---

## 🤖 DEMONSTRADOR AO VIVO: Automação de Agenda Inteligente

<div class="dashboard-live">
  <div class="dashboard-header">
    <div class="dashboard-title">
      ⚡ <span>UnBilidade</span> - Simulador de Agendamento Automático
    </div>
    <div class="status-badge" id="systemStatus">
      🟢 Sistema Online
    </div>
  </div>
  
  <div class="agenda-grid" id="agendaGrid">
    <!-- Horários serão gerados via JavaScript -->
  </div>
  
  <div class="dashboard-info">
    <div class="info-card">
      <div class="info-label">📊 Taxa de Ocupação</div>
      <div class="info-value" id="ocupacao">0%</div>
    </div>
    <div class="info-card">
      <div class="info-label">✅ Horários Livres</div>
      <div class="info-value" id="livres">0</div>
    </div>
    <div class="info-card">
      <div class="info-label">🔒 Horários Ocupados</div>
      <div class="info-value" id="ocupados">0</div>
    </div>
    <div class="info-card">
      <div class="info-label">⏳ Reservados (5min)</div>
      <div class="info-value" id="reservados">0</div>
    </div>
  </div>
  
  <div style="display: flex; gap: 1rem; margin-top: 1rem; justify-content: center;">
    <button class="btn-action" id="simularCancelamentoBtn">❌ Simular Cancelamento</button>
    <button class="btn-action" id="resetarAgendaBtn">🔄 Resetar Agenda</button>
    <button class="btn-action" id="autopreenchimentoBtn">✨ Autopreenchimento Inteligente</button>
  </div>
  
  <div class="log-area" id="logArea">
    <div class="log-entry"><span class="log-time">[SISTEMA]</span> Dashboard carregado. Clique em um horário disponível para simular um agendamento!</div>
  </div>
</div>

<script>
  // Configuração da agenda
  const horarios = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
    "11:00", "11:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
  ];
  
  let agenda = {};
  let timeoutReservas = {};
  
  // Inicializar agenda
  function initAgenda() {
    horarios.forEach(h => {
      agenda[h] = { status: "available", paciente: null };
    });
    // Marcar alguns como ocupados para demonstração
    agenda["09:00"] = { status: "booked", paciente: "Maria Silva" };
    agenda["14:00"] = { status: "booked", paciente: "João Santos" };
    agenda["16:30"] = { status: "booked", paciente: "Ana Oliveira" };
    atualizarDashboard();
  }
  
  // Adicionar log
  function addLog(mensagem, tipo = "info") {
    const logArea = document.getElementById("logArea");
    const now = new Date();
    const hora = now.toLocaleTimeString('pt-BR');
    const colors = { info: "#4CAF50", warning: "#FF9800", error: "#f44336" };
    const entry = document.createElement("div");
    entry.className = "log-entry";
    entry.style.color = colors[tipo] || colors.info;
    entry.innerHTML = `<span class="log-time">[${hora}]</span> ${mensagem}`;
    logArea.insertBefore(entry, logArea.firstChild);
    if (logArea.children.length > 20) logArea.removeChild(logArea.lastChild);
  }
  
  // Atualizar dashboard
  function atualizarDashboard() {
    const grid = document.getElementById("agendaGrid");
    grid.innerHTML = "";
    
    let livres = 0, ocupados = 0, reservados = 0;
    
    horarios.forEach(horario => {
      const slot = agenda[horario];
      const div = document.createElement("div");
      div.className = `time-slot ${slot.status}`;
      div.textContent = horario;
      
      if (slot.status === "available") {
        livres++;
        div.onclick = () => reservarHorario(horario);
      } else if (slot.status === "booked") {
        ocupados++;
        div.title = `Agendado com: ${slot.paciente}`;
      } else if (slot.status === "reserved") {
        reservados++;
        div.title = "Reservado - você tem 5 minutos para confirmar";
      }
      
      grid.appendChild(div);
    });
    
    const total = horarios.length;
    const ocupacao = ((total - livres) / total * 100).toFixed(0);
    
    document.getElementById("ocupacao").textContent = `${ocupacao}%`;
    document.getElementById("livres").textContent = livres;
    document.getElementById("ocupados").textContent = ocupados;
    document.getElementById("reservados").textContent = reservados;
  }
  
  // Reservar horário (simula o fluxo de 5min)
  function reservarHorario(horario) {
    if (agenda[horario].status !== "available") {
      addLog(`❌ Horário ${horario} não está mais disponível!`, "error");
      return;
    }
    
    agenda[horario] = { status: "reserved", paciente: null };
    addLog(`🔒 Horário ${horario} reservado! Você tem 5 minutos para confirmar o agendamento.`, "warning");
    atualizarDashboard();
    
    // Auto-cancelamento após 5 segundos (simulando 5 minutos)
    timeoutReservas[horario] = setTimeout(() => {
      if (agenda[horario] && agenda[horario].status === "reserved") {
        agenda[horario] = { status: "available", paciente: null };
        addLog(`⏰ Tempo esgotado! Horário ${horario} foi liberado automaticamente.`, "info");
        atualizarDashboard();
        delete timeoutReservas[horario];
        
        // Disparar autopreenchimento inteligente
        setTimeout(() => {
          const proximoNaFila = ["Carlos Mendes", "Fernanda Lima", "Roberto Alves"];
          const nome = proximoNaFila[Math.floor(Math.random() * proximoNaFila.length)];
          addLog(`✨ SISTEMA INTELIGENTE: ${nome} foi notificado sobre a vaga em ${horario}!`, "info");
        }, 500);
      }
    }, 5000);
    
    // Oportunidade de confirmar (simular confirmação automática após 2 segundos)
    setTimeout(() => {
      if (agenda[horario] && agenda[horario].status === "reserved") {
        clearTimeout(timeoutReservas[horario]);
        agenda[horario] = { status: "booked", paciente: "Cliente Simulado" };
        addLog(`✅ CONFIRMADO! Horário ${horario} foi agendado com sucesso. E-mail de confirmação enviado.`, "info");
        atualizarDashboard();
        delete timeoutReservas[horario];
      }
    }, 3000);
  }
  
  // Simular cancelamento
  function simularCancelamento() {
    const horariosOcupados = horarios.filter(h => agenda[h].status === "booked");
    if (horariosOcupados.length === 0) {
      addLog(`⚠️ Não há horários ocupados para cancelar.`, "warning");
      return;
    }
    
    const aleatorio = horariosOcupados[Math.floor(Math.random() * horariosOcupados.length)];
    const paciente = agenda[aleatorio].paciente;
    agenda[aleatorio] = { status: "available", paciente: null };
    addLog(`❌ CANCELAMENTO: ${paciente} cancelou o horário ${aleatorio}. Vaga liberada!`, "error");
    atualizarDashboard();
    
    // Simular autopreenchimento
    setTimeout(() => {
      const nomes = ["Carlos Mendes", "Fernanda Lima", "Roberto Alves", "Patrícia Souza"];
      const nome = nomes[Math.floor(Math.random() * nomes.length)];
      addLog(`✨ AUTOPREENCHIMENTO: ${nome} foi notificado e ocupou o horário ${aleatorio}!`, "info");
      agenda[aleatorio] = { status: "booked", paciente: nome };
      atualizarDashboard();
    }, 2000);
  }
  
  // Resetar agenda
  function resetarAgenda() {
    Object.keys(timeoutReservas).forEach(key => clearTimeout(timeoutReservas[key]));
    timeoutReservas = {};
    initAgenda();
    addLog(`🔄 Agenda resetada! Volte ao estado inicial da demonstração.`, "info");
  }
  
  // Autopreenchimento inteligente
  function autopreenchimentoInteligente() {
    const vagas = horarios.filter(h => agenda[h].status === "available");
    if (vagas.length === 0) {
      addLog(`⚠️ Não há vagas disponíveis no momento.`, "warning");
      return;
    }
    
    const vaga = vagas[Math.floor(Math.random() * vagas.length)];
    const nomes = ["Carlos Mendes", "Fernanda Lima", "Roberto Alves", "Patrícia Souza", "Luciana Ferreira"];
    const nome = nomes[Math.floor(Math.random() * nomes.length)];
    
    agenda[vaga] = { status: "booked", paciente: nome };
    addLog(`✨ AUTOPREENCHIMENTO INTELIGENTE: ${nome} ocupou a vaga em ${vaga} (lista de espera automática)!`, "info");
    atualizarDashboard();
  }
  
  // Inicializar
  initAgenda();
  
  // Botões
  document.getElementById("simularCancelamentoBtn").onclick = simularCancelamento;
  document.getElementById("resetarAgendaBtn").onclick = resetarAgenda;
  document.getElementById("autopreenchimentoBtn").onclick = autopreenchimentoInteligente;
</script>

---

## 🔍 Análise de Causa (Ishikawa)
```mermaid
graph TD
    subgraph Metodos
        A1[WhatsApp] --> P[Problema Central]
        A2[Planilhas] --> P
        A3[Papel] --> P
    end
    subgraph Tecnologia
        B1[Sistemas Isolados] --> P
        B2[Falta de Automação] --> P
        B3[Sem integração] --> P
    end
    subgraph Pessoas
        C1[Sobrecarga] --> P
        C2[Erro Humano] --> P
        C3[Retrabalho] --> P
    end
    P --> R[Overbooking e Evasão]
    
    style P fill:#f44336,color:white
    style R fill:#f44336,color:white
```
⚠️ O Problema
<div class="problem-card"> <h3>🚨 A Fragmentação dos Processos</h3> <p>A marcação de consultas ocorre de forma manual via WhatsApp e redes sociais.</p> <p><strong>Consequências:</strong></p> <ul> <li>📉 Overbooking - dupla reserva de horários</li> <li>💸 Evasão de horários - janelas vazias</li> <li>😰 Fadiga da equipe - tarefas repetitivas</li> <li>🔓 Insegurança de dados</li> </ul> </div>
💡 A Solução
<div class="solution-card"> <h3>✨ UnBilidade</h3> <p>Plataforma web que centraliza e automatiza todo o fluxo de agendamentos.</p> </div><div class="feature-grid"> <div class="feature-item"><div class="feature-icon">🤖</div><h4>Automação Inteligente</h4><p>Preenche vagas remanescentes automaticamente</p></div> <div class="feature-item"><div class="feature-icon">🔔</div><h4>Notificações</h4><p>Lembretes automáticos 24h antes</p></div> <div class="feature-item"><div class="feature-icon">📊</div><h4>Dashboards</h4><p>Métricas em tempo real</p></div> <div class="feature-item"><div class="feature-icon">🔒</div><h4>LGPD Compliance</h4><p>Dados protegidos</p></div> </div>
🎯 Comparação
<div class="comparison-table"> <div class="comparison-item old"> <h3>❌ Modelo Tradicional</h3> <p>📱 WhatsApp + 📝 Planilha</p> <p>⏱️ Resposta: horas/dias</p> <p>📊 Ocupação: 65%</p> </div> <div class="comparison-item new"> <h3>✨ UnBilidade</h3> <p>🤖 Automação + ⚡ Tempo real</p> <p>⏱️ Resposta: segundos</p> <p>📊 Ocupação: 92%+</p> </div> </div>
👥 Personas
Persona	Funcionalidades
🧑‍⚕️ Fisioterapeuta	Agenda do dia, evolução clínica, remarcações
👩‍💼 Secretária	Gerencia horários, lista de atendimentos
🧑‍🤝‍🧑 Paciente	Marca online, cancelamento autônomo, histórico
📈 ROI Esperado
<div><strong>Redução de cancelamentos:</strong> 28% → 12% <span class="metric-bubble">-57%</span></div> <div class="progress-bar"><div class="progress-fill" style="width: 57%;"></div></div><div><strong>Aumento de ocupação:</strong> 65% → 92% <span class="metric-bubble">+42%</span></div> <div class="progress-bar"><div class="progress-fill" style="width: 42%;"></div></div><div><strong>Tempo economizado:</strong> 15h/semana <span class="metric-bubble">-70%</span></div> <div class="progress-bar"><div class="progress-fill" style="width: 70%;"></div></div>
🎯 UnBilidade não é apenas uma agenda digital - é um ecossistema inteligente que transforma a gestão da clínica.