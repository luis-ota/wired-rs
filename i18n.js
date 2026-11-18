// wired.rs · idioma: inglês padrão, português opcional

(function () {
  "use strict";

  var CHAVE = "wired-rs:lang";

  var DICIONARIO = {
    en: {
      "lang.aria": "language",
      "nav.processo": "method",
      "nav.formato": "standard",
      "nav.manifesto": "manifesto",
      "nav.contato": "contact",
      "hero.oficio": "layer co.",
      "hero.nota": "from the network to the pixel.",
      "marq.1": "tools",
      "marq.2": "custom software",
      "marq.3": "infrastructure",
      "processo.rotulo": "the method",
      "processo.titulo": "three acts, <b>one stack</b>.",
      "processo.desc": "every build crosses the same three layers, in the same order.",
      "processo.a1.titulo": "the <b>signal</b>",
      "processo.a1.texto": "listen before you build: the problem, the constraints, the people.",
      "processo.a2.titulo": "the <b>system</b>",
      "processo.a2.texto": "architecture first: infrastructure, data, and the tool itself.",
      "processo.a3.titulo": "the <b>surface</b>",
      "processo.a3.texto": "finish last: interface, motion, and the print-quality detail.",
      "processo.fecho": "signal in. system built. surface out.",
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
      "formato.imagem": "Fifteen black and white architectural studies of spherical industrial tanks, arranged in five columns and three rows.",
      "footer.credito": "art direction: wired layer co. · ai-generated imagery",
      "pular": "skip to content",
      "meta.description":
        "wired layer co. · tools, custom software, and infrastructure. present day, present time.",
      "hero.kicker": "layer 0 · network",
      "hero.palavra": "wired",
      "hero.lead":
        "tools and custom software, built in layers. from the network to the pixel: infrastructure, product, and finish in the same stack.",
      "hero.ctaPrimary": "see the method",
      "hero.ctaSecondary": "talk to wired layer co.",
      "manifesto.text":
        "wired layer co. builds software end to end: network, servers, apis, interfaces, and product. every project is a stack, and every layer has to stand on its own for the whole to work.",
      "footer.connected": "you are connected",
      "protocolo.frase": "close the world. open the next.",
      "protocolo.sub": "you are not alone. you are part of the wired.",
      "protocolo.dica": "press esc to return to reality."
    },

    pt: {
      "lang.aria": "idioma",
      "nav.processo": "método",
      "nav.formato": "padrão",
      "nav.manifesto": "manifesto",
      "nav.contato": "contato",
      "hero.oficio": "layer co.",
      "hero.nota": "da rede ao pixel.",
      "marq.1": "ferramentas",
      "marq.2": "software sob medida",
      "marq.3": "infraestrutura",
      "processo.rotulo": "o método",
      "processo.titulo": "três atos, <b>uma pilha</b>.",
      "processo.desc": "toda entrega atravessa as mesmas três camadas, na mesma ordem.",
      "processo.a1.titulo": "o <b>sinal</b>",
      "processo.a1.texto": "ouvir antes de construir: o problema, as restrições, as pessoas.",
      "processo.a2.titulo": "o <b>sistema</b>",
      "processo.a2.texto": "arquitetura primeiro: infraestrutura, dados e a ferramenta em si.",
      "processo.a3.titulo": "a <b>superfície</b>",
      "processo.a3.texto": "acabamento por último: interface, movimento e o detalhe de gráfica.",
      "processo.fecho": "sinal entra. sistema fica. superfície sai.",
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
      "formato.imagem": "Quinze estudos arquitetônicos em preto e branco de tanques industriais esféricos, organizados em cinco colunas e três linhas.",
      "footer.credito": "direção de arte: wired layer co. · imagens geradas com ia",
      "pular": "pular para o conteúdo",
      "meta.description":
        "wired layer co. · ferramentas, software sob medida e infraestrutura. present day, present time.",
      "hero.kicker": "camada 0 · rede",
      "hero.palavra": "wired",
      "hero.lead":
        "ferramentas e software sob medida, construídos em camadas. da rede ao pixel: infraestrutura, produto e acabamento na mesma pilha.",
      "hero.ctaPrimary": "ver o método",
      "hero.ctaSecondary": "falar com a wired layer co.",
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

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      el.setAttribute("alt", t(el.getAttribute("data-i18n-alt")));
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
