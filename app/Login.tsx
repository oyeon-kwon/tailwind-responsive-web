"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data } = useSession();

  console.log(data);

  return (
    <div>
      {data && data.user ? (
        <div>
          <p>{data.user.name}님 환영합니다!</p>
          <p>{data.user.image}</p>

          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => signOut()}
          >
            로그아웃
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => signIn()}
        >
          트위터 로그인
        </button>
      )}
    </div>
  );
}
