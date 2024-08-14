async function getRecycleInfo(category: string) {
  const information = await fetch(
    `${process.env.NEXT_PUBLIC_API}/recycleInfo/${category}`
  ).then((res) => res.json());
  const { recycleInfo } = information;

  return recycleInfo;
}

export default async function RecycleInfo({
  params,
}: {
  params: { category: string };
}) {
  const category = params.category;
  const recycleInfo = await getRecycleInfo(category);

  return <h1>{recycleInfo}</h1>;
}
