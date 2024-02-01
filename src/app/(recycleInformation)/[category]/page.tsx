async function RecycleInfo({ params }: { params: { category: string } }) {
  const information = await fetch(
    `${process.env.NEXT_PUBLIC_API}/recycleInfo/${params.category}`
  ).then((res) => res.json());

  const { recycleInfo } = information;

  return <h1>{recycleInfo}</h1>;
}

export default RecycleInfo;
