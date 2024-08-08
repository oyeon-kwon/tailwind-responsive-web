"use client";

import { useSession, signIn } from "next-auth/react";

export default function Login() {
  const { data } = useSession();

  console.log(data);

  return (
    <div>
      <button type="button" onClick={() => signIn()}>
        트위터 로그인
      </button>
    </div>
  );
}
