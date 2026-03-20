# AI 工作入口 — askai
> 適用：Claude Code · Claude Cowork · Gemini Code · GitHub Copilot
> 規則：**每次開啟此專案，先讀本檔 + `docs/NEXT_SESSION.md`**

---

## 專案簡介

策研智對 Landing Page + Claude AI 比較工具。

- **框架**：Next.js 15 + TypeScript + Tailwind CSS 3
- **AI 整合**：Anthropic SDK (Claude API)
- **部署**：Vercel → askai.vercel.app

---

## 核心目錄

| 路徑 | 說明 |
|------|------|
| `app/` | Next.js App Router |
| `components/` | UI 元件 |
| `public/` | 靜態資源 |
| `sessions/` | 歷史工作紀錄 |

---

## 常用指令

```bash
npm run dev        # 本地開發 http://localhost:3000
npm run build      # 建置檢查
git push           # Vercel 自動部署
```

---

*維護者：Eugene Lai｜更新：2026-03-19*
