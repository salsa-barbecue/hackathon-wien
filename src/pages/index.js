import * as React from "react";
import * as indexStyles from "./index.module.css";

import { StaticImage } from "gatsby-plugin-image";
import { MdLocationPin, MdCalendarToday } from "react-icons/md";

const IndexPage = () => {
  return (
    <main className={indexStyles.main}>
      <div className={indexStyles.header}>
        <h1 className={indexStyles.headerTitle}>
          EIT DIGITAL ALUMNI HACKATHON
          <br />
          WIEN, AUSTRIA
        </h1>
        <div className={indexStyles.bottomHeader}>
          <h2>
            <MdLocationPin style={{ color: "#84C318" }} /> Talent Garden Wien,{" "}
            <br />
            Liechtensteinstraße 111/115, 1090 Wien, Austria
          </h2>
          <h2>
            <MdCalendarToday style={{ color: "#84C318" }} /> 12th - 13th
            November 2022
          </h2>
        </div>
      </div>
      <div className={indexStyles.dataContainer}>
        <h1>Proposal player</h1>
        <StaticImage
          src={"../images/eit-digital-eu.png"}
          alt="Eit digital"
          style={{ margin: "20px 0px" }}
        />
        <h1>Description</h1>
        <p>
          <b>EIT DIGITAL Alumni</b>, coming from different backgrounds and
          courses of study, will be divided into teams that will compete in a
          challenge focused on the issues of the digital transformation, and
          specifically on how it is affecting the future ways of work and talent
          development.
          <br />
          The methodological approach foreseen is that of <b>co-creation</b>,
          the practice of collaborating with other stakeholders to guide the
          design process.
          <br />
          The teams, with the support of mentors, will have to outline a project
          based on one (or more) of these tools and technologies:
        </p>
        <ul>
          <li>Collaborative board</li>
          <li>Metaverse</li>
          <li>Augmented Reality</li>
          <li>Virtual Reality</li>
        </ul>
        <p>
          All projects will be developed in a 2 days hackathon and pitched at
          the end of the weekend in front of a jury composed by the president of
          the Alumni association, a Talent Garden representative and a
          representative of local startups and partners.
          <br />
          Throughout the creative process, each team will be supported by
          experienced <b>design thinking tutors and mentors</b> so that it is
          able to concretely develop its idea and submit it by the deadline.
          <br />
          The purpose of the challenge is to promote the culture of innovation
          in the startup ecosystem and provide a valuable training opportunity
          for the Alumni involved.
          <br />
          Moreover, the event will represent a significant practical training
          not only on idea incubation approaches, but also on design thinking
          techniques and co-creation methodology.
        </p>
        <h1>Who should participate?</h1>
        <p>
          EIT Digital Alumni from all academic areas can compete individually or
          in teams to tackle the digital transformation challenge posed by the
          hackathon. The participants should have a diverse background of tech,
          business, raw materials, IT, health, climate tech, urban mobility,
          food tech, digital manufacturing/industry 4.0 and design, which means
          that each team should have a good mix of different skills, expertise
          and academic backgrounds.
          <br />
          This event is both a single and team participation hackathon:
          participants can either invite their friends to form a team or they
          can participate as an individual. In the second case they would be
          added to a specific team.
          <br />
          During the first day, alumni from all academic backgrounds will
          receive a brief introduction to the predominant trends in{" "}
          <b>digital innovation</b> as well as practical examples of business
          innovation tools that have revolutionized the business in recent
          years.
          <br />
          Once heterogeneous and multi-functional teams are created, applicants
          will be expected to create innovative solutions using the
          methodological approach of co-creation.
          <br />
        </p>
        <h1>Timeline:</h1>
        <div className={indexStyles.row}>
          <div className={indexStyles.column}>
            <div className={indexStyles.dayElement}>
              <h3>Saturday 12th</h3>
              <p>
                The first day will open with an introductory speech which will
                provide participants with a contextual view of the challenge and
                goals of the event.
                <br />
                After the introduction, the final division of the participants
                into teams will be defined, giving the chance to start
                developing their ideas and projects with the support of
                dedicated mentors.
              </p>
            </div>
          </div>
          <div className={indexStyles.column}>
            <div className={indexStyles.dayElement}>
              <h3>Sunday 13th</h3>
              <p>
                The second day will be dedicated to the development of the
                project and, by the late afternoon, to pitching it in front of
                the mentors and jury.
                <br />
                Complementary breakfast and lunch are part of the event
              </p>
            </div>
          </div>
        </div>
        <div className={indexStyles.row}>
          <div className={indexStyles.column}>
            <h1>Judges and mentors</h1>
            <p>To be announced</p>
          </div>
          <div className={indexStyles.column}>
            <h1>How to join?</h1>
            <p>(EXTERNAL LINK - FORM)</p>
          </div>
        </div>
        <h1>In collaboration with</h1>
        <div className={indexStyles.row}>
          <div className={indexStyles.column}>
            <div className={indexStyles.icwElement}>
              <StaticImage
                src={"../images/eit-digital-eu.png"}
                alt="Eit digital"
                className={indexStyles.logoPartner}
              />
              <p>
                <b>EIT Digital</b> is a leading European digital innovation and
                entrepreneurial education organisation supporting the creation
                of a strong digital Europe. <b>EIT Digital</b> is focused on
                building and scaling ventures, and on breeding and up-skilling
                talents to equip them with both digital and entrepreneurial
                skills. It does this by mobilizing a pan-European ecosystem of
                over 300 top European corporations, SMEs, start-ups,
                universities and research institutes. As a Knowledge and
                Innovation Community of the European Institute of Innovation and
                Technology, <b>EIT Digital</b>{" "}
                is focused on entrepreneurship and is at the forefront of
                integrating education, research and business by bringing
                together students, researchers, engineers, business developers
                and entrepreneurs. This is done in our pan-European network of
                Co-Location Centres in Berlin, Budapest, Eindhoven, Helsinki,
                London, Madrid, Paris, Stockholm and Trento. We also have a hub
                in Silicon Valley.
              </p>
            </div>
          </div>
          <div className={indexStyles.column}>
            <div className={indexStyles.icwElement}>
              <StaticImage
                src={"../images/tag.png"}
                alt="Tag"
                className={indexStyles.logoPartner}
              />
              <p>
                <b>Talent Garden</b> offers an unprecedented combination of
                creative coworking, an internal educational institution and
                industry-driven events to connect tech talents inside a network
                of campuses. Founded in Italy in 2011, <b>Talent Garden</b>’s
                mission is to create local, vibrant, globally connected campuses
                that empower digital and tech communities. Today the company has
                a network of 21 campuses in 8 countries (Austria, Denmark,
                Ireland, Italy, Lithuania, Romania, Spain and France). These
                campuses are a base for ideas and collaborations to thrive,
                hosting a community of startups, agencies, corporate labs,
                freelancers, investors, media companies and students, who are
                all united by a like-minded vision for digital innovation. Since
                its founding, <b>Talent Garden</b> has raised €57M in financing
                from TIP (Tamburi Investment Partners), Social Capital, Indaco
                Ventures and primarily European family offices.{" "}
                <b>Talent Garden</b>’s hosts a community of over 4,500
                innovators inside the network of campuses across Europe. Open 24
                hours a day, the campuses are designed to provide professionals
                with a physical base to succeed and scale - equipped with
                workstations, offices, meeting rooms, laboratories, event
                spaces, fablabs, cafés and more.
              </p>
            </div>
          </div>
        </div>
        <h1>Have a question? Contact us!</h1>
        <div>
          <form method="post" action="#">
            <div className={indexStyles.row}>
              <input type="text" name="name" id="name" placeholder="Name" />
              <input
                type="text"
                name="surname"
                id="surname"
                placeholder="Surname"
              />
              <input type="email" name="email" id="email" placeholder="Email" />
              <input
                type="text"
                name="company"
                id="company"
                placeholder="Company/alumni"
              />
            </div>
            <div className={indexStyles.row}>
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Message"
              />
            </div>
            <div className={indexStyles.row}>
              <button type="submit">Send</button>
              <input type="reset" value="Clear" />
            </div>
          </form>
        </div>
      </div>

      <div className={indexStyles.footer}></div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
