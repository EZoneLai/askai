# 策研智對 CEYAN｜AI 課程官網

Next.js 15 · Tailwind CSS · Anthropic SDK · Vercel 部署

---

## 專案概覽

「策研智對」AI 線上課程的行銷官網 Landing Page。
核心功能：互動式 Claude API 雙問法對比 Demo、課程銷售漏斗、社群分享卡片。

---

## 技術架構（Next.js App Router）

```
askai/
├── app/                          # Next.js App Router 根目錄
│   ├── layout.tsx                # 全站 RootLayout + OG Meta（FB/Twitter Card）
│   ├── page.tsx                  # 首頁 Landing Page（靜態，SSR/SSG）
│   ├── globals.css               # 全站 CIS 樣式（CSS Variables + Tailwind 自訂）
│   ├── api/
│   │   └── compare/
│   │       └── route.ts          # API Route：Claude 雙問法對比（POST）
│   └── share/
│       └── page.tsx              # 社群分享卡片頁（1200×630，/share）
├── components/
│   └── InteractiveComparison.tsx # Client Component：互動 Prompt 對比 UI
├── public/
│   └── images/
│       └── eugene-hero.jpg       # 講師照片（方形裁切，object-position: top）
├── .env.example                  # 環境變數範本
├── .env.local                    # 本地環境變數（不進版控）
├── tailwind.config.ts            # Tailwind 設定 + CIS 色票擴展
├── next.config.mjs               # Next.js 設定（圖片 unoptimized）
└── README.md                     # 本文件
```

### 路由一覽

| 路由 | 類型 | 說明 |
|------|------|------|
| `/` | Page (Server) | 主 Landing Page |
| `/share` | Page (Server) | 社群分享圖（截圖用） |
| `/api/compare` | API Route (POST) | Claude 雙問法對比 |

---

## CIS 設計系統

### 色票

| 名稱 | Hex | 用途 |
|------|-----|------|
| Brand Amber | `#F59E0B` | 主 CTA、強調文字、智對問法 |
| Amber Light | `#FCD34D` | 漸層高亮 |
| Brand Cyan | `#06B6D4` | AI 元素、tag、漸層搭配 |
| BG 900 | `#060D1A` | 主背景 |
| BG 800 | `#0E1929` | 卡片背景 |
| BG 700 | `#162236` | 升高層卡片 |
| Ink 100 | `#F5F0E8` | 主文字 |
| Ink 500 | `#8393A7` | 次要文字 |

### 漸層

```css
--text-amber-gradient: linear-gradient(90deg, #FCD34D, #F59E0B)   /* 標題強調 */
--text-ai-gradient:    linear-gradient(100deg, #F59E0B, #06B6D4)  /* AI 主題標題 */
--section-divider:     linear-gradient(90deg, #F59E0B, #06B6D4)   /* 分隔線 */
```

### 照片框

使用 `.photo-frame` class：方形 112×112px、`border-radius: 12px`、`object-position: center top`（確保不裁切頭部）。

---

## 本地快速啟動

### 1. 安裝依賴

```bash
npm install
```

### 2. 設定環境變數

```bash
cp .env.example .env.local
```

`.env.local` 範本：

```
# 可選：若要啟用 AI 互動對比功能，填入 API Key
ANTHROPIC_API_KEY=sk-ant-你的金鑰

# 網站基本 URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> 沒有 API Key 時，Landing Page 靜態版面仍可正常運作，只有互動對比 Demo 會回傳錯誤。

### 3. 啟動開發伺服器

```bash
npm run dev
# 或指定 port（若 3000 被佔用）
npm run dev -- -p 3003
```

瀏覽：
- 主頁：http://localhost:3003
- 分享圖：http://localhost:3003/share

---

## 部署到 GitHub + Vercel

### 步驟 1：推送 GitHub

```bash
git init
git add .
git commit -m "feat: askai landing page"
git remote add origin https://github.com/EZoneLai/askai.git
git push -u origin main
```

### 步驟 2：Vercel Import

1. https://vercel.com → Add New Project → Import `askai`
2. Framework Preset：**Next.js**（自動偵測）
3. Settings → Environment Variables 加入：
   - `ANTHROPIC_API_KEY` = `sk-ant-...`（選填）
   - `NEXT_PUBLIC_SITE_URL` = `https://askai.vercel.app`

### 步驟 3：Deploy

點 Deploy → 約 2–3 分鐘取得 `.vercel.app` 網址。

---

## 核心功能說明

### 互動 Prompt 對比（`/`）

使用者輸入任務 → 後端並行呼叫 Claude API 兩次（不同 System Prompt）→ 左右並排展示對比。
修改提示：`app/api/compare/route.ts` 中的 `NORMAL_SYSTEM` 和 `ZHIDUI_SYSTEM`。

### 社群分享圖（`/share`）

1200×630px 靜態設計卡片，用 Mac 截圖（Cmd+Shift+4）或瀏覽器 DevTools 截取後分享。

---

## 常用指令

```bash
npm run dev      # 本地開發
npm run build    # 建置（檢查 TypeScript 錯誤）
npm run start    # 本地跑 Production 版本
npm run lint     # ESLint 檢查
```

---

## 常見問題

**Q：沒有 ANTHROPIC_API_KEY 可以啟動嗎？**
A：可以。靜態頁面完整顯示，只有「送出任務」功能會報 500 錯誤。

**Q：Vercel 部署後 API 失敗？**
A：確認 Vercel Environment Variables 已設定 `ANTHROPIC_API_KEY`，並重新 Deploy。

**Q：如何修改對比 Demo 的預設任務？**
A：修改 `components/InteractiveComparison.tsx` 中的 `PRESETS` 陣列。

**Q：照片顯示破圖？**
A：確認 `public/images/eugene-hero.jpg` 存在。
