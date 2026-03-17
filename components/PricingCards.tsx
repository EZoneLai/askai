'use client'

import { useState } from 'react'

const PLANS = [
  {
    id: 'plan-a',
    tag: '自學實戰版',
    name: '方案 A',
    price: 'NT$1,200',
    unit: '一次付費',
    features: [
      '完整 1 小時錄影課程',
      '智對 Prompt 指令庫禮包（永久使用）',
      '買完馬上看，不限次數回放',
    ],
    cta: '立即購買，馬上開始看',
    variant: 'secondary' as const,
    // TODO: 替換為實際 ECPay 付款連結
    href: '#signup',
  },
  {
    id: 'plan-b',
    tag: '策研領航版',
    name: '方案 B',
    price: '$9 USD',
    unit: '／月，隨時取消',
    features: [
      '立即免費獲得完整課程',
      '加入 Skool 策研封閉社群',
      '每月更新：AI 實戰工作流 + 最新工具策略',
      '直播場次優先參與權',
      '專屬顧問社群支援',
    ],
    cta: '加入領航，$9 進場',
    variant: 'primary' as const,
    // TODO: 替換為實際 Skool 訂閱連結
    href: '#signup',
    badge: '最多人選擇',
  },
]

export default function PricingCards() {
  const [modal, setModal] = useState<null | typeof PLANS[number]>(null)
  const [consent, setConsent] = useState(false)

  function openModal(plan: typeof PLANS[number]) {
    setConsent(false)
    setModal(plan)
  }

  function handleConfirm() {
    if (!modal || !consent) return
    // TODO: 替換為實際金流連結（ECPay / Skool）
    window.location.href = modal.href
  }

  return (
    <>
      <div className="grid md:grid-cols-2 gap-6">
        {/* 方案 A */}
        <div className="card-navy p-8">
          <p className="text-base text-gray-300 mb-1">{PLANS[0].tag}</p>
          <h3 className="text-3xl font-bold mb-5">{PLANS[0].name}</h3>
          <div className="mb-7">
            <span className="text-4xl font-black">{PLANS[0].price}</span>
            <span className="text-base text-gray-300 ml-2">{PLANS[0].unit}</span>
          </div>
          <ul className="space-y-4 mb-8">
            {PLANS[0].features.map(f => (
              <li key={f} className="flex items-start gap-3 text-base text-gray-200">
                <span className="mt-0.5 flex-shrink-0" style={{ color: '#F59E0B' }}>✓</span>
                {f}
              </li>
            ))}
          </ul>
          <button onClick={() => openModal(PLANS[0])} className="btn-secondary block w-full text-center text-base">
            {PLANS[0].cta}
          </button>
        </div>

        {/* 方案 B */}
        <div className="relative p-8 rounded-2xl" style={{ background: 'rgba(245,158,11,0.07)', border: '2px solid rgba(245,158,11,0.4)' }}>
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="tag font-bold px-5 py-1.5 text-sm">{PLANS[1].badge}</span>
          </div>
          <p className="text-base text-gray-300 mb-1">{PLANS[1].tag}</p>
          <h3 className="text-3xl font-bold mb-5">{PLANS[1].name}</h3>
          <div className="mb-7">
            <span className="text-4xl font-black text-amber-gradient">{PLANS[1].price}</span>
            <span className="text-base text-gray-300 ml-2">{PLANS[1].unit}</span>
          </div>
          <ul className="space-y-4 mb-8">
            {PLANS[1].features.map(f => (
              <li key={f} className="flex items-start gap-3 text-base text-white">
                <span className="mt-0.5 flex-shrink-0" style={{ color: '#F59E0B' }}>✓</span>
                {f}
              </li>
            ))}
          </ul>
          <button onClick={() => openModal(PLANS[1])} className="btn-primary block w-full text-center text-base">
            {PLANS[1].cta}
          </button>
        </div>
      </div>

      {/* ── 購買確認 Modal ── */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(6,13,26,0.85)', backdropFilter: 'blur(4px)' }}
          onClick={() => setModal(null)}
        >
          <div
            className="w-full max-w-md rounded-2xl p-8"
            style={{ background: '#0E1929', border: '1.5px solid rgba(255,255,255,0.12)' }}
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-1">確認購買</h3>
            <p className="text-base text-gray-300 mb-6">
              您即將購買 <strong className="text-white">{modal.name}（{modal.tag}）</strong>
              <br />
              金額：<strong className="text-amber-gradient text-lg">{modal.price}</strong>
              <span className="text-gray-400 text-sm ml-1">{modal.unit}</span>
            </p>

            {/* 付款說明 */}
            <div className="rounded-xl p-4 mb-6 text-sm text-gray-300 space-y-1"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <p>💳 付款方式：信用卡 / ATM 轉帳 / LINE Pay（ECPay 處理）</p>
              <p>📧 付款完成後，課程連結將自動寄送至 Email</p>
            </div>

            {/* 同意 checkbox */}
            <label className="flex items-start gap-3 cursor-pointer mb-6">
              <input
                type="checkbox"
                checked={consent}
                onChange={e => setConsent(e.target.checked)}
                className="mt-1 w-4 h-4 accent-amber-400 flex-shrink-0"
              />
              <span className="text-sm text-gray-300 leading-relaxed">
                我已閱讀並同意
                <a href="/privacy" target="_blank" className="underline text-amber-400 hover:text-amber-300 mx-1">隱私權政策</a>
                與
                <a href="/refund" target="_blank" className="underline text-amber-400 hover:text-amber-300 mx-1">退款政策</a>，
                並確認同意放棄數位內容之 7 天猶豫期。
              </span>
            </label>

            <div className="flex gap-3">
              <button
                onClick={() => setModal(null)}
                className="btn-secondary flex-1 text-base py-3"
              >
                取消
              </button>
              <button
                onClick={handleConfirm}
                disabled={!consent}
                className="btn-primary flex-1 text-base py-3 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
              >
                確認付款
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
