// import { cn } from "@/lib/utils";
// import { TechStackIcons } from "./TechStackIcons";
// import ConfettiOnCopyEmail from "./Confetti";

// // Bento Grid Container
// export const BentoGrid = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children?: React.ReactNode;
// }) => {
//   return (
//     <div
//       className={cn(
//         "grid md:auto-rows-[10rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// // Bento Grid Item
// export const BentoGridItem = ({
//   className,
//   title,
//   description,
//   id,
//   img,
// }: // imgClassName,
// {
//   className?: string;
//   title?: string | React.ReactNode;
//   description?: string | React.ReactNode;
//   id?: number;
//   img?: string;
//   // imgClassName?: string;
//   titleClassName?: string;
// }) => {
//   return (
//     <div
//       className={cn(
//         "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
//         className
//       )}
//       style={{
//         background: "rgb(2,0,36)",
//         backgroundColor:
//           "linear-gradient(90deg, rgba(2,0,36,1) 1%, rgba(11,8,52,1) 7%, rgba(53,47,127,0.9695049894957983) 51%, rgba(20,37,133,1) 82%",
//       }}
//     >
//       {/* Used ? isntead of $$ to prevent this conditional div from being set to false */}
//       <div
//         className={`${
//           id === 6 ? "flex justify-center" : ""
//         } h-full justify-center items-center flex`}
//       >
//         {/* <div className="w-full h-full absolute"></div> */}
//         <div className="group-hover/bento:translate-x-2 transition duration-200">
//           <div className="font-sans  font-bold text-neutral-600 text-3xl dark:text-neutral-200 mb-2">
//             {title}
//           </div>
//           <div className="font-sans font-normal text-2xl text-neutral-600 dark:text-neutral-300">
//             {description}
//             {/* If ID 3 render the TechStackIcons component, else render img if img, else none bc theres no img to render */}
//             {id === 3 ? (
//               <TechStackIcons />
//             ) : (
//               img && (
//                 // eslint-disable-next-line @next/next/no-img-element
//                 <img
//                   src={img}
//                   alt="imgProp"
//                   className="w-full h-full object-cover"
//                 />
//               )
//               // Used <img/> instead of <Image/> bc <Image/> requires height/width props. The svg files have predefined dimensions. Img lets you skip manually extracting said dimensions
//             )}
//             {/* Confetti isn't responsively sizing properly. Clean up containers above or use non-react confetti */}
//             {id == 5 && <ConfettiOnCopyEmail />}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
