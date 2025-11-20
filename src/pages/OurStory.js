// pages/OurStory.js
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TimelineItem = ({ year, title, description, isLeft }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className={`timeline-item ${isLeft ? "left" : "right"}`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="timeline-content">
        <div className="timeline-year">{year}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

const OurStory = () => {
  const timelineData = [
    {
      year: "January 17, 2024",
      title: "Where It All Began",
      description:
        "Our story began through a game — the day we talked for the first time. I asked for your Discord if I aced, and even though I don't remember if I actually did, you still gave it to me. That small moment changed everything.",
    },
    {
      year: "February 2024",
      title: "Falling for You",
      description:
        "We played together, chatted, laughed… and on Feb 14, I waited for your message. You messaged late, got mad when I played with friends, and scolded me — and strangely, that’s when I realized I had feelings for you. From that day, my journey of love began.",
    },
    {
      year: "2024",
      title: "Growing Closer",
      description:
        "We flirted, watched movies together on Discord, talked during your office hours while I stayed in the channel just to feel close to you. Hearing your voice, even in the background, felt comforting. You doubted our relationship, but I was determined to make it work — and slowly, you fell in love with me too.",
    },
    {
      year: "Mid 2024",
      title: "Love Becoming Life",
      description:
        "Everything felt romantic — choosing outfits together, talking about the future, sharing everything. Listening to your breaths in the call, reading horoscopes, dreaming about us… loving you became a habit, one I could live with forever.",
    },
    {
      year: "23rd Jun 2024",
      title: "The 'Yes' That Changed My World",
      description:
        "The day you finally said 'yes' and told me you loved me — I can’t explain the happiness I felt. That moment was everything. We truly began our journey as a couple from that day.",
    },
    {
      year: "6th Sep 2024",
      title: "Meeting in Delhi",
      description:
        "I traveled from Nepal to Delhi just to meet you. We walked following the shared locations on WhatsApp… you crossed me without noticing until I called your name. You turned, smiling, blushing, and hugged me tightly. Those three days — walking together, kissing, laughing, crying — became memories I will keep forever.",
    },
    {
      year: "After 2024",
      title: "Ups, Downs & Still Together",
      description:
        "Leaving Delhi was painful. We had ups and downs, misunderstandings and challenges… but despite everything, we stayed strong. And we are still here, loving each other, growing together.",
    },
  ];

  return (
    <div className="our-story-page">
      <motion.div
        className="story-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Our Beautiful Journey</h1>
        <p>From the first hello to forever together 💫</p>
      </motion.div>

      <div className="timeline">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} {...item} isLeft={index % 2 === 0} />
        ))}
      </div>
    </div>
  );
};

export default OurStory;
