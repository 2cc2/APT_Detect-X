'use client';
import { Button, message } from 'antd';
import { useRouter } from 'next/navigation';
import { signOut } from "next-auth/react"

const LogoutButton = () => {
  const router = useRouter();
  //   const currentUrl = window.location.href; // 获取当前页面的完整URL，包括查询参数

  // // 获取当前页面的主机名和路径，不包括协议和端口
  // const { hostname, pathname } = new URL(currentUrl);

  // // 构建新的回调URL，设置为当前端口下的/login路径
  // const callbackUrl = `${window.location.protocol}//${hostname}${pathname.replace(/\/[^/]*$/, '/admin/login')}`;
  const handleLogout = async () => {
    await signOut({ callbackUrl: '/' });

    // Show logout success message
    message.success('成功登出');

    // Redirect to the login page or home page after logout
    router.push('/admin/login'); // Replace '/login' with your desired redirect URL
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