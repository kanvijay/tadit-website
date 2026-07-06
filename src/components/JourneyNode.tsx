type JourneyNodeProps = {
  index: number;
  isActive: boolean;
  isComplete: boolean;
  label: string;
  onSelect: () => void;
  subtext: string;
  text: string;
};

function JourneyNode({ index, isActive, isComplete, label, onSelect, subtext, text }: JourneyNodeProps) {
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
      <div className="qj-node-popover" role="tooltip">
        <b>{text}</b>
        <p>{subtext}</p>
      </div>
    </button>
  );
}

export default JourneyNode;
