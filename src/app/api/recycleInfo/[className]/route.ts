import connectDB from '@/lib/db/connectDB';
import { recycleInfoDAO } from '@/lib/db/recycleInfoDAO';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { category: string } }
) {
  await connectDB();

  const category = params.category;
  const recycleResource = await recycleInfoDAO.findRecycleInfo(category);
  if (recycleResource === null) {
    return NextResponse.json(
      { error: `Cannot find ${category} recycle method` },
      { status: 404 }
    );
  }

  return NextResponse.json(recycleResource);
}
