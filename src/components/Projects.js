import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Weather Dashboard",
      description: "basic weather dashboard using OpenWeather API",
      imgUrl: projImg1,
      url: "https://github.com/andrewbern7/WeatherApp"
    },
    {
      title: "Personal Portfolio",
      description: "personal portfolio website",
      imgUrl: projImg2,
      url: "https://github.com/SmellyFishPaste/personal-portfolio"
    },
    {
      title: "Voting Regerstration data visualization",
      description: "A data visualization project showing voting registration data for Pitt County.",
      imgUrl: projImg4,
      url: "https://github.com/SmellyFishPaste/VotingDataProject_Pitt_County/blob/main/VotingDataProject-main/Code/final_project_Nathanael_Prokop.py"
    },
    {
      title: "test slot",
      description: "test slot project description",
      imgUrl: projImg3,
    },
    
    
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Take a look at some of the fun projects I've built ranging from academic work to personal experiments.  These highlight my skills in web development, design, and creative problem-solving. Each project reflects something I’ve learned, explored, or just had fun building!!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>

                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>w</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>More to come in the future!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}