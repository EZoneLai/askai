'use client'

import { useState } from 'react'

const INTEREST_OPTIONS = [
  { value: 'ceyan',    label: '智對｜AI 啟問實戰課' },
  { value: 'devaccel', label: '智速｜方案 B — NT$6,800（含直播答疑）' },
  { value: 'diy',      label: '智速｜方案 C — NT$16,800（代做服務）' },
  { value: 'consult',  label: '諮詢代做方案（前往策研接案頁）' },
]

export default function SignupForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', lineId: '', interest: '' })
  const [consent, setConsent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const [validationMsg, setValidationMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (form.interest === 'consult') {
      window.open('https://ceyan.ronsunai.tw/intake', '_blank')
      return
    }
    if (!form.name || !form.email || !form.lineId) { setValidationMsg('請填寫姓名、Email 與 LINE ID'); return }
    if (!form.interest) { setValidationMsg('請選擇你有興趣的方案'); return }
    if (!consent) { setValidationMsg('請勾選同意個資告知事項'); return }
    setValidationMsg('')
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form }),
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
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ background: 'rgba(6,199,85,0.15)', border: '2px solid rgba(6,199,85,0.4)' }}>
          <span className="text-3xl">✓</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">已收到！</h3>
        <p className="text-base text-gray-200 mb-2">
          請記得加入 LINE@，方便我們聯繫你報名細節。
        </p>
        <p className="text-sm text-gray-400 mb-8">加入後也可以直接詢問課程內容與場次安排。</p>
        <a
          href="https://line.me/R/ti/p/@815ndzxp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-base font-bold px-8 py-4 rounded-xl transition-all"
          style={{ background: '#06C755', color: '#fff', boxShadow: '0 6px 24px rgba(6,199,85,0.35)' }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.03 2 11c0 3.07 1.6 5.8 4.1 7.55v2.7l2.54-1.4c.76.21 1.56.33 2.36.33 5.52 0 10-4.03 10-9s-4.48-9-10-9z"/></svg>
          加入 LINE@
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
        <label className="block text-base font-semibold text-gray-200 mb-2">LINE ID <span className="text-red-400">*</span></label>
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

      {(error || validationMsg) && (
        <p className="text-amber-400 text-base text-center font-medium">
          {validationMsg || error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-5 rounded-xl text-xl font-black tracking-wide transition-all duration-200 disabled:cursor-not-allowed"
        style={{
          background: 'linear-gradient(135deg, #FCD34D, #F59E0B)',
          color: '#060D1A',
          boxShadow: '0 8px 32px rgba(245,158,11,0.45)',
        }}
        onMouseEnter={e => { if (!submitting) { e.currentTarget.style.boxShadow = '0 12px 40px rgba(245,158,11,0.65)'; e.currentTarget.style.transform = 'translateY(-2px)' } }}
        onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(245,158,11,0.45)'; e.currentTarget.style.transform = 'translateY(0)' }}
      >
        {form.interest === 'consult' ? '前往策研接案諮詢 →' : submitting ? '送出中...' : '送出，我要了解更多 →'}
      </button>
    </form>
  )
}
