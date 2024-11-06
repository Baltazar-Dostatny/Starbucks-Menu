import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify, faFacebook, faLinkedin, faInstagram, faYoutube, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./FooterSocialMedia.css";

const FooterSocialMedia = () => {
    return (
        <div className="socialMedia">
            <ul>
                <li><a className="socialMediaIcons" href="https://open.spotify.com/user/starbucks"><FontAwesomeIcon icon={faSpotify} /></a></li>
                <li><a className="socialMediaIcons" href="https://www.facebook.com/StarbucksBrasil/"><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li><a className="socialMediaIcons" href="https://www.linkedin.com/company/starbucks-brasil-com%C3%A3%C2%A9rcio-de-caf%C3%A3%C2%A9s-ltda-/?viewAsMember=true"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a className="socialMediaIcons" href="https://www.instagram.com/starbucksbrasil/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a className="socialMediaIcons" href="https://www.youtube.com/channel/UC20jDcU5rfiuqtXi9uNrvqg"><FontAwesomeIcon icon={faYoutube} /></a></li>
                <li><a className="socialMediaIcons" href="https://twitter.com/StarbucksBrasil"><FontAwesomeIcon icon={faTwitter} /></a></li>
            </ul>
        </div>
    );
};

export default FooterSocialMedia;