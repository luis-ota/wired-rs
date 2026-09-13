# wired.rs — Wired Layer Co.

Hub da **Wired Layer Co.**: a porta de entrada para as ferramentas e para o
portfólio, no conceito "pilha de camadas" com estética *Serial Experiments Lain*
(CRT, fósforo, glitch e rede wireframe).

**→ https://wired.rs**

## Camadas

| Camada | Ferramenta |
|---|---|
| L0 | [boxdgrid](https://boxdgrid.wired.rs/) — colagem de filmes do Letterboxd |
| L1 | [songhunter](https://songhunter.wired.rs/) — identificação de músicas por link |
| L2 | [downloadanyvideo](https://downloadanyvideo.wired.rs/) — baixe vídeos de qualquer link |
| L3 | [portfolio](https://portfolio.wired.rs/) — serviços, projetos e contato |
| L4 | [leads](https://leads.wired.rs/) — prospecção e inteligência comercial |

## Idiomas

Inglês é o padrão; o seletor `[EN] / PT` no HUD alterna para português e a
preferência fica no `localStorage`. Os textos estão em `i18n.js` (`DICIONARIO`,
chaves `en` e `pt`).

## Protocolo 7 (easter egg)

Digite `lain` em qualquer lugar da página. O slot `seq:` do HUD preenche letra a
letra e o site entra em modo Protocol 7: paleta vermelha, glitch e o aviso
"Close the world. Open the next.". **ESC** (ou um clique) volta ao normal.

## Estrutura

```
wired-rs/
├── index.html            # página (EN padrão)
├── i18n.js               # dicionário EN/PT e troca de idioma
├── styles.css            # CRT, HUD, camadas, protocolo 7
├── script.js             # rede wireframe, relógio, glitch, easter egg
├── favicon.ico           # 16/32/48
├── favicon-32.png
├── apple-touch-icon.png
└── icon-512.png
```

## Rodar localmente

```bash
python3 -m http.server 3320
```

Acesse `http://localhost:3320`.

## Deploy (CI/CD)

Cada push na `main` dispara `.github/workflows/deploy.yml`, que entra por SSH na
VPS (`tools-vps`) e executa o script `/usr/local/bin/deploy-wired-rs`. A chave do
Actions tem **forced command**: só consegue rodar esse script, que faz
`git fetch` + `git reset --hard origin/main` no clone `/home/ubuntu/wired-rs`.
O Nginx serve esse diretório direto (sem build, sem container).

### Secrets (Settings → Secrets and variables → Actions)

| Secret | Valor |
|---|---|
| `DEPLOY_HOST` | `164.152.61.189` |
| `DEPLOY_USER` | `ubuntu` |
| `DEPLOY_SSH_KEY` | chave privada ed25519 com forced command na VPS |
| `DEPLOY_KNOWN_HOSTS` | saída de `ssh-keyscan -H 164.152.61.189` |

## Licença

© Wired Layer Co. Todos os direitos reservados.
