export default function Hero() {
  return (
    <section
      class="h-screen flex items-center justify-center relative"
      id="home"
    >
      <div class="relative z-10 text-center">
        <h1 class="text-5xl md:text-4xl font-bold text-neon-blue">
          Hi, I'm Hambali, I'm a fullstack web developer
        </h1>
        <p class="mt-4 ms-6 text-sm md:text-2xl text-neon-purple max-w-xl">
          I create website with a fast and latest technology 
        </p>
      </div>
      <img
        src="people.webp"
        alt="Cyberpunk character standing in a neon-lit environment, wearing a high-tech jacket with glowing lines and a transparent visor displaying digital data"
        width={600}
      />
    </section>
  );
}
