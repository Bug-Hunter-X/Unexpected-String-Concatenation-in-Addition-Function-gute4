# Unexpected String Concatenation in Addition Function

This repository demonstrates a common error in JavaScript where string concatenation occurs unexpectedly during numerical addition.  The `foo` function is intended to add two numbers, but if one input is a string, JavaScript performs string concatenation instead of numerical addition. This leads to incorrect results.

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides a corrected version using type checking or the `parseInt()` method to ensure both inputs are numbers before performing the addition.