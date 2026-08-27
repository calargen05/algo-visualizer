export type AlgorithmStep = {
    type: "compare" | "swap"
    indices: number[]
    array: number[]
}

export type AlgorithmResult = {
    algorithm: string
    initialArray: number[]
    steps: AlgorithmStep[]
    result: number[]
}