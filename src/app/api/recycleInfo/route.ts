import connectDB from '@/libs/db/connectDB';
import { recycleInfoDAO } from '@/libs/db/recycleInfoDAO';
import { NextRequest, NextResponse } from 'next/server';

export async function PostRecycleInfo(request: NextRequest) {
  await connectDB();

  const recycleResource = await request.json();
  const className = await recycleInfoDAO.addRecycleInfo(recycleResource);
  return NextResponse.json(
    { message: `Add ${className} recycle method` },
    { status: 201 }
  );
}

export async function GetRecycleInfo(request: NextRequest) {
  await connectDB();

  const className = await request.json();
  const { classImageSource, recycleInfo } =
    await recycleInfoDAO.findRecycleInfo(className);
  return NextResponse.json({ className, classImageSource, recycleInfo });
}
