const About = () => {
  return (
    <div className="text-lg">
      <div className="text-2xl">Hey, I'm Bilal! &#128075;&#127997;</div>
      <div className="pt-3">
        I'm currently a Master's student at the{" "}
        <a
          className="text-indigo-500 font-medium hover:underline underline-offset-2 decoration-4 hover:ease-in"
          href="https://www.upenn.edu/"
        >
          University of Pennsylvania
        </a>
        , studying computer science.
      </div>
      <div className="pt-3">
        In 2021, I graduated from{" "}
        <a
          className="text-indigo-500 font-medium hover:underline underline-offset-2 decoration-4"
          href="https://www.mcgill.ca/"
        >
          McGill Universit
        </a>
        , where I studied physiology and mathematics.
      </div>
      <div className="pt-3">
        In a previous life, I was a high jumper for McGill's track and field
        team. Although I no longer compete, I've maintained my passion for
        sports through weightlifting and biking.
      </div>
      <div className="pt-3">
        <span className="font-semibold">Things I love:</span> wearable tech, my
        (future) corgi, and Kendrick Lamar
      </div>
    </div>
  );
};

export default About;
