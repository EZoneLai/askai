import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

// ── 普通問法的系統提示 ────────────────────────────────────
const NORMAL_SYSTEM = `你是一個 AI 助手。用戶給你一個任務，你直接執行並回覆。
回覆要完整，格式工整，但不需要特別有創意或個人風格。
以繁體中文回覆，回覆長度約 80-120 字。`

// ── 智對問法的系統提示（核心差異）────────────────────────
const ZHIDUI_SYSTEM = `你是「資深品牌策略師 + 消費者心理學家」的組合角色。

執行任務前，你必須先做以下思考框架：
1. 這個任務的核心受眾是誰？他們最深的恐懼或渴望是什麼？
2. 什麼樣的開頭會讓他們停止滑動？（一個場景、一個反常識、一個痛點）
3. 輸出要帶有真實的人性溫度，不是廣告語言

然後直接產出內容——不要解釋你的思考過程，只給最終結果。
以繁體中文回覆，回覆長度約 80-120 字。風格：有畫面感、有具體細節、讓人感覺是真人寫的。`

export async function POST(req: NextRequest) {
  try {
    const { task } = await req.json()

    if (!task || task.trim().length < 3) {
      return NextResponse.json({ error: '請輸入任務內容' }, { status: 400 })
    }

    if (task.trim().length > 200) {
      return NextResponse.json({ error: '任務描述請控制在 200 字以內' }, { status: 400 })
    }

    // ── 兩個請求並行發出，減少等待時間 ──────────────────
    const [normalRes, zhiduiRes] = await Promise.all([
      client.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 300,
        system: NORMAL_SYSTEM,
        messages: [{ role: 'user', content: task }],
      }),
      client.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 300,
        system: ZHIDUI_SYSTEM,
        messages: [{ role: 'user', content: task }],
      }),
    ])

    const normalText = normalRes.content[0].type === 'text' ? normalRes.content[0].text : ''
    const zhiduiText = zhiduiRes.content[0].type === 'text' ? zhiduiRes.content[0].text : ''

    return NextResponse.json({ normal: normalText, zhidui: zhiduiText })
  } catch (err: unknown) {
    console.error('[compare API error]', err)
    const message = err instanceof Error ? err.message : '未知錯誤'
    return NextResponse.json({ error: `API 呼叫失敗：${message}` }, { status: 500 })
  }
}
