import { useEffect, useState } from 'react';
import useSupabaseDb from './hooks/useSupabaseDb';
import { formatDateYmd } from '@/utils/date';
import useColorScheme from '@/hooks/useColorScheme';
import logo from './assets/logo.png';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import Links from '@/components/Links';

function App() {
  const [fact, setFact] = useState<string | null>(null);

  const supabase = useSupabaseDb();
  const { setColorScheme } = useColorScheme();

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
    <main className="mx-auto min-h-screen max-w-2xl p-4">
      <h1 className="mb-4 text-center text-4xl">Daniel Newton</h1>

      <div className="grid grid-cols-1 gap-2 landscape:grid-cols-3">
        <div className="landscape:col-span-3">
          <img
            src={logo}
            alt="a man sitting at a desk using a computer"
            className="rounded"
          />
        </div>

        <div className="flex flex-col justify-center rounded border-2 border-stone-700 p-4 text-center">
          <h2 className="text-2xl">Fact of the Day</h2>
          {fact && <p>{fact}</p>}
        </div>

        <div className="flex grid flex-col justify-center gap-2 rounded border-2 border-stone-700 p-4 landscape:col-span-2">
          <p>
            Hi, I'm Daniel! I am a software developer with 6 years of experience
            specializing in frontend web development who is passionate about
            creating high-quality user experiences.
          </p>
          <p>
            Thank you for visiting, and I hope you enjoy browsing through my
            work!
          </p>
          <Links />
        </div>
      </div>

      {/*<button onClick={() => setColorScheme('light')}>Light</button>*/}
      {/*<button onClick={() => setColorScheme('dark')}>Dark</button>*/}
      {/*<button onClick={() => setColorScheme(null)}>Reset</button>*/}
    </main>
  );
}

export default App;
