// ISA Editorial Showcase - Dynamic Tab Switcher with Real Platform Imagery
document.addEventListener('DOMContentLoaded', () => {
  initEditorialTabs();
  lucide.createIcons();
});

const editorialModules = {
  mapas: {
    title: "Mapeamento Territorial & Curvas de Nível",
    desc: "Demarcação de talhões com precisão de satélite, curvas de altitude topográfica e cálculo automático de área em hectares. Sem limites municipais pré-definidos: selecione qualquer coordenada geográfica ou importe arquivos KML.",
    benefits: [
      "Satélite ESRI de alta resolução com zoom irrestrito",
      "Ferramenta de polígono com medição de perímetro e área em tempo real",
      "Vínculo imediato com laudos de solo para cada talhão salvo",
      "Exportação nativa em formatos abertos KML e GeoJSON"
    ],
    image: "assets/isa-mapas-operacoes.png",
    alt: "Mapa com talhões demarcados na ISA"
  },
  dashboard: {
    title: "Painel Executivo da Lavoura",
    desc: "A visão integrada das operações diárias. Reúne clima, umidade do ar, cotação física de commodities e alertas fitossanitários em uma única tela limpa e intuitiva, sem ruídos visuais.",
    benefits: [
      "Métricas em tempo real integradas com Open-Meteo",
      "Acesso direto com 1 clique para diagnósticos e solo",
      "Tendências de preço das praças agrícolas do Tocantins",
      "Histórico com backup local e em nuvem"
    ],
    image: "assets/desktop.jpg",
    alt: "Painel executivo da plataforma ISA"
  },
  solo: {
    title: "Ciência do Solo & ISRIC SoilGrids",
    desc: "O solo é a base da produtividade. A ISA correlaciona o ponto geográfico com a base global do ISRIC, entregando gráficos em rodelas da textura (Areia, Argila, Silte), estimativas de pH, carbono e módulo para confrontar contra laudos laboratoriais.",
    benefits: [
      "Gráfico de granulometria em rodelas de 0 a 5cm e 5 a 15cm",
      "Classificação textural automatizada (ex: Solo Franco-Argiloso)",
      "Histórico de calagem e evolução da fertilidade por área",
      "Estimativa de retenção de água cruzada com o clima da semana"
    ],
    image: "assets/solo-v31.jpg",
    alt: "Módulo de análise de solo e textura"
  },
  mercado: {
    title: "Mercado & Cotações Físicas",
    desc: "Acompanhe as cotações de Soja, Milho, Boi Gordo, Arroz e Feijão das praças do Tocantins. Visualize tendências e registre negócios fechados na sua fazenda para formar seu próprio histórico com exportação em planilhas.",
    benefits: [
      "Cotações transparentes de praças reais da região",
      "Histórico interativo em gráficos de linha e tabelas",
      "Formulário para registrar negócios particulares da fazenda",
      "Importação e exportação prática em arquivos CSV"
    ],
    image: "assets/isa-mercado.png",
    alt: "Módulo de cotações de mercado e gráficos"
  },
  ia: {
    title: "Assistente Agronômica Multimodal (Google Gemini)",
    desc: "A IA da ISA não usa textos estáticos. Trata-se de um agente de linguagem treinado que recebe fotos de folhas lesionadas ou descrições em linguagem natural, cruzando os sintomas com o clima recente do talhão para gerar hipóteses diagnósticas.",
    benefits: [
      "Triagem fitossanitária com visão computacional para detecção de pragas",
      "Correlação automática com histórico de umidade e orvalho",
      "Hipóteses de patógenos (fungos, bactérias) e práticas de MIP",
      "Linguagem clara, técnica e empática para o dia a dia do produtor"
    ],
    image: "assets/talhoes-medidas.png",
    alt: "Assistente de inteligência e diagnóstico"
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
