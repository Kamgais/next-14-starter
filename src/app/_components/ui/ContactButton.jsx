"use client";

import { useRouter } from "next/navigation";

const ContactButton = () => {
  const router = useRouter();

  const handleClick = () => {
    // use the router
    router.push('/contact')
  }
  return (
    <button onClick={handleClick}>Contact</button>
  )
}

export default ContactButton