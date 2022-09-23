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
        , where I studied physiology and mathematics. Following this, I interned
        at a small biotech startup called{" "}
        <a
          className="underline hover:text-sky-600 underline-offset-4 decoration-1 decoration-slate-300"
          href="https://www.normative.ca/"
        >
          Normative
        </a>
        , helping develop user portals for their web application.
      </div>
      <div className="pt-3">
        These interdisciplinary experiences have inspired my transition into
        computing. I'm looking forward to using my knowledge to build new and
        exciting software products!
      </div>
      <div className="pt-3">
        <span className="font-semibold">Things I love:</span> wearable tech,
        autonomous vehicles, and music by Kendrick Lamar
      </div>
    </div>
  );
};

export default About;
