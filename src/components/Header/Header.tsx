// Header.tsx
import Link from 'next/link';

export const Header = () => {
  return (
    <header className='mx-auto grid w-screen max-w-[1200px] place-content-center py-[10px]'>
      <Link href='/'>
        <p className='m-0 text-3xl font-bold leading-[51px]'>
          メゾンドパーシモンズ
        </p>
      </Link>
    </header>
  );
};
