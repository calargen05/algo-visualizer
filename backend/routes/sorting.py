from flask import Blueprint, request, jsonify
import algorithms

sorting = Blueprint("sorting", __name__)

@sorting.post("/api/algorithms/sorting/bubble-sort")
def bubble_sort_route():

    data = request.get_json()

    result = algorithms.bubble_sort(data["array"])

    return jsonify(result)