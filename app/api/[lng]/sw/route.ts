import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(): Promise<Response> {
  const filePath = path.join(process.cwd(), 'public', 'app.js');

  try {
    const data = fs.readFileSync(filePath, 'utf8');

    const headers = new Headers();
    headers.set('Content-Type', 'application/javascript');

    return new NextResponse(data, {
      status: 200,
      headers,
    });
  } catch (err) {
    return new NextResponse('Error reading manifest file', {
      status: 500,
    });
  }
}
