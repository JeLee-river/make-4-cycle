import connectDB from '@database/connectDB';
import { recycleInfoDAO } from '@database/recycleInfoDAO';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  await connectDB();

  const recycleResource = await request.json();
  const categoryList = await recycleInfoDAO.addRecycleInfo(recycleResource);
  return NextResponse.json(
    { message: `Add ${categoryList.join(', ')} recycle method` },
    { status: 201 },
  );
}
