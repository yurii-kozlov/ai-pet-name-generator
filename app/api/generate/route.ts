import { NextRequest, NextResponse } from 'next/server';
import Bard, { askAI, queryBardValidRes } from 'bard-ai';

export async function POST(req: NextRequest): Promise<NextResponse> {
  const body = await req.json();
  const { language, petDescription } = body;

  await Bard.init(process.env.BARD_AI_COOKIE_KEY!);

  const bardResponse = language === 'uk'
  ? await askAI(`Згенеруй можливі імена для домашньго улюбленця з наступним описом ${petDescription}.
    Будь ласка, не надавай ніяких картинок, лише текст`,
    true
  )
  : await askAI(`Please generate possible pet names for the following description ${petDescription}. 
    Please do not provide any images, only text`,
    true
  ) as queryBardValidRes

  const queryBardValidResponse = bardResponse as queryBardValidRes;

  return NextResponse.json({
    bardResponse: queryBardValidResponse.content
  }, { status: 200, statusText: 'successful request' });
};
