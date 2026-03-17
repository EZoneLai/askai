'use client'

import { useState } from 'react'

const PRESETS = [
  '寫一則吸引人的 AI 課程推廣 FB 貼文',
  '幫我寫一封給客戶的跟進 Email',
  '寫一則 IG 教學貼文，主題是提升工作效率',
  '幫我寫一篇公司介紹的開頭段落',
]

interface CompareResult {
  normal: string
  zhidui: string
}

export default function InteractiveComparison() {
  const [task, setTask] = useState('')
  const [result, setResult] = useState<CompareResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleCompare() {
    if (!task.trim()) return
    setLoading(true)
    setError('')
    setResult(null)

    try {
      const res = await fetch('/api/compare', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || '發生錯誤')
      setResult(data)
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : '發生錯誤，請再試一次')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="try-it" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">

        {/* 標題 */}
        <div className="text-center mb-12">
          <div className="section-divider" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            親眼看看，<span className="text-amber-gradient">差距有多大</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            輸入你今天需要 AI 幫你做的任何任務。<br />
            我們用同一個任務，跑兩種問法，讓輸出說話。
          </p>
        </div>

        {/* 預設任務快選 */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {PRESETS.map((p) => (
            <button
              key={p}
              onClick={() => setTask(p)}
              className="text-sm px-4 py-2 rounded-full border transition-all"
              style={{
                border: task === p ? '1px solid #EF9F27' : '1px solid rgba(255,255,255,0.12)',
                background: task === p ? 'rgba(239,159,39,0.1)' : 'transparent',
                color: task === p ? '#EF9F27' : '#9ca3af',
              }}
            >
              {p}
            </button>
          ))}
        </div>

        {/* 輸入框 */}
        <div className="card-navy p-4 mb-4">
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <textarea
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="輸入你的任務，例如：幫我寫一則 IG 貼文介紹我的 AI 課程…"
                rows={3}
                maxLength={200}
                className="w-full bg-transparent text-white placeholder-gray-500 resize-none text-sm leading-relaxed"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) handleCompare()
                }}
              />
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-600">{task.length}/200 字・Cmd+Enter 送出</span>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleCompare}
          disabled={loading || !task.trim()}
          className="btn-primary w-full mb-8 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span>AI 正在跑兩種問法</span>
              <span className="flex gap-1">
                <span className="loading-dot inline-block w-1.5 h-1.5 rounded-full bg-navy-900" />
                <span className="loading-dot inline-block w-1.5 h-1.5 rounded-full bg-navy-900" />
                <span className="loading-dot inline-block w-1.5 h-1.5 rounded-full bg-navy-900" />
              </span>
            </span>
          ) : '🔍 產出對比，看差距'}
        </button>

        {/* 錯誤訊息 */}
        {error && (
          <div className="text-red-400 text-sm text-center mb-6 p-3 rounded-lg bg-red-900/20 border border-red-800/40">
            {error}
          </div>
        )}

        {/* 對比結果 */}
        {result && (
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
            {/* 普通問法 */}
            <div className="output-card-bad p-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-500 inline-block" />
                <span className="text-xs font-medium uppercase tracking-widest text-gray-500">普通問法</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-wrap">
                {result.normal}
              </p>
              <div className="mt-4 pt-4 border-t border-white/5">
                <span className="text-xs text-gray-600 bg-white/5 px-3 py-1 rounded-full">
                  你看完，還要自己重寫
                </span>
              </div>
            </div>

            {/* 智對問法 */}
            <div className="output-card-good p-5 relative">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-ceyan inline-block" style={{ background: '#EF9F27' }} />
                <span className="text-xs font-medium uppercase tracking-widest" style={{ color: '#EF9F27' }}>智對問法</span>
              </div>
              <p className="text-sm leading-relaxed whitespace-pre-wrap" style={{ color: '#e8dfc8' }}>
                {result.zhidui}
              </p>
              <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(239,159,39,0.2)' }}>
                <span className="text-xs px-3 py-1 rounded-full" style={{ background: 'rgba(239,159,39,0.15)', color: '#FAC775' }}>
                  第一輪就給你想要的方向
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 結果出來後的 CTA */}
        {result && (
          <div className="text-center mt-10">
            <p className="text-gray-400 mb-4 text-sm">
              想知道智對問法背後的設計邏輯？
            </p>
            <a href="#pricing" className="btn-primary">
              1 小時學完整框架 →
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
