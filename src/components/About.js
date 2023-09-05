import ResourceLink from "./utils/ResourceLink";

const About = () => {
  return (
    <div className="text-md">
      <div className="md:hidden font-semibold text-2xl text-sky-600">About</div>

      {/* <div className="pt-5 md:pt-0 font-semibold text-lg">
        Hey, I'm Bilal! &#128075;&#127997;
      </div> */}

      <div className="pt-5 font-semibold md:pt-0 text-lg">currently</div>

      <div className="pt-3">
        I'm a Master's student (graduating 2025) at the{" "}
        <ResourceLink
          link="https://www.upenn.edu/"
          name="University of Pennsylvania"
        />
        . I study computer science and I'm TAing an intro software dev class!
      </div>

      <div className="pt-5 font-semibold text-lg">previously</div>

      <div className="pt-3">
        Wrote backend code for cloud-based microservices at{" "}
        <ResourceLink link="https://www.genesys.com/" name="Genesys" />.
      </div>

      <div className="pt-2">
        Helped develop a web app for a small biotech startup called{" "}
        <ResourceLink link="https://www.normative.ca/" name="Normative" />.
      </div>

      <div className="pt-2">
        Graduated from{" "}
        <ResourceLink link="https://www.mcgill.ca/" name="McGill University" />{" "}
        in 2021.
      </div>

      <div className="pt-5 font-semibold text-lg">interests</div>

      <div className="pt-3">
        backend engineering, software system design, distributed systems
      </div>
    </div>
  );
};

export default About;
