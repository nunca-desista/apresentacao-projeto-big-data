// ISA Editorial Showcase - Dynamic Tab Switcher & Theme Customizer
document.addEventListener('DOMContentLoaded', () => {
  initEditorialTabs();
  initThemeCustomizer();
  lucide.createIcons();
});

const editorialModules = {
  areas: {
    title: "1. Mapeamento Territorial & Áreas Salvas (Herval Seco & Brasil)",
    desc: "Visualização e acompanhamento de talhões georreferenciados em qualquer ponto do país (como a demarcação em Herval Seco/RS e no Tocantins). Integração com satélite ESRI, polígonos livres, cálculo de área e camadas territoriais públicas.",
    benefits: [
      "Busca universal por GPS, Latitude/Longitude ou Google Maps",
      "Demarcação livre e cálculo instantâneo em Hectares (ha)",
      "Vínculo imediato de cada talhão com a análise de solo daquela terra",
      "Exportação nativa em arquivos KML para GPS agrícola"
    ],
    image: "assets/areas.png",
    alt: "Módulo de Áreas e Mapa Territorial da ISA"
  },
  plantio: {
    title: "2. Super Zoom 24x, Nível Topográfico & Linhas de Plantio",
    desc: "Aproximação até a escala de metros sem perda de renderização. Permite traçar linhas de pulverização, simular passada de maquinário no GPS, gerar cabeceiras guiadas pelo relevo e exportar diretamente para KMZ.",
    benefits: [
      "Super Zoom Nível 24 com nitidez métrica no talhão",
      "Linhas de passada de trator com metragem exata por segmento",
      "Simulação de percurso e abatimento de área aplicada",
      "Compatibilidade direta com Google Earth e pilotos automáticos"
    ],
    image: "assets/linhas-de-plantio.png",
    alt: "Linhas de plantio e altimetria no Super Zoom da ISA"
  },
  solo: {
    title: "3. Solo & Manejo (ISRIC SoilGrids + Textura Granulométrica)",
    desc: "A ciência da terra em detalhe. Gráfico em rodelas exclusivo da textura granulométrica (Areia, Argila e Silte) nas profundidades de 0-5 cm e 5-15 cm, composição química estimada (pH, carbono orgânico, CTC) e classificação textural.",
    benefits: [
      "Gráfico em rodelas oficial da textura física do solo",
      "Classificação textural automatizada (ex: Franco-Argilo-Arenoso)",
      "Estimativas de pH em água, matéria orgânica e CTC efetiva",
      "Estimativa global calibrada pelo modelo ISRIC 250m"
    ],
    image: "assets/solo.png",
    alt: "Gráfico de textura do solo e composição química da ISA"
  },
  solotopo: {
    title: "4. Solo Integrado com Altimetria e Topografia",
    desc: "O solo analisado em conjunto com o relevo da propriedade. Avalie declividade, escoamento de água da chuva e capacidade de retenção de umidade correlacionando curvas de nível topográfico com a camada de solo.",
    benefits: [
      "Cruzamento de camadas de fertilidade com curvas de nível",
      "Identificação de manchas de erosão e declividade crítica",
      "Prevenção de lixiviação de adubo em áreas com maior declive",
      "Visão espacial em camadas transparentes sobre o satélite"
    ],
    image: "assets/solo-topografia.png",
    alt: "Solo com curvas de nível e topografia na ISA"
  },
  novosolo: {
    title: "5. Registro e Vínculo de Laudos Laboratoriais ao Talhão",
    desc: "Conecte a estimativa científica aos resultados das análises químicas feitas no laboratório. Salve os dados de pH, argila e adubação diretamente dentro de cada talhão para acompanhar o histórico de calagem safra após safra.",
    benefits: [
      "Formulário direto para entrada de laudos laboratoriais reais",
      "Vinculação dos resultados ao talhão selecionado",
      "Acompanhamento histórico da evolução da fertilidade",
      "Memória do campo preservada na sua conta na nuvem"
    ],
    image: "assets/salvar-dados-solo.png",
    alt: "Formulário de cadastro de solo por talhão"
  },
  clima: {
    title: "6. Clima, Chuva & Previsão Agrícola Horária",
    desc: "Previsões meteorológicas calculadas pelo Open-Meteo para a coordenada exata da sua fazenda. Temperatura ao vivo, umidade do ar, vento, probabilidade de chuva hora a hora e alertas de janelas de aplicação de defensivos.",
    benefits: [
      "Condições atuais: temperatura, umidade, vento e precipitação",
      "Previsão hora a hora para planejar janelas de pulverização sem deriva",
      "Previsão estendida de 7 a 14 dias com mínimas e máximas",
      "Alertas técnicos de umidade e orvalho foliar"
    ],
    image: "assets/clima.png",
    alt: "Previsão de clima e chuva na ISA"
  },
  ia: {
    title: "7. Assistente ISA · Triagem Fitossanitária com IA (Gemini)",
    desc: "Inteligência artificial conversacional especializada em agronomia. Converse em linguagem natural sobre manejo, adubação e pragas ou envie fotos de folhas lesionadas para triagem preliminar com visão computacional.",
    benefits: [
      "Triagem de doenças e pragas por foto com o Google Gemini Vision",
      "Correlação do diagnóstico com o histórico climático recente do talhão",
      "Hipóteses de patógenos (fungos, bactérias) e recomendações de MIP",
      "Atendimento instantâneo no computador, celular e WhatsApp"
    ],
    image: "assets/ia.png",
    alt: "Assistente de inteligência agronômica ISA"
  },
  personalizacao: {
    title: "8. Personalização da Plataforma & Configurações",
    desc: "Ajuste o sistema para a realidade da sua propriedade. Escolha o tema visual, configure o modo escuro, defina culturas prioritárias e mantenha seus registros sincronizados com total segurança e privacidade de dados.",
    benefits: [
      "Alternância fluida entre Modo Claro e Modo Escuro",
      "Personalização de temas e preferências regionais",
      "Sincronização com Supabase e autenticação Google",
      "Privacidade total dos registros e desenhos de talhões"
    ],
    image: "assets/personalizacao.png",
    alt: "Painel de configurações e personalização da ISA"
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
