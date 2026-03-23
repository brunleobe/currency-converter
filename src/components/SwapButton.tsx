type Props = {
  onClick: () => void;
};

export default function SwapButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="bg-gray-200 px-3 py-1 rounded"
    >
      to
    </button>
  );
}