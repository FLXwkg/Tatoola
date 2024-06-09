import { Button } from "@nextui-org/react";
import { useState } from "react";

function WorkplaceForm({onChange}) {
  const [ selected, setSelected ] = useState("indé")

  const options = [
    { value: "plus-5", label: "Dans un studio (5 artistes et plus)" },
    { value: "minus-5", label: "Dans un studio (moins de 5 artistes)" },
    { value: "indé", label: "Indépendant" },
    { value: "indé-art", label: "Dans un studio avec des artistes indépendants" },
    { value: "autre", label: "Autre" },
  ];

  return (
    <div className="flex flex-col justify-center items-start px-80 pt-40">
      <h1 className="text-3xl pb-10">Où travaillez-vous ?</h1>
      <div className="flex flex-col w-2/3 gap-3">
        {options.map((option) => (
          <Button
            variant="ghost"
            key={option.value}
            onClick={() => setSelected(option.value)}
            className={`text-left px-4 ${
              selected === option.value
                ? "bg-zinc-900 text-zinc-50"
                : "bg-zinc-50 text-zinc-900 border-zinc-900"
            }`}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default WorkplaceForm;