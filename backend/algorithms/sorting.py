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
    orig_array = array
    array = array.copy()
    steps = []

    for i in range(1, len(array)):
        key = array[i]
        j = i - 1

        while j >= 0 and key < array[j]:
            # tell fronted which elements are being compared
            steps.append({
                'type' : 'compare',
                'indices' : [j, i],
                'array' : array.copy()
            })

            array[j + 1] = array[j]

            steps.append({
                'type' : 'shift',
                'indices' : [j, j + 1],
                'array' : array.copy()
            })
            j -= 1

        array[j + 1] = key

    return {
        "algorithm": "insertion-sort",
        "initialArray": orig_array,
        "steps": steps,
        "result": array
    }