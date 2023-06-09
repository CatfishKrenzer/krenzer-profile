import React from "react";
import { FlexColumnDiv } from "../../styles";
import { LandingHero, LandingSubtitleBar } from './LandingStyles';
import landingHero from './landingHero.jpg';
import technology from './technology.jpg';
import aquarium from './aquarium.jpg';
import gym from './gym.jpg';

const Landing = (props) => {
  return (
    <>
      <FlexColumnDiv>
        <LandingHero mobile={props.mobile} image={landingHero} topMargin={true}>
          <h1 style={{ color: 'white' }}>John Krenzer</h1>
          <LandingSubtitleBar mobile={props.mobile}>
            <span style={{ color: 'white' }}>Software Engineer</span>
            <span style={{ color: 'white' }}>Saltwater Aquarist</span>
            <span style={{ color: 'white' }}>Gym Rat</span>
          </LandingSubtitleBar>
        </LandingHero>

        <LandingHero mobile={props.mobile} image={technology}>
          <h2 style={{ color: 'white' }}>Computer & Software Engineer</h2>
          <p style={{ color: 'white' }}>
            I am overly invested in Software Engineering. In fact, I am writing the code for this site out of entertainment, giving myself a platform to publish more boredom-generated brain children. I enjoy writing web applications/sites, microservices, AWS infrastructure, and even embedded software/firmware.
          </p>
          <br />
          <p style={{ color: 'white' }}>
            All of this software, yet I'm not afraid of touching a soldering iron. While I am not as proficient at Electrical Engineering, I have enough training to be dangerous in design and make repairs to circuits as needed.
          </p>
          <br />
          <p style={{ color: 'white' }}>
            When it comes to tech, I enjoy designing and developing "cool $h!7". Essentially, finding solutions to complex problems by combining architecture and software. Using multi-dimensional approaches to solve problems.
          </p>
          <br />
          <p style={{ color: 'white' }}>
            <a style={{ color: 'white', fontWeight:'bolder' }} href='/engineering'>See more here...</a>
          </p>
        </LandingHero>
        <LandingHero mobile={props.mobile} image={aquarium}>
          <h2 style={{ color: 'white' }}>Saltwater Aquariums</h2>
          <p style={{ color: 'white' }}>
            Anybody that knows me knows that I can't go anywhere without at least talking about saltwater aquariums in some fashion. I currently have over 500 gallons worth or aquarium volume in my basement where I keep saltwater fish, coral, and invertebrates. Don't worry, I know it's excessive, you don't need to tell me...
          </p>
          <br />
          <p style={{ color: 'white' }}>
            I am the founder of <a style={{ color: 'white', fontWeight:'bolder' }} target="_blank" href="https://reefstable.com" rel="noreferrer">Reef Stable, LLC</a>, a blog and online resource for saltwater aquarium tools and solutions. Additionally growing and selling coral both in person and online. The Reef Stable website is also one of the most complex combinations of software and architecture that I have ever worked on. The combination of serverless technology, databases, pre-rendering and a variety of other tech was all engineered to act like a standard site for the end user, but on the back end provides better performance and much lower cost!
          </p>
        </LandingHero>
        <LandingHero mobile={props.mobile} image={gym}>
          <h2 style={{ color: 'white' }}>Gym Rat</h2>
          <p style={{ color: 'white' }}>
            I may not look like it, but I lift. Back in 2015 I was about 240 lbs and nearly no muscle. I decided to pick up powerlifting and flexible dieting (Macro Counting). I was able to get my weight down to a low of 180lbs within 8 months to compete in a powerlifting meet; where I got second in my weight class.
          </p>
          <br />
          <p style={{ color: 'white' }}>
            I still powerlift and am always working toward a new PR. I enjoy walking the dog as a form of cardio and put a lot of miles on my shoes.
          </p>
        </LandingHero>

      </FlexColumnDiv>
    </>
  )
}

export default Landing;