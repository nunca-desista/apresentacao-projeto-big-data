// ISA Interactive Showcase Engine
document.addEventListener('DOMContentLoaded', () => {
  initModuleTabs();
  // Select first tab by default
  const firstTab = document.querySelector('.module-tab-btn[data-module="dashboard"]');
  if (firstTab) {
    firstTab.click();
  }
  lucide.createIcons();
});

// Module tab switcher
const moduleData = {
  dashboard: {
    title: "1. Visão Geral & Dashboard do Produtor",
    desc: "Painel unificado que consolida o status da lavoura em tempo real. Sem cliques perdidos: reúne clima imediato, alertas de manejo, índices de solo e cotações da praça local com foco na tomada de decisão.",
    features: [
      "Visão executiva com cumprimento personalizado e dados de GPS do talhão",
      "Indicadores vitais de balanço hídrico, umidade foliar e temperatura",
      "Grade de acesso rápido com 1 clique para diagnósticos e solo",
      "Resumo das cotações físicas da região com tendência percentual"
    ],
    htmlContent: `
      <div style="display:flex;flex-direction:column;gap:16px;">
        <div style="display:flex;justify-content:space-between;align-items:center;padding-bottom:12px;border-bottom:1px solid rgba(255,255,255,0.08);">
          <div>
            <span style="font-size:0.75rem;color:#34D399;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Meu Espaço Agrícola</span>
            <h4 style="font-size:1.25rem;font-weight:700;color:#F4F7F5;">Bom dia, Produtor</h4>
            <p style="font-size:0.85rem;color:#95A59D;">Fazenda Santa Fé · Araguatins, TO (-5.6508, -48.1256)</p>
          </div>
          <span style="background:rgba(34,197,94,0.15);border:1px solid rgba(34,197,94,0.3);color:#34D399;padding:4px 12px;border-radius:999px;font-size:0.75rem;font-weight:600;">Status: Monitorado</span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:12px;">
          <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);padding:14px;border-radius:12px;">
            <span style="font-size:0.75rem;color:#95A59D;">Clima Atual</span>
            <div style="font-size:1.4rem;font-weight:800;color:#F4F7F5;margin:4px 0;">31,8 °C</div>
            <span style="font-size:0.72rem;color:#34D399;">Sol c/ Nuvens · Vento 6 km/h</span>
          </div>
          <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);padding:14px;border-radius:12px;">
            <span style="font-size:0.75rem;color:#95A59D;">Textura Solo</span>
            <div style="font-size:1.4rem;font-weight:800;color:#F59E0B;margin:4px 0;">38% Argila</div>
            <span style="font-size:0.72rem;color:#95A59D;">ISRIC · 0-5 cm (pH 6.1)</span>
          </div>
          <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);padding:14px;border-radius:12px;">
            <span style="font-size:0.75rem;color:#95A59D;">Milho (Saca 60kg)</span>
            <div style="font-size:1.4rem;font-weight:800;color:#34D399;margin:4px 0;">R$ 62,00</div>
            <span style="font-size:0.72rem;color:#34D399;">+7,3% nos últimos 7 dias</span>
          </div>
        </div>
        <div style="background:rgba(21,77,55,0.25);border:1px solid rgba(34,197,94,0.25);border-radius:12px;padding:16px;">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
            <i data-lucide="sparkles" style="color:#34D399;width:18px;height:18px;"></i>
            <strong style="font-size:0.9rem;color:#A7F3D0;">Recomendação Ativa da ISA (IA)</strong>
          </div>
          <p style="font-size:0.85rem;color:#F4F7F5;line-height:1.5;">"Condições ideais de pulverização entre 17:00 e 19:30 hoje. Vento calmo (<8 km/h) e umidade subindo para 65%."</p>
        </div>
      </div>
    `
  },
  mapa: {
    title: "2. Áreas & Mapa de Satélite (Georreferenciamento Real)",
    desc: "Chega de sistemas com cidades travadas em combobox! A ISA permite buscar qualquer ponto do mundo por coordenadas geográficas, endereço, GPS do celular ou importar Google Maps, além de desenhar polígonos dos seus talhões.",
    features: [
      "Busca universal por Lat/Lng, Endereço ou Coordenadas do Google Maps",
      "Ferramenta de demarcação: desenhe o polígono exato do talhão no mapa",
      "Cálculo automático instantâneo de área em Hectares (ha)",
      "Exportação nativa em arquivo KML e integração direta com satélite ESRI",
      "Vinculação de dados de solo especificamente para cada talhão salvo"
    ],
    htmlContent: `
      <div style="display:flex;flex-direction:column;gap:14px;height:100%;">
        <div style="display:flex;gap:8px;">
          <input type="text" value="-5.65083, -48.12560" readonly style="flex:1;background:rgba(0,0,0,0.4);border:1px solid rgba(34,197,94,0.3);border-radius:8px;padding:8px 12px;color:#A7F3D0;font-family:monospace;font-size:0.85rem;">
          <button class="btn btn-primary" style="padding:8px 14px;font-size:0.8rem;"><i data-lucide="locate-fixed"></i> GPS</button>
        </div>
        <div style="flex:1;min-height:220px;border-radius:12px;overflow:hidden;position:relative;background:url('assets/field.jpg') center/cover;border:1px solid rgba(255,255,255,0.15);">
          <div style="position:absolute;inset:0;background:rgba(6,13,9,0.35);"></div>
          <!-- SVG Polygon Overlay representing real drawn paddock -->
          <svg style="position:absolute;inset:0;width:100%;height:100%;">
            <polygon points="40,30 220,50 280,180 110,190" style="fill:rgba(34,197,94,0.35);stroke:#22C55E;stroke-width:2.5;stroke-dasharray:4;" />
          </svg>
          <div style="position:absolute;bottom:12px;left:12px;background:rgba(0,0,0,0.85);backdrop-filter:blur(10px);border:1px solid rgba(34,197,94,0.4);padding:8px 14px;border-radius:8px;">
            <div style="font-size:0.75rem;color:#34D399;font-weight:700;">Talhão 03 - Soja Safra</div>
            <div style="font-size:0.95rem;font-weight:800;color:#F4F7F5;">Área: 42,8 hectares</div>
          </div>
          <div style="position:absolute;top:12px;right:12px;display:flex;gap:6px;">
            <span style="background:rgba(0,0,0,0.8);border:1px solid rgba(255,255,255,0.1);color:#fff;padding:4px 10px;border-radius:6px;font-size:0.75rem;"><i data-lucide="download"></i> Exportar KML</span>
          </div>
        </div>
        <div style="font-size:0.8rem;color:#95A59D;display:flex;justify-content:space-between;">
          <span>Satélite: ESRI World Imagery / Leaflet</span>
          <span style="color:#34D399;">● 12 pontos demarcados</span>
        </div>
      </div>
    `
  },
  solo: {
    title: "3. Solo & Manejo (ISRIC SoilGrids + Laudos Reais)",
    desc: "A inteligência agrícola começa na terra. A ISA busca a composição de solo por satélite e modelos ISRIC globais na coordenada exata da sua fazenda e permite comparar as estimativas com o laudo do seu laboratório.",
    features: [
      "Gráfico em rodelas exclusivo da textura granulométrica (Areia, Argila e Silte)",
      "Classificação textural automatizada (ex.: Solo Franco-Argilo-Arenoso)",
      "Química estimada: pH em água, Carbono Orgânico e CTC",
      "Módulo de calagem e histórico de fertilidade vinculado por talhão"
    ],
    htmlContent: `
      <div style="display:flex;flex-direction:column;gap:16px;">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <h5 style="font-size:1.05rem;font-weight:700;color:#F4F7F5;">Textura Granulométrica (0-5 cm)</h5>
          <span style="background:rgba(217,119,6,0.15);border:1px solid rgba(217,119,6,0.3);color:#F59E0B;padding:2px 10px;border-radius:999px;font-size:0.72rem;font-weight:600;">Base ISRIC</span>
        </div>
        <div class="soil-donut-wrap">
          <div style="width:130px;height:130px;position:relative;">
            <canvas id="mockSoilCanvas" width="130" height="130"></canvas>
          </div>
          <div class="donut-legend">
            <div class="legend-row"><span class="legend-dot clay"></span> <span><strong>Argila:</strong> 38%</span></div>
            <div class="legend-row"><span class="legend-dot sand"></span> <span><strong>Areia:</strong> 44%</span></div>
            <div class="legend-row"><span class="legend-dot silt"></span> <span><strong>Silte:</strong> 18%</span></div>
            <span style="font-size:0.75rem;color:#34D399;font-weight:600;margin-top:6px;">Classificação: Franco-Argilo-Arenoso</span>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:10px;padding-top:10px;border-top:1px solid rgba(255,255,255,0.08);">
          <div style="background:rgba(255,255,255,0.02);padding:10px;border-radius:8px;">
            <div style="font-size:0.72rem;color:#95A59D;">pH em Água</div>
            <div style="font-size:1.15rem;font-weight:800;color:#F4F7F5;">6,1</div>
          </div>
          <div style="background:rgba(255,255,255,0.02);padding:10px;border-radius:8px;">
            <div style="font-size:0.72rem;color:#95A59D;">Carbono Org.</div>
            <div style="font-size:1.15rem;font-weight:800;color:#F4F7F5;">18,4 g/kg</div>
          </div>
          <div style="background:rgba(255,255,255,0.02);padding:10px;border-radius:8px;">
            <div style="font-size:0.72rem;color:#95A59D;">CTC Efetiva</div>
            <div style="font-size:1.15rem;font-weight:800;color:#F4F7F5;">8,2 cmol/kg</div>
          </div>
        </div>
      </div>
    `
  },
  clima: {
    title: "4. Clima & Chuva (Previsão Agrícola Open-Meteo)",
    desc: "Previsões meteorológicas de alta resolução calculadas para o ponto exato da propriedade. Sem atrasos, com histórico horário, acumulados de chuva e alertas para janelas de manejo e defensivos.",
    features: [
      "Leitura ao vivo: temperatura, sensação, umidade, vento e precipitação recente",
      "Gráfico de 24 horas hora-a-hora com probabilidade de precipitação",
      "Previsão estendida de 7 a 14 dias com mínimas, máximas e evapotranspiração",
      "Alertas técnicos de deriva de vento e janelas seguras de aplicação"
    ],
    htmlContent: `
      <div style="display:flex;flex-direction:column;gap:16px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <h5 style="font-size:1.05rem;font-weight:700;color:#F4F7F5;">Previsão Horária (24 Horas)</h5>
            <p style="font-size:0.78rem;color:#95A59D;">Araguatins - TO · Atualizado há 10 min</p>
          </div>
          <span style="color:#34D399;font-size:0.8rem;font-weight:600;"><i data-lucide="cloud-rain" style="vertical-align:middle;width:16px;"></i> Chuva hoje: 4,2 mm</span>
        </div>
        <div style="height:140px;width:100%;">
          <canvas id="mockClimaCanvas" height="140"></canvas>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4, 1fr);gap:8px;padding-top:8px;">
          <div style="background:rgba(255,255,255,0.03);padding:8px;border-radius:8px;text-align:center;">
            <span style="font-size:0.7rem;color:#95A59D;">18h</span>
            <div style="font-size:0.95rem;font-weight:700;">31°C</div>
            <span style="font-size:0.68rem;color:#34D399;">20% chv</span>
          </div>
          <div style="background:rgba(255,255,255,0.03);padding:8px;border-radius:8px;text-align:center;">
            <span style="font-size:0.7rem;color:#95A59D;">20h</span>
            <div style="font-size:0.95rem;font-weight:700;">28°C</div>
            <span style="font-size:0.68rem;color:#F59E0B;">65% chv</span>
          </div>
          <div style="background:rgba(255,255,255,0.03);padding:8px;border-radius:8px;text-align:center;">
            <span style="font-size:0.7rem;color:#95A59D;">22h</span>
            <div style="font-size:0.95rem;font-weight:700;">26°C</div>
            <span style="font-size:0.68rem;color:#60A5FA;">80% chv</span>
          </div>
          <div style="background:rgba(255,255,255,0.03);padding:8px;border-radius:8px;text-align:center;">
            <span style="font-size:0.7rem;color:#95A59D;">00h</span>
            <div style="font-size:0.95rem;font-weight:700;">25°C</div>
            <span style="font-size:0.68rem;color:#34D399;">10% chv</span>
          </div>
        </div>
      </div>
    `
  },
  ia: {
    title: "5. Assistente ISA · Triagem & IA Multimodal (Google Gemini)",
    desc: "A verdadeira inteligência agronômica. Converse em linguagem natural ou envie a foto de uma folha com manchas suspeitas. A IA analisa os sintomas, correlaciona com o clima atual e gera um laudo de triagem preliminar.",
    features: [
      "Diagnóstico fitossanitário por foto via Google Gemini Pro Vision",
      "Cruzamento automático do relato do produtor com umidade e histórico de chuva",
      "Hipóteses de patógenos (Ferrugem, Mancha-alvo, Cercospora) e MIP",
      "Protocolo de segurança científica com aviso de validação agronômica"
    ],
    htmlContent: `
      <div style="display:flex;flex-direction:column;gap:12px;height:100%;">
        <div style="display:flex;align-items:center;gap:10px;padding-bottom:8px;border-bottom:1px solid rgba(255,255,255,0.08);">
          <div style="width:34px;height:34px;border-radius:50%;background:rgba(34,197,94,0.2);display:flex;align-items:center;justify-content:center;color:#34D399;">
            <i data-lucide="bot" style="width:18px;height:18px;"></i>
          </div>
          <div>
            <div style="font-size:0.85rem;font-weight:700;color:#F4F7F5;">ISA · Engenheira Agrônoma Virtual</div>
            <div style="font-size:0.7rem;color:#34D399;">● Conectada ao Gemini Pro Multimodal</div>
          </div>
        </div>
        <div id="demoChatMessages" style="display:flex;flex-direction:column;gap:10px;font-size:0.85rem;max-height:220px;overflow-y:auto;">
          <div style="align-self:flex-end;background:rgba(34,197,94,0.15);border:1px solid rgba(34,197,94,0.3);color:#F4F7F5;padding:8px 12px;border-radius:12px 12px 2px 12px;max-width:85%;">
            Identifiquei pontuações alaranjadas na folha inferior do milho após as chuvas. O que pode ser?
          </div>
          <div style="align-self:flex-start;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);color:#E2E8F0;padding:10px 14px;border-radius:12px 12px 12px 2px;max-width:90%;line-height:1.45;">
            <strong style="color:#A7F3D0;">Análise Preliminar ISA:</strong><br>
            Os sintomas descritos e a alta umidade recente (85%) em Araguatins sugerem alta compatibilidade com <strong>Ferrugem Polissora (Puccinia polysora)</strong>.<br>
            <em style="color:#95A59D;font-size:0.75rem;">Recomendação: Avaliar taxa de severidade e consultar o agrônomo da cooperativa para definir fungicida de controle.</em>
          </div>
        </div>
        <div style="margin-top:auto;display:flex;gap:8px;">
          <input type="text" placeholder="Pergunte sobre manejo, dosagem ou adubação..." style="flex:1;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.1);padding:8px 12px;border-radius:8px;color:#fff;font-size:0.82rem;">
          <button class="btn btn-primary" style="padding:8px 14px;"><i data-lucide="send" style="width:14px;height:14px;"></i></button>
        </div>
      </div>
    `
  },
  mercado: {
    title: "6. Mercado & Cotações Físicas do Produtor",
    desc: "Cotações reais das principais commodities agrícolas do Tocantins e do Brasil (Soja, Milho, Boi Gordo, Feijão e Arroz). Permite acompanhar tendências históricas e registrar negócios locais da sua fazenda.",
    features: [
      "Gráfico de tendências diárias, semanais e mensais por commodity",
      "Preços de praças reais com identificação de fontes oficiais",
      "Formulário para registrar negócios particulares da fazenda",
      "Exportação e importação descomplicada em planilhas CSV"
    ],
    htmlContent: `
      <div style="display:flex;flex-direction:column;gap:14px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <h5 style="font-size:1.05rem;font-weight:700;color:#F4F7F5;">Cotações Físicas na Região</h5>
          <span style="font-size:0.75rem;color:#34D399;font-weight:600;">Mercado Disponível</span>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);padding:14px;border-radius:10px;">
            <div style="display:flex;justify-content:space-between;">
              <span style="font-weight:700;color:#F4F7F5;">Soja (60kg)</span>
              <span style="color:#34D399;font-weight:700;font-size:0.85rem;">+1,4%</span>
            </div>
            <div style="font-size:1.35rem;font-weight:800;color:#F4F7F5;margin:4px 0;">R$ 131,50</div>
            <span style="font-size:0.72rem;color:#95A59D;">Praça: Porto Nacional / Araguaína</span>
          </div>
          <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);padding:14px;border-radius:10px;">
            <div style="display:flex;justify-content:space-between;">
              <span style="font-weight:700;color:#F4F7F5;">Milho (60kg)</span>
              <span style="color:#34D399;font-weight:700;font-size:0.85rem;">+7,3%</span>
            </div>
            <div style="font-size:1.35rem;font-weight:800;color:#F4F7F5;margin:4px 0;">R$ 62,00</div>
            <span style="font-size:0.72rem;color:#95A59D;">Praça: Araguatins / Região Norte</span>
          </div>
        </div>
        <div style="background:rgba(255,255,255,0.02);border:1px dashed rgba(255,255,255,0.15);border-radius:10px;padding:12px;text-align:center;">
          <span style="font-size:0.82rem;color:#95A59D;">Possui negociação própria fechada?</span>
          <div style="margin-top:6px;display:flex;justify-content:center;gap:10px;">
            <button class="btn btn-secondary" style="padding:6px 14px;font-size:0.75rem;"><i data-lucide="plus"></i> Registrar Negócio</button>
            <button class="btn btn-secondary" style="padding:6px 14px;font-size:0.75rem;"><i data-lucide="download"></i> Exportar CSV</button>
          </div>
        </div>
      </div>
    `
  }
};

function initModuleTabs() {
  const tabs = document.querySelectorAll('.module-tab-btn');
  const titleEl = document.getElementById('moduleDetailTitle');
  const descEl = document.getElementById('moduleDetailDesc');
  const featuresEl = document.getElementById('moduleFeatureList');
  const frameEl = document.getElementById('moduleInteractiveFrame');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const key = tab.getAttribute('data-module');
      const data = moduleData[key];
      if (!data) return;

      titleEl.textContent = data.title;
      descEl.textContent = data.desc;
      
      featuresEl.innerHTML = data.features.map(f => `
        <div class="feature-pill-item">
          <i data-lucide="check-circle-2"></i>
          <span>${f}</span>
        </div>
      `).join('');

      frameEl.innerHTML = data.htmlContent;
      lucide.createIcons();

      // If soil or clima, re-render charts
      if (key === 'solo') {
        setTimeout(renderSoilDonut, 50);
      } else if (key === 'clima') {
        setTimeout(renderClimaLine, 50);
      }
    });
  });
}

function renderSoilDonut() {
  const canvas = document.getElementById('mockSoilCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  // Custom Donut drawing
  const centerX = 65, centerY = 65, radius = 50, innerRadius = 32;
  const data = [
    { val: 0.38, color: '#B45309' }, // Clay
    { val: 0.44, color: '#D97706' }, // Sand
    { val: 0.18, color: '#059669' }  // Silt
  ];

  let currentAngle = -0.5 * Math.PI;
  ctx.clearRect(0, 0, 130, 130);

  data.forEach(item => {
    const sliceAngle = item.val * 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
    ctx.arc(centerX, centerY, innerRadius, currentAngle + sliceAngle, currentAngle, true);
    ctx.closePath();
    ctx.fillStyle = item.color;
    ctx.fill();
    currentAngle += sliceAngle;
  });

  // Center text
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 12px Plus Jakarta Sans';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('ISRIC', centerX, centerY);
}

function renderClimaLine() {
  const canvas = document.getElementById('mockClimaCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Simple clean wave chart
  ctx.beginPath();
  ctx.strokeStyle = '#22C55E';
  ctx.lineWidth = 3;
  
  const points = [
    {x: 10, y: 30},
    {x: 60, y: 50},
    {x: 120, y: 40},
    {x: 180, y: 70},
    {x: 240, y: 90},
    {x: 290, y: 80}
  ];

  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.stroke();

  // Gradient fill under
  ctx.lineTo(points[points.length-1].x, 140);
  ctx.lineTo(points[0].x, 140);
  ctx.closePath();
  const grad = ctx.createLinearGradient(0, 0, 0, 140);
  grad.addColorStop(0, 'rgba(34, 197, 94, 0.3)');
  grad.addColorStop(1, 'rgba(34, 197, 94, 0.0)');
  ctx.fillStyle = grad;
  ctx.fill();
}

function initSoilChart() {
  renderSoilDonut();
}

function initClimaChart() {
  renderClimaLine();
}

function initChatDemo() {
  // Demo interactive hook if needed
}
