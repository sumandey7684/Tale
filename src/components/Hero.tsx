import { AppleIcon } from "./ui/AppleIcon";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col pt-10 lg:pt-20">
      <picture className="absolute inset-0 z-0 block">
        <source
          type="image/avif"
          srcSet="/grass-1280.avif 1280w, /grass-1920.avif 1920w"
          sizes="100vw"
        />
        <source
          type="image/webp"
          srcSet="/grass-1280.webp 1280w, /grass-1920.webp 1920w"
          sizes="100vw"
        />
        <img
          src="/grass.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-bottom"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
      </picture>

      <div className="relative z-10 flex min-h-screen flex-col px-6  pt-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-tale-dark leading-tight mb-6">
            Take Control When <br />
            Panic Strikes<span className="text-tale-accent">.</span>
          </h1>

          <p className="mx-auto max-w-xl text-base md:text-md text-gray-800 font-light leading-relaxed">
            Quick, proven techniques to calm anxiety and regain control—anytime,
            anywhere.
          </p>

          <button className="mx-auto flex items-center gap-3 rounded-full bg-tale-dark px-6 py-2 my-8 text-white shadow-premium transition-all hover:scale-105 active:scale-95">
            <AppleIcon />
            <span className="text-xs font-light">Download Now</span>
          </button>
        </div>

        <div className="mt-auto flex w-full justify-center">
          <picture>
            <source
              type="image/avif"
              srcSet="/i-phone-320.avif 320w, /i-phone-640.avif 640w, /i-phone-960.avif 960w"
              sizes="(max-width: 640px) 256px, (max-width: 1024px) 384px, 512px"
            />
            <source
              type="image/webp"
              srcSet="/i-phone-320.webp 320w, /i-phone-640.webp 640w, /i-phone-960.webp 960w"
              sizes="(max-width: 640px) 256px, (max-width: 1024px) 384px, 512px"
            />
            <img
              src="/i-phone.png"
              alt="iPhone App Preview"
              className="w-64 sm:w-80 md:w-96 lg:w-lg xl:w-xl drop-shadow-2xl"
              width={512}
              height={1024}
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
