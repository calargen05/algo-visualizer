export async function runBubbleSort(array: number[]) {
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