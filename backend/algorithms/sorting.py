def bubble_sort(array):
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
        "initialArray": array,
        "steps": steps,
        "result": array
    }


