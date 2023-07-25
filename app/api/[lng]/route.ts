import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(): Promise<Response> {
  const manifestPath = path.join(process.cwd(), 'public', 'manifest.json');

  try {
    const data = fs.readFileSync(manifestPath, 'utf8');
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');

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
