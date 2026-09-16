// wired.rs · idioma: inglês padrão, português opcional

(function () {
  "use strict";

  var CHAVE = "wired-rs:lang";

  var DICIONARIO = {
    en: {
      "lang.aria": "language",
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
      "camadas.titulo": "そう / layers",
      "camadas.desc": "each tool is a layer in the same stack. pick one and connect.",
      "camadas.acesso": "access",
      "tool.boxdgrid": "letterboxd movie collage maker",
      "tool.songhunter": "find songs from any link",
      "tool.downloadanyvideo": "download videos from any link",
      "tool.portfolio": "services, projects, and contact",
      "tool.leads": "prospecting and sales intelligence",
      "tool.swaptop": "linux swap monitor, in the terminal",
      "manifesto.text":
        "wired layer co. builds software end to end: network, servers, apis, interfaces, and product. every project is a stack, and every layer has to stand on its own for the whole to work.",
      "footer.connected": "you are connected",
      "protocolo.frase": "close the world. open the next.",
      "protocolo.sub": "you are not alone. you are part of the wired.",
      "protocolo.dica": "press esc to return to reality."
    },

    pt: {
      "lang.aria": "idioma",
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
      "camadas.titulo": "そう / camadas",
      "camadas.desc": "cada ferramenta é uma camada da mesma pilha. escolha uma e conecte-se.",
      "camadas.acesso": "acessar",
      "tool.boxdgrid": "colagem de filmes do letterboxd",
      "tool.songhunter": "identificação de músicas por link",
      "tool.downloadanyvideo": "baixe vídeos de qualquer link",
      "tool.portfolio": "serviços, projetos e contato",
      "tool.leads": "prospecção e inteligência comercial",
      "tool.swaptop": "monitor de swap do linux, no terminal",
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
