"use client";
import { useRouter } from "next/navigation";

function page() {

  const router = useRouter();

  return (
    <div>
      <button onClick={(e)=>router.push(`/about`)}>go to about page</button>
      Hello world</div>
  )
}

export default page