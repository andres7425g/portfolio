import React from "react";
import linkedinLogo from "@/public/linkedin.svg";
import gmailLogo from "@/public/gmail.svg";
import { Col } from "react-bootstrap";
import Link from "next/link";

const SocialMedia: React.FC = () => {
  return (
    <Col>
      <Link
        className="mx-1"
        href={"https://www.linkedin.com/in/andres-manrique-garcia-0667b3175/"}
        target="_blank"
      >
        <img src={linkedinLogo.src} alt="linkedin" />
      </Link>
      <Link
        className="mx-1"
        href={
          "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHxHDrlRgTqCfjDFwHvZPpXsGKtFsHSJPfNKzVfZtSjSWlxssgmtGmfwxqvvVMjKrXcldWS"
        }
        target="_blank"
      >
        <img src={gmailLogo.src} alt="linkedin" />
      </Link>
    </Col>
  );
};

export default SocialMedia;
