// import Button from "@/components/ui/button";
// import Image from "next/image";
// import Link from "next/link";
// import RadixSelect from "./radix-select";

// export interface ProductDataType {
//   image: "string";
//   name: "string";
//   flags: "string";
// }
// async function getData() {
//   const res = await fetch("https://restcountries.com/v3.1/all");
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

// export default async function Login() {
//   const data: ProductDataType[] = await getData();

//   return (
//     <section className="flex h-screen">
//       <div className="container m-auto px-5">
//         <Image
//           className="w-[85%] mx-auto"
//           src="/assets/images/image 2.png"
//           width={500}
//           height={100}
//           alt=""
//         />
//         <h1 className="text-white text-2xl py-5"> Login / Register</h1>
//         <h3 className="text-muted text-base">Mobile Number</h3>
//         <div>
//           {/* <RadixSelect /> */}
//           {data.map((item, index) => {
//             console.log(item.flags.png);
//             return (
//               <div key={index}>
//                 <Image
//                   src={item.flags.png}
//                   width={50}
//                   height={50}
//                   alt="Star Icon"
//                   className="rounded-full"
//                 />
//               </div>
//             );
//           })}
//         </div>
//         <p className="text-[9px] text-muted py-2">
//           By continuing you accept ours Terms of Use and confirm that you are
//           over the legal drinking age
//         </p>
//         <Link href="">
//           <div className="flex items-center justify-center pt-5">
//             <button
//               type="submit"
//               className="text-background bg-primary hover:bg-accent hover:text-primary rounded-md text-lg capitalize px-9 h-12"
//             >
//               Continue
//             </button>
//           </div>
//         </Link>
//       </div>
//     </section>
//   );
// }
