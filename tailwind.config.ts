import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/_components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'dark-blue': '#070722',
                gray: '#838391',
                'light-gray': '#37374e',
                'lighter-gray': '#ffffffbf',
            },
            backgroundColor: {
                mercury: '#419db9',
                venus: '#eda44a',
                earth: '#6f2ed6',
                mars: '#d14e33',
                jupiter: '#d93b36',
                saturn: '#cb5020',
                uranus: '#1ec2a4',
                neptune: '#2d68f0',
            },
            backgroundImage: {
                stars: `url('/images/background-stars.svg')`,
            },
        },
    },
    plugins: [],
};
export default config;
