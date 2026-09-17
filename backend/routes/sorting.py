from flask import Blueprint, request, jsonify
import backend.algorithms.sorting as sort_algs

sorting = Blueprint("sorting", __name__)

@sorting.post("/api/algorithms/sorting/bubble-sort")
def bubble_sort_route():

    data = request.get_json()

    result = sort_algs.bubble_sort(data["array"])

    return jsonify(result)

@sorting.post("/api/algorithms/sorting/insertion-sort")
def insertion_sort_route():

    data = request.get_json()

    result = sort_algs.insertion_sort(data["array"])

    return jsonify(result)

@sorting.post("/api/algorithms/sorting/merge-sort")
def merge_sort_route():
    data = request.get_json()
    result = sort_algs.merge_sort(data['array'])
    return jsonify(result)

@sorting.post("/api/algorithms/sorting/quick-sort")
def quick_sort_route():
    data = request.get_json()
    result = sort_algs.quick_sort(data['array'])
    return jsonify(result)

@sorting.post("/api/algorithms/sorting/heap-sort")
def heap_sort_route():
    data = request.get_json()
    result = sort_algs.heap_sort(data['array'])
    return jsonify(result)