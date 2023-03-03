import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import useSupabaseDb from './hooks/useSupabaseDb';

function App() {
  const [fact, setFact] = useState<string | null>(null);
  const supabase = useSupabaseDb();

  async function getFactOfDay(date: Date = new Date()) {
    const { data } = await supabase
      .from('factsOfTheDay')
      .select('date, fact (text)')
      .eq('date', new Date(date).toISOString().split('T')[0])
      .limit(1)
      .maybeSingle();

    console.log(data?.fact?.text);
  }

  useEffect(() => {
    getFactOfDay(new Date()); //.then(c => console.log(c));
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h2>Fact of the Day</h2>
        {fact && <p>{fact}</p>}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
