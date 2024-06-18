import { NextResponse } from "next/server";
import { hash } from 'bcryptjs';
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();
        console.log({ email, password });

        const hashedPassword = await hash(password, 10); // 将密码哈希加密到10位

        const response = await sql`
            INSERT INTO users (email, password) 
            VALUES (${email}, ${hashedPassword})
        `;
        // 使用参数化查询来防止 SQL 注入攻击

        console.log(response); // 输出数据库响应

    } catch (e) {
        console.log({ e });
        return NextResponse.json({ error: "Failed to register user" }, { status: 500 });
    }

    return NextResponse.json({ message: "success" });
}
