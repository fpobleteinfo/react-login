import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from "@fortawesome/free-brands-svg-icons";


export const SocialButton = ({ github, facebook, discord }) => {
  return <>
  
  <div className="redes-sociales">
  {github && <FontAwesomeIcon icon={faGithub} size="3x" />}
  {facebook && <FontAwesomeIcon icon={faFacebook} size="3x" />}
  {discord && <FontAwesomeIcon icon={faDiscord} size="3x" />}
  </div>

  </>;
};
