const About = () => {
  return (
    <div className="pt-6">
      I'm currently a Master's student at the{" "}
      <a
        className="text-indigo-500 font-semibold hover:underline underline-offset-2 decoration-4"
        href="https://www.upenn.edu/"
      >
        University of Pennsylvania
      </a>
      , studying computer science.
      <div className="pt-4">
        Previously, I studied physiology and mathematics at{" "}
        <a
          className="text-indigo-500 font-semibold hover:underline underline-offset-2 decoration-4"
          href="https://www.mcgill.ca/"
        >
          McGill University
        </a>
        . My academic experiences there inspired me to explore how technology
        can be used to help people lead healthier lives.
      </div>
    </div>
  );
};

export default About;
