const About = () => {
  return (
    <div className="text-md">
      <div className="md:hidden font-semibold text-2xl text-sky-600">About</div>
      <div className="pt-5 md:pt-0 md:text-xl">
        Hey, I'm Bilal! &#128075;&#127997;
      </div>
      <div className="pt-3 md:pt-4">
        I'm a Master's student studying computer science at the{" "}
        <a
          className="underline hover:text-sky-600 underline-offset-4 decoration-1 decoration-slate-300"
          href="https://www.upenn.edu/"
        >
          University of Pennsylvania
        </a>
        .
      </div>
      <div className="pt-3">
        In 2021, I graduated from{" "}
        <a
          className="underline hover:text-sky-600 underline-offset-4 decoration-1 decoration-slate-300"
          href="https://www.mcgill.ca/"
        >
          McGill University
        </a>
        , where I studied physiology and mathematics. The interdisciplinary
        academic experiences I had as a student there inspired my transition
        into computing. I'm passionate about exploring the intersection of my
        fields, and I hope to contribute to the development of products that
        help people lead healthier lives.
      </div>
      <div className="pt-3">
        <span className="font-semibold">Things I love:</span> wearable tech, my
        (future) corgi, and Kendrick Lamar
      </div>
    </div>
  );
};

export default About;
