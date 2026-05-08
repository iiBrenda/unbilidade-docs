<style>
  .tech-header {
    background: linear-gradient(135deg, #4CAF50 0%, #2196F3 100%);
    border-radius: 24px;
    padding: 2rem;
    margin-bottom: 2rem;
    color: white;
    text-align: center;
  }
  .badge-pass { background: #4CAF50; color: white; border-radius: 20px; padding: 0.2rem 0.6rem; font-size: 0.7rem; }
  .badge-fail { background: #f44336; color: white; border-radius: 20px; padding: 0.2rem 0.6rem; font-size: 0.7rem; }
  .status-green { color: #4CAF50; font-weight: bold; }
  .status-yellow { color: #FF9800; font-weight: bold; }
  .progress-bar { background: #e0e0e0; border-radius: 10px; height: 8px; }
  .progress-fill { background: #4CAF50; height: 100%; border-radius: 10px; }
  .code-block {
    background: #1e1e1e;
    color: #d4d4d4;
    padding: 1rem;
    border-radius: 12px;
    overflow-x: auto;
    font-family: monospace;
    font-size: 0.8rem;
  }
</style>

<div class="tech-header">
  <h1 style="color: white;">🧪 Testes de Software</h1>
  <p>Garantia de qualidade e confiabilidade</p>
</div>

## 🏔️ Pirâmide de Testes

| Nível | Ferramenta | Cobertura |
|:---|:---|:---|
| 🎭 **E2E (Sistema)** | Playwright | 30% da pirâmide |
| 🔗 **Integração** | Supertest | 50% da pirâmide |
| ✅ **Unitário** | Vitest | 80% da pirâmide |

## 📊 Cobertura Atual (Meta: 80%)

<div class="progress-bar"><div class="progress-fill" style="width: 68%;"></div></div>
<p><strong>68%</strong> - Em progresso</p>

## 📋 Roteiro de Testes Unitários

| Código | Teste | Entrada | Resultado | Status |
|:---|:---|:---|:---|:---|
| TU-01 | Validar CPF | "123.456.789-09" | ✅ Válido | ✅ PASS |
| TU-02 | Validar CPF inválido | "111.111.111-11" | ❌ Inválido | ✅ PASS |
| TU-03 | Cancelamento permitido | data com +24h | ✅ true | ✅ PASS |
| TU-04 | Cancelamento bloqueado | data com -24h | ❌ false | ✅ PASS |

## 📋 Testes de Integração

| Código | Teste | Endpoint | Status |
|:---|:---|:---|:---|
| TI-01 | Cadastro válido | POST /api/auth/register | ✅ PASS |
| TI-02 | E-mail duplicado | POST /api/auth/register | ✅ PASS |
| TI-03 | Login correto | POST /api/auth/login | ✅ PASS |
| TI-04 | Senha errada | POST /api/auth/login | ✅ PASS |
| TI-05 | Reserva de horário | POST /api/appointments/reserve | ❌ FAIL |

## 📋 Testes E2E

| Código | Cenário | Status |
|:---|:---|:---|
| TA-01 | Agendamento completo | ✅ PASS |
| TA-02 | Cancelamento com -24h | ✅ PASS |
| TA-03 | Remarcação de consulta | ❌ FAIL |
| TA-04 | Upload de laudo PDF | ✅ PASS |

## 📈 Métricas de Teste

| Métrica | Valor Atual | Meta | Status |
|:---|:---|:---|:---|
| Cobertura de código | 68% | 80% | ⚠️ Em progresso |
| Testes unitários | 23/25 | 25 | ✅ 92% |
| Testes integração | 15/18 | 18 | ⚠️ 83% |
| Testes E2E | 8/12 | 12 | ⚠️ 67% |

## 🔧 Pipeline de Testes (CI/CD)

<div class="code-block">
<pre>
name: Suite de Testes

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
      - run: npm run test:integration  # Supertest
      - run: npm run test:e2e       # Playwright
      - run: npm run coverage       # Relatório
</pre>
</div>

## 🔄 Fluxo de Qualidade

```mermaid
graph LR
    C[Commit] --> T1[Testes Unitários]
    T1 -->|Passou| T2[Testes Integração]
    T1 -->|Falhou| F1[❌ Corrigir]
    T2 -->|Passou| T3[Testes E2E]
    T2 -->|Falhou| F2[❌ Corrigir]
    T3 -->|Passou| D[🚀 Deploy]
    T3 -->|Falhou| F3[❌ Corrigir]
✅ Critério de "Pronto": 100% dos testes passando + cobertura ≥ 80%
```