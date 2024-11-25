'use client'
import React from 'react';
import { useTrafficLightMachine } from '../hooks/useTrafficLightMachine';

export function TrafficLight() {
  const { state, isLoading } = useTrafficLightMachine();

  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-gray-200 rounded-lg">
      <div className="text-2xl font-bold">Current State: {state}</div>
      {isLoading && <div className="text-blue-500">Transitioning...</div>}
      <div className="flex flex-col space-y-2">
        <div className={`w-16 h-16 rounded-full ${state === 'Red' ? 'bg-red-600' : 'bg-red-200'}`} />
        <div className={`w-16 h-16 rounded-full ${state === 'Yellow' ? 'bg-yellow-400' : 'bg-yellow-200'}`} />
        <div className={`w-16 h-16 rounded-full ${state === 'Green' ? 'bg-green-500' : 'bg-green-200'}`} />
      </div>
    </div>
  );
}

