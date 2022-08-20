const About = () => {
  return (
    <div className="text-md">
      <div className="md:hidden font-semibold text-2xl text-sky-600">About</div>
      <div className="pt-5 md:pt-0 font-semibold text-lg">
        Hey, I'm Bilal! &#128075;&#127997;
      </div>
      <div className="pt-3">
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
        experiences I had as a student there inspired my transition into
        computing. I'm excited to combine what I've learned across different
        fields to build software products that help people lead healthier lives.
      </div>
      <div className="pt-3">
        In a previous life, I was a high jumper for McGill's track and field
        team. Although I no longer compete, I've maintained my passion for
        sports through weightlifting and hiking.
      </div>
      <div className="pt-3">
        <span className="font-semibold">Things I love:</span> wearable tech, my
        (future) corgi, and Kendrick Lamar
      </div>
    </div>
  );
};

export default About;
