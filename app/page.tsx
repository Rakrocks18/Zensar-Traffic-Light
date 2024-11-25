
import { TrafficLight } from '../components/TrafficLight';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Traffic Light State Machine</h1>
      <TrafficLight />
    </main>
  );
}

