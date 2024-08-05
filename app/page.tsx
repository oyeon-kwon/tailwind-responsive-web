"use server";

import { revalidatePath, revalidateTag } from "next/cache";

async function getData() {
  return await (
    await fetch("https://66a9d5b1613eced4eba66049.mockapi.io/users", {
      next: {
        tags: ["users"],
      },
    })
  ).json();
}
async function getData2() {
  return await (
    await fetch("https://66a9d5b1613eced4eba66049.mockapi.io/products", {
      next: {
        tags: ["products"],
      },
    })
  ).json();
}
async function revalid1() {
  "use server";
  // revalidatePath("/"); //초기화 해주는 부분을 매개변수로
  //ondemand 방식 초기화(주문형 초기화)
}
async function revalid2() {
  "use server";
  // revalidateTag("users");
  revalidateTag("ㅁㄴㅇㄹ");
}

export default async function Homepage() {
  const data1 = await getData();
  const data2 = await getData2();
  return (
    <>
      <h1 className="text-5xl">Homepage</h1>
      <div>devdev</div>
      <div>새로운걸 추가해볼게요</div>
      <h1 className="text-5xl">data1 length: {data1.length}</h1>
      <h1 className="text-5xl">data2 length: {data2.length}</h1>

      <h1 className="text-5xl">data1 의 길이: {data1.length}</h1>
      <h1 className="text-5xl">data2 의 길이: {data2.length}</h1>

      <button
        onClick={async () => {
          "use server";
          revalidatePath("/");
        }}
      >
        revalidate path
      </button>
      <form action={revalid1}>
        <button className="border border-slate-500 p-2 rounded-1g">
          revalidatePath
        </button>
      </form>
      <form action={revalid2}>
        <button className="border border-slate-500 p-2 rounded-1g">
          revalidateTag
        </button>
      </form>
    </>
  );
}
