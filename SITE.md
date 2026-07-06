# Kourosh — Personal Site

Graph-based technical blog built with [Quartz v5](https://quartz.jzhao.xyz/). Live at **https://kouroshksh.github.io** (after GitHub Pages is enabled).

## Quick start

```bash
cd .../KouroshKSH.github.io
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

Copy your dithered eagle PNG into the repo (recommended over the 40MB GIF):

```bash
cp ~/Downloads/ascii-magic-3.png quartz/static/eagle.png
# optional: resize for faster loads
sips -Z 560 quartz/static/eagle.png
```

The landing page already references `/static/eagle.png`. Use the static PNG for now; swap in a smaller GIF later if you want animation.

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
