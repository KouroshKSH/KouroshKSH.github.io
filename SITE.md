# Kourosh — Personal Site

Graph-based technical blog built with [Quartz v5](https://quartz.jzhao.xyz/). Live at **https://kouroshksh.github.io** (after GitHub Pages is enabled).

## Quick start

```bash
cd /Users/kouroshsharifi/Documents/github/khodam/KouroshKSH.github.io
nvm use 22
npm ci
npx quartz plugin install --from-config
npx quartz build --serve   # preview at http://localhost:8080
```

## Adding a blog post

1. Create a `.md` file in `content/writing/` (or any subfolder under `content/`)
2. Add frontmatter:

```yaml
---
title: My Post Title
date: 2026-07-04
tags: [ml, topic]
draft: false
---
```

3. Use wikilinks: `[[other-note|Display Name]]`
4. Build locally or push to `v5` — GitHub Actions deploys automatically

## Images

Store assets in `quartz/static/` (site-wide) or `quartz/static/blog/` (blog images):

```markdown
![Diagram caption](/static/blog/my-diagram.png)
```

Commit images to git — they deploy with the site. Do not hotlink to `raw.githubusercontent.com`.

## Replace the eagle sigil

Drop your dithered GIF/PNG into `quartz/static/` (e.g. `eagle.gif`) and update the image path in `content/index.md`:

```markdown
![Achaemenid eagle sigil](/static/eagle.gif){.hero-sigil}
```

## Remaining TODOs (manual)

1. **Enable GitHub Pages**: Repo → Settings → Pages → Source → **GitHub Actions**
2. **Google Scholar**: Replace `#` placeholder in `content/experience.md` with your profile URL
3. **Custom domain** (optional): add `CNAME` file + DNS when ready
4. **Fine-tune theme**: edit `quartz/styles/custom.scss` and `quartz.config.yaml`

## Sync changes to GitHub

```bash
npx quartz sync
```

Or manually: `git add -A && git commit -m "..." && git push origin v5`

## Upgrade Quartz

```bash
npx quartz upgrade
```
