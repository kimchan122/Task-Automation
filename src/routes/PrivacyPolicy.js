import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  const [content, setContent] = React.useState("");

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/privacy-policy.txt`)
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div>
      <h1>Privacy Policy</h1>
      <pre>{content}</pre>
    </div>
  );
};

export default PrivacyPolicy;
