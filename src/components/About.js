const About = () => {
  return (
    <div className="text-md">
      <div className="text-xl">Hey, I'm Bilal! &#128075;&#127997;</div>
      <div className="pt-4">
        I'm currently a Master's student studying computer science at the{" "}
        <a
          className="text-indigo-500 font-medium hover:underline underline-offset-2 decoration-[3px] hover:ease-in"
          href="https://www.upenn.edu/"
        >
          University of Pennsylvania
        </a>
        .
      </div>
      <div className="pt-3">
        In 2021, I graduated from{" "}
        <a
          className="text-indigo-500 font-medium hover:underline underline-offset-2 decoration-[3px]"
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
        In a previous life, I was a high jumper on McGill's track and field
        team. Since graduating, I've maintained my passion for sports through
        weightlifting and biking.
      </div>
      <div className="pt-3">
        <span className="font-semibold">Things I love:</span> wearable tech, my
        (future) corgi, and Kendrick Lamar
      </div>
    </div>
  );
};

export default About;
