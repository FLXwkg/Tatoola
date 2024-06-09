import { Input } from "@nextui-org/react";

function SiretForm({ data }) {
  return (
    <div className="flex flex-col justify-center items-start px-80 pt-40 pb-24">
      <h1 className="text-3xl pb-10">Entrez votre numéro de SIRET</h1>
      <Input
          placeholder='Votre numéro de siret'
          value={data}
          variant='bordered'
          classNames={{
            input: [
              "bg-zinc-50",
              "text-zinc-900",
              "placeholder:text-zinc-400",
            ],
            inputWrapper : [
              "border-zinc-900"
            ]
          }}
          required
        />
    </div>
  );
}

export default SiretForm;