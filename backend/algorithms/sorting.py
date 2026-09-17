def bubble_sort(array):
    orig_array = array
    array = array.copy()
    steps = []

    for i in range(len(array)):
        swapped = False
        for j in range(len(array) - i - 1):

            # Tell fronted which elements are being compared
            steps.append({
                'type' : 'compare',
                'indices' : [j, j + 1],
                'array' : array.copy()
            })

            if array[j] > array[j + 1]:
                array[j], array[j + 1] = array[j + 1], array[j]
                swapped = True

                # Tell fronted a swap happened
                steps.append({
                    'type' : 'swap',
                    'indices' : [j, j + 1],
                    'array' : array.copy()
                })

        if not swapped:
            break

    return {
        "algorithm": "bubble-sort",
        "initialArray": orig_array,
        "steps": steps,
        "result": array
    }


def insertion_sort(array):
    orig_array = array.copy()
    array = array.copy()
    steps = []

    for i in range(1, len(array)):
        key = array[i]
        j = i - 1

        while j >= 0 and key < array[j]:

            # Tell frontend which elements are being compared
            steps.append({
                'type': 'compare',
                'indices': [j, j + 1],
                'array': array.copy()
            })

            # Shift larger element to the right
            array[j + 1] = array[j]

            steps.append({
                'type': 'shift',
                'indices': [j, j + 1],
                'array': array.copy()
            })

            j -= 1

        # Insert key into its correct position
        array[j + 1] = key

        steps.append({
            'type': 'insert',
            'indices': [j + 1],
            'array': array.copy()
        })

    return {
        "algorithm": "insertion-sort",
        "initialArray": orig_array,
        "steps": steps,
        "result": array
    }


def merge_sort(array):
    orig_array = array.copy()
    array = array.copy()
    steps = []

    def merge(left, mid, right):
        left_half = array[left:mid + 1]
        right_half = array[mid + 1:right + 1]

        i = 0
        j = 0
        k = left

        while i < len(left_half) and j < len(right_half):
            # Tell frontend which original-array positions
            # are being compared
            steps.append({
                'type': 'compare',
                'indices': [left + i, mid + 1 + j],
                'array': array.copy()
            })

            if left_half[i] <= right_half[j]:
                array[k] = left_half[i]
                i += 1
            else:
                array[k] = right_half[j]
                j += 1

            # Tell frontend that a value was written
            # into the merged section
            steps.append({
                'type': 'overwrite',
                'indices': [k],
                'array': array.copy()
            })

            k += 1

        # Copy remaining elements from left half
        while i < len(left_half):
            array[k] = left_half[i]

            steps.append({
                'type': 'overwrite',
                'indices': [k],
                'array': array.copy()
            })

            i += 1
            k += 1

        # Copy remaining elements from right half
        while j < len(right_half):
            array[k] = right_half[j]

            steps.append({
                'type': 'overwrite',
                'indices': [k],
                'array': array.copy()
            })

            j += 1
            k += 1

    def sort(left, right):
        if left >= right:
            return

        mid = (left + right) // 2

        sort(left, mid)
        sort(mid + 1, right)

        merge(left, mid, right)

    sort(0, len(array) - 1)

    return {
        "algorithm": "merge-sort",
        "initialArray": orig_array,
        "steps": steps,
        "result": array
    }


def quick_sort(array):
    orig_array = array.copy()
    array = array.copy()
    steps = []

    def partition(low, high):
        # Use final element as pivot
        pivot = array[high]
        i = low - 1

        for j in range(low, high):
            # Compare current element against pivot
            steps.append({
                'type': 'compare',
                'indices': [j, high],
                'array': array.copy()
            })

            if array[j] <= pivot:
                i += 1

                if i != j:
                    array[i], array[j] = array[j], array[i]

                    steps.append({
                        'type': 'swap',
                        'indices': [i, j],
                        'array': array.copy()
                    })

        # Move pivot into its correct position
        pivot_index = i + 1

        if pivot_index != high:
            array[pivot_index], array[high] = array[high], array[pivot_index]

            steps.append({
                'type': 'swap',
                'indices': [pivot_index, high],
                'array': array.copy()
            })

        return pivot_index

    def sort(low, high):
        if low >= high:
            return

        pivot_index = partition(low, high)

        sort(low, pivot_index - 1)
        sort(pivot_index + 1, high)

    sort(0, len(array) - 1)

    return {
        "algorithm": "quick-sort",
        "initialArray": orig_array,
        "steps": steps,
        "result": array
    }