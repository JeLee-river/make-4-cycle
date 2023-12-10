import connectDB from '@/libs/db/connectDB';
import { recycleInfoDAO } from '@/libs/db/recycleInfoDAO';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { className: string } }
) {
  await connectDB();

  const className = params.className;
  const recycleResource = await recycleInfoDAO.findRecycleInfo(className);
  if (recycleResource === null) {
    return NextResponse.json(
      { error: `Cannot find ${className} recycle method` },
      { status: 404 }
    );
  }

  return NextResponse.json(recycleResource);
}
