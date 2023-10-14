'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { containerVariant, staggerVariant } from './transitions';
import data from '@/_components/Header/NavList/data';

export default function Home() {
    return (
        <motion.div
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            className={`flex flex-col items-center justify-evenly h-[calc(100vh-82px)] pb-8 sm:flex-row`}
        >
            {data.map(({ id, label, image }) => {
                return (
                    <motion.span
                        key={id}
                        variants={staggerVariant}
                        className="group"
                    >
                        <Link href={id}>
                            <Image
                                src={image}
                                width={60}
                                height={60}
                                alt={label}
                                className="lg:w-20 xl:w-28 2xl:w-40 hover:scale-110 transition-transform duration-300"
                            />
                            <p className="hidden text-center mt-4 capitalize opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block">
                                {label}
                            </p>
                        </Link>
                    </motion.span>
                );
            })}
        </motion.div>
    );
}
