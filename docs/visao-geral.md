<style>
  .tech-header {
    background: linear-gradient(135deg, #00897B 0%, #1A237E 100%);
    border-radius: 24px;
    padding: 2rem;
    margin-bottom: 2rem;
    color: white;
    position: relative;
    overflow: hidden;
  }
  .tech-header::before {
    content: '⚡';
    position: absolute;
    font-size: 8rem;
    opacity: 0.05;
    bottom: -20px;
    right: 20px;
  }
  .problem-card {
    background: linear-gradient(135deg, #ff6b6b15 0%, #ee5a2415 100%);
    border-left: 4px solid #ff6b6b;
    padding: 1.5rem;
    border-radius: 16px;
    margin: 1rem 0;
  }
  .solution-card {
    background: linear-gradient(135deg, #00897b15 0%, #4db6ac15 100%);
    border-left: 4px solid #00897b;
    padding: 1.5rem;
    border-radius: 16px;
    margin: 1rem 0;
  }
  .metric-bubble {
    display: inline-block;
    background: var(--md-primary-fg-color);
    color: white;
    border-radius: 40px;
    padding: 0.3rem 0.8rem;
    font-weight: bold;
    font-size: 0.8rem;
    margin: 0 0.2rem;
  }
  .comparison-table {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin: 2rem 0;
  }
  .comparison-item {
    text-align: center;
    padding: 1.5rem;
    border-radius: 16px;
    background: var(--md-default-bg-color);
  }
  .comparison-item.old {
    border: 1px solid #ff6b6b;
  }
  .comparison-item.new {
    border: 1px solid #00897b;
    background: linear-gradient(135deg, #00897b10 0%, #4db6ac10 100%);
  }
  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }
  .feature-item {
    padding: 1.5rem;
    border-radius: 20px;
    background: var(--md-default-bg-color);
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .feature-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.1);
  }
  .feature-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
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
    background: var(--md-default-bg-color);
    border-radius: 16px;
    border: 1px solid var(--md-default-fg-color--lightest);
  }
  .stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--md-primary-fg-color);
  }
  .progress-bar {
    background: var(--md-default-fg-color--lightest);
    border-radius: 10px;
    height: 8px;
    overflow: hidden;
  }
  .progress-fill {
    background: var(--md-primary-fg-color);
    height: 100%;
    border-radius: 10px;
    width: 0%;
    transition: width 1s ease;
  }
</style>

<div class="tech-header">
  <h1 style="color: white; font-size: 2.5rem;">🚀 UnBilidade</h1>
  <p style="font-size: 1.2rem; opacity: 0.9;">Sistema de Gestão Inteligente para Clínicas de Fisioterapia</p>
</div>

## 📊 Contexto de Negócio

O setor de clínicas de fisioterapia enfrenta um desafio único: **o tempo é o produto**. Cada hora não atendida representa receita perdida de forma irreversível.

<div class="stats">
  <div class="stat-card">
    <div class="stat-number">62%</div>
    <div class="stat-label">Das clínicas usam WhatsApp para agendamento</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">28%</div>
    <div class="stat-label">De cancelamentos de última hora</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">15h/sem</div>
    <div class="stat-label">Gastas pela secretária com agendamentos manuais</div>
  </div>
</div>

## 🔍 Análise de Causa (Ishikawa)

```mermaid
graph TD
    subgraph "Métodos"
        A1[WhatsApp] --> P[Problema Central]
        A2[Planilhas] --> P
        A3[Papel] --> P
    end
    subgraph "Tecnologia"
        B1[Sistemas Isolados] --> P
        B2[Falta de Automação] --> P
        B3[Sem API/Integração] --> P
    end
    subgraph "Pessoas"
        C1[Sobrecarga] --> P
        C2[Erro Humano] --> P
        C3[Retrabalho] --> P
    end
    P --> R["❌ Overbooking ❌ Evasão ❌ Insatisfação"]
    
    style P fill:#ff6b6b,color:white
    style R fill:#ff6b6b,color:white
⚠️ O Problema
<div class="problem-card"> <h3>🚨 A Fragmentação dos Processos</h3> <p>O modelo de atendimento atual é marcado pela <strong>descentralização</strong>, onde a marcação de consultas ocorre majoritariamente de forma manual através de redes sociais e aplicativos de mensagens instantâneas.</p> <p><strong>Consequências diretas:</strong></p> <ul> <li>📉 <strong>Overbooking</strong> - dupla reserva de horários</li> <li>💸 <strong>Evasão de horários</strong> - janelas vazias</li> <li>😰 <strong>Fadiga da equipe</strong> - tarefas repetitivas</li> <li>🔓 <strong>Insegurança de dados</strong> - informações espalhadas</li> </ul> </div>
💡 A Solução Proposta
<div class="solution-card"> <h3>✨ UnBilidade - Motor de Automação Inteligente</h3> <p>Uma plataforma web que atua como <strong>sistema centralizado de controle operacional</strong>, eliminando a dependência de processos manuais.</p> </div><div class="feature-grid"> <div class="feature-item"> <div class="feature-icon">🤖</div> <h4>Automação Inteligente</h4> <p>Preenchimento automático de vagas remanescentes em minutos</p> </div> <div class="feature-item"> <div class="feature-icon">🔔</div> <h4>Notificações Proativas</h4> <p>Lembretes automáticos 24h antes das consultas</p> </div> <div class="feature-item"> <div class="feature-icon">📊</div> <h4>Dashboards Analíticos</h4> <p>Métricas de ocupação e performance em tempo real</p> </div> <div class="feature-item"> <div class="feature-icon">🔒</div> <h4>LGPD Compliance</h4> <p>Dados clínicos protegidos com criptografia</p> </div> </div>
🎯 Declaração de Posição
<div class="comparison-table"> <div class="comparison-item old"> <h3>❌ Modelo Tradicional</h3> <p>📱 WhatsApp + 📝 Planilha + 📞 Telefone</p> <p>⏱️ Resposta: <strong>horas/dias</strong></p> <p>🎯 Taxa ocupação: <strong>65%</strong></p> </div> <div class="comparison-item new"> <h3>✨ UnBilidade</h3> <p>🤖 Automação + 🎯 Algoritmo + ⚡ Tempo real</p> <p>⏱️ Resposta: <strong>segundos</strong></p> <p>🎯 Taxa ocupação: <strong>92%+</strong></p> </div> </div>
👥 Personas e Jornadas
<div class="grid cards" markdown>
🧑‍⚕️ Fisioterapeuta
Visualiza agenda do dia

Registra evolução clínica

Remarca pacientes

👩‍💼 Secretária
Gerencia horários dos profissionais

Acompanha lista de atendimentos

Suporte ao paciente

🧑‍🤝‍🧑 Paciente
Marca online sem filas

Cancelamento autônomo

Histórico de consultas

</div>
📈 ROI Esperado
<div class="progress-bar" style="margin: 0.5rem 0;"> <div class="progress-fill" style="width: 40%;"></div> </div> <p><strong>Redução de cancelamentos:</strong> 28% → 12% <span class="metric-bubble">-57%</span></p><div class="progress-bar" style="margin: 0.5rem 0;"> <div class="progress-fill" style="width: 30%;"></div> </div> <p><strong>Aumento de ocupação:</strong> 65% → 92% <span class="metric-bubble">+42%</span></p><div class="progress-bar" style="margin: 0.5rem 0;"> <div class="progress-fill" style="width: 70%;"></div> </div> <p><strong>Tempo economizado da equipe:</strong> 15h/semana <span class="metric-bubble">-70%</span></p>
🎯 UnBilidade não é apenas uma agenda digital - é um ecossistema inteligente que transforma a gestão da clínica.