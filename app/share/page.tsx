/**
 * /share 頁面：設計為 1200×630，適合截圖分享到社群
 * 使用方式：瀏覽器開 /share，用截圖工具裁切即可
 */
export default function SharePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 p-8">
      <div className="text-center mb-6 text-gray-500 text-sm absolute top-6">
        截圖以下卡片（1200×630），用於 IG / FB / LINE 分享
      </div>

      {/* 分享卡片本體 */}
      <div
        style={{
          width: 1200,
          height: 630,
          background: 'linear-gradient(135deg, #0a0f1e 0%, #0f1a30 50%, #0a0f1e 100%)',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: "'Noto Sans TC', 'PingFang TC', sans-serif",
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '60px 80px',
          boxSizing: 'border-box',
        }}
      >
        {/* 背景裝飾：光暈 */}
        <div style={{
          position: 'absolute', top: -120, right: -80,
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(239,159,39,0.12) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', bottom: -100, left: -60,
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(239,159,39,0.07) 0%, transparent 70%)',
        }} />

        {/* 格線裝飾 */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        {/* 品牌標籤 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 32 }}>
          <div style={{
            width: 4, height: 28, background: '#EF9F27', borderRadius: 2,
          }} />
          <span style={{ color: '#EF9F27', fontSize: 14, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            策研 CEYAN
          </span>
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 12 }}>·</span>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13 }}>智對框架</span>
        </div>

        {/* 主標題 */}
        <h1 style={{
          fontSize: 64, fontWeight: 900, lineHeight: 1.2,
          color: '#f0ece2', marginBottom: 12,
          textShadow: '0 2px 20px rgba(0,0,0,0.5)',
        }}>
          同一個任務<br />
          <span style={{
            background: 'linear-gradient(90deg, #FAC775, #EF9F27)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            問法不同，結果天差地遠
          </span>
        </h1>

        {/* 副標題 */}
        <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.5)', marginBottom: 48 }}>
          不是你問題問得不夠好——是沒有人教你怎麼跟 AI「對話」
        </p>

        {/* 對比卡片：小版 */}
        <div style={{ display: 'flex', gap: 20, marginBottom: 48 }}>
          {/* 普通問法 */}
          <div style={{
            flex: 1, background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 12, padding: '16px 20px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#888780' }} />
              <span style={{ color: '#888780', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em' }}>普通問法</span>
            </div>
            <p style={{ color: '#666', fontSize: 14, lineHeight: 1.7 }}>
              「在這個 AI 時代，掌握 AI 技術至關重要。我們的課程教你使用 ChatGPT，提升工作效率。名額有限，立即報名！」
            </p>
            <div style={{ marginTop: 12, display: 'inline-block', background: 'rgba(255,255,255,0.06)', color: '#666', fontSize: 11, padding: '3px 10px', borderRadius: 4 }}>
              你 0.1 秒就滑掉
            </div>
          </div>

          {/* 智對問法 */}
          <div style={{
            flex: 1, background: 'rgba(239,159,39,0.08)',
            border: '1.5px solid rgba(239,159,39,0.35)',
            borderRadius: 12, padding: '16px 20px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#EF9F27' }} />
              <span style={{ color: '#EF9F27', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em' }}>智對問法</span>
            </div>
            <p style={{ color: '#e8dfc8', fontSize: 14, lineHeight: 1.7 }}>
              「問了 ChatGPT 三遍，它每次答案都不一樣，最後我自己寫。那天我才明白——不是 AI 不夠強，是我根本不知道怎麼跟它說話。」
            </p>
            <div style={{ marginTop: 12, display: 'inline-block', background: 'rgba(239,159,39,0.15)', color: '#FAC775', fontSize: 11, padding: '3px 10px', borderRadius: 4 }}>
              讀完還想截圖
            </div>
          </div>
        </div>

        {/* 底部：課程資訊 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <span style={{ color: '#EF9F27', fontSize: 15, fontWeight: 700 }}>策研智對</span>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 14, marginLeft: 12 }}>1 小時課程 · 智對框架 · 永久使用</span>
          </div>
          <div style={{
            background: '#EF9F27', color: '#0a0f1e',
            fontWeight: 700, fontSize: 13, padding: '8px 20px', borderRadius: 8,
          }}>
            NTD 1,200 立即開始
          </div>
        </div>
      </div>

      {/* 截圖提示 */}
      <div className="text-center mt-6 text-gray-600 text-xs absolute bottom-6">
        提示：Mac 用 Cmd+Shift+4 選取截圖；也可開啟開發者工具，設定視窗寬度 1200px 再截圖
      </div>
    </div>
  )
}
