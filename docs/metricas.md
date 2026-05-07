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
    content: '📊';
    position: absolute;
    font-size: 8rem;
    opacity: 0.05;
    bottom: -20px;
    right: 20px;
  }
  .gqm-flow {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin: 2rem 0;
  }
  .gqm-card {
    flex: 1;
    text-align: center;
    padding: 1.5rem;
    border-radius: 16px;
    background: linear-gradient(135deg, #00897b20 0%, #4db6ac20 100%);
  }
  .dashboard-card {
    background: var(--md-default-bg-color);
    border-radius: 20px;
    padding: 1.5rem;
    margin: 1rem 0;
    border: 1px solid var(--md-default-fg-color--lightest);
  }
  .metric-value {
    font-size: 2rem;
    font-weight: bold;
    color: var(--md-primary-fg-color);
  }
  .status-green {
    color: #4caf50;
    font-weight: bold;
  }
  .status-yellow {
    color: #ff9800;
    font-weight: bold;
  }
  .status-red {
    color: #f44336;
    font-weight: bold;
  }
  .badge-pass {
    background: #4caf50;
    color: white;
    border-radius: 20px;
    padding: 0.2rem 0.6rem;
    font-size: 0.7rem;
  }
  .badge-fail {
    background: #f44336;
    color: white;
    border-radius: 20px;
    padding: 0.2rem 0.6rem;
    font-size: 0.7rem;
  }
  .progress-bar {
    background: var(--md-default-fg-color--lightest);
    border-radius: 10px;
    height: 8px;
    overflow: hidden;
    margin: 0.5rem 0;
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
  <h1 style="color: white;">📊 Métricas e Medições</h1>
  <p>Goal-Question-Metric (GQM) Framework</p>
</div>

## 🎯 GQM Framework

<div class="gqm-flow">
  <div class="gqm-card">
    <div style="font-size: 2rem;">🎯</div>
    <h3>Goal</h3>
    <small>O que queremos alcançar?</small>
  </div>
  <div class="gqm-card">
    <div style="font-size: 2rem;">❓</div>
    <h3>Question</h3>
    <small>O que precisamos saber?</small>
  </div>
  <div class="gqm-card">
    <div style="font-size: 2rem;">📈</div>
    <h3>Metric</h3>
    <small>Como medimos?</small>
  </div>
</div>

## 🎯 Objetivo (Goal)

> **Identificar proativamente sinais de desvio no planejamento e na execução do desenvolvimento do UnBilidade**, garantindo a entrega contínua de valor dentro do cronograma.

## ❓ Perguntas (Questions)

| ID | Pergunta |
|:---|:---|
| Q1 | A equipe está participando de forma balanceada? |
| Q2 | A qualidade das entregas está dentro do esperado? |
| Q3 | A distribuição de tarefas está equilibrada? |
| Q4 | O entregue corresponde ao planejado? |

## 📈 Dashboard de Métricas (Sprint 2)

<div class="dashboard-card">
  <h3>📊 Visão Geral da Sprint</h3>
  <table>
    <tr>
      <td><strong>Sprint</strong></td>
      <td colspan="3">Sprint 2 - MVP e Arquitetura (02/05 a 16/05)</td>
    </tr>
    <tr>
      <td><strong>Progresso</strong></td>
      <td colspan="3">
        <div class="progress-bar"><div class="progress-fill" style="width: 40%;"></div></div>
        40% concluído
      </td>
    </tr>
  </table>
</div>

### M1 - Participação da Equipe (Q1)

| Métrica | Valor | Status |
|:---|:---|:---|
| Taxa de presença em reuniões | 92% | <span class="status-green">✅ Saudável</span> |
| Cumprimento de tarefas | 85% | <span class="status-green">✅ Saudável</span> |

### M2 - Qualidade das Entregas (Q2)

| Métrica | Valor | Status |
|:---|:---|:---|
| Taxa de aceitação dos testes | 94% | <span class="status-green">✅ Saudável</span> |
| Débito técnico por PR | 2.3 | <span class="status-green">✅ Baixo</span> |

### M3 - Distribuição de Trabalho (Q3)

<div style="display: flex; gap: 1rem; margin: 1rem 0;">
  <div style="flex:1; text-align:center;">
    <div class="metric-value">43</div>
    <small>Commits Front-end</small>
  </div>
  <div style="flex:1; text-align:center;">
    <div class="metric-value">38</div>
    <small>Commits Back-end</small>
  </div>
  <div style="flex:1; text-align:center;">
    <div class="metric-value">12</div>
    <small>Commits DevOps</small>
  </div>
  <div style="flex:1; text-align:center;">
    <div class="metric-value">8</div>
    <small>Commits Doc</small>
  </div>
</div>

### M4 - Alinhamento (Q4)

| Métrica | Valor | Status |
|:---|:---|:---|
| Velocidade da equipe | 32/40 story points | <span class="status-yellow">⚠️ 80%</span> |
| Histórias não concluídas | 2 | <span class="status-yellow">⚠️ Monitorar</span> |

## 🔔 Gatilhos de Replanejamento

<div class="grid cards" markdown>

-   ### 🔴 Alto Risco - Ação Imediata
    
    - Testes < 80% por 2 sprints
    - Escopo entregue < 70%
    - Membro com >40% de atraso
    
-   ### 🟡 Médio Risco - Monitorar
    
    - Burndown com desvio por 3 dias
    - Débito técnico >5/PR
    - Presença < 75%

</div>

## 📊 Burndown Chart - Sprint 2

```mermaid
graph LR
    subgraph "Burndown Sprint 2"
        D1["Dia 1<br>40pts"] --> D2["Dia 2<br>38pts"]
        D2 --> D3["Dia 3<br>32pts"]
        D3 --> D4["Dia 4<br>28pts"]
        D4 --> D5["Dia 5<br>24pts"]
    end
    
    style D1 fill:#00897b,color:white
    style D2 fill:#00897b,color:white
    style D3 fill:#4db6ac,color:white
    style D4 fill:#ff9800,color:white
    style D5 fill:#ff9800,color:white
📋 Relatório de Coleta de Dados
Fonte	Dados Coletados	Periodicidade
GitHub	Commits, PRs, revisões	Contínua
Jira	Story points, tarefas, burndown	Diária
Vitest/Supertest	Cobertura, sucesso testes	A cada push
Planilha	Presenças, participação	Semanal
🎯 Próxima Sprint: Meta de 90% de entrega do escopo e 85%+ de cobertura de testes