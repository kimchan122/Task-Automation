import React, { useEffect, useState } from "react";

const TermsOfService = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/terms-of-service.txt")
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div>
      <h1>Terms of Service</h1>
      <pre>{content}</pre>
    </div>
  );
};

export default TermsOfService;
