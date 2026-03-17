'use client'

import { useState } from 'react'

const INTEREST_OPTIONS = [
  { value: 'plan-a', label: '方案 A — NT$1,200 一次付費' },
  { value: 'plan-b', label: '方案 B — $9 USD/月 訂閱制' },
  { value: 'both',   label: '兩個都想了解' },
]

export default function SignupForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', lineId: '', interest: '' })
  const [consent, setConsent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const valid = form.name && form.email && form.interest && consent

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!valid) return
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('https://formspree.io/f/xykdwwnd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, source: 'askai-landing' }),
      })
      if (res.ok) setSubmitted(true)
      else throw new Error('送出失敗')
    } catch {
      setError('送出失敗，請稍後再試，或直接加入 LINE 聯繫我們。')
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass = `w-full px-4 py-3 rounded-xl text-base text-white placeholder-gray-500
    bg-bg-700 border border-white/10 focus:outline-none focus:border-amber-ceyan transition-colors`

  if (submitted) {
    return (
      <div className="max-w-md mx-auto text-center py-10">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-white mb-3">收到了！</h3>
        <p className="text-base text-gray-200 mb-8">
          我們會盡快透過 Email 聯繫你。<br />
          也歡迎直接加 LINE 即時問問題！
        </p>
        <a
          href="https://line.me/R/ti/p/@815ndzxp"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4"
        >
          加入 LINE 官方帳號 →
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-5">

      {/* 姓名 */}
      <div>
        <label className="block text-base font-semibold text-gray-200 mb-2">
          姓名 <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          required
          value={form.name}
          onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
          placeholder="你的稱呼"
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-base font-semibold text-gray-200 mb-2">
          Email <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          required
          value={form.email}
          onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
          placeholder="your@email.com"
          className={inputClass}
        />
      </div>

      {/* 電話 */}
      <div>
        <label className="block text-base font-semibold text-gray-200 mb-2">手機號碼</label>
        <input
          type="tel"
          value={form.phone}
          onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
          placeholder="0912-345-678"
          className={inputClass}
        />
      </div>

      {/* LINE ID */}
      <div>
        <label className="block text-base font-semibold text-gray-200 mb-2">LINE ID</label>
        <input
          type="text"
          value={form.lineId}
          onChange={e => setForm(p => ({ ...p, lineId: e.target.value }))}
          placeholder="你的 LINE ID"
          className={inputClass}
        />
      </div>

      {/* 興趣方案 */}
      <div>
        <label className="block text-base font-semibold text-gray-200 mb-3">
          你對哪個方案有興趣？ <span className="text-red-400">*</span>
        </label>
        <div className="space-y-2">
          {INTEREST_OPTIONS.map(opt => (
            <label
              key={opt.value}
              className="flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all"
              style={{
                border: form.interest === opt.value ? '1.5px solid #F59E0B' : '1.5px solid rgba(255,255,255,0.10)',
                background: form.interest === opt.value ? 'rgba(245,158,11,0.08)' : 'rgba(255,255,255,0.03)',
              }}
            >
              <input
                type="radio"
                name="interest"
                value={opt.value}
                checked={form.interest === opt.value}
                onChange={() => setForm(p => ({ ...p, interest: opt.value }))}
                className="accent-amber-400 w-4 h-4 flex-shrink-0"
              />
              <span className="text-base text-gray-200">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* 個資同意 */}
      <div className="rounded-xl border border-white/8 overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.03)' }}>
        <details className="group">
          <summary className="px-4 py-3 text-sm text-gray-400 cursor-pointer hover:text-gray-300 transition-colors list-none flex items-center justify-between">
            <span>個人資料蒐集告知事項（點擊展開閱讀）</span>
            <span className="group-open:rotate-180 transition-transform">▾</span>
          </summary>
          <div className="px-4 pb-4 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-3 space-y-1">
            <p>依個人資料保護法第 8 條告知：</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>蒐集機關：容晟科技有限公司 / 策研智對 Ceyan AI</li>
              <li>蒐集目的：課程報名確認、活動與課程通知</li>
              <li>資料類別：姓名、Email、手機號碼、LINE ID</li>
              <li>利用期間：課程結束後 2 年</li>
              <li>您可行使查詢、更正、刪除等權利，請 Email 至 service@ronsun.tw</li>
            </ul>
          </div>
        </details>
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={consent}
          onChange={e => setConsent(e.target.checked)}
          className="mt-1 w-4 h-4 accent-amber-400 flex-shrink-0"
        />
        <span className="text-sm text-gray-300 leading-relaxed">
          我已閱讀並同意上述個人資料蒐集告知事項，並同意接收課程相關通知。
          購買前請另閱
          <a href="/refund" className="underline text-amber-400 hover:text-amber-300 mx-1">退款政策</a>
          與
          <a href="/privacy" className="underline text-amber-400 hover:text-amber-300 mx-1">隱私權政策</a>。
        </span>
      </label>

      {error && (
        <p className="text-red-400 text-sm text-center">{error}</p>
      )}

      <button
        type="submit"
        disabled={!valid || submitting}
        className="w-full py-5 rounded-xl text-xl font-black tracking-wide transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
        style={{
          background: 'linear-gradient(135deg, #FCD34D, #F59E0B)',
          color: '#060D1A',
          boxShadow: '0 8px 32px rgba(245,158,11,0.40)',
        }}
        onMouseEnter={e => { if (valid && !submitting) (e.currentTarget.style.boxShadow = '0 12px 40px rgba(245,158,11,0.60)'); (e.currentTarget.style.transform = 'translateY(-2px)') }}
        onMouseLeave={e => { (e.currentTarget.style.boxShadow = '0 8px 32px rgba(245,158,11,0.40)'); (e.currentTarget.style.transform = 'translateY(0)') }}
      >
        {submitting ? '送出中...' : '送出，我要了解更多 →'}
      </button>
    </form>
  )
}
