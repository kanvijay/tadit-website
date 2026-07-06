type JourneyNodeProps = {
  index: number;
  isActive: boolean;
  isComplete: boolean;
  label: string;
  onSelect: () => void;
};

function JourneyNode({ index, isActive, isComplete, label, onSelect }: JourneyNodeProps) {
  return (
    <button
      className={`qj-node${isActive ? " active" : ""}${isComplete ? " complete" : ""}`}
      type="button"
      onClick={onSelect}
      aria-current={isActive ? "step" : undefined}
      aria-label={`View journey step ${index + 1}: ${label}`}
    >
      <span>{String(index + 1).padStart(2, "0")}</span>
      <strong>{label}</strong>
    </button>
  );
}

export default JourneyNode;
