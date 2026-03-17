'use client'

import { useState } from 'react'

const EXAMPLES = [
  {
    label: '寫一則吸引人的 AI 課程推廣 FB 貼文',
    normal:
      '想學 AI 嗎？我們的 AI 課程提供完整學習內容，讓你快速掌握 AI 工具使用方法。課程包含理論與實踐，適合各程度學習者。立即報名，開始你的 AI 學習之旅！',
    zhidui:
      '你是不是每天開著 ChatGPT，卻還是把 AI 給的內容全部重寫一遍？\n\n我也是。直到我開始用「反向對話法」——\n\n不是問 AI「幫我寫文案」，\n而是讓 AI 先問我三個問題。\n\n結果第一輪出來，我只改了一個字。\n\n→ 留言「框架」，我把這套心法傳給你。',
  },
  {
    label: '幫我寫一封給客戶的跟進 Email',
    normal:
      '親愛的客戶您好，\n\n感謝您上次的會面，不知道您對我們的提案有什麼想法呢？期待您的回覆。\n\n祝好，\n[名字]',
    zhidui:
      '[客戶名]，你好，\n\n上次你提到預算決策要等到月底——今天剛好是 28 號。\n\n我整理了一份「三分鐘決策摘要」，只有三頁，直接回答你當時提的兩個問題：成本如何攤提、導入時間怎麼規劃。\n\n附件在這，方便的話今天看一下？有問題 30 分鐘內回你。\n\n[名字]',
  },
  {
    label: '寫一則 IG 教學貼文，主題是提升工作效率',
    normal:
      '想提升工作效率嗎？以下是幾個實用技巧：\n1. 製作待辦清單\n2. 使用番茄工作法\n3. 減少手機干擾\n4. 定期休息\n5. 設定明確目標\n\n希望這些技巧對你有幫助！\n\n#工作效率 #生產力',
    zhidui:
      '我上個月試了一件事：\n\n把每天最重要的一件事，寫在便利貼，貼在螢幕左下角。\n\n不是清單。就一件事。\n\n那件事的完成率從 40% 跳到 91%。\n\n因為清單告訴你「該做什麼」，\n便利貼告訴你「只做這個」。\n\n你今天的那一件事是什麼？👇\n\n#工作效率 #專注力 #生產力小技巧',
  },
]

export default function InteractiveComparison() {
  const [selected, setSelected] = useState<number | null>(null)

  const result = selected !== null ? EXAMPLES[selected] : null

  return (
    <section id="try-it" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">

        {/* 標題 */}
        <div className="text-center mb-12">
          <div className="section-divider" />
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            親眼看看，<span className="text-amber-gradient">差距有多大</span>
          </h2>
          <p className="text-lg text-gray-200 max-w-xl mx-auto leading-relaxed">
            同一個任務，跑兩種問法，讓輸出說話。
          </p>
        </div>

        {/* 預設任務快選 */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center mb-10">
          {EXAMPLES.map((ex, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className="text-base px-5 py-3 rounded-xl border transition-all text-left"
              style={{
                border: selected === i ? '1.5px solid #F59E0B' : '1.5px solid rgba(255,255,255,0.12)',
                background: selected === i ? 'rgba(245,158,11,0.10)' : 'rgba(255,255,255,0.03)',
                color: selected === i ? '#F59E0B' : '#d1d5db',
              }}
            >
              {ex.label}
            </button>
          ))}
        </div>

        {/* 對比結果 */}
        {!result && (
          <div className="text-center py-10 text-gray-500 text-base">
            ↑ 點選上方任一任務，馬上看到兩種問法的差距
          </div>
        )}

        {result && (
          <>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {/* 普通問法 */}
              <div className="output-card-bad p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-500 inline-block" />
                  <span className="text-sm font-bold uppercase tracking-widest text-gray-400">普通問法</span>
                </div>
                <p className="text-base text-gray-200 leading-relaxed whitespace-pre-wrap">
                  {result.normal}
                </p>
                <div className="mt-5 pt-4 border-t border-white/5">
                  <span className="text-sm text-gray-400">
                    看完，還是要自己重寫 ✗
                  </span>
                </div>
              </div>

              {/* 智對問法 */}
              <div className="output-card-good p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: '#F59E0B' }} />
                  <span className="text-sm font-bold uppercase tracking-widest" style={{ color: '#F59E0B' }}>智對問法</span>
                </div>
                <p className="text-base leading-relaxed whitespace-pre-wrap text-white">
                  {result.zhidui}
                </p>
                <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(245,158,11,0.2)' }}>
                  <span className="text-sm px-3 py-1 rounded-full" style={{ background: 'rgba(245,158,11,0.15)', color: '#FCD34D' }}>
                    第一輪就給你想要的方向 ✓
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-200 mb-5">
                想知道智對問法背後的設計邏輯？
              </p>
              <a href="#pricing" className="btn-primary text-lg px-10 py-4">
                1 小時學完整框架 →
              </a>
            </div>
          </>
        )}

      </div>
    </section>
  )
}
