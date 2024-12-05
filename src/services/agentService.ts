import { iAgents, iAgentsResponse } from "../models/iAgents";
import { get } from "./serviceBase";

const AGENT_URL = import.meta.env.VITE_AGENT_URL;

export const getAgents = async (): Promise<iAgents[]> => {
  const response = await get<iAgentsResponse>(`${AGENT_URL}/agents`);
  return response.data;
};