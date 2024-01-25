import Image from "next/image";

export default function Home() {
  return (
   <div className="">
    <button onClick={()=> window.location.href = "https://mazstar-dashboard.netlify.app/dashboard"}>Go to Dashboard</button>
   </div>
  );
}
