import { useEffect, useState } from 'react';
import useSupabaseDb from './hooks/useSupabaseDb';
import { formatDateYmd } from '@/utils/date';

function App() {
  const [fact, setFact] = useState<string | null>(null);
  const supabase = useSupabaseDb();

  async function getFactOfDay(date: Date = new Date()) {
    const { data } = await supabase
      .from('factsOfTheDay')
      .select('date, fact (text)')
      .eq('date', formatDateYmd(date))
      .limit(1)
      .maybeSingle();

    setFact((data?.fact as { text: string }).text);
  }

  useEffect(() => {
    getFactOfDay().catch(console.error);
  }, []);

  return (
    <div>
      <h2>Fact of the Day</h2>
      {fact && <p>{fact}</p>}
    </div>
  );
}

export default App;
