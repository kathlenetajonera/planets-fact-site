import type { Metadata } from 'next';
import { antonio, league_spartan } from './fonts';
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
        <html lang="en">
            <body
                className={`${antonio.className} ${league_spartan.className}`}
            >
                {children}
            </body>
        </html>
    );
}
