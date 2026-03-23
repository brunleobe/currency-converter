type Props = {
  onClick: () => void;
  loading: boolean;
};

export default function ConvertButton({ onClick, loading }: Props) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-green-500 text-white p-4 rounded mt-3 disabled:bg-gray-400"
    >
      {loading ? "Converting..." : "Convert"}
    </button>
  );
}