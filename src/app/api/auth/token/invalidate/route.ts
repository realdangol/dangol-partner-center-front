import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
  const cookie = await cookies();
  cookie.delete('refreshToken');

  const res = NextResponse.json({ success: true });

  return res;
}
