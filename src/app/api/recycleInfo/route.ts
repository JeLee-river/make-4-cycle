import connectDB from '@/libs/db/connectDB';
import { recycleInfoDAO } from '@/libs/db/recycleInfoDAO';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  await connectDB();

  const recycleResource = await request.json();
  const category = await recycleInfoDAO.addRecycleInfo(recycleResource);
  return NextResponse.json(
    { message: `Add ${category} recycle method` },
    { status: 201 }
  );
}
