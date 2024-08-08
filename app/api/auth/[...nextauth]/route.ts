/* eslint-disable import/no-extraneous-dependencies */
import NextAuth from "next-auth/next";
import TwitterProvider from "next-auth/providers/twitter";

const handler = NextAuth({
  providers: [
    TwitterProvider({
      clientId: "Mnk4QWZLb1hYVk81cnhfTW1Udlo6MTpjaQ",
      clientSecret: "vOcyWXWvu6YqzIW9l5vI3IG9AYom49EPN6g38Ov5VdxZ1pj5yM",
      version: "2.0",
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      return {
        ...session,
        user: { ...session.user, id: token.sub },
      };
    },
    // async redirect({ baseUrl }) {
    //   console.log('baseUrl', baseUrl)
    //   return baseUrl
    // },
  },
});

export { handler as GET, handler as POST };
