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