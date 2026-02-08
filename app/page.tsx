import Image from 'next/image'

export default function Home() {
  return (
    <>
      <section className="content-wrapper">
        <div className="env-container">
          <Image 
            src="/assets/IMG_3101.png" 
            alt="Envelope on the table" 
            className="envelope-img"
            width={800}
            height={600}
            priority
            unoptimized
          />
          <Image 
            src="/assets/gotmail.png" 
            alt="Got Mail" 
            className="gotmail"
            width={400}
            height={200}
            unoptimized
          />
          <Image 
            src="/assets/Karen.png" 
            alt="Karen" 
            className="karentext"
            width={900}
            height={300}
            unoptimized
          />
          <Image 
            src="/assets/thisis.png" 
            alt="This is" 
            className="thisis"
            width={228}
            height={100}
            unoptimized
          />
          <Image 
            src="/assets/karenface.png" 
            alt="Karen face" 
            className="karenface"
            width={300}
            height={300}
            unoptimized
          />
          <Image 
            src="/assets/Lin.png" 
            alt="Lin" 
            className="lintext"
            width={408}
            height={200}
            unoptimized
          />
          <p className="uni" style={{ whiteSpace: 'pre-line' }}>
            Computer Science @ University of Waterloo
                
            Software Engineer + UI/UX Designer

                
          </p>
        </div>
      </section>
      
      <section className="projects">
        <div className="project-card project-large">
          <div className="project-image"></div>
          <div className="project-content">
            <h3 className="project-title">Project Title 1</h3>
            <p className="project-description">A brief description of the project goes here.</p>
            <div className="project-tags">
              <span className="tag">Next.js</span>
              <span className="tag">React</span>
              <span className="tag">TypeScript</span>
            </div>
          </div>
        </div>

        <div className="project-card project-medium">
          <div className="project-content">
            <h3 className="project-title">Project Title 2</h3>
            <p className="project-description">Another project description.</p>
            <div className="project-tags">
              <span className="tag">Python</span>
              <span className="tag">ML</span>
            </div>
          </div>
        </div>

        <div className="project-card project-small">
          <div className="project-content">
            <h3 className="project-title">Project 3</h3>
            <p className="project-description">Short description.</p>
          </div>
        </div>

        <div className="project-card project-medium">
          <div className="project-image"></div>
          <div className="project-content">
            <h3 className="project-title">Project Title 4</h3>
            <p className="project-description">Description text here.</p>
            <div className="project-tags">
              <span className="tag">Design</span>
              <span className="tag">UI/UX</span>
            </div>
          </div>
        </div>

        <div className="project-card project-small">
          <div className="project-content">
            <h3 className="project-title">Project 5</h3>
            <p className="project-description">Brief.</p>
          </div>
        </div>

        <div className="project-card project-large">
          <div className="project-content">
            <h3 className="project-title">Project Title 6</h3>
            <p className="project-description">A longer description for this featured project that takes up more space.</p>
            <div className="project-tags">
              <span className="tag">Full Stack</span>
              <span className="tag">Node.js</span>
              <span className="tag">MongoDB</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
