import InteractiveComparison from '@/components/InteractiveComparison'

// ── 靜態數據 ─────────────────────────────────────────────
const BEFORE_AFTER = [
  { before: '問半天，不如自己寫', after: 'AI 第一輪就給你要的方向' },
  { before: '邏輯正確，但感覺不對', after: '輸出有你的品牌味道' },
  { before: '每次都要重頭解釋一遍', after: 'AI 永遠記住你的聲音' },
  { before: '想用 AI 接案，作品集難產', after: '自己的問法，品質可重複' },
]

const CURRICULUM = [
  {
    num: '01', title: '找出你跟 AI 鬼打牆的原因',
    items: ['三種最常見的低效問法', '為什麼「框架型提示詞」會失靈'],
  },
  {
    num: '02', title: '智對心法實戰',
    items: ['讓 AI 先問你，再幫你想', '同一任務：普通問法 vs 智對問法現場對比'],
  },
  {
    num: '加碼', title: '智對 Prompt 指令庫禮包',
    items: ['行銷文案、提案、客服、社群 — 直接套用', '永久使用，持續更新'],
  },
]

const FAQS = [
  {
    q: '不懂技術也能學嗎？',
    a: '完全可以。這堂課教的是對話方式，不是技術。只要會打字、會用 ChatGPT 就夠了。',
  },
  {
    q: '方案 A 和方案 B 差在哪？',
    a: '方案 A 是一次付清，自己看錄影。方案 B 是月訂閱，除了完整課程，還有 Skool 社群、每月 AI 工具更新、直播問答。',
  },
  {
    q: '是錄影還是直播？',
    a: '主課程是錄影，買完馬上看、不限次數。方案 B 會員另有定期直播，可以即時發問。',
  },
  {
    q: '方案 B 可以隨時退嗎？',
    a: '可以，沒有綁約。在 Skool 後台取消就好，取消後仍保有錄影課程。',
  },
]

// ── Section 標題 ──────────────────────────────────────────
function SectionHeader({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="text-center mb-14">
      <div className="section-divider" />
      <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4">{children}</h2>
      {sub && <p className="text-lg text-gray-200 max-w-xl mx-auto leading-relaxed">{sub}</p>}
    </div>
  )
}

// ── 主頁面 ────────────────────────────────────────────────
export default function Home() {
  return (
    <main>
      {/* ───── Hero ───── */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 65%)' }} />

        <div className="max-w-4xl mx-auto w-full py-24">
          <div className="tag mb-8 w-fit text-sm">
            <span>⚡</span> 1 小時 · 智對框架 · 永久使用
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-6">
            不用怕被 AI 取代。<br />
            <span className="text-ai-gradient">簡單框架把 AI 磨成利器</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl leading-relaxed mb-4">
            教你把想法、靈感、資料運轉兌現！
          </p>

          <p className="text-2xl md:text-3xl font-bold text-white mb-3">
            『策・研・智・對』
          </p>
          <p className="text-lg text-gray-300 max-w-xl leading-relaxed mb-10">
            四步心法，打造自己的 AI 軍師。
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#try-it" className="btn-primary text-lg px-8 py-4">
              先看看差距有多大 →
            </a>
            <a href="#pricing" className="btn-secondary text-lg px-8 py-4">
              查看課程方案
            </a>
          </div>
        </div>
      </section>

      {/* ───── Pain Points ───── */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <SectionHeader>
            你有沒有跟 AI<br />
            <span className="text-amber-gradient">鬼打牆的經驗？</span>
          </SectionHeader>

          <div className="space-y-4">
            {[
              { emoji: '🔄', title: '跟 AI 鬼打牆，問到懷疑人生？' },
              { emoji: '✍️', title: '問 AI 半天，還不如自己寫？' },
              { emoji: '😐', title: '方案邏輯正確，但感覺就是不對？' },
              { emoji: '📂', title: '想用 AI 接案，作品集卻難產？' },
            ].map((item) => (
              <div key={item.title} className="card-navy p-6 flex gap-5 items-center">
                <span className="text-4xl flex-shrink-0">{item.emoji}</span>
                <p className="text-xl font-bold">{item.title}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <p className="text-xl font-bold text-white">問題不在 AI，在於沒有人教過你怎麼跟它對話。</p>
          </div>
        </div>
      </section>

      {/* ───── Framework ───── */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <SectionHeader sub="不是更好的指令，是更好的對話。">
            智對框架：<span className="text-amber-gradient">讓 AI 先問你，再替你思考</span>
          </SectionHeader>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { num: '01', title: '反向提問', desc: '讓 AI 先問你，挖出你沒想清楚的洞察' },
              { num: '02', title: '思考路徑', desc: '給 AI 框架，讓它思考而非直接執行' },
              { num: '03', title: '範例餵養', desc: '訓練 AI 記住你的品牌聲音和風格' },
            ].map((item) => (
              <div key={item.num} className="card-navy p-7 text-center">
                <div className="text-ai-gradient text-5xl font-black mb-4">{item.num}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-base text-gray-200 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Interactive Comparison ───── */}
      <section id="try-it" className="border-t border-white/5"
        style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(245,158,11,0.04) 50%, transparent 100%)' }}>
        <InteractiveComparison />
      </section>

      {/* ───── Before / After ───── */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <SectionHeader>
            學完智對框架，<span className="text-amber-gradient">用 AI 的方式直接不一樣</span>
          </SectionHeader>

          <div className="space-y-4">
            {BEFORE_AFTER.map((item) => (
              <div key={item.before} className="grid grid-cols-2 gap-4">
                <div className="output-card-bad p-5 flex items-center gap-3">
                  <span className="text-red-400 text-xl flex-shrink-0">✗</span>
                  <span className="text-base text-gray-200">{item.before}</span>
                </div>
                <div className="output-card-good p-5 flex items-center gap-3">
                  <span className="text-xl flex-shrink-0" style={{ color: '#F59E0B' }}>✓</span>
                  <span className="text-base font-medium text-white">{item.after}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Curriculum ───── */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <SectionHeader sub="1 小時，從「AI 打字員」到「AI 軍師」。">
            課程內容
          </SectionHeader>

          <div className="space-y-5">
            {CURRICULUM.map((item) => (
              <div key={item.num} className="card-navy p-7">
                <div className="flex items-start gap-5">
                  <div className="text-ai-gradient font-black text-3xl min-w-[56px]">{item.num}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <ul className="space-y-3">
                      {item.items.map((i) => (
                        <li key={i} className="flex items-start gap-3 text-base text-gray-200">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#F59E0B' }} />
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── About Eugene ───── */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <div className="photo-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/eugene-hero.jpg" alt="Eugene" />
          </div>
          <h2 className="text-3xl font-bold mb-2">我是 Eugene</h2>
          <p className="text-base text-gray-300 mb-6">容晟科技創辦人・10 年系統分析師 × 專案經理 × 創業者</p>
          <blockquote className="text-xl text-gray-200 leading-relaxed border-l-4 text-left pl-6"
            style={{ borderColor: '#F59E0B' }}>
            大多數人問 AI，其實還是在用 Google 的邏輯——<br />
            <strong className="text-white">輸入關鍵字，等答案。</strong><br /><br />
            但 AI 可以被你引導去<strong className="text-white">思考</strong>。<br />
            這堂課，我要教你這個差距。
          </blockquote>
        </div>
      </section>

      {/* ───── Pricing ───── */}
      <section id="pricing" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <SectionHeader sub="沒有隱藏費用。你付的每一分錢，都換成你能馬上用的能力。">
            選一個你現在需要的進場方式
          </SectionHeader>

          <div className="grid md:grid-cols-2 gap-6">
            {/* 方案 A */}
            <div className="card-navy p-8">
              <p className="text-base text-gray-300 mb-1">自學實戰版</p>
              <h3 className="text-3xl font-bold mb-5">方案 A</h3>
              <div className="mb-7">
                <span className="text-4xl font-black">NTD 1,200</span>
                <span className="text-base text-gray-300 ml-2">一次付費</span>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  '完整 1 小時錄影課程',
                  '智對 Prompt 指令庫禮包（永久使用）',
                  '買完馬上看，不限次數回放',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-gray-200">
                    <span className="mt-0.5 flex-shrink-0" style={{ color: '#F59E0B' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#signup" className="btn-secondary block text-center text-base">
                立即購買，馬上開始看
              </a>
            </div>

            {/* 方案 B */}
            <div className="relative p-8 rounded-2xl" style={{ background: 'rgba(245,158,11,0.07)', border: '2px solid rgba(245,158,11,0.4)' }}>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="tag font-bold px-5 py-1.5 text-sm">最多人選擇</span>
              </div>
              <p className="text-base text-gray-300 mb-1">策研領航版</p>
              <h3 className="text-3xl font-bold mb-5">方案 B</h3>
              <div className="mb-7">
                <span className="text-4xl font-black text-amber-gradient">$9 USD</span>
                <span className="text-base text-gray-300 ml-2">／月，隨時取消</span>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  '立即免費獲得完整課程',
                  '加入 Skool 策研封閉社群',
                  '每月更新：AI 實戰工作流 + 最新工具策略',
                  '直播場次優先參與權',
                  '專屬顧問社群支援',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-white">
                    <span className="mt-0.5 flex-shrink-0" style={{ color: '#F59E0B' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#signup" className="btn-primary block text-center text-base">
                加入領航，$9 進場
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto">
          <SectionHeader>常見問題</SectionHeader>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="card-navy p-6">
                <h3 className="text-lg font-bold mb-3">{faq.q}</h3>
                <p className="text-base text-gray-200 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Final CTA ───── */}
      <section id="signup" className="py-28 px-6 border-t border-white/5 text-center">
        <div className="max-w-xl mx-auto">
          <div className="text-6xl mb-8">⚡</div>
          <h2 className="text-4xl md:text-5xl font-black mb-5">
            準備好讓 AI<br />
            <span className="text-ai-gradient">真正替你思考了嗎？</span>
          </h2>
          <p className="text-xl text-gray-200 mb-10">1 小時課程 · 智對框架 · Prompt 指令庫</p>
          <a href="#pricing" className="btn-primary text-lg px-10 py-4">立即報名，今天就學會</a>
        </div>
      </section>

      {/* ───── Footer ───── */}
      <footer className="py-8 px-6 border-t border-white/5 text-center">
        <p className="text-gray-400 text-sm">
          © 2025 策研智對 · Ceyan AI ·{' '}
          <a href="/share" className="underline hover:text-amber-400 transition-colors">分享圖片</a>
        </p>
      </footer>
    </main>
  )
}
