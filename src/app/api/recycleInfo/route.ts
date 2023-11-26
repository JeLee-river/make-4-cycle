import connectDB from '@/libs/db/connectDB';
import { RecycleInfo } from '@/libs/db/model';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { className, classImageSource, recycleInfo } = await request.json();
  await connectDB();
  await RecycleInfo.create({ className, classImageSource, recycleInfo });
  return NextResponse.json(
    { message: `Get ${className} recycle method` },
    { status: 201 }
  );
}
