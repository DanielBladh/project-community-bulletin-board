import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../styles/styles.css"

const SocialMediaShareButton = ({ platform, shareContent }) => {
  const handleShare = () => {
    let shareUrl = "";

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          shareContent
        )}`;
        break;
      case "linkedin":
        // Ensure that shareContent is an object with a url property
        const linkedinUrl = shareContent.url || "https://example.com";
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          linkedinUrl
        )}`;
        break;
      default:
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "noopener noreferrer");
    }
  };

  const getIcon = (platform) => {
    switch (platform) {
      case "twitter":
        return <FontAwesomeIcon icon={faTwitter} className="social-icon" />;
      case "linkedin":
        return <FontAwesomeIcon icon={faLinkedin} className="social-icon" />;
      default:
        return null;
    }
  };

  return (
    <button onClick={handleShare} className="icon-button">
      {getIcon(platform)}
    </button>
  );
};

export default SocialMediaShareButton;
