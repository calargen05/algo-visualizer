# Algorithm Visualizer

An interactive full-stack web application for visualizing sorting algorithms step by step.

Algorithm Visualizer is designed to make sorting algorithms easier to understand by displaying comparisons, swaps, shifts, and other operations as animated changes to an array. The application uses a **React + TypeScript** frontend and a **Flask REST API** backend to separate visualization logic from algorithm execution.

## Features

* Interactive visualization of sorting algorithms
* Step-by-step animation of comparisons and array operations
* Play and pause visualization controls
* Adjustable animation speed
* Adjustable array size
* Random array generation
* Dynamic bar heights and value labels
* Resizable application panels
* REST API-based algorithm execution
* Automated backend testing with `pytest`
* Continuous integration with GitHub Actions

## Sorting Algorithms

The application currently supports:

* Bubble Sort
* Insertion Sort
* Merge Sort
* Quick Sort
* Heap Sort

Additional algorithms and data structures may be added in the future.

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Bootstrap
* HTML/CSS

### Backend

* Python
* Flask
* Flask-CORS

### Testing & Development

* pytest
* Git
* GitHub Actions
* REST APIs

## Architecture

The application separates algorithm execution from visualization.

```text
React / TypeScript Frontend
          |
          | HTTP Request
          v
     Flask REST API
          |
          v
   Sorting Algorithm
          |
          | JSON
          v
  Visualization Steps
          |
          v
     React Animation
```

When an algorithm is selected, the frontend sends an array to the Flask backend. The backend executes the sorting algorithm while recording each significant operation.

Instead of returning only the sorted array, the API returns the original array, a sequence of visualization steps, and the final sorted result.

Example response:

```json
{
    "algorithm": "bubble-sort",
    "initialArray": [5, 3, 8, 1, 2],
    "steps": [
        {
            "type": "compare",
            "indices": [0, 1],
            "array": [5, 3, 8, 1, 2]
        },
        {
            "type": "swap",
            "indices": [0, 1],
            "array": [3, 5, 8, 1, 2]
        }
    ],
    "result": [1, 2, 3, 5, 8]
}
```

The frontend processes these steps sequentially to animate the algorithm.

## Visualization Step Types

Different algorithms generate different types of operations.

| Step        | Description                                       |
| ----------- | ------------------------------------------------- |
| `compare`   | Two elements are being compared                   |
| `swap`      | Two elements exchange positions                   |
| `shift`     | An element is shifted to another position         |
| `insert`    | An element is inserted into its correct position  |
| `overwrite` | An array position is overwritten with a new value |

Because every step includes a snapshot of the array, the frontend can reconstruct the state of the algorithm at any point during execution.

## Getting Started

### Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Python 3
* pip
* Git

## Installation

Clone the repository:

```bash
git clone https://github.com/calargen05/algo-visualizer.git
cd algo-visualizer
```

### Frontend Setup

Navigate to the frontend directory and install the dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

The frontend will typically be available at:

```text
http://localhost:5173
```

### Backend Setup

Navigate to the backend directory.

Create a virtual environment:

```bash
python -m venv .venv
```

Activate it on Windows:

```bash
.venv\Scripts\activate
```

On macOS/Linux:

```bash
source .venv/bin/activate
```

Install the Python dependencies:

```bash
pip install -r requirements.txt
```

Start the Flask backend:

```bash
flask run
```

The API will typically run at:

```text
http://localhost:5000
```

## REST API

Sorting algorithms are exposed through Flask API endpoints.

Example:

```http
POST /api/algorithms/sorting/bubble-sort
```

The frontend sends an array to the endpoint and receives the sequence of steps required to visualize the algorithm.

Other sorting algorithms follow the same API structure:

```text
/api/algorithms/sorting/bubble-sort
/api/algorithms/sorting/insertion-sort
/api/algorithms/sorting/merge-sort
/api/algorithms/sorting/quick-sort
/api/algorithms/sorting/heap-sort
```

This design allows the visualization layer to remain mostly independent from the implementation of each algorithm.

## Testing

Backend algorithms and API behavior are tested using `pytest`.

Run the backend test suite with:

```bash
python -m pytest
```

Automated tests are also executed through **GitHub Actions** when changes are pushed to the repository.

## Project Goals

This project was built to explore both **data structures and algorithms** and **full-stack software development**.

Some of the primary goals include:

* Visualizing the internal operations of common algorithms
* Designing reusable REST API endpoints
* Separating frontend and backend responsibilities
* Building interactive UI controls with React
* Applying automated testing and continuous integration
* Expanding the application to support additional algorithm categories

## Future Improvements

Potential additions include:

* Additional sorting algorithms
* Searching algorithms
* Graph traversal algorithms
* Pathfinding algorithms
* Binary tree and graph visualizations
* Step-forward and step-backward controls
* Algorithm pseudocode highlighting
* Runtime and space complexity information
* Custom user-generated arrays
* Cloud deployment

## Author

**Colin Largen**

Computer Science student at Florida State University

* GitHub: [@calargen05](https://github.com/calargen05)

## License

This project is intended for educational and portfolio purposes.
