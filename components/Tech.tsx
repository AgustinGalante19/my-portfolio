import { asset } from "$fresh/runtime.ts";

interface Props {
  techName: string;
}

const Tech = ({ techName }: Props) => {
  return (
    <li>
      <img
        src={asset(`/tech/${techName.toLowerCase()}.svg`)}
        alt={`${techName} logo`}
        width={40}
        height="auto"
      />
    </li>
  );
};

export default Tech;
