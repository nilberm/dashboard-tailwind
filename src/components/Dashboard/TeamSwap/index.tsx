"use client";

import { useState } from "react";

interface TeamSwapProps {}
export default function TeamSwap(props: TeamSwapProps) {
  const [currentTeam, setCurrentTeam] = useState(1);

  return (
    <div className="flex flex-col gap-4">
      <h3 className="flex justify-start px-4 text-sm">Empresas</h3>

      <div className="flex flex-col gap-2">
        <button
          className="flex items-center gap-2"
          onClick={() => setCurrentTeam(1)}
        >
          <div className="w-3 h-3 rounded-full bg-yellow-300" />
          <div className="flex justify-start items-center">
            <p className="w-28 truncate">Entreprise One</p>
            {currentTeam === 1 && (
              <span className="text-sm italic">(Current)</span>
            )}
          </div>
        </button>

        <button
          className="flex items-center gap-2"
          onClick={() => setCurrentTeam(2)}
        >
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <div className="flex justify-start items-center">
            <p className="w-28 truncate">Entreprise Two</p>
            {currentTeam === 2 && (
              <span className="text-sm italic">(Current)</span>
            )}
          </div>
        </button>
      </div>
    </div>
  );
}
