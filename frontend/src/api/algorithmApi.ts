import type { AlgorithmResult } from "./types"

// Bubble Sort API Endpoint
export async function runBubbleSort(
    array: number[]
): Promise<AlgorithmResult> {
    const response = await fetch(
        "http://localhost:5000/api/algorithms/sorting/bubble-sort",
        {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                array: array,
            }),
        }
    )

    if (!response.ok) {
        throw new Error("Failed to run Bubble Sort")
    }

    return response.json()
}

// Insertion Sort API Endpoint
export async function runInsertionSort(
    array: number[]
): Promise<AlgorithmResult> {
    const response = await fetch(
        "http://localhost:5000/api/algorithms/sorting/insertion-sort",
        {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                array: array,
            }),
        }
    )

    if (!response.ok) {
        throw new Error("Failed to run Insertion Sort")
    }

    return response.json()
}

// Merge Sort API Endpoint
export async function runMergeSort(
    array: number[]
): Promise<AlgorithmResult> {
    const response = await fetch(
        "http://localhost:5000/api/algorithms/sorting/merge-sort",
        {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                array: array,
            }),
        }
    )

    if (!response.ok) {
        throw new Error("Failed to run Merge Sort")
    }

    return response.json()
}

// Quick Sort API Endpoint
export async function runQuickSort(
    array: number[]
): Promise<AlgorithmResult> {
    const response = await fetch(
        "http://localhost:5000/api/algorithms/sorting/quick-sort",
        {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                array: array,
            }),
        }
    )

    if (!response.ok) {
        throw new Error("Failed to run Quick Sort")
    }

    return response.json()
}


// Heap Sort API Endpoint
export async function runHeapSort(
    array: number[]
): Promise<AlgorithmResult> {
    const response = await fetch(
        "http://localhost:5000/api/algorithms/sorting/heap-sort",
        {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                array: array,
            }),
        }
    )

    if (!response.ok) {
        throw new Error("Failed to run Heap Sort")
    }

    return response.json()
}