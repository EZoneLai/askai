# 2026-03-17 清理目錄結構與修復安全漏洞

## 目標
- [x] 清理錯誤資料夾 `{app`
- [x] 升級 Next.js 到 15.1.12 以符合 Vercel 安全要求 (CVE-2025-66478)

## 變更紀錄
- 刪除 `/askai/{app` 資料夾（先前 shell 指令錯誤產生）。
- 升級 `package.json`：將 `next` 與 `eslint-config-next` 從 15.1.0 升級至 15.1.12。
- 更新 `package-lock.json` 以同步依賴版本。

## 檢查清單
- [x] TypeScript 無錯誤 (npm run build 通過)
- [x] HTML 標籤正確閉合
- [x] console 無紅字
- [x] 本地編譯成功

## 狀態
- 推送時間：2026-03-17
- Vercel 部署：已推送至 main，等待自動觸發
