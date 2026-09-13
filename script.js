// wired.rs · rede wireframe, relógio e glitch do logo

(function () {
  "use strict";

  var reduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- relógio do HUD ---------- */
  var relogio = document.getElementById("relogio");
  function hora() {
    if (!relogio) return;
    var agora = new Date();
    var p = function (n) { return String(n).padStart(2, "0"); };
    relogio.textContent = p(agora.getHours()) + ":" + p(agora.getMinutes()) + ":" + p(agora.getSeconds());
  }
  hora();
  setInterval(hora, 1000);

  /* ---------- glitch do logo ---------- */
  var logo = document.querySelector(".logo");
  function glitchar() {
    if (!logo) return;
    logo.classList.add("glitch");
    setTimeout(function () { logo.classList.remove("glitch"); }, 480);
  }
  if (logo && !reduzido) {
    setInterval(glitchar, 7000);
    logo.addEventListener("mouseenter", glitchar);
  }

  /* ---------- protocolo 7 (digite "lain") ---------- */
  var seq = document.getElementById("seq");
  var protocolo = document.getElementById("protocolo");
  var ALVO = "lain";
  var digitado = "";
  var protocoloAberto = false;

  function atualizarSeq() {
    if (!seq) return;
    seq.textContent = (digitado + "____".slice(digitado.length));
  }

  function abrirProtocolo() {
    if (!protocolo || protocoloAberto) return;
    protocoloAberto = true;
    document.documentElement.dataset.protocolo = "7";
    protocolo.hidden = false;
    protocolo.classList.add("aberto");
    if (logo && !reduzido) glitchar();
    var foco = protocolo.querySelector(".protocolo-titulo");
    if (foco) {
      foco.setAttribute("tabindex", "-1");
      foco.focus();
    }
  }

  function fecharProtocolo() {
    if (!protocolo || !protocoloAberto) return;
    protocoloAberto = false;
    protocolo.hidden = true;
    protocolo.classList.remove("aberto");
    delete document.documentElement.dataset.protocolo;
    digitado = "";
    atualizarSeq();
  }

  document.addEventListener("keydown", function (e) {
    if (protocoloAberto) {
      if (e.key === "Escape") fecharProtocolo();
      return;
    }
    if (e.metaKey || e.ctrlKey || e.altKey || e.key.length !== 1) return;
    var alvo = e.target;
    if (alvo && (alvo.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(alvo.tagName))) return;

    var letra = e.key.toLowerCase();
    if (letra === ALVO[digitado.length]) {
      digitado += letra;
      if (digitado === ALVO) {
        atualizarSeq();
        abrirProtocolo();
        return;
      }
    } else {
      digitado = letra === ALVO[0] ? ALVO[0] : "";
      if (seq) {
        seq.classList.add("seq-erro");
        setTimeout(function () { seq.classList.remove("seq-erro"); }, 260);
      }
    }
    atualizarSeq();
  });

  if (protocolo) protocolo.addEventListener("click", fecharProtocolo);

  /* ---------- e-mail: restaura o mailto se o Cloudflare ofuscar ---------- */
  var linkEmail = document.querySelector("a[data-email]");
  if (linkEmail) linkEmail.setAttribute("href", "mailto:" + linkEmail.getAttribute("data-email"));

  /* ---------- rede wireframe no hero ---------- */
  var canvas = document.getElementById("rede");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  var largura = 0;
  var altura = 0;
  var nos = [];
  var raf = null;
  var visivel = true;

  var paletaAtual = null;

  function paleta() {
    var p7 = document.documentElement.dataset.protocolo === "7";
    if (paletaAtual && paletaAtual.p7 === p7) return paletaAtual.cores;
    var cores = p7
      ? {
          linha: "rgba(255, 95, 86, 0.2)",
          no: "rgba(255, 95, 86, 0.8)",
          alerta: "rgba(255, 255, 255, 0.85)"
        }
      : {
          linha: "rgba(141, 255, 184, 0.16)",
          no: "rgba(141, 255, 184, 0.75)",
          alerta: "rgba(255, 95, 86, 0.85)"
        };
    paletaAtual = { p7: p7, cores: cores };
    return cores;
  }

  function dimensionar() {
    var r = canvas.getBoundingClientRect();
    largura = r.width;
    altura = r.height;
    canvas.width = Math.round(largura * dpr);
    canvas.height = Math.round(altura * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    povoar();
  }

  function povoar() {
    var quantidade = Math.max(18, Math.min(44, Math.round((largura * altura) / 34000)));
    nos = [];
    for (var i = 0; i < quantidade; i++) {
      nos.push({
        x: Math.random() * largura,
        y: Math.random() * altura,
        vx: (Math.random() - 0.5) * 0.24,
        vy: (Math.random() - 0.5) * 0.24,
        r: Math.random() < 0.12 ? 2.1 : 1.2,
        alerta: Math.random() < 0.07
      });
    }
  }

  function desenhar() {
    ctx.clearRect(0, 0, largura, altura);
    var cores = paleta();

    for (var i = 0; i < nos.length; i++) {
      var a = nos[i];
      for (var j = i + 1; j < nos.length; j++) {
        var b = nos[j];
        var dx = a.x - b.x;
        var dy = a.y - b.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          ctx.strokeStyle = cores.linha;
          ctx.globalAlpha = 1 - dist / 150;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;

    for (var k = 0; k < nos.length; k++) {
      var n = nos[k];
      ctx.fillStyle = n.alerta ? cores.alerta : cores.no;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function passo() {
    for (var i = 0; i < nos.length; i++) {
      var n = nos[i];
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > largura) n.vx *= -1;
      if (n.y < 0 || n.y > altura) n.vy *= -1;
    }
    desenhar();
    raf = requestAnimationFrame(passo);
  }

  function parar() {
    if (raf) {
      cancelAnimationFrame(raf);
      raf = null;
    }
  }

  dimensionar();

  if (reduzido) {
    desenhar();
  } else {
    passo();
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        parar();
      } else if (!raf) {
        passo();
      }
    });
  }

  var tempo = null;
  window.addEventListener("resize", function () {
    clearTimeout(tempo);
    tempo = setTimeout(function () {
      parar();
      dimensionar();
      if (reduzido) {
        desenhar();
      } else {
        passo();
      }
    }, 150);
  });
})();
