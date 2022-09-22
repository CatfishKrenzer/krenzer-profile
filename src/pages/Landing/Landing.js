import React from "react";
import { FlexColumnDiv } from "../../styles";
import { LandingSubtitleBar } from './LandingStyles';

const Landing = (props) => {
  return (
    <>
      <FlexColumnDiv>
        <h1>John Krenzer</h1>
        <LandingSubtitleBar mobile={props.mobile}>
          <span>Software Engineer</span>
          <span>Saltwater Aquarist</span>
          <span>Gym Rat</span>
        </LandingSubtitleBar>
        <p>
          The intention behind this site is to be a software development playground. This gives my a single location where I can publish different ideas I want to try and let me learn and innovate on additional ideas.
        </p>
        <h2>About Me</h2>
        <p>
          I was born in 1993 in Wisconsin where I currently live. I have a wonderful wife, Megan, and amazing daughter, Melissa. I am considered a nerd through and through, bringing science and tech into everything I do.
        </p>
        <h3>Computer & Software Engineer</h3>
        <p>
          I am overly invested in Software Engineering. In fact, I am writing the code for this site out of entertainment and giving myself a platform to publish more boredom-generated brain children. I enjoy writing web applications/sites, server code, AWS infrastructure, and even embedded software/firmware. All of this software, yet I'm not afraid of touching a soldering iron. While I am not as proficient at Electrical Engineering, I have enough training to be dangerous in design and make repairs to circuits as needed.
        </p>
        <p>
          When it comes to tech, I enjoy designing and developing "cool $h!7". Essentially, finding solutions to complex problems by combining architecture and software. Using multi-dimensional approaches to solve problems.
        </p>
        <p>
          <a href='/engineering'>See more here...</a>
        </p>

        <h3>Saltwater Aquariums</h3>
        <p>
          Anybody that knows me knows that I can't go anywhere without at least talking about saltwater aquariums in some fashion. I currently have over 500 gallons worth or aquarium volume in my basement where I keep saltwater fish, coral, and invertebrates. Don't worry, I know it's excessive, you don't need to tell me...
        </p>
        <p>
          I am the founder of <a target="_blank" href="https://reefstable.com" rel="noreferrer">Reef Stable, LLC</a>, a blog and online resource for saltwater aquarium tools and solutions. Additionally growing and selling coral both in person and online. The Reef Stable website is also one of the most complex combinations of software and architecture that I have ever worked on. The combination of serverless technology, databases, pre-rendering and a variety of other tech was all engineered to act like a standard site for the end user, but on the back end provides better performance and much lower cost!
        </p>

        <h3>Gym Rat</h3>
        <p>
          I may not look like it, but I lift. Back in 2015/2016 I was about 240 lbs and nearly no muscle. I decided to pick up powerlifting, jogging with some friends, and flexible dieting (Macro Counting). I was able to get my weight down to a low of 180lbs within 8 months, and compete in a powerlifting meet where I got second in my weight class.
        </p>
        <p>
          I still powerlift, and also work on hypertrophy, keeping a well rounded power-building lifestyle. I admit, I do minimal cardio as I am generally focussed on muscle gain allowing fat loss to be over the long term. That being said, for quick fat loss, HIIT jogging or eliptical are great! But while building muscle, I simply enjoy walking my dog for a couple miles.
        </p>
      </FlexColumnDiv>
    </>
  )
}

export default Landing;