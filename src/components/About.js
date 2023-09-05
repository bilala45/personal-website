const About = () => {
  return (
    <div className="text-md">
      <div className="md:hidden font-semibold text-2xl text-sky-600">About</div>
      <div className="pt-5 md:pt-0 font-semibold text-lg">
        Hey, I'm Bilal! &#128075;&#127997;
      </div>
      <div className="pt-3">
        I'm a Master's student studying computer science at the University of
        Pennsylvania.
      </div>
      <div className="pt-3">
        Previously, in 2021, I graduated from McGill University. During my
        studies, I've interned at{" "}
        <a
          className="text-sky-600 hover:underline hover:underline-offset-4 decoration-1 decoration-slate-300"
          href="https://www.normative.ca/"
        >
          Normative
        </a>
        , a small biotech startup, and most recently at{" "}
        <a
          className="underline hover:text-sky-600 underline-offset-4 decoration-1 decoration-slate-300"
          href="https://www.genesys.com/"
        >
          Genesys
        </a>
        , a large cloud-based SaaS company. Currently, I'm TA'ing CIT 5910:
        Introduction to Software Development.
      </div>
      <div className="pt-3">
        Things I'm interested in: backend engineering, software system design,
        and distributed systems.
      </div>
    </div>
  );
};

export default About;
