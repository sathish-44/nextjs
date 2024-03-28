"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"
import "./styles.css"

 const navLink = [
  {name : 'register', href: '/register'},
  {name : 'login', href: '/login'},
  {name : 'forgot password', href: '/forgot-password'}
 ]

  export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const pathname = usePathname();

    return (
      <>
      {
        navLink.map((link)=>{
          const isActive = pathname.startsWith(link.href)
          return (
            <Link href={link.href} key={link.name} className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}>{link.name}</Link>
          )
        })
      }
        {children}
      </>
    )
  }
  