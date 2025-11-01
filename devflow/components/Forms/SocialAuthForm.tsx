"use client"

import React from 'react'
import Image from 'next/image'
import { signIn } from "next-auth/react"
import { Button } from '../ui/button'
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import ROUTES from '@/constants/routes'

const SocialAuthForm = () => {
    const { toast } = useToast()
    const buttonClass = "min-h-[48px] flex-1 px-4 py-3.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700"
    const router = useRouter();
    const handlesignin = async(provider: "github" | "google") => {
        try {
            console.log(`Starting ${provider} sign in...`);
            const result = await signIn(provider, {
                redirectTo: ROUTES.HOME
            });
            console.log('Sign in result:', result);
        } catch (error) {
            console.error('Sign in error:', error);
            toast({
                title: "Sign-in Failed",
                description:
                 error instanceof Error ? error.message : "Something went wrong. Please try again.",
                 variant: "destructive",
            });
        }
    };
    return (
        <div className="mt-10 flex flex-wrap gap-2.5">
            <Button 
                className={`${buttonClass} flex items-center justify-center gap-2`}
                onClick={() => handlesignin("github")}
            >
                <Image
                    src="/icons/github.svg"
                    alt="GitHub Logo"
                    width={20}
                    height={20}
                    className="invert dark:invert-0 object-contain"
                />
                <span>Log in with GitHub</span>
            </Button>

            <Button className={`${buttonClass} flex items-center justify-center gap-2`}
                onClick={() => handlesignin("google")}
            >
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