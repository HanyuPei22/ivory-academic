# Ivory Academic

一个暖白色的学术个人主页模板：衬线字体、简洁排版，支持研究兴趣、论文、教育和实习经历。

[在线预览](https://hanyupei22.github.io/ivory-academic/) · [使用此模板](https://github.com/HanyuPei22/ivory-academic/generate) · [English](README.md)

![桌面预览](docs/preview-desktop.jpg)

<details>
<summary>手机端预览</summary>
<img src="docs/preview-mobile.jpg" alt="Ivory Academic 手机端预览" width="390">
</details>

## 部署到 GitHub Pages

1. 点击 **Use this template → Create a new repository**，创建公开仓库。个人主页推荐命名为 `你的用户名.github.io`。
2. 修改 `_config.yml`：

   ```yaml
   title: "你的名字 — Research"
   description: "你的研究简介。"
   url: "https://你的用户名.github.io"
   baseurl: ""
   ```

   如果仓库叫 `academic-homepage`，`baseurl` 改为 `"/academic-homepage"`；如果仓库是 `用户名.github.io`，或使用自定义域名，保持为空。
3. 修改 `_data/` 里的内容，把照片放到 `images/`，并更新 `profile.json` 的 `portrait` 和 `portrait_alt`。
4. 打开 **Settings → Pages**，选择 **Deploy from a branch**，分支选 **main**，目录选 **/ (root)**，保存。
5. 等待部署成功；Pages 设置页会显示网址。以后每次提交修改都会自动重新部署。

不需要 Node.js 构建或额外的 GitHub Actions 工作流。

## 修改内容

| 文件 | 用途 |
| --- | --- |
| `_data/profile.json` | 姓名、缩写、学校、导师、邮箱、头像、首页标题、研究兴趣、简介和社交链接 |
| `_data/news.json` | 新闻，按想展示的顺序填写，建议最新在前 |
| `_data/publications.json` | 论文，按想展示的顺序填写 |
| `_data/education.json` | 教育经历 |
| `_data/experience.json` | 实习和其他工作经历 |
| `_config.yml` | 网页标题、描述、语言和网址 |
| `assets/css/profile.css` | 配色、字体和间距 |
| `images/monogram.svg` | 浏览器标签页图标 |

模板里的学校、论文、经历均为示例，请替换后使用。

- `headline` 数组的每一项显示为一行。
- `bio` 的每段文字和新闻的 `text` 支持 Markdown；其他文字字段按纯文本显示。
- 导师名字 `advisor.name` 设为 `""` 可以去掉导师；`scholar_url` 设为空可以去掉论文区的 Scholar 链接。
- 论文 `kind` 使用 `"reviewed"` 或 `"preprint"`，分别对应正式论文和预印本筛选。
- 作者名字与 `profile.name` 完全相同时自动加粗；`equal_contribution: true` 添加共同贡献星号。
- 新闻日期填写 `YYYY-MM-DD`，网页显示月份和年份；教育和工作日期可以直接写时间范围。
- 不需要的栏目，把对应数据文件内容改为 `[]`，栏目和导航会自动隐藏。如果只保留工作经历，可以在 `index.html` 和 `_layouts/profile.html` 中把 Education 改为 Experience。
- JSON 各项之间需要逗号，最后一项不能带多余逗号。完整论文示例见 [英文说明](README.md#add-a-publication)。

更换姓名缩写时，同时修改 `profile.initials` 和 `images/monogram.svg`。配色主要由 CSS 开头的变量控制；修改整体配色时，导航栏的半透明背景也需要同步修改。

## 本地预览

安装 Ruby 和 Bundler，在仓库目录运行：

```sh
bundle install
bundle exec jekyll serve --baseurl ""
```

打开 `http://localhost:4000`。修改 `_config.yml` 后需要重启预览服务；运行 `bundle exec jekyll build` 可以按配置中的路径构建网站。

## 设计与许可

模板提取自 [Hanyu Pei 的个人主页](https://hanyupei22.github.io/)，保留暖白配色、编辑式排版、手机导航和论文筛选。使用系统字体与本地资源，没有统计追踪服务。页面在关闭 JavaScript 时仍可阅读。

使用 [MIT License](LICENSE)，可自由修改、用于个人或商业项目。分发源码时请保留许可证和版权声明；网页页脚不强制展示模板署名。
