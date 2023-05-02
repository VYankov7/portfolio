import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-white to-emerald-50 dark:from-gray-700 dark:to-black dark:text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem neque velit est magni quis quos at accusamus inventore
          nobis, autem voluptates nam officia commodi vero consequatur sed. Non
          aliquid rerum, dignissimos temporibus maiores alias, deleniti minus
          nulla aspernatur dolore accusantium illo quisquam nihil, repellat
          voluptatibus! Libero harum officia sit fugiat?
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illum
          odit neque corrupti assumenda ad, deserunt in adipisci vel amet hic
          libero mollitia porro enim illo sit ut? Ipsa perspiciatis, unde iusto
          sed nulla doloribus quidem incidunt at aliquam nisi nihil repellendus
          possimus fuga, neque a accusantium, officia qui asperiores.
        </p>
      </div>
    </div>
  );
};

export default About;
