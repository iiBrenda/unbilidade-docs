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
    content: '🧪';
    position: absolute;
    font-size: 8rem;
    opacity: 0.05;
    bottom: -20px;
    right: 20px;
  }
  .test-pyramid {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
  }
  .pyramid-level {
    width: 100%;
    text-align: center;
    padding: 0.8rem;
    margin: 0.1rem 0;
    border-radius: 8px;
    font-weight: bold;
  }
  .e2e { width: 30%; background: #ff6b6b; color: white; }
  .integration { width: 50%; background: #ff9800; color: white; }
  .unit { width: 80%; background: #4caf50; color: white; }
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
  .test-matrix {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
  }
  .dashboard-card {
    background: var(--md-default-bg-color);
    border-radius: 20px;
    padding: 1.5rem;
    margin: 1rem 0;
    border: 1px solid var(--md-default-fg-color--lightest);
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
  .status-green {
    color: #4caf50;
    font-weight: bold;
  }
  .status-yellow {
    color: #ff9800;
    font-weight: bold;
  }
</style>

<div class="tech-header">
  <h1 style="color: white;">🧪 Testes de Software</h1>
  <p>Estratégia completa de qualidade e confiabilidade</p>
</div>

## 🏔️ Pirâmide de Testes

<div class="test-pyramid">
  <div class="pyramid-level e2e">E2E / Sistema (Playwright)</div>
  <div class="pyramid-level integration">Integração (Supertest)</div>
  <div class="pyramid-level unit">Unitário (Vitest)</div>
</div>

## 📊 Cobertura de Testes (Meta: 80%)

<div class="progress-bar">
  <div class="progress-fill" style="width: 68%;"></div>
</div>
<p><strong>Cobertura atual:</strong> 68% | 🔄 Em progresso</p>

## 🎯 Estratégia de Testes

<div class="test-matrix">
  <div class="dashboard-card">
    <h3>✅ Testes Unitários (Vitest)</h3>
    <p>Validam funções isoladas</p>
    <code>isCancelamentoPermitido(date) → boolean</code>
    <p><span class="badge-pass">✓ 23/23 passando</span></p>
  </div>
  <div class="dashboard-card">
    <h3>🔗 Testes de Integração (Supertest)</h3>
    <p>API Routes + Banco de dados</p>
    <code>POST /api/appointments → 201</code>
    <p><span class="badge-pass">✓ 15/16 passando</span> <span class="badge-fail">✗ 1 falhando</span></p>
  </div>
  <div class="dashboard-card">
    <h3>🎭 Testes E2E (Playwright)</h3>
    <p>Fluxo completo do usuário</p>
    <code>Login → Agendar → Confirmar</code>
    <p><span class="badge-pass">✓ 8/10 passando</span> <span class="badge-fail">✗ 2 falhando</span></p>
  </div>
</div>

## 📋 Roteiro de Testes Detalhado

### Testes Unitários (TU)

| Código | Teste | Entrada | Saída Esperada | Status |
|:---|:---|:---|:---|:---|
| TU-01 | Validação CPF | "123.456.789-09" | ✅ Válido | <span class="badge-pass">PASS</span> |
| TU-02 | Validação CPF inválido | "111.111.111-11" | ❌ Inválido | <span class="badge-pass">PASS</span> |
| TU-03 | Cálculo lembrete 24h | data=+2 dias | "24h antes" | <span class="badge-pass">PASS</span> |
| TU-04 | Lembrete imediato | data=+12h | "enviar agora" | <span class="badge-pass">PASS</span> |
| TU-05 | Cancelamento permitido | data=+2 dias | ✅ true | <span class="badge-pass">PASS</span> |
| TU-06 | Cancelamento bloqueado | data=+12h | ❌ false | <span class="badge-pass">PASS</span> |

### Testes de Integração (TI)

| Código | Teste | Endpoint | Status |
|:---|:---|:---|:---|
| TI-01 | Cadastro válido | POST /api/auth/register | <span class="badge-pass">PASS</span> |
| TI-02 | E-mail duplicado | POST /api/auth/register | <span class="badge-pass">PASS</span> |
| TI-03 | Login correto | POST /api/auth/login | <span class="badge-pass">PASS</span> |
| TI-04 | Senha errada | POST /api/auth/login | <span class="badge-pass">PASS</span> |
| TI-05 | Reserva de horário | POST /api/appointments/reserve | <span class="badge-fail">FAIL</span> |
| TI-06 | Agendar conflito | POST /api/appointments | <span class="badge-pass">PASS</span> |

### Testes E2E (TA)

| Código | Cenário | Status |
|:---|:---|:---|
| TA-01 | Agendamento completo (Login → Calendário → Confirmar) | <span class="badge-pass">PASS</span> |
| TA-02 | Cancelamento com antecedência < 24h | <span class="badge-pass">PASS</span> |
| TA-03 | Remarcação de consulta | <span class="badge-fail">FAIL</span> |
| TA-04 | Upload de laudo (PDF) | <span class="badge-pass">PASS</span> |

## 🔧 Pipeline de Testes (CI/CD)

```yaml
# .github/workflows/test.yml
name: Test Suite

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run test:unit      # Vitest
      - run: npm run test:integration # Supertest
      - run: npm run test:e2e        # Playwright
      - run: npm run coverage        # Relatório
📈 Métricas de Teste
Métrica	Valor Atual	Meta	Status
Cobertura de código	68%	80%	<span class="status-yellow">⚠️ Em progresso</span>
Testes unitários	23	25	<span class="status-green">✅ 92%</span>
Testes integração	15	18	<span class="status-yellow">⚠️ 83%</span>
Testes E2E	8	12	<span class="status-yellow">⚠️ 67%</span>
🔄 Fluxo de Qualidade
graph LR
    C[Commit] --> T1[Unit Tests]
    T1 -->|Pass| T2[Integration Tests]
    T1 -->|Fail| F1[❌ Fix]
    T2 -->|Pass| T3[E2E Tests]
    T2 -->|Fail| F2[❌ Fix]
    T3 -->|Pass| D[🚀 Deploy]
    T3 -->|Fail| F3[❌ Fix]
    
    style C fill:#00897b,color:white
    style D fill:#4caf50,color:white
    style F1 fill:#f44336,color:white
    style F2 fill:#f44336,color:white
    style F3 fill:#f44336,color:white