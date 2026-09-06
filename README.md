# gyosei-office-site

行政書士事務所の開業準備用モックサイトです。個人情報を公開せず、家族内でデザイン・内容を確認できる状態を目的にしています。

## Stack

- Astro
- Tailwind CSS v4 (build-time via `@tailwindcss/vite`)
- GitHub Pages (mock hosting)
- Cloudflare Workers / Static Assets を本番候補として想定

## Local development

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## GitHub Pages

`.github/workflows/pages.yml` が `main` への push で `dist/` をGitHub Pagesへデプロイします。

初回のみ GitHub の **Settings > Pages > Build and deployment > Source** で **GitHub Actions** を選択してください。

公開想定URL:

`https://konishu.github.io/gyosei-office-site/`

デザイン案2の確認URL:

`https://konishu.github.io/gyosei-office-site/v2/`

現行版はルート、新しいデザイン案は `/v2/` に分けています。どちらも同じGitHub Pagesデプロイで公開されます。

## Current mock policy

- 電話番号・メールアドレス: 非掲載
- 顔写真: プレースホルダー
- 氏名・所在地・所属会: ダミー
- 問い合わせ: UIのみ。送信しない
- LINE: 導線のみ。リンクしない
- 業務内容・対応地域: 仮設定

## Production roadmap

1. 実際の事務所名、行政書士名、登録番号、対応地域を反映
2. 注力業務を決め、サービスページの文章とFAQを精緻化
3. 料金表・相談の流れ・プライバシーポリシーを追加
4. LINE公式アカウントへの導線を追加
5. Cloudflare側に問い合わせ処理 + Turnstileを実装
6. 独自ドメインへ移行し、canonical / sitemap / JSON-LD を更新
7. Google Business Profile等のLocal SEOと整合させる

## SEO / AIO foundation

- semantic HTML
- page-specific title / meta description
- canonical URL
- Open Graph basic metadata
- JSON-LD (`ProfessionalService`)
- robots.txt
- sitemap.xml
- FAQ-style natural-language content
- experimental `llms.txt`

`llms.txt` は補助的な実験要素であり、AI検索への掲載を保証するものではありません。
