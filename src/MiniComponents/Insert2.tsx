import Button from "../CustomButton/Button";

export default function Component() {
  return (
    <div className="relative w-full h-[400px] overflow-hidden mb-40">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Background-a83LGq2EA0OFVowm2i83ivze9iSFCh.png"
        alt="Team working together"
        className="absolute inset-0 w-full h-full object-cover rounded-3xl"
      />
      <div className="relative z-20 flex flex-col justify-center h-full max-w-md px-6 sm:px-8 md:px-12">
        <h2 className="text-5xl sm:text-4xl font-bold text-white mb-4">
          How we build
        </h2>
        <p className="text-xl sm:text-base text-gray-200 mb-6">
          We prioritize your success, understand your unique needs, and deliver
          tailored solutions that drive your business growth.
        </p>
        <Button className="w32 bg-white text-black hover:bg-gray-200">
          Know more
        </Button>
      </div>
    </div>
  );
}
