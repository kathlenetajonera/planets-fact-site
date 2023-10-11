import type { Metadata } from 'next';
import { antonio, league_spartan } from './fonts';
import Header from '@/_components/Header';
import './globals.css';

export const metadata: Metadata = {
    title: 'Planets Fact Site',
    description: 'Challenge by Frontend Mentor',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${antonio.variable} ${league_spartan.variable}`}
        >
            <body>
                <div className="min-h-screen bg-stars bg-cover bg-fixed">
                    <Header />
                    {children}
                </div>
            </body>
        </html>
    );
}
