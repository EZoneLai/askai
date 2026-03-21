import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { appendToSheet } from '@/lib/sheets'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)

  const body = await req.json()
  const { name, email, phone, lineId, interest } = body

  if (!name || !email || !lineId) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const interestLabel: Record<string, string> = {
    'ceyan':    '智對｜AI 啟問實戰課',
    'devaccel': '智速｜方案 B — NT$6,800',
    'diy':      '智速｜方案 C — NT$16,800（代做）',
    'consult':  '諮詢代做方案',
  }
  const interestText = interestLabel[interest] ?? interest

  const { data, error } = await resend.emails.send({
    from: '容晟科技 <service@ronsunai.tw>',
    to: [email],
    cc: ['service@ronsunai.tw', 'ezonelai@gmail.com', 'ronsunai@gmail.com'],
    subject: '【收到了！】策研智對 AI 課程報名確認 [askai]',
    html: `
      <div style="font-family: sans-serif; max-width: 640px; margin: auto; color: #1a1a1a;">
        <div style="background: #060D1A; padding: 32px; border-radius: 16px 16px 0 0;">
          <h1 style="color: #F59E0B; font-size: 22px; margin: 0;">策研智對 Ceyan AI</h1>
          <p style="color: #fff; margin: 8px 0 0;">報名確認通知</p>
        </div>
        <div style="background: #f5f5f0; padding: 32px; border-radius: 0 0 16px 16px;">
          <p>${name} 您好，</p>
          <p>感謝您報名策研智對 AI 課程！我們已收到您的資料，將盡快與您聯繫確認細節。</p>
          <div style="background: white; border: 1px solid #e5e5e5; padding: 20px; border-radius: 12px; margin: 20px 0;">
            <p style="margin: 0 0 8px; font-weight: bold;">您的報名資料</p>
            <p style="margin: 4px 0;">姓名：${name}</p>
            <p style="margin: 4px 0;">Email：${email}</p>
            ${phone ? `<p style="margin: 4px 0;">手機：${phone}</p>` : ''}
            <p style="margin: 4px 0;">LINE ID：${lineId}</p>
            <p style="margin: 4px 0;">有興趣方案：${interestText}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;" />
          <p style="font-size: 13px; color: #666;">
            若有任何問題，歡迎聯絡我們：<br/>
            📧 service@ronsunai.tw<br/>
            💬 LINE@：@815ndzxp<br/>
            🌐 https://www.ronsunai.tw
          </p>
          <p style="font-size: 12px; color: #999; margin-top: 24px;">
            © 2026 容晟科技有限公司
          </p>
        </div>
      </div>
    `,
  })

  if (error) {
    return NextResponse.json({ error }, { status: 500 })
  }

  // P20 CRM — fire-and-forget，不影響主流程
  fetch('https://rsun.me/api/webhook/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      token: 'tok_8rap1063rvj1',
      source: 'askai',
      name,
      email,
      phone: phone ?? '',
      message: interestText,
    }),
  }).catch(() => {})

  try {
    await appendToSheet([
      new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei', hour12: false }),  // A 時間戳
      'askai',                        // B 來源
      name,                           // C 姓名
      email,                          // D Email
      phone ?? '',                    // E 手機
      lineId,                         // F LINE ID
      interestText,                   // G 項目/課程
      '',                             // H 金額（課程表單無）
      '',                             // I 資訊來源
      '',                             // J 性別
      '',                             // K 年齡
      '待聯絡',                       // L 狀態
      '',                             // M 備注
    ])
  } catch (sheetError) {
    console.error('Google Sheets append failed:', sheetError)
    console.error('Google Sheets append failed:', sheetError)
  }

  return NextResponse.json({ success: true, data })
}
