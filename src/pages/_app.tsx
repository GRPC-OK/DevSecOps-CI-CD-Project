// src/pages/_app.tsx

// next-auth에서 SessionProvider를 import 합니다.
import { SessionProvider } from 'next-auth/react';
// 글로벌 CSS 파일을 올바른 경로로 import 합니다.
// './globals.css' 경로는 실제 파일 위치에 맞게 수정해야 합니다.
// 만약 globals.css가 src/globals.css에 있다면 '../globals.css'
// 만약 globals.css가 src/styles/globals.css에 있다면 '../styles/globals.css'
// 만약 globals.css가 src/pages/globals.css에 있다면 './globals.css'
import './globals.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  // 애플리케이션의 모든 페이지 컴포넌트와 하위 컴포넌트들이
  // 세션 정보에 접근할 수 있도록 SessionProvider로 감쌉니다.
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
