import type { AlgorithmStep } from "../api/types"

type SortingVisualizerProps = {
  step: AlgorithmStep | null
}

function SortingVisualizer({ step }: SortingVisualizerProps) {

  if (!step) {
    return (
      <div className="sorting-visualizer">
        <p>Run an algorithm to begin.</p>
      </div>
    )
  }

  return (
    <div className="sorting-visualizer">
      {step.array.map((value, index) => (
        <div
          key={index}
          className="bar"
          style={{
            height: `${value * 40}px`,
          }}
        >
          <span>{value}</span>
        </div>
      ))}
    </div>
  )
}

export default SortingVisualizer