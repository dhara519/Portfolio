import { cn } from "@/lib/utils";
import { TechStackIcons } from "./TechStackIcons";
import ConfettiOnCopyEmail from "./Confetti";
// Need minimize div's and rethink classnames if still going to use index file for data
// Centralize logic and classnames for easier to read components and easier to understand flow

// Bento Grid renders a <div> which is the container that holds all grid items.
// Bentro Grid is a called a wrapper and it recieves two props: children and classname
// className is used for CSS stuff and whatever
// Grid component (the array mapping returns) passes multiple <BentoGridItem> components as children to <BentoGrid>.
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[10rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

// All the boxes inside the grid
export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
}: // imgClassName,
{
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  // imgClassName?: string;
  titleClassName?: string;
}) => {
  // useState to control state of confetti
  //
  return (
    <div
      className={cn(
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 1%, rgba(11,8,52,1) 7%, rgba(53,47,127,0.9695049894957983) 51%, rgba(20,37,133,1) 82%",
      }}
    >
      {/* Used ? isntead of $$ to prevent this conditional div from being set to false */}
      <div
        className={`${
          id === 6 ? "flex justify-center" : ""
        } h-full justify-center items-center flex`}
      >
        {/* <div className="w-full h-full absolute"></div> */}
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          <div className="font-sans  font-bold text-neutral-600 text-3xl dark:text-neutral-200 mb-2">
            {title}
          </div>
          <div className="font-sans font-normal text-2xl text-neutral-600 dark:text-neutral-300">
            {description}
            {/* If current item in array === 3 render the TechStackIcons component, else if img is defined (truthy) render img, else render nothing bc there is no img to render */}
            {id === 3 ? (
              <TechStackIcons />
            ) : (
              img && (
                <img
                  src={img}
                  alt="imgProp"
                  className="w-full h-full object-cover"
                />
              )
              // Used <img/> instead of <Image/> bc <Image/> requires height/width props. The images' svg files hold predefined dimensions. Img lets you skip manually extracting/typing them bc svg files are lightweight
            )}
            {/* Confetti isn't responsively sizing properly. Clean up containers above or use external animation */}
            {id == 5 && <ConfettiOnCopyEmail />}
          </div>
        </div>
      </div>
    </div>
  );
};
