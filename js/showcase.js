// ISA Editorial Showcase - Dynamic Tab Switcher & Theme Customizer
document.addEventListener('DOMContentLoaded', () => {
  initEditorialTabs();
  initThemeCustomizer();
  lucide.createIcons();
});

const editorialModules = {
  visaogeral: {
    title: "1. Visão Geral da Lavoura (Logado com Dados de Campo)",
    desc: "Painel do produtor autenticado na nuvem com dados em tempo real. Exibe boas-vindas personalizadas, clima imediato (26,4 °C em Herval Seco/RS), resumo de fertilidade do solo (pH 5.8, 46% argila) e atalhos operacionais rápidos para o dia a dia da fazenda.",
    benefits: [
      "Ambiente autenticado seguro com dados persistentes na nuvem",
      "Clima em tempo real com temperatura, umidade e vento da coordenada exata",
      "Resumo físico de solo com indicação de argila e acidez",
      "Acesso instantâneo com 1 clique para diagnósticos e talhões"
    ],
    image: "assets/isa-visao-geral-logado.png",
    alt: "Visão Geral do AgroBig Data autenticado"
  },
  areas: {
    title: "2. Mapeamento Territorial & Áreas Salvas (Herval Seco & Brasil)",
    desc: "A tela que você capturou mostrando a perspectiva completa do território. Permite pesquisar qualquer lugar do mundo por coordenadas ou endereço, demarcar polígonos, calcular hectares e acompanhar limites cadastrais com fotos de satélite em alta definição.",
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
    title: "3. Super Zoom 24x, Nível Topográfico & Linhas de Plantio",
    desc: "A tela inteira do mapa que você registrou: aproximação máxima sem perda de nitidez, curvas de nível de relevo, cálculo de declividade e traçado das linhas de aplicação do pulverizador/trator com metragem exata por segmento.",
    benefits: [
      "Super Zoom Nível 24 com nitidez métrica no talhão",
      "Linhas de passada de trator com metragem exata por segmento",
      "Simulação de percurso e abatimento de área aplicada",
      "Compatibilidade direta com Google Earth e pilotos automáticos"
    ],
    image: "assets/linhas-de-plantio.png",
    alt: "Linhas de plantio e altimetria no Super Zoom da ISA"
  },
  clima: {
    title: "4. Clima, Chuva & Previsão Agrícola Horária",
    desc: "Seu print oficial do módulo de Clima: gráficos hora a hora de temperatura, umidade relativa do ar, probabilidade de chuva e ventos nas próximas 24 horas e nos 7 dias seguintes, fundamentais para planejar janelas de pulverização.",
    benefits: [
      "Condições atuais: temperatura, umidade, vento e precipitação",
      "Previsão hora a hora para planejar janelas de pulverização sem deriva",
      "Previsão estendida de 7 a 14 dias com mínimas e máximas",
      "Alertas técnicos de umidade e orvalho foliar"
    ],
    image: "assets/clima.png",
    alt: "Previsão de clima e chuva na ISA"
  },
  solo: {
    title: "5. Solo & Manejo (ISRIC SoilGrids + Textura Granulométrica)",
    desc: "Seu print oficial do solo: gráfico em rodelas da textura física (Areia, Argila e Silte) nas profundidades de 0-5 cm e 5-15 cm, composição química estimada (pH, carbono orgânico, CTC) e classificação textural.",
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
    title: "6. Solo Integrado com Altimetria e Topografia",
    desc: "Seu print de solo com topografia: cruzamento visual da textura do solo com as curvas de nível do terreno para entender escoamento de nutrientes e áreas com risco de erosão ou acúmulo de água.",
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
    title: "7. Registro de Laudos Laboratoriais no Talhão",
    desc: "Seu print de cadastro de novos laudos: formulário dedicado para vincular análises laboratoriais de pH, fósforo, potássio e micronutrientes a um talhão específico para histórico de fertilidade.",
    benefits: [
      "Formulário direto para entrada de laudos laboratoriais reais",
      "Vinculação dos resultados ao talhão selecionado",
      "Acompanhamento histórico da evolução da fertilidade",
      "Memória do campo preservada na sua conta na nuvem"
    ],
    image: "assets/salvar-dados-solo.png",
    alt: "Formulário de cadastro de solo por talhão"
  },
  mercado: {
    title: "8. Mercado & Cotações Físicas de Commodities",
    desc: "Acompanhamento transparente das cotações de Soja, Milho, Boi Gordo, Arroz e Feijão no Tocantins e praças nacionais, com gráfico de variação histórica e módulo para registrar vendas particulares da safra.",
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
    title: "9. Assistente ISA · Triagem e IA Multimodal (Gemini)",
    desc: "Seu print oficial do assistente IA: interface limpa de conversa agronômica, com suporte a dúvidas de manejo integrado de pragas, calagem, defensivos e diagnóstico de fotos pelo Google Gemini.",
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
    title: "10. Personalização da Plataforma & Configurações",
    desc: "Seu print das preferências: escolha entre modo claro e escuro, ajuste de culturas acompanhadas e configurações de privacidade com armazenamento protegido.",
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
