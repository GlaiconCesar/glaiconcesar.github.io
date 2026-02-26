# Portfólio - Glaicon Rosa

Site pessoal hospedado via **GitHub Pages** com estrutura estática (HTML/CSS/JS) servida pela raiz do repositório.

## Estrutura atual
- `index.html`: página principal com seções Home, Projetos, Experiência, Skills e Contato.
- `style/style.css`: estilos responsivos (mobile-first).
- `style/script.js`: comportamento leve (ano automático + toggle PT/EN).
- `conhecimentos/`: páginas complementares por domínio técnico.
- `robots.txt` e `sitemap.xml`: suporte básico de SEO.

## Rodar localmente
Como é um site estático, basta servir os arquivos:

```bash
python3 -m http.server 4173
```

Abra: `http://127.0.0.1:4173`

## Deploy (GitHub Pages)
Este repositório usa publicação estática padrão (branch principal e pasta raiz).

Fluxo:
1. Commitar mudanças na branch `main`.
2. Fazer push para o GitHub.
3. O GitHub Pages publica automaticamente.

## Observações de conteúdo
- Se quiser trocar imagens, substitua os arquivos em `assets/` mantendo os mesmos nomes para evitar ajustes de código.
- Links de projetos podem ser atualizados diretamente nos cards da seção `#projects` em `index.html`.
