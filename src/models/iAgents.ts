export interface iAgents {
    id: string;
    firstname: string;
    surname: string;
    agentimage: string;
    email: string;
  }

export interface iAgentsResponse {
    success: boolean;
    message: string;
    data: iAgents[];
  }