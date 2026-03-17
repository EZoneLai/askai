import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '退款政策｜策研智對 Ceyan AI',
  description: '策研智對課程退款政策，說明數位課程商品之退款相關規定。',
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl p-5" style={{ background: '#0E1929', border: '1px solid rgba(255,255,255,0.08)' }}>
      <p className="text-base font-bold text-white mb-2">{title}</p>
      <div className="text-base text-gray-200 leading-relaxed">{children}</div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <div className="text-base text-gray-200 leading-relaxed space-y-3">{children}</div>
    </section>
  )
}

export default function RefundPage() {
  return (
    <main className="min-h-screen px-6 py-16 md:py-24" style={{ background: '#060D1A', color: '#F5F0E8' }}>
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 mb-10 transition-colors">
          ← 返回首頁
        </Link>

        <h1 className="text-3xl md:text-4xl font-black mb-2">退款政策</h1>
        <p className="text-sm text-gray-400 mb-6">最後更新：2026 年 3 月 1 日</p>

        {/* 重要提醒 */}
        <div className="rounded-xl p-5 mb-12" style={{ background: 'rgba(245,158,11,0.08)', border: '1.5px solid rgba(245,158,11,0.3)' }}>
          <p className="text-base font-bold text-amber-300 mb-2">⚠ 重要提醒</p>
          <p className="text-base text-gray-200 leading-relaxed">
            依據消費者保護法第 19 條規定，數位內容商品經消費者同意後立即提供服務者，<strong className="text-white">不適用七日猶豫期之規定</strong>。購買前請務必詳閱本退款政策。
          </p>
        </div>

        <div className="space-y-10">

          <Section title="一、適用範圍">
            <p>本退款政策適用於容晟科技有限公司「策研智對」（Ceyan AI）所販售之所有數位課程商品：</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>《策研智對》方案 A（單次購買 NT$1,200）</li>
              <li>《策研智對》方案 B（月訂閱 $9 USD）</li>
            </ul>
          </Section>

          <Section title="二、方案 A（單次購買）退款規定">
            <Block title="購買後、課程開通前">
              如您完成付款後尚未開始觀看任何課程內容，可於購買後 <strong className="text-white">7 日內</strong>申請全額退款。
            </Block>
            <Block title="課程開通後">
              一旦您開始觀看課程內容（課程開通），依消費者保護法規定，數位內容不適用七日猶豫期，<strong className="text-white">恕不接受退款申請</strong>。
            </Block>
          </Section>

          <Section title="三、方案 B（月訂閱）退款規定">
            <Block title="訂閱取消">
              您可隨時透過 Skool 平台取消訂閱，無需任何理由。取消後，您仍可使用服務至當期訂閱結束日。
            </Block>
            <Block title="退款申請">
              訂閱付款後 <strong className="text-white">48 小時內</strong>，如您尚未使用任何社群資源或觀看課程，可申請當月訂閱費用全額退款。超過 48 小時或已使用服務者，當月費用恕不退還，但您可取消下期續訂。
            </Block>
            <Block title="訂閱期間課程">
              方案 B 贈送之《策研智對》課程，於訂閱期間可無限觀看。取消訂閱後，課程存取權一併終止。
            </Block>
          </Section>

          <Section title="四、退款申請方式">
            <ol className="list-decimal list-inside space-y-2 pl-2">
              <li>發送 Email 至 <a href="mailto:service@ronsun.tw" className="text-amber-400 underline hover:text-amber-300">service@ronsun.tw</a></li>
              <li>主旨請註明：【退款申請】您的姓名</li>
              <li>請提供：購買日期、付款方式、退款原因</li>
              <li>本公司於 <strong className="text-white">3 個工作日</strong>內回覆審核結果</li>
              <li>審核通過後，退款於 <strong className="text-white">7–14 個工作日</strong>內退回原付款方式</li>
            </ol>
          </Section>

          <Section title="五、不予退款之情形">
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>已開通課程或使用社群服務</li>
              <li>超過退款申請期限</li>
              <li>違反使用條款（如帳號共享、非法錄製等）</li>
            </ul>
          </Section>

          <Section title="六、技術問題處理">
            <p>如因技術問題導致無法正常觀看課程，請先聯繫客服協助排除。若確認為系統問題且無法於合理期間內修復，本公司將依情況提供延長觀看期限、部分退款或全額退款等補償方案。</p>
          </Section>

          <Section title="七、聯絡方式">
            <p><strong className="text-white">容晟科技有限公司</strong></p>
            <p>品牌：策研智對 Ceyan AI</p>
            <p>Email：<a href="mailto:service@ronsun.tw" className="text-amber-400 underline hover:text-amber-300">service@ronsun.tw</a></p>
          </Section>

        </div>

        <div className="mt-14 pt-8 border-t border-white/8 flex gap-6 text-sm text-gray-400">
          <Link href="/" className="hover:text-amber-400 transition-colors">← 返回首頁</Link>
          <Link href="/privacy" className="hover:text-amber-400 transition-colors">隱私權政策</Link>
        </div>
      </div>
    </main>
  )
}
