import InteractiveComparison from '@/components/InteractiveComparison'

// ── 靜態數據 ─────────────────────────────────────────────
const BEFORE_AFTER = [
  { before: '問了半天，結果要自己重寫', after: 'AI 第一輪就給你想要的方向' },
  { before: 'AI 像個不懂你的陌生人', after: 'AI 像個熟悉你品牌的合作夥伴' },
  { before: '每次開新對話都要重頭解釋', after: '透過設定讓 AI 永遠記住你的聲音' },
  { before: '複製別人的提示詞，效果不穩', after: '自己設計問法，輸出品質可重複' },
]

const CURRICULUM = [
  {
    num: '01', title: '診斷你的 AI 對話盲點',
    items: ['為什麼框架問法會失靈', '三種常見的低效提問模式實例拆解'],
  },
  {
    num: '02', title: '智對心法實戰',
    items: ['反向提問的設計邏輯', '如何讓 AI 進入「思考空間」而非直接執行', '現場示範：同一任務，普通問法 vs 智對問法'],
  },
  {
    num: '加碼', title: '智對 Prompt 指令庫禮包',
    items: ['適用於行銷文案、提案、客服、社群內容的萬用智對 Prompt', '永久使用，持續更新'],
  },
]

const FAQS = [
  {
    q: '我完全不懂技術，這堂課適合我嗎？',
    a: '完全適合。這堂課教的是「對話心法」，不是技術操作。你只需要會打字、會用 ChatGPT，就能跟上課程內容。',
  },
  {
    q: '方案 A 和方案 B 差在哪裡？',
    a: '方案 A 是一次付費的錄影課，適合想自己先看看的人。方案 B 是月訂閱制，除了完整課程外，還包含 Skool 社群、每週更新的 AI 工具策略、直播參與權。',
  },
  {
    q: '課程是錄影還是直播？',
    a: '主要課程是錄影課，買完馬上可以看。方案 B 的訂閱會員可以參加定期的直播場次，直播會有即時問答和最新工具示範。',
  },
  {
    q: '方案 B 可以隨時取消嗎？',
    a: '可以。方案 B 是月訂閱制，沒有綁約，隨時可以在 Skool 後台取消訂閱。取消後，你仍然可以保留方案 A 的錄影課程內容。',
  },
]

// ── 元件：Section 標題 ────────────────────────────────────
function SectionHeader({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="text-center mb-12">
      <div className="section-divider" />
      <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-3">{children}</h2>
      {sub && <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">{sub}</p>}
    </div>
  )
}

// ── 主頁面 ────────────────────────────────────────────────
export default function Home() {
  return (
    <main>
      {/* ───── Hero ───── */}
      <section className="relative min-h-screen flex flex-col justify-center px-4 overflow-hidden">
        {/* 背景光暈 */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(239,159,39,0.1) 0%, transparent 60%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(239,159,39,0.06) 0%, transparent 60%)' }} />

        <div className="max-w-4xl mx-auto w-full py-24">
          <div className="tag mb-6 w-fit">
            <span>⚡</span> 1 小時課程 × 智對框架 × 永久使用
          </div>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            你有工具、有資料、有想法——<br />
            <span className="text-ai-gradient">為什麼還是什麼都沒產出？</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-4">
            要怕的不是被 AI 取代。<br />
            要怕的是工具一大堆，腦袋卻還在原地打轉——
          </p>
          <p className="text-gray-500 max-w-2xl leading-relaxed mb-10">
            策研智對，一套讓 AI 從打字員變成你軍師的對話心法。
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#try-it" className="btn-primary">
              先親眼看看差距有多大 →
            </a>
            <a href="#pricing" className="btn-secondary">
              查看課程方案
            </a>
          </div>
        </div>
      </section>

      {/* ───── Pain Points ───── */}
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <SectionHeader sub="你每天都在用 ChatGPT、Gemini、Claude，也看過很多提示詞技巧的教學。">
            你有沒有這種感覺——<br />
            問了 AI 半天，<span className="text-amber-gradient">它給的還不如你自己寫的？</span>
          </SectionHeader>

          <div className="space-y-4">
            {[
              { emoji: '😤', title: '你每次都要整段重寫', desc: '它寫的文案聽起來正確，但沒有靈魂——像個不認識你的外包。' },
              { emoji: '🤔', title: 'AI 給的方案完全不是你要的', desc: '邏輯工整，但感覺對方是用模板填空，跟你的品牌毫無關聯。' },
              { emoji: '😰', title: '想用 AI 接案，但沒有方法論', desc: '每次都是重新摸索，沒有可重複的系統，輸出品質全靠運氣。' },
            ].map((item) => (
              <div key={item.title} className="card-navy p-5 flex gap-4">
                <span className="text-2xl">{item.emoji}</span>
                <div>
                  <p className="font-semibold mb-1">{item.title}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              問題不在 AI。<br />
              <span className="text-white font-medium">問題在於你們之間的對話方式，從來沒有被好好設計過。</span>
            </p>
          </div>
        </div>
      </section>

      {/* ───── Framework ───── */}
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <SectionHeader sub="不是更好的指令，是更好的對話。">
            智對框架：<span className="text-amber-gradient">讓 AI 先問你，再替你思考</span>
          </SectionHeader>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { num: '01', title: '反向提問', desc: '讓 AI 先問你關鍵問題，挖出你自己都沒想清楚的洞察' },
              { num: '02', title: '思考路徑', desc: '建立 AI 的思考框架，讓它進入「思考空間」而非直接執行' },
              { num: '03', title: '範例餵養', desc: '用你的品牌聲音和成功案例，訓練 AI 產出符合你風格的內容' },
            ].map((item) => (
              <div key={item.num} className="card-navy p-6 text-center">
                <div className="text-amber-gradient text-4xl font-black mb-3">{item.num}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Interactive Comparison（Feature B）───── */}
      <section className="border-t border-white/5"
        style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(239,159,39,0.03) 50%, transparent 100%)' }}>
        <InteractiveComparison />
      </section>

      {/* ───── Before / After ───── */}
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <SectionHeader>
            學完這堂課，<span className="text-amber-gradient">你的 AI 對話會有什麼不同？</span>
          </SectionHeader>

          <div className="space-y-3">
            {BEFORE_AFTER.map((item) => (
              <div key={item.before} className="grid grid-cols-2 gap-3">
                <div className="output-card-bad p-4 flex items-center gap-3">
                  <span className="text-gray-600 text-lg">✗</span>
                  <span className="text-gray-500 text-sm">{item.before}</span>
                </div>
                <div className="output-card-good p-4 flex items-center gap-3">
                  <span className="text-lg" style={{ color: '#EF9F27' }}>✓</span>
                  <span className="text-sm" style={{ color: '#e8dfc8' }}>{item.after}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Curriculum ───── */}
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <SectionHeader sub="1 小時，從「AI 打字員」到「AI 軍師」。">
            課程內容
          </SectionHeader>

          <div className="space-y-4">
            {CURRICULUM.map((item) => (
              <div key={item.num} className="card-navy p-6">
                <div className="flex items-start gap-4">
                  <div className="text-amber-gradient font-black text-xl min-w-[40px]">{item.num}</div>
                  <div>
                    <h3 className="font-bold mb-3">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.items.map((i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                          <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#EF9F27' }} />
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
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <div className="photo-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/eugene-hero.jpg" alt="Eugene" />
          </div>
          <h2 className="text-2xl font-bold mb-2">我是 Eugene</h2>
          <p className="text-gray-400 text-sm mb-4">容晟科技創辦人・10 年系統分析師 × 專案經理 × 創業者</p>
          <p className="text-gray-400 leading-relaxed">
            我發現絕大多數人用 AI 的方式，和他們用 Google 搜尋的方式沒有本質差別——「輸入關鍵字，等待答案。」<br /><br />
            但 AI 不是搜尋引擎。它是一個可以被你引導去「思考」的對話對象。<br />
            這堂課，我要把這個差距消滅掉。
          </p>
        </div>
      </section>

      {/* ───── Pricing ───── */}
      <section id="pricing" className="py-20 px-4 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <SectionHeader sub="沒有隱藏費用。你付的每一分錢，都換成你能馬上用的能力。">
            選一個你現在需要的進場方式
          </SectionHeader>

          <div className="grid md:grid-cols-2 gap-6">
            {/* 方案 A */}
            <div className="card-navy p-7">
              <p className="text-gray-400 text-sm mb-1">自學實戰版</p>
              <h3 className="text-2xl font-bold mb-4">方案 A</h3>
              <div className="mb-6">
                <span className="text-3xl font-black">NTD 1,200</span>
                <span className="text-gray-500 text-sm ml-2">一次付費</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  '《策研智對》完整 1 小時錄影課程',
                  '智對 Prompt 指令庫禮包（永久使用）',
                  '買完馬上看，不限次數回放',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="mt-1" style={{ color: '#EF9F27' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#signup" className="btn-secondary block text-center">
                立即購買，馬上開始看
              </a>
            </div>

            {/* 方案 B */}
            <div className="relative p-7 rounded-2xl" style={{ background: 'rgba(239,159,39,0.06)', border: '1.5px solid rgba(239,159,39,0.35)' }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="tag text-xs font-bold px-4 py-1">最多人選擇</span>
              </div>
              <p className="text-gray-400 text-sm mb-1">策研領航版</p>
              <h3 className="text-2xl font-bold mb-4">方案 B</h3>
              <div className="mb-6">
                <span className="text-3xl font-black text-amber-gradient">$9 USD</span>
                <span className="text-gray-500 text-sm ml-2">／月，隨時取消</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  '立即免費獲得《策研智對》完整課程',
                  '加入 Skool 策研封閉社群',
                  '每月更新：AI 實戰工作流 + 最新工具策略',
                  '直播場次優先參與權',
                  '專屬顧問社群支援',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: '#e8dfc8' }}>
                    <span className="mt-1" style={{ color: '#EF9F27' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#signup" className="btn-primary block text-center">
                加入領航，$9 進場
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-2xl mx-auto">
          <SectionHeader>常見問題</SectionHeader>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.q} className="card-navy p-5">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section id="signup" className="py-24 px-4 border-t border-white/5 text-center">
        <div className="max-w-xl mx-auto">
          <div className="text-5xl mb-6">⚡</div>
          <h2 className="text-3xl font-bold mb-4">
            準備好讓 AI<br />
            <span className="text-amber-gradient">真正替你思考了嗎？</span>
          </h2>
          <p className="text-gray-400 mb-8">1 小時課程 × 智對框架 × Prompt 指令庫</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="btn-primary">立即報名，今天就學會</a>
          </div>
        </div>
      </section>

      {/* ───── Footer ───── */}
      <footer className="py-8 px-4 border-t border-white/5 text-center">
        <p className="text-gray-600 text-sm">
          © 2025 策研智對 · Ceyan AI ·{' '}
          <a href="/share" className="underline hover:text-amber-400 transition-colors">分享圖片</a>
        </p>
      </footer>
    </main>
  )
}
