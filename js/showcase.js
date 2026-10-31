// ISA Editorial Showcase - Dynamic Tab Switcher with Real Platform Imagery
document.addEventListener('DOMContentLoaded', () => {
  initEditorialTabs();
  lucide.createIcons();
});

const editorialModules = {
  mapas: {
    title: "Mapeamento Territorial & Super Zoom 24x (Herval Seco & Brasil)",
    desc: "Demarcação precisa de talhões em Herval Seco (RS), Araguatins (TO) ou em qualquer coordenada do mundo. Conta com visualização de satélite em alta definição, geração de curvas de nível, declividade e ferramentas profissionais de corte, medição de hectares e exportação em KML/KMZ.",
    benefits: [
      "Satélite ESRI de alta definição com Super Zoom Nível 24",
      "Demarcação livre por GPS linear, polígonos e cálculo automático de área (ha)",
      "Recorte e geração de cabeceiras e linhas de pulverização",
      "Exportação nativa em arquivos KMZ e KML para Google Earth e maquinário"
    ],
    image: "assets/isa-mapas-herval.png",
    alt: "Módulo de mapas, satélite e operações do AgroBig Data"
  },
  dashboard: {
    title: "Painel Executivo da Lavoura em Tempo Real",
    desc: "A visão unificada das operações de campo. Clima imediato com dados do Open-Meteo, umidade relativa do ar, cotações de commodities físicas e alertas técnicos de manejo sem cliques desnecessários.",
    benefits: [
      "Métricas em tempo real integradas com Open-Meteo e estações",
      "Resumo da condição da lavoura e índices hídricos",
      "Acesso direto com 1 clique para diagnósticos e solo",
      "Histórico com sincronização em nuvem e persistência local"
    ],
    image: "assets/desktop.jpg",
    alt: "Painel executivo da plataforma ISA"
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
