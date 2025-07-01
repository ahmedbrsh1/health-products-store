const TextInput: React.FC<{
  label: string;
  name: string;
  className?: string;
  type?: string;
}> = (props) => {
  return (
    <div className={props.className}>
      <label className="block" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        type={props.type ? props.type : "text"}
        name={props.name}
        id={props.name}
        className="bg-neutral-200 p-1 rounded w-full"
      />
    </div>
  );
};

export default TextInput;
