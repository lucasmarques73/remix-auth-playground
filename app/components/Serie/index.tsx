import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Exercise } from "../Exercise";

type SerieProps = {
  number: number;
};

enum serieNameMap {
  A = 1,
  B = 2,
  C = 3,
  D = 4,
  E = 5,
  F = 6,
  G = 7,
}

export function Serie({ number }: SerieProps) {
  const [qtdExercise, setQtdExercise] = useState(1);
  return (
    <div>
      <h2 className="text-sm font-medium text-gray-900">
        Série {serieNameMap[number]}
      </h2>
      <div className="px-4 py-3 sm:px-6 ">
        {[...Array(qtdExercise)].map(() => {
          return <Exercise key={uuidv4()} />;
        })}
        <hr />
      </div>
      <div className="px-4 pt-3 text-right sm:px-6 ">
        <button
          onClick={(e) => {
            e.preventDefault();
            setQtdExercise(qtdExercise + 1);
          }}
          className="inline-flex ml-2 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-500 hover:text-gray-900 border-sky-700"
        >
          Adicionar Exercício
        </button>
      </div>
    </div>
  );
}
