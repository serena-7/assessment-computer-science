| Array Size | Insert Runtime | Append Runtime |
| ---------- | -------------- | -------------- |
| tiny       | 16.167 μs      | 41.917 μs      |
| small      | 21.459 μs      | 46.541 μs      |
| medium     | 129.959 μs     | 132.167 μs     |
| large      | 6535 μs        | 404.625 μs     |
| x-large    | 768602 μs      | 2899 μs        |

The insert function has smaller runtime for smaller array but grows exponentially as the array grows. While the append function has a little bit longer runtime for the smaller arrays but has much smaller runtime for the larger arrays. Append using push grows more linear where insert using unshift grows exponentially. Meaning Append scales better because the runtime increases less with the size of the array increasing.

The reason append scales better is because push has a time complexity of O(1) because push only adds to the end but unshift has a time complexity of O(n) because it has to increment the index of every element in order to add the new element to the front. Which essentially means append has a time complexity of O(n) and insert has a time complexity of O(n^2).
