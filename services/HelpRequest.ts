export type HelpRequest = {
    id: string;
    name: string;
    task: string;
    time: string;
  };
  
  const MOCK_DATA: HelpRequest[] = [
    {
      id: '1',
      name: 'Alice',
      task: 'Need help moving house this weekend',
      time: '2 hours ago',
    },
    {
      id: '2',
      name: 'Bob',
      task: 'Looking for someone to review my resume',
      time: '5 hours ago',
    },
    {
      id: '3',
      name: 'Charlie',
      task: 'Anyone free to water my plants next week?',
      time: '1 day ago',
    },
  ];
  
  export const fetchHelpRequests = async (): Promise<HelpRequest[]> => {
    // simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return MOCK_DATA;
  };
  
  export const offerHelp = async (id: string) => {
    console.log(`Offer help to request ID: ${id}`);
    return true;
  };
  