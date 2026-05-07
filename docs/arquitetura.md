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
    content: '🏗️';
    position: absolute;
    font-size: 8rem;
    opacity: 0.05;
    bottom: -20px;
    right: 20px;
  }
  .architecture-flow {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem 0;
  }
  .arch-layer {
    background: linear-gradient(90deg, var(--md-primary-fg-color) 0%, var(--md-accent-fg-color) 100%);
    border-radius: 12px;
    padding: 1rem;
    color: white;
    position: relative;
  }
  .arch-layer::after {
    content: '▼';
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.2rem;
  }
  .arch-layer:last-child::after {
    display: none;
  }
  .tech-stack-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
  }
  .tech-card {
    text-align: center;
    padding: 1rem;
    border-radius: 12px;
    background: var(--md-default-bg-color);
    border: 1px solid var(--md-default-fg-color--lightest);
    transition: transform 0.2s;
  }
  .tech-card:hover {
    transform: scale(1.05);
  }
  .tech-icon {
    font-size: 2rem;
  }
  .api-route {
    background: #1a1a2e;
    color: #4db6ac;
    font-family: monospace;
    padding: 0.2rem 0.5rem;
    border-radius: 6px;
    display: inline-block;
  }
</style>

<div class="tech-header">
  <h1 style="color: white;">🏗️ Arquitetura do Sistema</h1>
  <p>Next.js + Supabase + Vercel</p>
</div>

## 🌐 Visão Geral da Arquitetura

<div class="architecture-flow">
  <div class="arch-layer">🌍 Cliente (Browser) - React SPA</div>
  <div class="arch-layer">⚡ CDN Vercel - Edge Network</div>
  <div class="arch-layer">🚀 Next.js App - Front-end + API Routes</div>
  <div class="arch-layer">🛡️ Middleware (Auth + CORS + Rate Limit)</div>
  <div class="arch-layer">📦 Supabase (PostgreSQL + Auth + Storage)</div>
</div>

## 📦 Stack Tecnológica

<div class="tech-stack-grid">
  <div class="tech-card">
    <div class="tech-icon">⚛️</div>
    <strong>React.js 18</strong><br>
    <small>UI Library</small>
  </div>
  <div class="tech-card">
    <div class="tech-icon">▲</div>
    <strong>Next.js 14</strong><br>
    <small>Framework Full-Stack</small>
  </div>
  <div class="tech-card">
    <div class="tech-icon">📘</div>
    <strong>TypeScript</strong><br>
    <small>Tipagem Estática</small>
  </div>
  <div class="tech-card">
    <div class="tech-icon">🐘</div>
    <strong>Supabase</strong><br>
    <small>PostgreSQL + Auth</small>
  </div>
  <div class="tech-card">
    <div class="tech-icon">✅</div>
    <strong>Zod</strong><br>
    <small>Validação</small>
  </div>
  <div class="tech-card">
    <div class="tech-icon">🧪</div>
    <strong>Vitest</strong><br>
    <small>Testes Unitários</small>
  </div>
  <div class="tech-card">
    <div class="tech-icon">🚂</div>
    <strong>Supertest</strong><br>
    <small>Testes API</small>
  </div>
  <div class="tech-card">
    <div class="tech-icon">📧</div>
    <strong>Resend</strong><br>
    <small>E-mails</small>
  </div>
</div>

## 🔧 API Routes - Endpoints

```typescript
// Estrutura das API Routes
/api
├── /auth
│   ├── POST /login      # Autenticação
│   ├── POST /register   # Cadastro
│   └── POST /logout     # Logout
├── /appointments
│   ├── GET /            # Listar agendamentos
│   ├── POST /           # Criar agendamento
│   ├── PUT /[id]        # Atualizar
│   └── DELETE /[id]     # Cancelar
├── /patients
│   ├── GET /[id]        # Dados do paciente
│   └── PUT /[id]        # Atualizar dados
├── /professionals
│   ├── GET /            # Listar profissionais
│   └── GET /[id]/schedule # Agenda
└── /webhooks
    └── POST /resend     # Callbacks e-mail
🗄️ Modelo de Dados
prisma
model Patient {
  id              String   @id @default(uuid())
  name            String
  cpf             String   @unique
  email           String   @unique
  phone           String
  birthDate       DateTime
  address         String?
  healthInsurance String?
  appointments    Appointment[]
  createdAt       DateTime @default(now())
}

model Professional {
  id            String   @id @default(uuid())
  name          String
  crefito       String   @unique
  specialty     String?
  bio           String?
  photoUrl      String?
  appointments  Appointment[]
}

model Appointment {
  id              String        @id @default(uuid())
  patientId       String
  professionalId  String
  appointmentDate DateTime
  type            String        // PRESENCIAL | DOMICILIAR
  status          String        // SCHEDULED | CONFIRMED | CANCELLED
  notes           String?
  patient         Patient       @relation(fields: [patientId], references: [id])
  professional    Professional  @relation(fields: [professionalId], references: [id])
  createdAt       DateTime      @default(now())
}

model ClinicalEvolution {
  id                String   @id @default(uuid())
  appointmentId     String   @unique
  procedurePerformed String
  clinicalNotes     String?
  returnIndicated   Boolean  @default(false)
  createdAt         DateTime @default(now())
}
🔐 Fluxo de Autenticação
sequenceDiagram
    participant U as Usuário
    participant F as Front-end
    participant API as API Route
    participant DB as Supabase
    
    U->>F: Informa e-mail/senha
    F->>API: POST /api/auth/login
    API->>DB: Verifica credenciais
    DB-->>API: Usuário válido
    API-->>F: Retorna JWT Token
    F-->>U: Login bem-sucedido
    
    Note over U,DB: Próximas requisições incluem token
📊 Fluxo de Agendamento (Reserva de 5min)
sequenceDiagram
    participant P as Paciente
    participant F as Front-end
    participant API as API Route
    participant DB as Supabase
    
    P->>F: Seleciona horário
    F->>API: POST /api/appointments/reserve
    API->>DB: UPDATE status='reserved', expires_at=NOW()+5min
    DB-->>API: OK
    API-->>F: 200 - Reservado até HH:MM
    
    Note over P,DB: Janela de 5 minutos
    
    P->>F: Confirma agendamento
    F->>API: POST /api/appointments/confirm
    API->>DB: UPDATE status='confirmed'
    DB-->>API: OK
    API-->>F: 200 - Confirmado!
🚀 Pipeline CI/CD
yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel

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
🎯 Decisões Arquiteturais (ADRs):

✅ Next.js escolhido por unificar front-end + API routes

✅ Supabase por ser PostgreSQL nativo com RLS

✅ Vercel por deploy contínuo integrado ao GitHub