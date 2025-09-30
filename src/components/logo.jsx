'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'

export function Logo({ className }) {
    let transition = {
        duration: 0.5,
        ease: 'easeInOut',
    }

    return (
        <div>
            <img
                alt="Logo"
                src="/epicx.png"
                className="block size-full object-cover w-20"
            />
        </div>
    )
}

export function Mark({ className }) {
    return (
        <img
            alt="Logo"
            src="/e.svg"
            className="block size-full object-cover w-20 p-4"
        />
    )
}
