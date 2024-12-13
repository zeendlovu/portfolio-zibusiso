import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { mail, location,phone, githubLogo } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-5xl leading-[30px] text-justify'
      >
        <div className="flex gap-8 sm:flex-col md:flex-col lg:flex-row">
          <div className="basis-3/4">
            I am a results-driven software developer with 2 years of experience designing, developing,
            and maintaining robust applications. Proficient in full-stack development with expertise
            in JavaScript, Python, Java and modern frameworks and libraries such as React,
            Springboot, Express.js and database management systems like MySQL and PostgreSQL.
            Skilled in agile methodologies, version control (Git), and collaborating across cross-functional teams. 
            Passionate about creating scalable, user-friendly solutions to solve complex problems. Also have some 
            experience with cloud platforms such as AWS for migration and deployment.
          </div>

          <div className="basis-1/4 bg-slate-900 rounded-lg">
              <div className="flex flex-row gap-4 p-2">
                <div className="my-auto p-2 rounded-lg bg-white">
                  <img src={mail} alt="" width={20}/>
                </div>
                <div className="leading-5 my-auto">
                  <span className="uppercase text-sm">Email</span> <br /> 
                  <span className="text-white text-sm"><a href="mailto:zeendlovu15@gmail.com">zeendlovu15@gmail.com</a></span>
                </div>
              </div>

              <div className="flex flex-row gap-4 p-2">
                <div className="my-auto p-2 rounded-lg bg-white">
                  <img src={githubLogo} alt="" width={20} />
                </div>
                <div className="leading-5 my-auto">
                  <span className="uppercase text-sm">Github</span> <br /> 
                  <span className="text-white text-sm"><a href="https://github.com/zeendlovu?tab=repositories">zeendlovu</a></span>
                </div>
              </div>

              <div className="flex flex-row gap-4 p-2">
                <div className="my-auto p-2 rounded-lg bg-white">
                  <img src={phone} alt="" width={20} />
                </div>
                <div className="leading-5 my-auto">
                  <span className="uppercase text-sm">Phone</span> <br /> 
                  <span className="text-white text-sm"><a href="tel:+263784457727">+263 784 457 727</a></span>
                </div>
              </div>

              <div className="flex flex-row gap-4 p-2">
                <div className="my-auto p-2 rounded-lg bg-white">
                  <img src={location} alt="" width={20} />
                </div>
                <div className="leading-5 my-auto">
                  <span className="uppercase text-sm">location</span> <br /> 
                  <span className="text-white text-sm">Harare, Zimbabwe</span>
                </div>
              </div>
              

          </div>
        </div>
        

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
