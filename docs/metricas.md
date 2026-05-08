<style>
  .tech-header {
    background: linear-gradient(135deg, #4CAF50 0%, #2196F3 100%);
    border-radius: 24px;
    padding: 2rem;
    margin-bottom: 2rem;
    color: white;
    text-align: center;
  }
  .dashboard-card {
    background: white;
    border-radius: 16px;
    padding: 1.5rem;
    margin: 1rem 0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  .metric-value {
    font-size: 2rem;
    font-weight: bold;
    color: #4CAF50;
  }
  .status-green { color: #4CAF50; font-weight: bold; }
  .status-yellow { color: #FF9800; font-weight: bold; }
  .status-red { color: #f44336; font-weight: bold; }
  .progress-bar {
    background: #e0e0e0;
    border-radius: 10px;
    height: 8px;
  }
  .progress-fill {
    background: #4CAF50;
    height: 100%;
    border-radius: 10px;
  }
</style>

<div class="tech-header">
  <h1 style="color: white;">📊 Métricas e Medições</h1>
  <p>Framework GQM (Goal-Question-Metric)</p>
</div>

## 🎯 Objetivo

> Identificar situações que indicam necessidade de replanejamento durante o desenvolvimento, garantindo entregas no prazo.

## ❓ Perguntas

| ID | Pergunta |
|:---|:---|
| Q1 | A participação da equipe é balanceada? |
| Q2 | A qualidade das entregas está dentro do esperado? |
| Q3 | A distribuição de tarefas está equilibrada? |
| Q4 | O entregue corresponde ao planejado? |

## 📈 Dashboard - Sprint 2

<div class="dashboard-card">
  <h3>📊 Visão Geral</h3>
  <p><strong>Sprint:</strong> 02/05 a 16/05 - MVP e Arquitetura</p>
  <p><strong>Progresso:</strong> 40%</p>
  <div class="progress-bar"><div class="progress-fill" style="width: 40%;"></div></div>
</div>

### M1 - Participação (Q1)

| Métrica | Valor | Status |
|:---|:---|:---|
| Presença em reuniões | 92% | ✅ Saudável |
| Cumprimento de tarefas | 85% | ✅ Saudável |

### M2 - Qualidade (Q2)

| Métrica | Valor | Status |
|:---|:---|:---|
| Testes aprovados | 94% | ✅ Saudável |
| Débito técnico/PR | 2.3 | ✅ Baixo |

### M3 - Distribuição (Q3)

| Métrica | Quantidade |
|:---|:---|
| Commits Front-end | 43 |
| Commits Back-end | 38 |
| Commits DevOps | 12 |
| Commits Documentação | 8 |

### M4 - Alinhamento (Q4)

| Métrica | Valor | Status |
|:---|:---|:---|
| Velocidade | 32/40 story points | ⚠️ 80% |
| Histórias não concluídas | 2 | ⚠️ Monitorar |

## 🔔 Gatilhos de Replanejamento

| Nível | Condições |
|:---|:---|
| 🔴 **Alto Risco** | Testes < 80% por 2 sprints / Escopo entregue < 70% / Membro com >40% de atraso |
| 🟡 **Médio Risco** | Burndown com desvio por 3 dias / Débito técnico >5 por PR / Presença < 75% |

## 📊 Gráfico de Burndown

```mermaid
graph LR
    subgraph "Burndown Sprint 2"
        D1["Dia 1<br>40pts"] --> D2["Dia 2<br>38pts"]
        D2 --> D3["Dia 3<br>32pts"]
        D3 --> D4["Dia 4<br>28pts"]
        D4 --> D5["Dia 5<br>24pts"]
    end
📋 Coleta de Dados
Fonte	Dados	Periodicidade
GitHub	Commits, PRs	Contínua
Jira	Story points	Diária
Vitest	Cobertura de testes	A cada push
Planilha	Presenças	Semanal
🎯 Meta Sprint 3: 90% de entrega do escopo e 85%+ de cobertura de testes
```