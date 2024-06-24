import dynamic from 'next/dynamic';

const DarkModeButton = dynamic(() => import('@/atoms/DarkModeButton'), { ssr: false });

export default DarkModeButton;