import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import { Adapter } from "next-auth/adapters";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID ?? '',
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? ''
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? ''
    }),
  ],

  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log({ user })
      

      return true;
    },
    async jwt({ token, user, account, profile }) {
      // console.log({ token })
      const dbUser = await prisma.user.findUnique({ where: { email: token.email ?? 'no-email' } });
      token.roles = dbUser?.roles ?? ['no-roles'];
      token.id = dbUser?.id ?? ['no-uuid'];

      return token;
    },
    async session({ session, token, user }) {
      console.log({ token })

      if( session && session.user ) {
        //TODO: Arreglar esto.
        session.user.roles = token.roles;
        session.user.id = token.id;
      }

      return session;
    }
  }

}


const handler = NextAuth( authOptions );

export { handler as GET, handler as POST };