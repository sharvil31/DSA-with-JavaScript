_Time Complexity_

1. It is used to measure efficiency of algorithms in terms of speed, as the input size grows.

2. _O(1) > O(log n) > O(n) > O(n log n) > O(n^2) > O(2^n) > O(n!)_.

3. if we have loop inside loop(nested) then time complexity is _O(n \* n) = O(n^2)_

4. if we have two separate loops(not nested) then time complexity is _O(n + n) = O(2n)_

5. if time complexity is _O(2n)_ like this, then we ignore number means it becomes _O(n)_.

6. if we have loop inside loop(nested) and one separate loop(not nested) then time complexity is _O(n^2 + n)_.

7. if we have time complexity _O(n^2 + n)_ like this we ignore lower value means it becomes _O(n^2)_

8. if we have time complexity _O(n^3 + n + n^2)_ like this we ignore lower values means it becomes _O(n^3)_, we ignore _n + n^2_.

9. if we have time complexity _O(n + n^5 + n^3)_ like this we ignore lower values means it becomes _O(n^5)_, we ignore _n + n^3_.

10. Means Whatever is the greater order, time complexity will boils down to that order, everything else will be ignored.



_Space Complexity_

Space complexity measures how much extra memory your algorithm or program needs as the input size grows.

ex.1

function add(a, b) {
let sum = a + b;
return sum;
}

variables _a, b, sum_ are constant space. 
space complexity: O(1) (constant space).


ex. 2

let arr new Array(n);

Here memory grows with input size, space complexity is _O(n)_.


_space complexity counts:_

* extra variables
* arrays/objects created
* recursion call stack (How many times function call goes on the call stack).