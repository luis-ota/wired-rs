// wired.rs · idioma: inglês padrão, português opcional

(function () {
  "use strict";

  var CHAVE = "wired-rs:lang";

  var DICIONARIO = {
    en: {
      "lang.aria": "language",
      "nav.camadas": "stack",
      "nav.formato": "standard",
      "nav.manifesto": "manifesto",
      "nav.contato": "contact",
      "hero.oficio": "layer co.",
      "hero.nota": "from the network to the pixel.",
      "marq.1": "tools",
      "marq.2": "custom software",
      "marq.3": "infrastructure",
      "camadas.fecho": "one stack. seven layers.",
      "formato.rotulo": "the standard",
      "formato.titulo": "every tool, <b>same standard</b>.",
      "formato.desc": "different jobs, same discipline: fast, simple, and built to last.",
      "formato.fecho": "one standard. every layer.",
      "manifesto.rotulo": "manifesto",
      "manifesto.citacao": "“be aware that you are <b>connected</b>.”",
      "manifesto.fecho": "the whole stands on its layers.",
      "contato.rotulo": "contact",
      "contato.titulo": "have a layer <b>in mind</b>?",
      "contato.fecho": "you are connected.",
      "footer.credito": "illustrations: original svg by wired layer co.",
      "pular": "skip to the layers",
      "meta.description":
        "wired layer co. · tools, custom software, and infrastructure. present day, present time.",
      "hero.kicker": "layer 0 · network",
      "hero.palavra": "wired",
      "hero.lead":
        "tools and custom software, built in layers. from the network to the pixel: infrastructure, product, and finish in the same stack.",
      "hero.ctaPrimary": "view the layers",
      "hero.ctaSecondary": "talk to wired layer co.",
      "camadas.rotulo": "the stack",
      "camadas.titulo": "<span class=\"h2-jp\">そう</span> / <b>layers</b>",
      "camadas.desc": "each tool is a layer in the same stack. pick one and connect.",
      "camadas.acesso": "access",
      "tool.boxdgrid": "letterboxd movie collage maker",
      "tool.songhunter": "find songs from any link",
      "tool.downloadanyvideo": "download videos from any link",
      "tool.portfolio": "services, projects, and contact",
      "tool.leads": "prospecting and sales intelligence",
      "tool.swaptop": "linux swap monitor, in the terminal",
      "tool.blog": "notes, logs, and field reports",
      "manifesto.text":
        "wired layer co. builds software end to end: network, servers, apis, interfaces, and product. every project is a stack, and every layer has to stand on its own for the whole to work.",
      "footer.connected": "you are connected",
      "protocolo.frase": "close the world. open the next.",
      "protocolo.sub": "you are not alone. you are part of the wired.",
      "protocolo.dica": "press esc to return to reality."
    },

    pt: {
      "lang.aria": "idioma",
      "nav.camadas": "pilha",
      "nav.formato": "padrão",
      "nav.manifesto": "manifesto",
      "nav.contato": "contato",
      "hero.oficio": "layer co.",
      "hero.nota": "da rede ao pixel.",
      "marq.1": "ferramentas",
      "marq.2": "software sob medida",
      "marq.3": "infraestrutura",
      "camadas.fecho": "uma pilha. sete camadas.",
      "formato.rotulo": "o padrão",
      "formato.titulo": "toda ferramenta, <b>o mesmo padrão</b>.",
      "formato.desc": "trabalhos diferentes, a mesma disciplina: rápido, simples e feito para durar.",
      "formato.fecho": "um padrão. todas as camadas.",
      "manifesto.rotulo": "manifesto",
      "manifesto.citacao": "“esteja ciente de que você está <b>conectado</b>.”",
      "manifesto.fecho": "o conjunto se apoia nas camadas.",
      "contato.rotulo": "contato",
      "contato.titulo": "tem uma camada <b>em mente</b>?",
      "contato.fecho": "você está conectado.",
      "footer.credito": "ilustrações: svg original da wired layer co.",
      "pular": "pular para as camadas",
      "meta.description":
        "wired layer co. · ferramentas, software sob medida e infraestrutura. present day, present time.",
      "hero.kicker": "camada 0 · rede",
      "hero.palavra": "wired",
      "hero.lead":
        "ferramentas e software sob medida, construídos em camadas. da rede ao pixel: infraestrutura, produto e acabamento na mesma pilha.",
      "hero.ctaPrimary": "ver as camadas",
      "hero.ctaSecondary": "falar com a wired layer co.",
      "camadas.rotulo": "a pilha",
      "camadas.titulo": "<span class=\"h2-jp\">そう</span> / <b>camadas</b>",
      "camadas.desc": "cada ferramenta é uma camada da mesma pilha. escolha uma e conecte-se.",
      "camadas.acesso": "acessar",
      "tool.boxdgrid": "colagem de filmes do letterboxd",
      "tool.songhunter": "identificação de músicas por link",
      "tool.downloadanyvideo": "baixe vídeos de qualquer link",
      "tool.portfolio": "serviços, projetos e contato",
      "tool.leads": "prospecção e inteligência comercial",
      "tool.swaptop": "monitor de swap do linux, no terminal",
      "tool.blog": "notas, logs e relatos de campo",
      "manifesto.text":
        "a wired layer co. constrói software de ponta a ponta: rede, servidores, apis, interfaces e produto. cada projeto é uma pilha, e cada camada precisa se sustentar sozinha para o conjunto funcionar.",
      "footer.connected": "você está conectado",
      "protocolo.frase": "feche o mundo. abra o próximo.",
      "protocolo.sub": "você não está sozinho. você faz parte da wired.",
      "protocolo.dica": "pressione esc para voltar à realidade."
    }
  };

  var idioma = "en";

  try {
    if (localStorage.getItem(CHAVE) === "pt") idioma = "pt";
  } catch (e) {}

  function t(chave) {
    var valor = DICIONARIO[idioma][chave];
    return valor === undefined ? DICIONARIO.en[chave] : valor;
  }

  function setMeta(valor, conteudo) {
    var el = document.querySelector('meta[name="' + valor + '"]');
    if (el) el.setAttribute("content", conteudo);
  }

  function aplicar(lang) {
    idioma = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });

    setMeta("description", t("meta.description"));

    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.documentElement.setAttribute("data-lang", lang);

    document.querySelectorAll(".idioma-opcao").forEach(function (botao) {
      botao.setAttribute("aria-pressed", String(botao.getAttribute("data-lang") === lang));
    });

    try {
      localStorage.setItem(CHAVE, lang);
    } catch (e) {}

    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: lang } }));
  }

  window.WIRED_I18N = {
    t: t,
    get idioma() {
      return idioma;
    },
    trocar: aplicar
  };

  document.querySelectorAll(".idioma-opcao").forEach(function (botao) {
    botao.addEventListener("click", function () {
      var alvo = botao.getAttribute("data-lang");
      if (alvo !== idioma) aplicar(alvo);
    });
  });

  aplicar(idioma);
})();
