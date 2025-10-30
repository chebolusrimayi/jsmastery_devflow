import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'

const SocialAuthForm = () => {
    const buttonClass = "min-h-[48px] flex-1 px-4 py-3.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700"
    
    return (
        <div className="mt-10 flex flex-wrap gap-2.5">
            <Button className={`${buttonClass} flex items-center justify-center gap-2`}>
                <Image
                    src="/icons/github.svg"
                    alt="GitHub Logo"
                    width={20}
                    height={20}
                    className="invert dark:invert-0 object-contain"
                />
                <span>Log in with GitHub</span>
            </Button>

            <Button className={`${buttonClass} flex items-center justify-center gap-2`}>
                <Image
                    src="/icons/google.svg"
                    alt="Google Logo"
                    width={20}
                    height={20}
                    className="object-contain"
                />
                <span>Log in with Google</span>
            </Button>
        </div>
    )
}

export default SocialAuthForm;