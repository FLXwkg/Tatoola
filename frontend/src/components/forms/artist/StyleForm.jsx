import { Textarea } from "@nextui-org/react";

function StyleForm({onChange}) {
  return (
    <div className="flex flex-col justify-center items-start px-80 pt-40 pb-24">
      <h1 className="text-3xl pb-10">Quel style avez-vous ?</h1>
      <Textarea
        minRows={5}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  );
}

export default StyleForm;