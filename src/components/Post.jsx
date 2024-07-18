const names = ["Ain Mutaqorrobin", "Robin Kacak"];

export default function Post(props) {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <div>
      <p>{props.author}</p>
      <p>{props.body}</p>
    </div>
  );
}
