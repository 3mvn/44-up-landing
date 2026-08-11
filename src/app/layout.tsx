import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
    display: 'swap',
    preload: true,
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
    display: 'swap',
    preload: false,
});

export const metadata: Metadata = {
    title: '44Up - Custom Software Solutions',
    description:
        'Transform your business with cutting-edge custom software solutions. Your vision, our expertise.',
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
            { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
        ],
        shortcut: '/favicon.ico',
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <head>
                <link rel='icon' href='/favicon.ico' sizes='any' />
                <link rel='icon' href='/favicon-32x32.png' type='image/png' sizes='32x32' />
                <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
                <meta name='theme-color' content='#2563eb' />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <SmoothScroll>{children}</SmoothScroll>
            </body>
        </html>
    );
}
