import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

// Grid renders a <section> as the container for <BentoGrid>
// <BentoGrid> is the container that holds each grid item
// Inside the <BentoGrid> tags is JS logic tha calls the source code for griditem, sends it props to render a grid item per array item
// Grid component passes multiple <BentoGridItem> components as children to <BentoGrid>.
export const Grid = () => {
  return (
    <section id="aboutGrid">
      <BentoGrid className="w-full py-20">
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            titleClassName,
            img,
            imgClassName,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              spareImg={spareImg}
              titleClassName={titleClassName}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};
