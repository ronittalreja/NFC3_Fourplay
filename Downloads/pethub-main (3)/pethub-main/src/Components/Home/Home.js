import React, { useEffect } from "react";
import HomeLandingContainer from "./HomeLandingContainer";
import CardBelowHome from "./CardBelowHome";
import PlanningToAdoptAPet from "./PlanningToAdoptAPet";

const Home = () => {
  useEffect(() => {
    // Check if the script already exists
    if (!document.querySelector(`script[src="https://www.chatbase.co/embed.min.js"]`)) {
      // Dynamically create the first script element
      const embeddedChatbotConfigScript = document.createElement('script');
      embeddedChatbotConfigScript.type = "text/javascript";
      embeddedChatbotConfigScript.innerHTML = `
        window.embeddedChatbotConfig = {
          chatbotId: "VTXgn4NQqP93Tfqw7Qs0F",
          domain: "www.chatbase.co"
        };
      `;
      document.body.appendChild(embeddedChatbotConfigScript);

      // Dynamically create the second script element
      const embedScript = document.createElement('script');
      embedScript.src = "https://www.chatbase.co/embed.min.js";
      embedScript.defer = true;
      embedScript.setAttribute("chatbotId", "VTXgn4NQqP93Tfqw7Qs0F");
      embedScript.setAttribute("domain", "www.chatbase.co");
      document.body.appendChild(embedScript);

      // Clean up script elements on component unmount
      return () => {
        document.body.removeChild(embeddedChatbotConfigScript);
        document.body.removeChild(embedScript);
      };
    }
  }, []); // Empty dependency array to run effect only once

  return (
    <>
      <HomeLandingContainer />
      <CardBelowHome />
      <PlanningToAdoptAPet />

      {/* Chatbot iframe */}
      <iframe
        src="https://www.chatbase.co/chatbot-iframe/VTXgn4NQqP93Tfqw7Qs0F"
        width="100%"
        style={{ height: '100%', minHeight: '700px' }}
        frameBorder="0"
      ></iframe>
    </>
  );
};

export default Home;
