import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsappIcon from "@mui/icons-material/Whatsapp";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../styles/Footer.css"
const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <WhatsappIcon />
        <FacebookIcon />
        <TwitterIcon />
      </div>
      <p>©2025 Adutech.com </p>
    </div>
  );
}

export default Footer
