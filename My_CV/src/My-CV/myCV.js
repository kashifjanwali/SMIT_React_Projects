import "./style.css";
import kashif from "./kashif.JPG";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import {
  BsFillTelephoneFill,
  BsLinkedin,
  BsStackOverflow,
  BsPinterest,
  BsCodeSquare,
} from "react-icons/bs";
import { SiFiverr, SiQuora } from "react-icons/si";
import { IoLogoTwitter } from "react-icons/io";
import {
  AiFillFacebook,
  AiOutlineCode,
  AiOutlineRadarChart,
} from "react-icons/ai";
import {
  FaInstagramSquare,
  FaGithubSquare,
  FaVimeoSquare,
} from "react-icons/fa";

export default function MyCv(props) {
  return (
    <div className="my-cv">
      <hr></hr>
      <img id="profile_image" alt="Kashif Hussain" src={kashif} />
      <h1 id="my-name">{props.name}</h1>

      <p id="my-profession">(Full Stack Developer)</p>

      <p class="adjust-cv" id="my-location">
        <ImLocation2 />
        Student Housing Boys Hostel, D-368 ,D-Block, Satellite Town, Rawalpindi
      </p>

      <p class="adjust-cv" id="my-email">
        <MdEmail /> kh9732494@gmail.com
      </p>

      <p class="adjust-cv" id="my-mobile">
        <BsFillTelephoneFill /> +92 341 7069154
      </p>

      <hr></hr>

      <p class="adjust-cv bold-headings" id="summary">
        Summary
      </p>
      <p class="adjust-cv" id="summary-details">
        I'm a hard working and passionate Web Developer having One Year of
        experience and I had compleated many certificate courses online as well
        as physical related to Web Application Development.
      </p>

      <hr></hr>

      <p class="adjust-cv bold-headings" id="skills">
        Skills
      </p>
      <ul className="skills">
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>JavaScript</li>
        <li>C++</li>
        <li>ES6</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>PHP</li>
        <li>MySQL</li>
        <li>Laravel</li>
        <li>MS Office</li>
      </ul>

      <hr></hr>
      <p className="adjust-cv bold-headings">Experience</p>
      <p className="adjust-cv">
        <span class="strong">CUSTOMER SALES REPRESENTATIVE</span>
        <span>, 10/2022 - 03/2023</span>
      </p>
      <p className="adjust-cv">
        <span className="strong">J Telemarketing</span>
        <span>, Rawalpindi, Pakistan</span>
      </p>
      <ul>
        <li>
          Delivered <span className="strong">fast, friendly</span> and{" "}
          <span className="strong">knowledgeable service</span> for routine
          questions and service complaints
        </li>
      </ul>
      <hr></hr>
      <p className="bold-headings adjust-cv">Education and Training</p>
      <ul>
        <li>
          <span className="strong">
            Air University Islamabad
          </span>
          <span>, E-9 Islamabad,</span>
          <p className="adjust-cv">Expected in 09/2023</p>
          <p className="strong adjust-cv">Web Application Development</p>
        </li>

        <hr className="small-lines"></hr>

        <li>
          <span className="strong">
            Saylani Mass Information Technology Programme
          </span>
          <span>, F-10 Markaz Islamabad,</span>
          <p className="adjust-cv">Expected in 12/2023</p>
          <p className="strong adjust-cv">Web and Mobile App Development</p>
        </li>

        <hr className="small-lines"></hr>

        <li>
          <span className="strong">Cadet College Sohawa</span>
          <span>, Wadi-e-Raj Akber, Sohawa,</span>
          <p className="adjust-cv">07/2020</p>
          <p className="strong adjust-cv">
            HSSC: Higher Secondary School Certificate
          </p>
        </li>

        <hr className="small-lines"></hr>

        <li>
          <span className="strong">Fauji Foundation Model School</span>
          <span>, Yaadgaar Chowk Gilgit,</span>
          <p className="adjust-cv">07/2020</p>
          <p className="strong adjust-cv">SSC: Secondary School Certificate</p>
        </li>
        <p className="adjust-cv">Distinction in Computer Sciences</p>
      </ul>

      <hr></hr>
      <p className="bold-headings adjust-cv">Languages</p>
      <ul>
        <li>
          <span className="strong">Khowar:</span>
          <span> First Language</span>
        </li>

        <li>
          <span className="strong">Urdu:</span>
          <span> Proficient</span>
        </li>

        <li>
          <span className="strong">English</span>
          <span> Conversational</span>
        </li>
      </ul>

      <hr></hr>

      <p className="bold-headings adjust-cv">Social Media Links</p>
      <div>
        <p className="social-networks">
          <a href="https://www.linkedin.com/in/kashifjanwali/">
            <BsLinkedin className="strong-icons linked-in" />
          </a>
        </p>

        <p className="social-networks">
          <a href="https://www.fiverr.com/users/kashifjanwali/">
            <SiFiverr className="strong-icons fiverr" />
          </a>
        </p>

        <p className="social-networks">
          <a href="https://www.twitter.com/kashifjanwali/">
            <IoLogoTwitter className="strong-icons twitter" />
          </a>
        </p>

        <p className="social-networks">
          <a href="https://www.facebook.com/kashifjanwali/">
            <AiFillFacebook className="strong-icons facebook" />
          </a>
        </p>

        <p className="social-networks">
          <a href="https://www.instagram.com/kashifjanwali/">
            <FaInstagramSquare className="strong-icons instagram" />
          </a>
        </p>

        <p className="social-networks">
          <a href="https://www.github.com/kashifjanwali/">
            <FaGithubSquare className="strong-icons github" />
          </a>
        </p>

        <p className="social-networks">
          <a href="https://www.codementor.io/@kashifjanwali">
            <AiOutlineCode className="strong-icons codementor" />
          </a>
        </p>

        <p className="social-networks">
          <a href="https://stackoverflow.com/users/21434571/kashif-hussain">
            <BsStackOverflow className="strong-icons stackoverflow" />
          </a>
        </p>

        <p className="social-networks">
          <a href="https://vimeo.com/kashifjanwali">
            <FaVimeoSquare className="strong-icons vimeo" />
          </a>
        </p>

        {
          <p className="social-networks">
            <a href="https://arc.dev/@kashifjanwali">
              <AiOutlineRadarChart className="strong-icons arc" />
            </a>
          </p>
        }

        <p className="social-networks">
          <a href="https://www.quora.com/Kashifjanwali">
            <SiQuora className="strong-icons quora" />
          </a>
        </p>

        <p className="social-networks">
          <a href="https://www.pinterest.com/kashifjanwali/">
            <BsPinterest className="strong-icons pinterset" />
          </a>
        </p>

        <p className="social-networks">
          <a href="https://kjwcodings.wordpress.com/">
            <BsCodeSquare className="strong-icons kjw-codings" />
          </a>
        </p>
      </div>
    </div>
  );
}
