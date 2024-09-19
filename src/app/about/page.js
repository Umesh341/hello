"use client";
import { useRouter } from "next/navigation";
function about() {
  const router = useRouter();
  return (
    <div>
      
      <button onClick={(e)=>router.push(`/`)}>go to HOME page</button>About</div>
  )
}

export default about