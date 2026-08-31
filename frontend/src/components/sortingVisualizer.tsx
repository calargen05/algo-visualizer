import type { AlgorithmStep } from "../api/types"

type SortingVisualizerProps = {
  step: AlgorithmStep | null
}

function SortingVisualizer({ step }: SortingVisualizerProps) {

  if (!step) {
    return (
      <div className="sorting-visualizer">
        <p>Generate an array to begin.</p>
      </div>
    )
  }

  const maxValue = Math.max(...step.array)

  return (
    <div className="sorting-visualizer">
      {step.array.map((value, index) => {

        const isActive = step.indices.includes(index)

        return (
          <div
            key={index}
            className={`bar-container ${
              isActive ? step.type : ""
            }`}
          >
            <span className="bar-value">
                {value}
            </span>

            <div
                className="bar"
                style={{
                  height: `${(value / maxValue) * 100}%`,
                }}
              />
          </div>
        )
      })}
    </div>
  )
}

export default SortingVisualizer