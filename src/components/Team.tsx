import { useEffect, useState } from "react";
import { iAgents } from "../models/iAgents";
import { getAgents } from "../services/agentService";

export const Team = () => {
  const [agents, setAgents] = useState<iAgents[]>([]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const data = await getAgents();
        setAgents(data);
      } catch (error) {
        console.error("Error fetching agents:", error);
      }
    };
    fetchAgents();
  }, []);

  return (
    <>
      <div className="relative min-h-[60vh]">
        {/* Hero banner */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://img.jamesedition.com/listing_images/2024/10/18/16/15/21/cc045d2a-74da-4de1-a78d-1891315b23cc/je/1900xxs.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[60vh] text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet our Agents
          </h2>
          <p className="text-white/80 max-w-2xl mb-8">
            Our real estate agents offer great expertise, and are there to guide
            you on every step of the way. They will help you across the Iberian
            Peninsula all the way to the sunny beaches of the Florida coast.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
            {agents.map((agent, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="rounded-full w-24 h-24 overflow-hidden">
                  <img
                    src={agent.agentimage}
                    alt={`${agent.firstname} ${agent.surname}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-2 font-medium text-white">
                  {agent.firstname} {agent.surname}
                </p>
              </div>
            ))}
          </div>
          <button className="px-8 py-3 bg-[#d3c196] text-white font-medium rounded hover:bg-[#b8a578] transition-colors mt-8">
            Get in touch now
          </button>
        </div>
      </div>
    </>
  );
};

export default Team;