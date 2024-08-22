'use client';
import { Button, message } from 'antd';
import { useRouter } from 'next/navigation';
import { signOut } from "next-auth/react"

const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' });
    message.success('成功登出');
    router.push('/admin/login'); 
  };

  return (
    <Button
      type="primary"
      onClick={handleLogout}
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        zIndex: 9999,
      }}
    >
      登出
    </Button>
  );
};

export default LogoutButton;