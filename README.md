# Ivory Academic

A warm, minimal academic homepage template with editorial typography, an ivory background, and space for research, publications, and experience.

[Live demo](https://hanyupei22.github.io/ivory-academic/) · [Use this template](https://github.com/HanyuPei22/ivory-academic/generate) · [中文说明](README.zh-CN.md)

![Desktop preview](docs/preview-desktop.jpg)

<details>
<summary>Mobile preview</summary>
<img src="docs/preview-mobile.jpg" alt="Mobile version of Ivory Academic" width="390">
</details>

## Features

- Responsive layout, mobile navigation, and a simple initials wordmark.
- Research interests, Markdown biography, news, publications, education, and experience.
- Publication filters for peer-reviewed papers and preprints; automatic numbering and author highlighting.
- Content managed in JSON files, with empty sections omitted automatically.
- Keyboard navigation, visible focus styles, reduced-motion support, and readable content without JavaScript.
- Jekyll and GitHub Pages support, including repository subpaths.
- System fonts and small local assets; no external font services, tracking, or JavaScript framework.

The demo uses placeholder content. Its sample papers, affiliations, and milestones are illustrative.

## Publish your homepage

1. Click **Use this template → Create a new repository**. For a personal site, name it `YOUR_USERNAME.github.io`; for a project site, choose any other name. Create a public repository.
2. Edit `_config.yml`:

   ```yaml
   title: "Your Name — Research"
   description: "Your short research introduction."
   url: "https://YOUR_USERNAME.github.io"
   baseurl: ""
   ```

   For a project site such as `academic-homepage`, set `baseurl: "/academic-homepage"`. Leave `baseurl` empty for `YOUR_USERNAME.github.io` or a custom domain.
3. Replace the content in `_data/` and upload your photo to `images/`. Update `portrait` and `portrait_alt` in `_data/profile.json`.
4. In **Settings → Pages**, select **Deploy from a branch**, choose **main** and **/ (root)**, then save.
5. Wait for the Pages build to finish. Your URL appears in Settings → Pages. Subsequent commits trigger a new build.

This template does not require GitHub Actions workflow files or a Node.js build.

## Customize content

| File | Content |
| --- | --- |
| `_data/profile.json` | Name, initials, role, institution, advisor, email, portrait, headline, interests, biography, social links, footer |
| `_data/news.json` | News items in display order, newest first |
| `_data/publications.json` | Papers in display order, newest first |
| `_data/education.json` | Education |
| `_data/experience.json` | Internships and other experience |
| `_config.yml` | Site metadata, language, URL, and base path |
| `assets/css/profile.css` | Colors, typography, spacing, and responsive styles |
| `images/monogram.svg` | Favicon initials |

The `headline` is an array: each entry becomes a line. The `bio` paragraphs and news `text` support Markdown; other text fields are escaped as plain text. Set `advisor.name` to `""` to omit the advisor, and `scholar_url` to `""` to hide the Scholar link above publications. Remove unwanted social links from the array. Set a section's data file to `[]` to hide that section and its navigation link. If you only include experience, change the Education label in `index.html` and `_layouts/profile.html` as appropriate.

### Add a publication

Copy one entry in `_data/publications.json`, then update its fields. JSON objects must be separated by commas; trailing commas are not valid.

```json
{
  "title": "Your Paper Title",
  "year": "2026",
  "kind": "reviewed",
  "badge": "Conference 2026",
  "venue": "Full conference or journal name, 2026",
  "url": "https://example.org/paper",
  "authors": [{"name": "Your Name"}, {"name": "Coauthor", "equal_contribution": true}],
  "links": [{"label": "Paper", "url": "https://example.org/paper"}]
}
```

Use `"reviewed"` or `"preprint"` for `kind`. Authors whose name exactly matches `profile.name` are bolded. `equal_contribution: true` adds an asterisk. Set `badge` or `url` to `""` if unused, and `links` to `[]` to omit extra links. Update `publication_note` in the profile to match your author markers. Paper counts and numbering are automatic.

News dates use `YYYY-MM-DD`, rendered as month and year. Education and experience dates are plain strings, so ranges such as `Aug 2025 — Present` are supported. Lists are displayed in the order you write them.

### Change the visual style

Edit the variables at the top of `assets/css/profile.css`. The main colors are `--paper`, `--ink`, `--muted`, `--line`, `--accent`, and `--surface`. The sticky header also has an explicit translucent background color; update it when changing the overall palette. To change initials, edit both `profile.initials` and the text inside `images/monogram.svg`.

## Preview locally

Install Ruby and Bundler, then run from the repository directory:

```sh
bundle install
bundle exec jekyll serve --baseurl ""
```

Open `http://localhost:4000`. Restart Jekyll after changing `_config.yml`. To check production paths, run `bundle exec jekyll build` without overriding `baseurl`.

## Structure

```text
_config.yml
_data/                 Editable content
_layouts/profile.html  Shared document, navigation, footer
index.html             Homepage sections
assets/css/profile.css Visual design
assets/js/profile.js   Mobile menu and publication filters
images/                Portrait placeholder and favicon
docs/                  Preview images (not deployed)
```

## Credits and license

Adapted from [Hanyu Pei's personal homepage](https://hanyupei22.github.io/). The editorial layout uses original HTML/CSS, system fonts, and a locally drawn SVG placeholder. The source homepage previously used an MIT-licensed template by Yi Ren; its copyright notice is retained.

Released under the [MIT License](LICENSE). You may use and modify the template for personal or commercial projects. Keep the license notice when redistributing the source. A visible footer credit is optional.
