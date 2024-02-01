import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <>
      <div className="flex items-center py-8 bg-[#032541] text-white flex-col ">
        <p className="footer-center footer-title">
          A Project by Sushil Kulkarni
        </p>
        <p className="link">
          <a
            href="https://github.com/Sushilk2000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="size-8"
            ></FontAwesomeIcon>
          </a>
        </p>
      </div>
    </>
  );
}
export default Footer;
