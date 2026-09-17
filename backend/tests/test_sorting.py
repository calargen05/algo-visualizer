from backend.app import app

def test_bubble_sort_api():
    client = app.test_client()

    response = client.post(
        "/api/algorithms/sorting/bubble-sort",
        json={"array": [5, 2, 9, 1, 5, 6]}
    )

    assert response.status_code == 200
    data = response.get_json()

    assert data["result"] == [1, 2, 5, 5, 6, 9]

def test_insertion_sort_api():
    client = app.test_client()

    response = client.post(
        "/api/algorithms/sorting/insertion-sort",
        json={"array": [5, 2, 9, 1, 5, 6]}
    )

    assert response.status_code == 200
    data = response.get_json()

    assert data["result"] == [1, 2, 5, 5, 6, 9]

def test_merge_sort_api():
    client = app.test_client()

    response = client.post(
        "/api/algorithms/sorting/merge-sort",
        json={"array": [5, 2, 9, 1, 5, 6]}
    )

    assert response.status_code == 200
    data = response.get_json()

    assert data["result"] == [1, 2, 5, 5, 6, 9]

def test_quick_sort_api():
    client = app.test_client()

    response = client.post(
        "/api/algorithms/sorting/quick-sort",
        json={"array": [5, 2, 9, 1, 5, 6]}
    )

    assert response.status_code == 200
    data = response.get_json()

    assert data["result"] == [1, 2, 5, 5, 6, 9]

def test_heap_sort_api():
    client = app.test_client()

    response = client.post(
        "/api/algorithms/sorting/heap-sort",
        json={"array": [5, 2, 9, 1, 5, 6]}
    )

    assert response.status_code == 200
    data = response.get_json()

    assert data["result"] == [1, 2, 5, 5, 6, 9]    