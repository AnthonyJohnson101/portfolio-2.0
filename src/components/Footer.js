import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

const styles = {
    foot: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "grey",
    
    },
    links: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    item: {
        marginLeft: "5%",
        marginRight: "5%"
    }
  };
  

export default function Footer() {
    return(
    <footer style={styles.foot}>
        <div style={styles.links}>
            <a href="https://github.com/AnthonyJohnson101">
                <FontAwesomeIcon icon={faGithubSquare} size="2x" />
            </a>
            <a style={styles.item} href="https://www.linkedin.com/in/anthony-johnson-3602a41b2/">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="mailto:tonybologna123@outlook.com">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
        </div>
    </footer>
    )
};