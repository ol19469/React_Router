import { useParams } from "react-router-dom";
export default function Colors() {
  const { color } = useParams();
  const style = {
    backgroundColor: color,
    color: "white",
  };
  return (
    <div style={style}>
      <h1>{color}</h1>
    </div>
  );
}
