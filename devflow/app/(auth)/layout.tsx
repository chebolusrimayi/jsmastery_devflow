import React from 'react'
import Image from 'next/image'
import SocialAuthForm from '@/components/Forms/SocialAuthForm'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-auth-light bg-cover bg-center bg-no-repeat px-4 py-10 dark:bg-auth-dark">
    <section className="min-w-full rounded-[10px] bg-sky-50 px-4 py-10 shadow-sm dark:border dark:border-gray-800 dark:bg-gray-900 sm:min-w-[520px] sm:px-8">
        <div className="flex items-center justify-between gap-2">
            <div className="space-y-2.5">
                <h1 className="h2-bold text-dark100_light900">Join DevFlow</h1>
                <p className="paragraph-regular text-dark500_light400">
                    To get your questions answered
                </p>
            </div>
            <Image
            src="/images/site-logo.svg"
            alt="DevFlow Logo"
            width={50}
            height={50}
            className="object-contain"
            />
        </div>

         {children}

         <SocialAuthForm />
    </section>
    </main>
  )
}

export default AuthLayout;