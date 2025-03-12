import css from "./HomePage.module.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export default function HomePage() {
  return (
    <div className={css.page}>
      <h1>You can find me here</h1>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/vadym-derihlazov/"
            target="_blank"
          >
            <FaLinkedin size="60px" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Zelrettch" target="_blank">
            <FaGithub size="60px" />
          </a>
        </li>
        <li>
          <a href="mailto:forworker137@gmail.com">
            <BiLogoGmail size="60px" />
          </a>
        </li>
      </ul>
    </div>
  );
}
