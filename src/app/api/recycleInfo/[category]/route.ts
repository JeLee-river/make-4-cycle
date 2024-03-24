import { MaterialType } from '@/app/types/types';
import connectDB from '@database/connectDB';
import { recycleInfoDAO } from '@database/recycleInfoDAO';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: MaterialType }
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
