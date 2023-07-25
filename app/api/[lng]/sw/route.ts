/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(req: NextRequest, { params }: { params: { lng: string } }): Promise<Response> {
  const filePath = path.join(process.cwd(), 'public', 'app.js');

  try {
    // Read the manifest.json file synchronously
    const data = fs.readFileSync(filePath, 'utf8');

    // Set the correct Content-Type header for the manifest.json file
    const headers = new Headers();
    headers.set('Content-Type', 'application/javascript');

    // Serve the manifest.json file's content as the response
    return new NextResponse(data, {
      status: 200,
      headers,
    });
  } catch (err) {
    // Handle errors if the file is not found
    return new NextResponse('Error reading manifest file', {
      status: 500,
    });
  }
}
