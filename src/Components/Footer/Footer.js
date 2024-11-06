import FooterExtraThings from "../FooterExtraThings/FooterExtraThings";
import FooterInfos from "../FooterInfos/FooterInfos";
import FooterSocialMedia from "../FooterSocialMedia/FooterSocialMedia";
import "./Footer.css";

const Footer = () => {
     return (
        <footer>
            <FooterInfos></FooterInfos>

            <FooterSocialMedia></FooterSocialMedia>

            <FooterExtraThings></FooterExtraThings>
        </footer>
     );
};

export default Footer;