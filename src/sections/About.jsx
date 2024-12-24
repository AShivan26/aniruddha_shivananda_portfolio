import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' ashivan@ncsu.edu');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I&apos;m Aniruddha Shivananda</p>
              <p className="grid-subtext">
                With 2 years and 7 months of professional experience, I have cultivated expertise in full-stack development, specializing in front-end and back-end engineering, system-level programming, and designing scalable, high-performance applications. I also have hands-on experience implementing microservices and event-driven architectures.              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Raleigh, United States Of America', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I&apos;m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m currently pursuing a Master&apos;s in Computer Science at North Carolina State University in Raleigh, United States, and I am open to remote opportunities worldwide. I am seeking Summer 2025 internship or co-op roles and will be available for full-time positions after graduating in May 2026.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I have expertise in a wide range of languages, frameworks, and tools, enabling me to create robust and
                scalable applications.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="grid-subheadtext">Languages & Frameworks</h3>
                  <p className="grid-subtext">
                    • Java • Spring Boot • C • Python • MATLAB • PromQL • ReactJS • HTML • CSS • JavaScript
                  </p>
                </div>

                <div>
                  <h3 className="grid-subheadtext">Databases</h3>
                  <p className="grid-subtext">
                    • MySQL • PostgreSQL • MongoDB • SQL • Redis
                  </p>
                </div>

                <div>
                  <h3 className="grid-subheadtext">Tools</h3>
                  <p className="grid-subtext">
                    • Prometheus • Grafana • Jenkins • Kafka • Docker • OpenAPI • Git • Postman • OpenCV • Vulkan
                  </p>
                </div>

                <div>
                  <h3 className="grid-subheadtext">Cloud & Systems</h3>
                  <p className="grid-subtext">
                    • AWS S3 • Kubernetes • XINU Operating System • Linux/UNIX OS • ThingSpeak
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-2">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I am passionate about solving problems and creating solutions through code. Programming is not just my
                profession, but my passion. I thrive on exploring new technologies and continuously improving my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">ashivan@ncsu.edu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
