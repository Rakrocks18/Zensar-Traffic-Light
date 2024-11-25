'use client'
import { useState, useCallback, useEffect } from 'react';

type State = 'Green' | 'Yellow' | 'Red';

interface StateMachine {
  state: State;
  transition: () => void;
  isLoading: boolean;
}

const TRANSITION_TIMES = {
  Green: 5000,
  Yellow: 2000,
  Red: 5000,
};

// Simulated API call
const simulateApiCall = () => new Promise<void>(resolve => setTimeout(resolve, 1000));

export function useTrafficLightMachine(): StateMachine {
  const [state, setState] = useState<State>('Red');
  const [isLoading, setIsLoading] = useState(false);

  const transition = useCallback(async () => {
    setIsLoading(true);
    await simulateApiCall(); // Simulate API call before state transition
    setIsLoading(false);

    setState((currentState) => {
      switch (currentState) {
        case 'Red':
          return 'Green';
        case 'Green':
          return 'Yellow';
        case 'Yellow':
          return 'Red';
        default:
          return currentState;
      }
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(transition, TRANSITION_TIMES[state]);
    return () => clearTimeout(timer);
  }, [state, transition]);

  return { state, transition, isLoading };
}

