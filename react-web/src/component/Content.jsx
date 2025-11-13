
import "../style/content.css"
function Content() {
  const items = [
  {
    id: 1,
    heading: "Free consultations",
    content:
      "We explain complex things in simple terms. We analyze your request and suggest what would be best for you: mobile app development or web app application. We help you choose between iOS, Android, or Flutter."
  },
  {
    id: 2,
    heading: "Educational programmes",
    content:
      "Workshops and courses on the path from idea to first version. App development planning, UX/UI basics, security, analytics. We show examples of Flutter app development and web solutions."
  },
  {
    id: 3,
    heading: "Informational support",
    content:
      "Blog, guides, and checklists: how to prepare for app development, how to choose a stack (iOS app development, Android application development, Flutter framework), how not to lose data."
  },
  {
    id: 4,
    heading: "Supporting initiatives",
    content:
      "We work with NGOs and small teams: we help develop a plan, prototype, and roadmap for creating an app for my business. We provide clear steps to MVP."
  },
  {
    id: 5,
    heading: "Support for partners",
    content:
      "Together with donors and alliances, we prepare meaningful solutions. When development is needed, we connect partners such as app dev companies (Java application development services, Web)."
  },
  {
    id: 6,
    heading: "Event organisation",
    content:
      "Hackathons, meetings, AMA sessions, and mentoring days. Topics: mobile app development, web app application, Flutter, iOS/Android, integrations, and analytics, all based on real-life cases."
  }
];


  return (
    <>
    {/* Section - 1 */}
   <section className="content">
        <div className="content-text">
          <h1>Hi, This is Advelon</h1>
          <h2>Web Developer & Software Engineer</h2>
          <p>
            I specialize in building modern, responsive web applications using
            technologies like React, Spring Boot, and SQL. Passionate about
            creating clean code, seamless user experiences, and scalable
            software systems.
          </p>
          <button className="btn">View My Work</button>
        </div>

        <div className="content-image">
          <img src="/src/assets/image.jpg" alt="Developer working" />
        </div>
      </section>
      {/* Section - 2 */}
      <section className="second-section">
      <div className="second-content">
        <div className="heading">
          <h1>
            Mobile App Development for Communities and Businesses:
            <span> What Proarea Tech Community Does</span>
          </h1>
        </div>

        <div className="item-container">
          {items.length > 0 &&
            items.map((item) => (
              <div className="item-card" key={item.id}>
                <h2>{item.heading}</h2>
                <p>{item.content}</p>
              </div>
            ))}
        </div>
        <section className="third-section">
  <div className="third-content">
    <h1>Who we are and our mission</h1>
    <p>
      Advelon Tech Community is a public organization that brings together IT
      specialists, designers, educators, and partners to support socially
      beneficial initiatives through technology. We help communities,
      organizations, and projects to implement digital solutions clearly and
      effectively — from idea to launch. Our mission is to make technology
      accessible to those who are changing the world. Proarea Tech Community
      was created with the participation of Proarea, a company that has been
      involved in mobile and web app development for 10 years and is ready to
      share its expertise.
    </p>
    <button>Learn More About Us</button>
   </div>

    <div>
      <img
      src="https://yittbox.com/BlogImages/Importance-of-Digital-Marketing.jpg"
      alt="About Us"
     />
   </div>
</section>

      </div>
    </section>
    </>
  )
}

export default Content