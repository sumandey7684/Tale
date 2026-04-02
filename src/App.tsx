import { Suspense, lazy, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const WebExperience = lazy(() => import("./components/WebExperience"));
const Journey = lazy(() => import("./components/Journey"));
const Features = lazy(() => import("./components/Features"));
const Trust = lazy(() => import("./components/Trust"));
const Continuity = lazy(() => import("./components/Continuity"));
const Footer = lazy(() =>
  import("./components/Footer").then((mod) => ({ default: mod.Footer })),
);

const SectionFallback = ({ minHeight = "min-h-24" }: { minHeight?: string }) => (
  <section className={`${minHeight} w-full bg-transparent`} aria-hidden="true" />
);

function App() {
  const [renderDeferredSections, setRenderDeferredSections] = useState(false);

  useEffect(() => {
    let idleCallbackId: number | undefined;
    let timeoutId: number | undefined;

    if (typeof window.requestIdleCallback === "function") {
      idleCallbackId = window.requestIdleCallback(
        () => {
          setRenderDeferredSections(true);
        },
        { timeout: 1200 },
      );
    } else {
      timeoutId = setTimeout(() => {
        setRenderDeferredSections(true);
      }, 600);
    }

    return () => {
      if (typeof timeoutId === "number") {
        clearTimeout(timeoutId);
      }

      if (typeof idleCallbackId === "number") {
        window.cancelIdleCallback(idleCallbackId);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {renderDeferredSections ? (
        <Suspense fallback={<SectionFallback minHeight="min-h-96" />}>
          <WebExperience />
          <Journey />
          <Features />
          <Trust />
          <Continuity />
          <Footer />
        </Suspense>
      ) : (
        <SectionFallback minHeight="min-h-96" />
      )}
    </div>
  );
}

export default App;
