// Both page.tsx in Next.js and index.js in create-react-app serve as the main entry point for a page or component.
// They both typically define the main content that users see on the screen.
// Every page.tsx in next.js becomes a route so app/page.tsx → The root (/) route.
// In create-react-app, there’s usually just one index.js file in src that serves as the root entry point for the whole app, with routing handled within components and manually setting up browserRouter
// Next.js page.tsx files can use server-side rendering and static site generation, which can improve performance and SEO. create-react-app is client-side only, so it doesn’t natively support SSR.
import { Grid } from "@/components/Grid";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-8xl w-full">
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
