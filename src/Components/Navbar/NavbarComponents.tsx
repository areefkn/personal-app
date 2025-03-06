import Link from "next/link";

export default function NavbarComponents() {
return (
    <div className=" p-[15px] flex justify-center items-center  gap-x-16">
        <div>
            {/* <img src="Assets/IMG_20201012_054727 (1).jpg" alt="" className="p-[3px] w-[150px] flex rounded-[50%]" /> */}
        </div>
        <div className="flex justify-center p-[15px] h-[50px] m-[10px] gap-20 text-xl bg-indigo-50 w-[550px] rounded-2xl">
            <Link href="/" className="/">Home</Link>
            <Link href="/myproject">Project</Link>
            <Link href="/contact">Contact Me</Link>
        </div>
    </div>
)
}






// "use client"; // Untuk memastikan React state berjalan di Next.js

// import { useState } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react"; // Gunakan ikon hamburger

// export default function NavbarComponents() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
//       <div className="container mx-auto px-4 flex justify-between items-center py-4">
//         {/* Logo */}
//         <div className="text-lg font-bold text-gray-800">AreefKn.</div>

//         {/* Desktop Navigation */}
//         <ul className="hidden md:flex gap-10 text-gray-700 font-medium">
//           <li className="hover:text-blue-500"><Link href="/">Home</Link></li>
//           <li className="hover:text-blue-500"><Link href="/myproject">Project</Link></li>
//           <li className="hover:text-blue-500"><Link href="/contact">Contact Me</Link></li>
//         </ul>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <ul className="md:hidden bg-white shadow-lg py-4 flex flex-col items-center gap-3">
//           <li className="hover:text-blue-500"><Link href="/">Home</Link></li>
//           <li className="hover:text-blue-500"><Link href="/myproject">Project</Link></li>
//           <li className="hover:text-blue-500"><Link href="/contact">Contact Me</Link></li>
//         </ul>
//       )}
//     </nav>
//   );
// }

