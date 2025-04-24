import { useEffect, useState } from 'react';
import { fetchHelpRequests, HelpRequest, offerHelp } from '../services/HelpRequest';

export default function useHelpRequests() {
  const [data, setData] = useState<HelpRequest[]>([]);
  const [loading, setLoading] = useState(true);

  const loadRequests = async () => {
    setLoading(true);
    const result = await fetchHelpRequests();
    setData(result);
    setLoading(false);
  };

  const handleOfferHelp = async (id: string) => {
    await offerHelp(id);
    alert('Thank you for offering help!');
  };

  useEffect(() => {
    loadRequests();
  }, []);

  return { data, loading, refresh: loadRequests, offerHelp: handleOfferHelp };
}
