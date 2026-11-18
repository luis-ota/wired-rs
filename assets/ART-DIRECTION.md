# Imagens editoriais

Geradas com a ferramenta integrada ImageGen em 17/11/2026. Direção visual
estudada nas sete imagens de https://x.com/zzurcz/status/2122462059723907227.
As referências foram baixadas e inspecionadas; as imagens do site são novas,
sem os textos ou marcas do carrossel de referência.

## Arquivos finais

- `editorial-stairway.webp`: cartaz principal, escadaria e céu cobalto.
- `editorial-industry.webp`: quinze tanques em cinco colunas e três linhas.
- `editorial-plaza.webp`: praça e escadaria do manifesto.
- `editorial-scaffolding.webp`: andaimes e tecido translúcido do contato.
- `sulfite-grain.webp`: textura de papel sulfite aplicada pelo CSS.

Os arquivos foram convertidos para WebP com ImageMagick (qualidade 86;
textura em 768 × 768, qualidade 90). Os originais permanecem na biblioteca
local de imagens geradas. Tipografia e marcas são elementos HTML.

## Prompts de direção

Base das três primeiras imagens:

> Art direction for wired layer co.: refined architectural editorial photography, cobalt blue #1f45e0, warm ivory concrete and matte uncoated paper. Real photographic detail and subtle analog print grain, understated sophisticated brand imagery. No text, no letters, no logos, no watermarks, no UI, no vector illustration.

### Escadaria

> Portrait 4:5 architectural photograph. Monumental pale travertine / warm ivory concrete stairway ascending from bottom left toward center, massive simple wall on right edge, rich uninterrupted cobalt blue sky occupying upper 65 percent, tiny solitary person seen from behind in dark clothes at base of stairs in lower middle, human scale against monumental architecture. Hard midday sunlight from upper left, long precise charcoal diagonal shadow across concrete foreground. Clean geometric composition with large blue negative space at upper center for later HTML typography. Tactile limestone, film grain, premium print campaign, realistic architecture, restrained and quiet.

### Série industrial

> Landscape 5:3 photographic typology contact sheet: EXACTLY fifteen distinct black and white photographs in a perfectly regular FIVE COLUMN by THREE ROW grid. Every photograph depicts a different spherical industrial gas storage tank, steel legs, ladders, pipework, catwalk, aged steel texture, photographed straight on with consistent camera distance and overcast sky, inspired by archival industrial architectural documentation. Thin equal warm ivory gutters between all fifteen photos, zero outer border. Consistent exposures, crisp detailed analog silver gelatin black and white photography printed on uncoated ivory paper, no text, no numbering. The photographs must be realistic and structurally coherent, spherical tanks fill each frame.

### Praça

> Wide landscape 16:9 architectural campaign photograph. Huge saturated cobalt blue sky occupies top 70 percent, smooth rich blue with subtle photographic tonal depth. Bottom 30 percent: monumental pale ivory concrete plaza, low sculptural geometric walls and broad stairs on far right, single tiny person seen from behind in dark clothing at lower right third walking toward stairs. Large dramatic triangular shadow entering from bottom right. Keep LEFT TWO THIRDS of the whole image very dark even cobalt blue and empty so white HTML quote will be legible there. Refined surreal scale but physically plausible photograph, sunlit travertine and crisp shadows, tactile analog grain.

### Andaimes

> Portrait 4:5 fine art architectural photograph of construction scaffolding wrapped in translucent off-white protective fabric. Coherent silver steel poles, diagonal braces, couplers and overlapping translucent sheets with real delicate folds, no workers, no signs. Soft diffused overcast daylight, near monochrome warm ivory and silver gray, airy high key exposure, fade toward pure warm white at left with more structural detail on right. Quiet architectural study for wired layer co website contact section, subtle scan grain on matte uncoated paper. Photographic realism, sophisticated architectural editorial, no vectors, no lettering, no logos, no watermark.

### Papel

> Square seamless repeating background texture for a website. Flatbed scan of a clean sheet of matte white uncoated office printer paper, Brazilian papel sulfite. Entire image uniform neutral very light gray with barely visible fine interwoven cellulose fibers and delicate random graphite-size grain. Soft even diffuse scanner illumination, no directional light, no shadows, no edges, no objects, no letters, no stains, no folds, no creases, no vignette. Extremely fine subtle texture, natural paper fibers, seamless tileable composition, not rough handmade paper or canvas.

## Ajustar o grão

Em `styles.css`, `body::before` repete a textura em 384 px, com
`mix-blend-mode: multiply`, opacidade 0.55 e `pointer-events: none`.
O cartaz também recebe a textura, em modo overlay. O efeito é estático.
