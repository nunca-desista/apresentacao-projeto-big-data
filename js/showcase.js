// ISA Editorial Showcase - Dynamic Tab Switcher & Theme Customizer
document.addEventListener('DOMContentLoaded', () => {
  initEditorialTabs();
  initThemeCustomizer();
  lucide.createIcons();
});

const editorialModules = {
  mapas: {
    title: "Mapeamento Territorial & Super Zoom 24x (Herval Seco & Brasil)",
    desc: "Demarcação precisa de talhões em Herval Seco (RS), Araguatins (TO) ou em qualquer coordenada do mundo. Conta com satélite ESRI em escala de metros, curvas de nível topográfico, cálculo automático de hectares e geração de cabeceiras e tiros de pulverização com exportação para KMZ.",
    benefits: [
      "Satélite ESRI de alta resolução com Super Zoom Nível 24",
      "Demarcação poligonal livre e cálculo automático de área (ha)",
      "Recorte e geração de cabeceiras e linhas de pulverização",
      "Exportação nativa em arquivos KMZ e KML para Google Earth e maquinário"
    ],
    image: "assets/isa-mapas-herval.png",
    alt: "Módulo de mapas e satélite do AgroBig Data"
  },
  dashboard: {
    title: "Painel Executivo da Lavoura em Tempo Real",
    desc: "A visão unificada das operações de campo. Clima imediato com dados do Open-Meteo, umidade relativa do ar, cotações de commodities físicas e alertas técnicos de manejo sem ruídos visuais ou telas vazias.",
    benefits: [
      "Métricas em tempo real integradas com Open-Meteo e estações",
      "Resumo da condição da lavoura e índices hídricos",
      "Acesso direto com 1 clique para diagnósticos e solo",
      "Histórico com sincronização em nuvem e persistência de login"
    ],
    image: "assets/isa-dashboard-atual.png",
    alt: "Painel executivo da plataforma ISA"
  },
  clima: {
    title: "Clima, Chuva & Janelas de Pulverização",
    desc: "Previsões meteorológicas de alta resolução com histórico horário, acumulados de precipitação e alertas técnicos de vento seguro para pulverização e colheita calculados para a coordenada exata da sua fazenda.",
    benefits: [
      "Leitura ao vivo: temperatura, sensação térmica, umidade e vento",
      "Previsão hora a hora para planejar janelas de defensivos agrícolas",
      "Previsão estendida de 7 a 14 dias com mínimas e máximas",
      "Cálculo de probabilidade de orvalho e deriva de vento"
    ],
    image: "assets/isa-clima-atual.png",
    alt: "Previsão do tempo e clima da ISA"
  },
  solo: {
    title: "Solo & Manejo (ISRIC SoilGrids + Textura em Rodelas)",
    desc: "A ciência da terra na escala da sua fazenda. O modelo global ISRIC SoilGrids correlaciona o ponto geográfico com a fração exata de Areia, Argila e Silte, apresentando gráfico em rodelas, química do solo e espaço para confrontar contra laudos laboratoriais reais.",
    benefits: [
      "Gráfico de granulometria em rodelas de 0-5 cm e 5-15 cm",
      "Classificação textural automatizada (ex: Solo Argiloso / Franco)",
      "Química estimada: pH em água, carbono orgânico e CTC efetiva",
      "Módulo de calagem e histórico de fertilidade vinculado por talhão"
    ],
    image: "assets/solo-v31.jpg",
    alt: "Módulo de análise de solo e textura ISRIC SoilGrids"
  },
  mercado: {
    title: "Mercado & Cotações Físicas de Commodities",
    desc: "Acompanhe as cotações físicas de Soja, Milho, Boi Gordo, Arroz e Feijão das principais praças brasileiras e do Tocantins. Visualize gráficos de linha históricos e registre suas próprias negociações fechadas na fazenda com exportação em CSV.",
    benefits: [
      "Cotações transparentes de praças agrícolas reais",
      "Histórico com gráficos de tendência diária e semanal",
      "Formulário para registrar vendas particulares da safra",
      "Exportação e importação direta em planilhas CSV"
    ],
    image: "assets/isa-mercado-atual.png",
    alt: "Módulo de mercado e cotações da ISA"
  },
  ia: {
    title: "Assistente ISA · Triagem e IA Multimodal (Gemini Vision)",
    desc: "A IA da ISA é um agente agronômico real: converse em linguagem natural ou faça upload de fotos de folhas lesionadas. O modelo analisa os padrões visuais da planta, cruza com a umidade e clima da região e entrega uma triagem preliminar com recomendações de MIP.",
    benefits: [
      "Triagem fitossanitária com visão computacional para detecção de pragas",
      "Correlação automática com histórico de umidade e orvalho recente",
      "Hipóteses de patógenos (Ferrugem, Mancha-alvo, Cercospora) e manejo integrado",
      "Orientação técnica e segura com recomendação de validação agronômica"
    ],
    image: "assets/isa-chat-atual.png",
    alt: "Assistente de inteligência agronômica ISA"
  }
};

function initEditorialTabs() {
  const btns = document.querySelectorAll('.module-pill-btn');
  const titleEl = document.getElementById('modTitle');
  const descEl = document.getElementById('modDesc');
  const benefitsEl = document.getElementById('modBenefits');
  const imgEl = document.getElementById('modImage');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const key = btn.getAttribute('data-tab');
      const data = editorialModules[key];
      if (!data) return;

      titleEl.textContent = data.title;
      descEl.textContent = data.desc;
      benefitsEl.innerHTML = data.benefits.map(b => `
        <li><i data-lucide="check-circle-2"></i> <span>${b}</span></li>
      `).join('');

      imgEl.src = data.image;
      imgEl.alt = data.alt;

      lucide.createIcons();
    });
  });
}

function initThemeCustomizer() {
  const themeBtns = document.querySelectorAll('.theme-btn');
  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      themeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const theme = btn.getAttribute('data-theme-name');
      document.body.setAttribute('data-theme', theme);
    });
  });
}
