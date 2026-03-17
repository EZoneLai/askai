import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '隱私權政策｜策研智對 Ceyan AI',
  description: '策研智對課程隱私權政策，說明我們如何蒐集、使用及保護您的個人資料。',
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <div className="text-base text-gray-200 leading-relaxed space-y-2">{children}</div>
    </section>
  )
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-6 py-16 md:py-24" style={{ background: '#060D1A', color: '#F5F0E8' }}>
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 mb-10 transition-colors">
          ← 返回首頁
        </Link>

        <h1 className="text-3xl md:text-4xl font-black mb-2">隱私權政策</h1>
        <p className="text-sm text-gray-400 mb-12">最後更新：2026 年 3 月 1 日</p>

        <div className="space-y-10">

          <Section title="一、隱私權政策聲明">
            <p>容晟科技有限公司（以下簡稱「本公司」）及其子品牌「策研智對」（Ceyan AI）非常重視您的隱私權。本政策說明本公司如何蒐集、處理、利用及保護您的個人資料。當您使用本網站或報名本公司課程，即表示您已閱讀並同意本政策內容。</p>
          </Section>

          <Section title="二、個人資料蒐集之目的">
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>課程報名與學員管理</li>
              <li>課程相關通知與服務（含課程更新、活動通知）</li>
              <li>客戶服務與問題處理</li>
              <li>行銷推廣（經您同意後）</li>
              <li>網站服務優化與統計分析</li>
              <li>法令遵循及契約履行</li>
            </ul>
          </Section>

          <Section title="三、個人資料蒐集之類別">
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>識別類：姓名、電子郵件信箱、手機號碼、LINE ID</li>
              <li>特徵類：年齡、職業（選填）</li>
              <li>通訊紀錄：您與本公司的往來內容</li>
              <li>網站使用紀錄：IP 位址、瀏覽器類型、瀏覽頁面、停留時間</li>
            </ul>
          </Section>

          <Section title="四、個人資料利用之期間、地區、對象及方式">
            <div className="space-y-3">
              <div className="rounded-xl p-4" style={{ background: '#0E1929', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p><strong className="text-white">利用期間：</strong>自蒐集之日起至課程服務終止後 2 年，或依法令規定之保存期限。</p>
              </div>
              <div className="rounded-xl p-4" style={{ background: '#0E1929', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p><strong className="text-white">利用地區：</strong>中華民國境內。如有跨境傳輸需求，本公司將依法告知並取得您的同意。</p>
              </div>
              <div className="rounded-xl p-4" style={{ background: '#0E1929', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p><strong className="text-white">利用對象：</strong>本公司及其委託之合作夥伴（如金流服務商、電子報發送服務商）。</p>
              </div>
              <div className="rounded-xl p-4" style={{ background: '#0E1929', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p><strong className="text-white">利用方式：</strong>以電子郵件、電話、簡訊或書面等方式進行聯繫與服務。</p>
              </div>
            </div>
          </Section>

          <Section title="五、當事人權利">
            <p>依個人資料保護法第 3 條規定，您得行使以下權利：</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>查詢或請求閱覽</li>
              <li>請求製給複製本</li>
              <li>請求補充或更正</li>
              <li>請求停止蒐集、處理或利用</li>
              <li>請求刪除</li>
            </ul>
            <p>如欲行使上述權利，請來信至：<a href="mailto:service@ronsun.tw" className="text-amber-400 underline hover:text-amber-300">service@ronsun.tw</a></p>
          </Section>

          <Section title="六、Cookie 及追蹤技術">
            <p>本網站使用 Cookie 及類似技術以改善您的使用體驗、分析網站流量。您可透過瀏覽器設定停用 Cookie，但可能影響部分網站功能。</p>
          </Section>

          <Section title="七、資料安全">
            <p>本公司採取適當的技術及組織措施保護您的個人資料，防止未經授權的存取、使用或洩露。</p>
          </Section>

          <Section title="八、隱私權政策之修訂">
            <p>本公司保留修訂本政策之權利。修訂後之政策將公布於本網站，並於公布時生效。</p>
          </Section>

          <Section title="九、聯絡方式">
            <p><strong className="text-white">容晟科技有限公司</strong></p>
            <p>品牌：策研智對 Ceyan AI</p>
            <p>Email：<a href="mailto:service@ronsun.tw" className="text-amber-400 underline hover:text-amber-300">service@ronsun.tw</a></p>
          </Section>

        </div>

        <div className="mt-14 pt-8 border-t border-white/8 flex gap-6 text-sm text-gray-400">
          <Link href="/" className="hover:text-amber-400 transition-colors">← 返回首頁</Link>
          <Link href="/refund" className="hover:text-amber-400 transition-colors">退款政策</Link>
        </div>
      </div>
    </main>
  )
}
