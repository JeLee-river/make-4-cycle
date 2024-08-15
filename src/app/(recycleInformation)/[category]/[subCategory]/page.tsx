import { MaterialType } from '@/app/types/types';

async function getRecycleInfo(segment: string) {
  const information = await fetch(
    `${process.env.NEXT_PUBLIC_API}/recycleInfo/${segment}`
  ).then((res) => res.json());
  const { recycleInfo } = information;

  return recycleInfo;
}

export default async function RecycleInfo({
  params,
}: {
  params: MaterialType;
}) {
  const category = params.category;
  const subCategory = params.subCategory ?? '';
  const segment = `${category}/${subCategory}`;
  const recycleInfo = await getRecycleInfo(segment);

  return <h1>{recycleInfo}</h1>;
}
