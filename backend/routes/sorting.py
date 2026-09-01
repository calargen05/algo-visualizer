from flask import Blueprint, request, jsonify
import backend.algorithms.sorting as sort_algs

sorting = Blueprint("sorting", __name__)

@sorting.post("/api/algorithms/sorting/bubble-sort")
def bubble_sort_route():

    data = request.get_json()

    result = sort_algs.bubble_sort(data["array"])

    return jsonify(result)