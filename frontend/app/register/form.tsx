'use client';

import { FormEvent, useEffect, useState } from "react";
import { Card, Form, Input, Button } from "antd";
import "./register.css"

export default function Form1() {
    const [response, setResponse] = useState<Response | null>(null);

    const handleSubmit = (err: FormEvent<HTMLFormElement>) => {
        err.preventDefault();
        const formData = new FormData(err.currentTarget);
        fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                email: formData.get('email'),
                password: formData.get('password'),
            }),
        }).then(res => setResponse(res));
    }

    useEffect(() => {
        if (response) {
            console.log({ response });
        }
    }, [response]);

    return (
        <div className="register-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card title="注册" className="register-card" style={{ width: '50%' }}>
                <form onSubmit={handleSubmit}>
                    <Input
                        name="email"
                        type="email"
                        placeholder="请输入您的邮箱地址"
                        style={{ marginBottom: '16px' }}
                    />
                    <Input.Password
                        name="password"
                        placeholder="请设置您的密码"
                        style={{ marginBottom: '16px' }}
                    />
                    <Button type="primary" htmlType="submit" block>
                        注册
                    </Button>
                </form>
            </Card>
        </div>
    );
}