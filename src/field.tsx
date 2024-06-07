interface Field {
  list: string[];
}

const Field = (props: Field) => {
  return (
    <ul>
      {props.list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};
export default Field;
