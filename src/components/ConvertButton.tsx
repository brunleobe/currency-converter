type Props = {
  onClick: () => void;
  loading: boolean;
};

export default function ConvertButton({ onClick, loading }: Props) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-500 text-white p-2 rounded mt-3"
    >
      {loading ? "Converting..." : "Convert"}
    </button>
  );
}