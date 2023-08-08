
export default function Square({ value, onClick }) {
  return (
    <>
      <div onClick={onClick} className="square">
        {value}
      </div>
    </>
  );
}
