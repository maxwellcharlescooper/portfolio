import { useEffect } from "react";

// const useOnClickOutside = (ref, handler) => {
//   // this hook runs the handler code when there is a click event outside of the given ref
//   useEffect(() => {
//     const listener = event => {
//       if (!ref.current || ref.current.contains(event.target)) {
//         return;
//       }

//       handler(event);
//     };

//     document.addEventListener("mousedown", listener);

//     // cleanup function for useEffect to remove listener when component unmounts
//     return () => {
//       document.removeEventListener("mousedown", listener);
//     };
//   }, [ref, handler]);
// };

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const moonPhases = {
  "new moon": 0x1f311,
  "waxing crescent": 0x1f312,
  "first quarter": 0x1f313,
  "waxing gibbous": 0x1f314,
  "full moon": 0x1f315,
  "waning gibbous": 0x1f316,
  "last quarter": 0x1f317,
  "waning crescent": 0x1f318
};

type PhaseObject = {
  string: string;
  emoji: number;
};

function formatMoonPhase(phase: number) {
  if (phase < 0 || phase > 1) {
    throw new Error("Moon Phase not between 0 and 1");
  }
  const index = Math.round(phase * (Object.keys(moonPhases).length - 1)); // multiply by 7 so the index is 0 when the phase is 0 and 7 when the phase is 1

  const string = Object.keys(moonPhases)[index];
  const emoji = Object.values(moonPhases)[index];
  const response: PhaseObject = { string, emoji };
  return response;
}

function getDaysUntilNextFullMoon(phase: number): string {
  if (phase < 0.5) {
    return `around ${Math.round((0.5 - phase) / 0.03389)} day-a-roonies!`;
  }
  if (phase > 0.5) {
    return `around ${Math.round((1.5 - phase) / 0.03389)} day-a-roonies!`;
  }
  return 'it\'s the full moon right now! so next one in a month i guess';
}

const Functions = { sleep, formatMoonPhase, getDaysUntilNextFullMoon };

export default Functions;
