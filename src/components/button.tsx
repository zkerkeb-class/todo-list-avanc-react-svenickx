interface IProps {
  label: string;
  onClick: Function;
  style?: string;
}

export function Button(props: IProps) {
  return (
    <button
      onClick={() => props.onClick()}
      className={`border p-2 rounded ${props.style}`}
    >
      {props.label}
    </button>
  );
}
