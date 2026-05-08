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
  .arch-layer {
    background: linear-gradient(90deg, #4CAF50, #2196F3);
    color: white;
    border-radius: 12px;
    padding: 1rem;
    margin: 0.5rem 0;
    text-align: center;
    font-weight: bold;
    position: relative;
    overflow: hidden;
  }
  .arch-layer::after {
    content: '▼';
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    animation: bounce 1s infinite;
  }
  .arch-layer:last-child::after {
    content: '✓';
  }
  @keyframes bounce {
    0%, 100% { transform: translateY(-50%) translateX(0); }
    50% { transform: translateY(-50%) translateX(5px); }
  }
  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
  }
  .tech-card {
    text-align: center;
    padding: 1rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: all 0.3s;
    cursor: pointer;
  }
  .tech-card:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 10px 25px rgba(76,175,80,0.3);
  }
  .code-block {
    background: #1e1e1e;
    color: #d4d4d4;
    padding: 1rem;
    border-radius: 12px;
    overflow-x: auto;
    font-family: monospace;
    font-size: 0.8rem;
  }
  
  /* DASHBOARD INTERATIVO DE FLUXOS */
  .flow-dashboard {
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    border-radius: 24px;
    padding: 1.5rem;
    margin: 2rem 0;
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    border: 1px solid rgba(76, 175, 80, 0.3);
  }
  .flow-tabs {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
  }
  .flow-tab {
    background: rgba(255,255,255,0.1);
    border: none;
    padding: 0.7rem 1.5rem;
    border-radius: 30px;
    color: white;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: bold;
  }
  .flow-tab.active {
    background: linear-gradient(135deg, #4CAF50, #2196F3);
    box-shadow: 0 0 15px rgba(76,175,80,0.5);
  }
  .flow-tab:hover {
    transform: scale(1.05);
  }
  .flow-content {
    display: none;
    animation: fadeIn 0.5s ease;
  }
  .flow-content.active {
    display: block;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .flow-step {
    display: flex;
    align-items: center;
    margin: 1rem 0;
    padding: 0.8rem;
    background: rgba(255,255,255,0.05);
    border-radius: 12px;
    transition: all 0.3s;
  }
  .flow-step:hover {
    background: rgba(76,175,80,0.2);
    transform: translateX(10px);
  }
  .step-number {
    width: 40px;
    height: 40px;
    background: #4CAF50;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-right: 1rem;
    font-size: 1.2rem;
  }
  .step-arrow {
    margin: 0 1rem;
    color: #4CAF50;
    font-size: 1.5rem;
    animation: pulse 1s infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
  .step-line {
    flex: 1;
    border-bottom: 2px dashed rgba(255,255,255,0.2);
    margin: 0.5rem 0;
  }
  .api-card {
    background: rgba(0,0,0,0.5);
    border-radius: 12px;
    padding: 0.5rem;
    margin: 0.3rem 0;
    font-family: monospace;
    font-size: 0.8rem;
  }
  .method-post { color: #4CAF50; font-weight: bold; }
  .method-get { color: #2196F3; font-weight: bold; }
  .method-delete { color: #f44336; font-weight: bold; }
  .method-put { color: #FF9800; font-weight: bold; }
</style>

<div class="tech-header">
  <h1 style="color: white;">🏗️ Arquitetura do Sistema</h1>
  <p>Next.js + Supabase + Vercel</p>
</div>

## 🌐 Visão Geral da Arquitetura

<div class="arch-layer">🌍 Navegador (React SPA)</div>
<div class="arch-layer">⚡ CDN Vercel (Edge Network)</div>
<div class="arch-layer">🚀 Next.js (Front-end + API Routes)</div>
<div class="arch-layer">🛡️ Middleware (Auth + CORS + Rate Limit)</div>
<div class="arch-layer">📦 Supabase (PostgreSQL + Auth + Storage)</div>

## 📦 Stack Tecnológica

<div class="tech-grid">
  <div class="tech-card">⚛️ React 18<br><small>UI Library</small></div>
  <div class="tech-card">▲ Next.js 14<br><small>Framework</small></div>
  <div class="tech-card">📘 TypeScript<br><small>Tipagem</small></div>
  <div class="tech-card">🐘 Supabase<br><small>Database</small></div>
  <div class="tech-card">✅ Zod<br><small>Validação</small></div>
  <div class="tech-card">🧪 Vitest<br><small>Testes</small></div>
  <div class="tech-card">🚂 Supertest<br><small>API Tests</small></div>
  <div class="tech-card">📧 Resend<br><small>Emails</small></div>
</div>

---

## 🔄 FLUXOS INTERATIVOS DO SISTEMA

<div class="flow-dashboard">
  <div class="flow-tabs">
    <button class="flow-tab active" onclick="showFlow('auth')">🔐 Autenticação</button>
    <button class="flow-tab" onclick="showFlow('agendamento')">📅 Agendamento</button>
    <button class="flow-tab" onclick="showFlow('cancelamento')">❌ Cancelamento</button>
    <button class="flow-tab" onclick="showFlow('webhook')">📧 Notificação</button>
  </div>

  <!-- FLUXO DE AUTENTICAÇÃO -->
  <div id="flow-auth" class="flow-content active">
    <div style="color: white; margin-bottom: 1rem;">🔐 Fluxo de Login e Autenticação</div>
    <div class="flow-step">
      <div class="step-number">1</div>
      <div>👤 Usuário digita e-mail e senha no Front-end</div>
      <div class="step-arrow">→</div>
      <div class="api-card"><span class="method-post">POST</span> /api/auth/login</div>
    </div>
    <div class="flow-step">
      <div class="step-number">2</div>
      <div>🚀 Front-end envia requisição para API Route</div>
      <div class="step-arrow">→</div>
      <div>Validação com <strong>Zod</strong></div>
    </div>
    <div class="flow-step">
      <div class="step-number">3</div>
      <div>🗄️ API consulta Supabase (verifica credenciais)</div>
      <div class="step-arrow">→</div>
      <div><span class="method-post">SELECT</span> * FROM users WHERE email = ?</div>
    </div>
    <div class="flow-step">
      <div class="step-number">4</div>
      <div>✅ Supabase retorna usuário válido</div>
      <div class="step-arrow">→</div>
      <div>Status: <span style="color:#4CAF50;">200 OK</span></div>
    </div>
    <div class="flow-step">
      <div class="step-number">5</div>
      <div>🔑 API gera Token JWT</div>
      <div class="step-arrow">→</div>
      <div>Expira em 24h</div>
    </div>
    <div class="flow-step">
      <div class="step-number">6</div>
      <div>🎉 Front-end armazena token e redireciona</div>
      <div class="step-arrow">→</div>
      <div>Login concluído com sucesso!</div>
    </div>
  </div>

  <!-- FLUXO DE AGENDAMENTO -->
  <div id="flow-agendamento" class="flow-content">
    <div style="color: white; margin-bottom: 1rem;">📅 Fluxo de Agendamento (com reserva de 5min)</div>
    <div class="flow-step">
      <div class="step-number">1</div>
      <div>👤 Paciente seleciona horário disponível na agenda</div>
      <div class="step-arrow">→</div>
      <div class="api-card"><span class="method-post">POST</span> /api/appointments/reserve</div>
    </div>
    <div class="flow-step">
      <div class="step-number">2</div>
      <div>🔒 API bloqueia horário no banco de dados</div>
      <div class="step-arrow">→</div>
      <div>Status: <strong>reserved</strong> + expires_at = NOW() + 5min</div>
    </div>
    <div class="flow-step">
      <div class="step-number">3</div>
      <div>⏳ Horário fica reservado por 5 minutos</div>
      <div class="step-arrow">→</div>
      <div>Paciente tem tempo para preencher dados</div>
    </div>
    <div class="flow-step" style="background: rgba(76,175,80,0.15);">
      <div class="step-number">4</div>
      <div>✅ Paciente confirma o agendamento</div>
      <div class="step-arrow">→</div>
      <div class="api-card"><span class="method-put">PUT</span> /api/appointments/confirm</div>
    </div>
    <div class="flow-step">
      <div class="step-number">5</div>
      <div>📧 Sistema envia e-mail de confirmação</div>
      <div class="step-arrow">→</div>
      <div>via <strong>Resend</strong> API</div>
    </div>
    <div class="flow-step">
      <div class="step-number">6</div>
      <div>🎉 Status atualizado para <strong>confirmed</strong></div>
      <div class="step-arrow">→</div>
      <div>Consulta marcada com sucesso!</div>
    </div>
    <div class="flow-step" style="background: rgba(255,152,0,0.1);">
      <div class="step-number">⚠️</div>
      <div>Se o paciente não confirmar em 5 minutos...</div>
      <div class="step-arrow">→</div>
      <div>Horário é <strong>liberado automaticamente</strong> para novos agendamentos</div>
    </div>
  </div>

  <!-- FLUXO DE CANCELAMENTO -->
  <div id="flow-cancelamento" class="flow-content">
    <div style="color: white; margin-bottom: 1rem;">❌ Fluxo de Cancelamento (regra de 24h)</div>
    <div class="flow-step">
      <div class="step-number">1</div>
      <div>👤 Paciente acessa "Minhas Consultas"</div>
      <div class="step-arrow">→</div>
      <div class="api-card"><span class="method-get">GET</span> /api/appointments?status=confirmed</div>
    </div>
    <div class="flow-step">
      <div class="step-number">2</div>
      <div>❌ Clica em "Cancelar" na consulta desejada</div>
      <div class="step-arrow">→</div>
      <div class="api-card"><span class="method-delete">DELETE</span> /api/appointments/{id}</div>
    </div>
    <div class="flow-step">
      <div class="step-number">3</div>
      <div>⚖️ API verifica antecedência (>= 24h?)</div>
      <div class="step-arrow">→</div>
      <div>Calcula diferença entre hoje e data da consulta</div>
    </div>
    <div class="flow-step" style="background: rgba(76,175,80,0.15);">
      <div class="step-number">✅</div>
      <div>Se >= 24h: cancelamento permitido</div>
      <div class="step-arrow">→</div>
      <div>Status: <strong>cancelled</strong></div>
    </div>
    <div class="flow-step" style="background: rgba(244,67,54,0.15);">
      <div class="step-number">❌</div>
      <div>Se < 24h: cancelamento bloqueado</div>
      <div class="step-arrow">→</div>
      <div>Mensagem: "Cancelamento permitido apenas com 24h de antecedência"</div>
    </div>
    <div class="flow-step">
      <div class="step-number">✨</div>
      <div>Após cancelamento válido, sistema libera vaga</div>
      <div class="step-arrow">→</div>
      <div>Notifica próximos pacientes da lista de espera</div>
    </div>
  </div>

  <!-- FLUXO DE WEBHOOK -->
  <div id="flow-webhook" class="flow-content">
    <div style="color: white; margin-bottom: 1rem;">📧 Fluxo de Notificação por E-mail</div>
    <div class="flow-step">
      <div class="step-number">1</div>
      <div>📅 Agendamento ou remarcação é confirmado</div>
      <div class="step-arrow">→</div>
      <div>Evento disparado no sistema</div>
    </div>
    <div class="flow-step">
      <div class="step-number">2</div>
      <div>📧 Sistema chama API do Resend</div>
      <div class="step-arrow">→</div>
      <div class="api-card"><span class="method-post">POST</span> https://api.resend.com/emails</div>
    </div>
    <div class="flow-step">
      <div class="step-number">3</div>
      <div>📨 Template de e-mail é preenchido</div>
      <div class="step-arrow">→</div>
      <div>Nome, data, horário, profissional, localização</div>
    </div>
    <div class="flow-step">
      <div class="step-number">4</div>
      <div>📬 E-mail é enviado para o paciente</div>
      <div class="step-arrow">→</div>
      <div>Lembrete 24h antes também é agendado</div>
    </div>
    <div class="flow-step">
      <div class="step-number">5</div>
      <div>✅ Status do envio é registrado no sistema</div>
      <div class="step-arrow">→</div>
      <div>Webhook confirma entrega (bounce tracking)</div>
    </div>
  </div>
</div>

---

## 🔧 Rotas da API

<div class="code-block">
<pre>
/api
├── /auth
│   ├── POST /login      <span style="color:#4CAF50;"># Login do usuario</span>
│   ├── POST /register   <span style="color:#4CAF50;"># Cadastro</span>
│   └── POST /logout     <span style="color:#4CAF50;"># Sair</span>
├── /appointments
│   ├── GET /            <span style="color:#4CAF50;"># Listar agendamentos</span>
│   ├── POST /           <span style="color:#4CAF50;"># Criar agendamento</span>
│   ├── POST /reserve    <span style="color:#4CAF50;"># Reservar (5 min)</span>
│   ├── PUT /[id]        <span style="color:#4CAF50;"># Atualizar</span>
│   └── DELETE /[id]     <span style="color:#4CAF50;"># Cancelar</span>
├── /patients
│   ├── GET /[id]        <span style="color:#4CAF50;"># Dados do paciente</span>
│   └── PUT /[id]        <span style="color:#4CAF50;"># Atualizar dados</span>
├── /professionals
│   ├── GET /            <span style="color:#4CAF50;"># Listar profissionais</span>
│   └── GET /[id]/schedule <span style="color:#4CAF50;"># Agenda</span>
└── /webhooks
    └── POST /resend     <span style="color:#4CAF50;"># Callbacks de e-mail</span>
</pre>
</div>

## 🗄️ Modelo de Dados

<div class="code-block">
<pre>
model Paciente {
  id              String   @id
  nome            String
  cpf             String   @unique
  email           String   @unique
  telefone        String
  dataNascimento  DateTime
  endereco        String?
  convenio        String?
}

model Agendamento {
  id              String    @id
  pacienteId      String
  profissionalId  String
  dataHora        DateTime
  tipo            String    # PRESENCIAL/DOMICILIAR
  status          String    # RESERVED/CONFIRMED/CANCELLED
  reservaExpiracao DateTime? # 5 minutos após reserva
}
</pre>
</div>

## 🚀 CI/CD Pipeline

<div class="code-block">
<pre>
name: Deploy para Vercel

on:
  push:
    branches: [main, develop]

jobs:
  test-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run test:unit
      - run: npm run test:integration
      - run: npm run build
      - uses: amondnet/vercel-action@v20
</pre>
</div>

<script>
function showFlow(flowName) {
  // Esconde todos os conteudos
  document.querySelectorAll('.flow-content').forEach(content => {
    content.classList.remove('active');
  });
  // Remove active de todas as tabs
  document.querySelectorAll('.flow-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  // Mostra o selected
  const selectedContent = document.getElementById(`flow-${flowName}`);
  if (selectedContent) selectedContent.classList.add('active');
  // Marca a tab correspondente
  const buttons = document.querySelectorAll('.flow-tab');
  const index = { 'auth': 0, 'agendamento': 1, 'cancelamento': 2, 'webhook': 3 };
  if (buttons[index[flowName]]) buttons[index[flowName]].classList.add('active');
}
</script>

---

> **Decisões técnicas:**
> - ✅ Next.js unifica front-end + API em um único projeto
> - ✅ Supabase oferece PostgreSQL com Row Level Security
> - ✅ Vercel faz deploy contínuo a cada push no GitHub