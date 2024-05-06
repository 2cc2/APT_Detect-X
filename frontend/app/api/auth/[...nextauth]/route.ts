import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextApiRequest, NextApiResponse } from "next";
import { compare } from "bcryptjs";
import { sql } from "@vercel/postgres";

const options: AuthOptions = {
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token, user }) {
      return session;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl.startsWith('/admin') ? '/admin/login' : url;
    },
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as { email: string; password: string };
        if (!email || !password) {
          return null; // 如果没有提供凭据，则返回 null
        }
        const response = await sql`SELECT * FROM users WHERE email=${email}`;
        const user = response.rows[0];

        if (!user) {
          return null; // User not found
        }

        const passwordCorrect = await compare(password || "", user.password);

        if (passwordCorrect) {
          return {
            id: user.id,
            email: user.email,
          };
        }

        return null; // Incorrect password
      },
    }),
  ],
};

const route = (req: any, res: any) => NextAuth(req, res, options);

export const GET = route;
export const POST = route;
