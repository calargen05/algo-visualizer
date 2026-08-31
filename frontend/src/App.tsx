import { useState, useEffect } from 'react'
import { runBubbleSort } from './api/algorithmApi'
import type { AlgorithmStep } from './api/types'
import SortingVisualizer from './components/sortingVisualizer'
import { generateRandomArray } from './utils/arrayUtils'
import './App.css'

type ResizeDirection = 'left' | 'right' | null

function App() {

  // RESIZING LOGIC
  const [leftWidth, setLeftWidth] = useState(25)
  const [rightWidth, setRightWidth] = useState(25)
  const [resizing, setResizing] = useState<ResizeDirection>(null)

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (resizing === 'left') {
        const newWidth = (event.clientX / window.innerWidth) * 100

        if (newWidth >= 10 && newWidth <= 60) {
          setLeftWidth(newWidth)
        }
      }

      if (resizing === 'right') {
        const newWidth =
          ((window.innerWidth - event.clientX) / window.innerWidth) * 100

        if (newWidth >= 10 && newWidth <= 60) {
          setRightWidth(newWidth)
        }
      }
    }

    const handlePointerUp = () => {
      setResizing(null)
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp)
    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
    }
  }, [resizing])


  // ALGORITHM API LOGIC
  const [steps, setSteps] = useState<AlgorithmStep[]>([])
  const [currentStep, setCurrentStep] = useState(0)

  const currentStepData = steps[currentStep] ?? null

  const handleBubbleSort = async () => {
    const result = await runBubbleSort(array)

    setSteps(result.steps)
    setCurrentStep(0)
  }


  // PLAY BUTTON/SPEED/SORTING ARRAY LOGIC
  const [playing, setPlaying] = useState(false)
  const [speed, setSpeed] = useState(500)
  const [arraySize, setArraySize] = useState(10)
  const [array, setArray] = useState<number[]>(
    generateRandomArray(10)
  )
  useEffect(() => {
    if (!playing || steps.length === 0) {
      return
    }

    const interval = setInterval(() => {
      setCurrentStep((prevStep) => {
        if (prevStep >= steps.length - 1) {
          setPlaying(false)
          return prevStep
        }
        return prevStep + 1
      })
    }, speed)
    return () => clearInterval(interval)
  }, [playing, steps.length, speed])
  

return (
    <>
      <div className="container-fluid vh-100 d-flex flex-column p-0 text-light">

        {/* NAVBAR */}
        <div className="navbar navbar-expand-lg text-light" id="nav">
          <h4 className="ps-4">Algorithm Visualizer</h4>
        </div>

        {/* MAIN CONTENT */} 
        <div id="main" className="d-flex flex-grow-1">
            {/* Algorithms */}
            <div
              id="algorithms"
              className="p-1 position-relative border-end border-light"
              style={{ width: `${leftWidth}%` }}
            >
              <div className="text-center">
                Algorithms
              </div>
              <div className="accordion accordion-flush text-light" id="algorithmAccordion">
                <div id="accordItem" className="accordion-item border border-0">
                  <h2 className="accordion-header">
                    <button id="accordBtn" className="accordion-button border border-0 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      Sorting
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse">
                    <div className="accordion-body text-light">
                      <ul id="algsList" className="list-group list-group-flush">
                        <li id="algsList" className="list-group-item ps-5"><a href="#" className="d-block w-100">Bubble Sort</a></li>
                        <li id="algsList" className="list-group-item ps-5"><a href="#" className="d-block w-100">Insertion Sort</a></li>
                        <li id="algsList" className="list-group-item ps-5"><a href="#" className="d-block w-100">Merge Sort</a></li>
                        <li id="algsList" className="list-group-item ps-5"><a href="#" className="d-block w-100">Quick Sort</a></li>
                        <li id="algsList" className="list-group-item ps-5"><a href="#" className="d-block w-100">Heap Sort</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div id="accordItem" className="accordion-item">
                  <h2 className="accordion-header">
                    <button id="accordBtn" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      Graphs
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse">
                    <div className="accordion-body text-light">
                      <ul id="algsList" className="list-group list-group-flush">
                        <li id="algsList" className="list-group-item ps-5"><a href="#" className="d-block w-100">Depth-First Search</a></li>
                        <li id="algsList" className="list-group-item ps-5"><a href="#" className="d-block w-100">Breadth-First Search</a></li>
                        <li id="algsList" className="list-group-item ps-5"><a href="#" className="d-block w-100">A*</a></li>
                        <li id="algsList" className="list-group-item ps-5"><a href="#" className="d-block w-100">Dijkstra's Algorithm</a></li>
                        <li id="algsList" className="list-group-item ps-5"><a href="#" className="d-block w-100">Prim</a></li>
                        <li id="algsList" className="list-group-item ps-5"><a href="#" className="d-block w-100">Kruskal</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div id="accordItem" className="accordion-item">
                  <h2 className="accordion-header">
                    <button id="accordBtn" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      Trees
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse">
                    <div className="accordion-body text-light">
                      <ul id="algsList" className="list-group list-group-flush">
                        <li id="algsList" className="list-group-item ps-5"><a href="#" className="d-block w-100">BST</a></li>
                        <li id="algsList" className="list-group-item ps-5"><a href="#" className="d-block w-100">AVL</a></li>
                        <li id="algsList" className="list-group-item ps-5"><a href="#" className="d-block w-100">B-Trees</a></li>
                        <li id="algsList" className="list-group-item ps-5"><a href="#" className="d-block w-100">Heap</a></li>
                        <li id="algsList" className="list-group-item ps-5"><a href="#" className="d-block w-100">Pre-order Traversal</a></li>
                        <li id="algsList" className="list-group-item ps-5"><a href="#" className="d-block w-100">Post-order Traversal</a></li>
                        <li id="algsList" className="list-group-item ps-5"><a href="#" className="d-block w-100">In-order Traversal</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="resize-handle right"
                onPointerDown={() => setResizing('left')}
              />
            </div>

            {/* Visualizer */}
            <div
              id="visualizer"
              className="p-1 d-flex flex-column"
              style={{
                width: `${100 - leftWidth - rightWidth}%`,
              }}
            >
              <div className="text-center">
                Visualizer
              </div>
              
              <SortingVisualizer step={currentStepData} />
              <div className="visualizer-controls">
                <button
                onClick={handleBubbleSort}
                className="btn btn-primary"
                >
                  Run Bubble Sort
                </button>
                <button
                  onClick={() => {
                    if (currentStep < steps.length - 1) {
                      setCurrentStep(currentStep + 1)
                    }
                  }}
                  className="btn btn-secondary ms-2"
                >
                  Next Step
                </button>
                <button
                  onClick={() => setPlaying(true)}
                  disabled={playing || steps.length === 0}
                  className="btn btn-success"
                >
                  Play
                </button>

                <button
                  onClick={() => setPlaying(false)}
                  disabled={!playing}
                  className="btn btn-danger"
                >
                  Pause
                </button>
                <button
                  onClick={() => {
                      setArray(generateRandomArray(arraySize))
                      setSteps([])
                      setCurrentStep(0)
                      setPlaying(false)
                  }}
                  className="btn btn-primary"
                >
                  Generate Array
                </button>
                <div className="speed-control">
                  <label htmlFor="speed">
                    Speed
                  </label>
                  <input
                    id="speed"
                    type="range"
                    min="100"
                    max="1000"
                    step="100"
                    value={speed}
                    onChange={(e) => setSpeed(Number(e.target.value))}
                  />
                  <span>
                    {speed <= 300
                      ? "Fast"
                      : speed <= 700
                      ? "Medium"
                      : "Slow"}
                  </span>
                </div>
                <div className="array-size-control">

                  <label htmlFor="array-size">
                      Array Size: {arraySize}
                  </label>

                  <input
                    id="array-size"
                    type="range"
                    min="5"
                    max="100"
                    value={arraySize}
                    onChange={(e) => {
                        setArraySize(Number(e.target.value))
                    }}
                  />
                </div>
              </div>
              
            </div>

            {/* Code */}
            <div
              id="code"
              className="p-1 position-relative border-start border-light"
              style={{ width: `${rightWidth}%` }}
            >
              <div className="text-center">
                Code
              </div>

              <div
                className="resize-handle left"
                onPointerDown={() => setResizing('right')}
              />
            </div>
        </div>
      </div>
    </>
  )
}

export default App
