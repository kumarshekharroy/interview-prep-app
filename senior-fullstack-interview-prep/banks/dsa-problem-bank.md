# DSA Problem Bank

This bank is the source of truth for DSA IDs used by the month files. The month files contain the day-level instructions, time boxes, and retake details; this file keeps the stable problem registry, expected pattern, and acceptance standard aligned.

## ID Rules

* `DSA-001` through `DSA-089` are core learning problems used from Month 1 through Month 5.
* `DSA-090A` and later suffixed IDs are Month 6 revision, mock, or weak-area retake variants.
* Month 6 summary text should refer to suffixed revision rows, for example `DSA-090A through DSA-095B`.
* Do not reuse an ID for a different problem.

## Scoring Rubric

Score each problem out of 10.

| Area | Points | What Good Looks Like |
| --- | ---: | --- |
| Clarification | 1 | Confirms input shape, constraints, and expected output |
| Pattern recognition | 2 | Names the correct pattern and why it fits |
| Correctness | 3 | Handles normal and edge cases |
| Complexity | 1 | States time and space accurately |
| Code quality | 2 | Clear names, simple control flow, no avoidable duplication |
| Communication | 1 | Explains approach before and during coding |

Passing score:

* 8-10: interview-ready.
* 6-7: retake within 72 hours.
* below 6: review pattern, solve two easier related problems, then retake.

## Core Problem Registry

| ID | Problem | Pattern | Timing | Acceptance Standard |
| --- | --- | --- | --- | --- |
| DSA-001 | Two Sum | Hash map | Month 1 | One-pass dictionary, handles duplicates, `O(n)` |
| DSA-002 | Contains Duplicate | Hash set | Month 1 | Early repeat detection, `O(n)` |
| DSA-003 | Valid Anagram | Frequency count | Month 1 | Handles length mismatch and repeated chars |
| DSA-004 | First Non-Repeating Character | Frequency count | Month 1 | Returns first unique character/index or clear not-found result |
| DSA-005 | Majority Element | Boyer-Moore or count map | Month 1 | Explains majority assumption and `O(n)` scan |
| DSA-006 | Valid Palindrome | Two pointers | Month 1 | Skips non-alphanumeric chars and ignores case |
| DSA-007 | Merge Sorted Array | Two pointers from end | Month 1 | Merges in-place without overwriting unread values |
| DSA-008 | Move Zeroes | Two pointers | Month 1 | Preserves non-zero order and fills remaining zeroes |
| DSA-009 | Best Time to Buy and Sell Stock | One-pass min/max | Month 1 | Tracks min price and max profit, handles no-profit case |
| DSA-010 | Missing Number | Math, XOR, or set | Month 1 | Handles `0..n` range with `O(n)` time |
| DSA-011 | Intersection of Two Arrays | Hash set | Month 1 | Produces unique intersection values |
| DSA-012 | Remove Duplicates from Sorted Array | Two pointers | Month 1 | Returns unique count and mutates prefix correctly |
| DSA-013 | Maximum Average Subarray | Fixed sliding window | Month 2 | Maintains running sum and returns max average |
| DSA-014 | Minimum Size Subarray Sum | Variable sliding window | Month 2 | Shrinks while valid and returns 0 when no window exists |
| DSA-015 | Valid Parentheses | Stack | Month 2 | Rejects wrong order, odd length, and unmatched brackets |
| DSA-016 | Implement Queue Using Two Stacks | Stack design | Month 2 | Amortized `O(1)` queue operations using two stacks |
| DSA-017 | Daily Temperatures | Monotonic stack | Month 2 | Stores indexes and computes wait days correctly |
| DSA-018 | Binary Search | Binary search | Month 2 | Maintains boundaries without infinite loop |
| DSA-019 | Search Insert Position | Lower-bound binary search | Month 2 | Returns correct insertion index for missing target |
| DSA-020 | Reverse Linked List | Pointer reversal | Month 2 | Handles empty and one-node lists without losing nodes |
| DSA-021 | Linked List Cycle | Fast/slow pointers | Month 2 | Detects cycle in `O(1)` space |
| DSA-022 | Middle of the Linked List | Fast/slow pointers | Month 2 | Returns expected middle for odd/even lengths |
| DSA-023 | First Bad Version | Binary search over answer | Month 2 | Minimizes calls and avoids overflow-prone midpoint |
| DSA-024 | Min Stack | Stack design | Month 2 | Supports push/pop/top/getMin in `O(1)` |
| DSA-025 | Remove Nth Node From End of List | Two pointers | Month 2 | Uses dummy node and handles head removal |
| DSA-026 | Evaluate Reverse Polish Notation | Stack | Month 2 | Preserves operand order and division semantics |
| DSA-027 | Recursive Factorial and Call Stack Trace | Recursion | Month 3 | Defines base case and traces call stack clearly |
| DSA-028 | Fibonacci with Memoization | Recursion plus memoization | Month 3 | Avoids exponential recomputation |
| DSA-029 | Maximum Depth of Binary Tree | Tree DFS | Month 3 | Handles empty tree and returns correct depth |
| DSA-030 | Invert Binary Tree | Tree DFS/BFS | Month 3 | Swaps children at every node |
| DSA-031 | Binary Tree Inorder Traversal | DFS or stack | Month 3 | Produces left-root-right order |
| DSA-032 | Validate Binary Search Tree | DFS with bounds | Month 3 | Uses strict min/max bounds, not local checks only |
| DSA-033 | Same Tree | Tree DFS | Month 3 | Compares structure and values |
| DSA-034 | Symmetric Tree | Mirrored DFS/BFS | Month 3 | Compares outside and inside pairs correctly |
| DSA-035 | Level Order Traversal | BFS | Month 3 | Groups values by level |
| DSA-036 | Merge Intervals | Sort and scan | Month 3 | Sorts by start and merges overlaps |
| DSA-037 | Insert Interval | Intervals | Month 3 | Adds before, merges overlaps, adds after |
| DSA-038 | Kth Smallest Element in BST | Inorder traversal | Month 3 | Stops after kth item and explains BST ordering |
| DSA-039 | Lowest Common Ancestor of BST | BST property | Month 3 | Moves left/right based on both values |
| DSA-040 | Maximum Subarray | Kadane | Month 3 | Handles all-negative arrays |
| DSA-041 | Sort Colors | Dutch national flag | Month 3 | Sorts in one pass with constant space |
| DSA-042 | Non-overlapping Intervals | Greedy | Month 3 | Sorts by end and counts removals |
| DSA-043 | Find Minimum in Rotated Sorted Array | Binary search | Month 3 | Compares mid/right and handles no rotation |
| DSA-044 | Graph BFS Traversal | BFS | Month 4 | Uses queue and visited set |
| DSA-045 | Number of Islands | Grid DFS/BFS | Month 4 | Counts components and avoids diagonal adjacency |
| DSA-046 | Clone Graph | DFS/BFS plus map | Month 4 | Preserves graph shape without sharing original nodes |
| DSA-047 | Top K Frequent Elements | Heap or bucket | Month 4 | Returns k most frequent without full unnecessary sort |
| DSA-048 | Kth Largest Element in an Array | Heap or quickselect | Month 4 | Returns kth largest value, not kth distinct value |
| DSA-049 | Meeting Rooms II | Min heap or sweep line | Month 4 | Computes maximum concurrent meetings |
| DSA-050 | Assign Cookies | Greedy | Month 4 | Sorts both arrays and uses smallest sufficient cookie |
| DSA-051 | Jump Game | Greedy reachability | Month 4 | Tracks farthest reachable index |
| DSA-052 | Subsets | Backtracking | Month 4 | Produces all `2^n` subsets |
| DSA-053 | Course Schedule | Topological sort | Month 4 | Detects directed cycle or processes all courses |
| DSA-054 | Rotting Oranges | Multi-source BFS | Month 4 | Tracks minutes by BFS level and unreachable fresh oranges |
| DSA-055 | Combination Sum | Backtracking | Month 4 | Avoids duplicate paths and allows candidate reuse |
| DSA-056 | Permutations | Backtracking | Month 4 | Generates all permutations without reusing an index |
| DSA-057 | Graph Valid Tree | DFS or union-find | Month 4 | Checks connected and exactly `n - 1` edges |
| DSA-058 | Last Stone Weight | Heap | Month 4 | Uses max-heap behavior and reinserts difference |
| DSA-059 | Partition Labels | Greedy | Month 4 | Uses last occurrence and cuts partitions correctly |
| DSA-060 | Generate Parentheses | Backtracking | Month 4 | Never closes more than opened |
| DSA-061 | Task Scheduler | Greedy or heap | Month 5 | Handles cooldown and idle slots |
| DSA-062 | LRU Cache | Hash map plus linked list | Month 5 | `get` and `put` are `O(1)` and update recency |
| DSA-063 | Network Delay Time | Dijkstra | Month 5 | Computes shortest paths from source |
| DSA-064 | Word Ladder | BFS | Month 5 | Finds shortest transformation sequence length |
| DSA-065 | Pacific Atlantic Water Flow | Reverse DFS/BFS | Month 5 | Starts from oceans and intersects reachable cells |
| DSA-066 | Reconstruct Itinerary | Backtracking or Hierholzer | Month 5 | Uses lexical order and all tickets once |
| DSA-067 | Min Cost to Connect All Points | Minimum spanning tree | Month 5 | Uses Prim/Kruskal and Manhattan distance |
| DSA-068 | Swim in Rising Water | Dijkstra or binary search | Month 5 | Minimizes maximum elevation on path |
| DSA-069 | Cheapest Flights Within K Stops | Shortest path with stop bound | Month 5 | Respects stop limit |
| DSA-070 | Alien Dictionary | Topological sort | Month 5 | Builds character graph and detects invalid prefix/cycle |
| DSA-071 | Design Twitter Feed | Heap and data design | Month 5 | Merges recent tweets and respects follow graph |
| DSA-072 | Find Median from Data Stream | Two heaps | Month 5 | Keeps heaps balanced and returns median |
| DSA-073 | Serialize and Deserialize Binary Tree | Tree encoding | Month 5 | Uses null markers and reconstructs exactly |
| DSA-074 | Binary Tree Maximum Path Sum | Tree DP | Month 5 | Separates returned gain from global path |
| DSA-075 | Word Search II | Trie plus DFS | Month 5 | Prunes prefixes and avoids revisiting a cell in one path |
| DSA-076 | Median of Two Sorted Arrays | Binary partition | Month 5 | Achieves logarithmic partition reasoning |
| DSA-077 | Trapping Rain Water | Two pointers or stack | Month 5 | Tracks boundaries and sums trapped water |
| DSA-078 | Largest Rectangle in Histogram | Monotonic stack | Month 5 | Computes width correctly during pops |
| DSA-079 | Edit Distance | Dynamic programming | Month 5 | Handles empty prefixes and three operations |
| DSA-080 | Longest Increasing Path in a Matrix | DFS memoization | Month 5 | Avoids recomputation and enforces strict increase |
| DSA-081 | Burst Balloons | Interval DP | Month 5 | Chooses last balloon in interval |
| DSA-082 | Regular Expression Matching | Dynamic programming | Month 5 | Handles `.` and `*` including zero occurrences |
| DSA-083 | Minimum Window Substring | Sliding window | Month 5 | Tracks needed counts and shrinks valid windows |
| DSA-084 | Maximal Rectangle | Histogram per row | Month 5 | Converts rows to heights and reuses stack logic |
| DSA-085 | Longest Palindromic Substring | Center expansion or DP | Month 5 | Handles odd and even centers |
| DSA-086 | Palindromic Substrings | Center expansion | Month 5 | Counts every valid odd/even palindrome |
| DSA-087 | Basic Calculator | Stack/parser | Month 5 | Handles signs, spaces, and nested parentheses |
| DSA-088 | Sliding Window Maximum | Monotonic deque | Month 5 | Stores indexes and removes out-of-window values |
| DSA-089 | Word Break II | DFS memoization | Month 5 | Returns all valid sentences without repeated work |

## Month 6 Revision and Mock Registry

| ID | Problem | Pattern | Acceptance Standard |
| --- | --- | --- | --- |
| DSA-090A | Two Sum | Hash map retake | Solves quickly and explains duplicate handling |
| DSA-090B | Group Anagrams | Hashing/grouping | Chooses stable key and explains tradeoff |
| DSA-090C | Product of Array Except Self | Prefix/suffix | No division, handles zero cases |
| DSA-091A | 3Sum | Sort plus two pointers | Avoids duplicate triplets |
| DSA-091B | Longest Substring Without Repeating Characters | Sliding window | Maintains unique window invariant |
| DSA-091C | Daily Temperatures | Monotonic stack | Uses index stack correctly |
| DSA-092A | Search in Rotated Sorted Array | Binary search | Identifies sorted half each step |
| DSA-092B | Reverse Linked List | Pointers | Reverses without losing nodes |
| DSA-092C | Binary Tree Level Order Traversal | BFS | Groups nodes by level |
| DSA-093A | Number of Islands | DFS/BFS | Counts connected components |
| DSA-093B | Top K Frequent Elements | Heap or bucket | Returns exactly k most frequent |
| DSA-093C | Coin Change | Dynamic programming | Handles impossible amount |
| DSA-094A | Course Schedule | Topological sort | Detects cycle |
| DSA-094B | LRU Cache | Hash map plus linked list | Maintains `O(1)` operations |
| DSA-095A | Word Ladder | BFS | Finds shortest path length |
| DSA-095B | Minimum Window Substring | Sliding window | Handles repeated target chars |
| DSA-096A | Merge Intervals | Sort and scan | Merges all overlaps |
| DSA-096B | Meeting Rooms II | Heap or sweep | Computes max concurrent rooms |
| DSA-097A | Insert Interval | Intervals | Handles insert at start/end/full overlap |
| DSA-097B | Non-overlapping Intervals | Greedy | Sorts by end and justifies choice |
| DSA-098A | Valid Parentheses | Stack | Rejects unmatched or wrong order brackets |
| DSA-098B | Min Stack | Stack design | Maintains min under duplicate mins |
| DSA-098C | Evaluate Reverse Polish Notation | Stack | Preserves operand order |
| DSA-099A | Koko Eating Bananas | Binary search answer | Uses ceiling division |
| DSA-099B | Find Minimum in Rotated Sorted Array | Binary search | Handles no rotation |
| DSA-100A | Rotting Oranges | Multi-source BFS | Tracks time levels correctly |
| DSA-100B | Pacific Atlantic Water Flow | Reverse DFS/BFS | Intersects ocean reachability |
| DSA-101A | Clone Graph | Graph traversal plus map | Deep-copies cycles safely |
| DSA-101B | Graph Valid Tree | DFS or union-find | Checks connected and acyclic |
| DSA-102A | Longest Substring Without Repeating Characters | Sliding window mock | Communicates invariant under time |
| DSA-102B | Course Schedule | Graph mock | Explains directed cycle handling |
| DSA-102C | Coin Change | DP mock | States recurrence and base cases |
| DSA-103A | LRU Cache | Data structure design mock | Defends hash/list design |
| DSA-104A | Design Add and Search Words Data Structure | Trie design | Supports `.` wildcard search |
| DSA-105A | Task Scheduler | Greedy/heap mock | Handles cooldown math |
| DSA-106A | Decode Ways | Dynamic programming | Handles zeros and two-digit checks |
| DSA-106B | House Robber | Dynamic programming | Maintains include/exclude recurrence |
| DSA-107A | Subsets | Backtracking | Produces all subsets |
| DSA-107B | Combination Sum | Backtracking | Avoids duplicate combinations |
| DSA-107C | Permutations | Backtracking | Generates all permutations |
| DSA-108A | Weakest array/string problem | Weak-area retake | Select from weak-area log and pass rubric |
| DSA-108B | Weakest graph problem | Weak-area retake | Select from weak-area log and pass rubric |
| DSA-108C | Weakest DP problem | Weak-area retake | Select from weak-area log and pass rubric |
| DSA-108D | Weakest design-data-structure problem | Weak-area retake | Select from weak-area log and pass rubric |
| DSA-108E | Weakest sliding-window/stack problem | Weak-area retake | Select from weak-area log and pass rubric |
| DSA-109A | Weakest tree/graph problem | Weak-area retake | Select from weak-area log and pass rubric |
| DSA-109B | Weakest heap/greedy problem | Weak-area retake | Select from weak-area log and pass rubric |
| DSA-110A | Weakest DP/backtracking problem | Weak-area retake | Select from weak-area log and pass rubric |
| DSA-110B | Weakest string/window problem | Weak-area retake | Select from weak-area log and pass rubric |
| DSA-111A | Mixed medium problem from weakest category | Final technical mock | Solve under time and explain tradeoffs |
| DSA-111B | Follow-up optimization discussion | Final technical mock | Discuss complexity and alternative approaches |
| DSA-112A | Previously failed easy/medium problem | Final retake | No repeated old mistake |
| DSA-113A | Final red-flag problem if any | Final retake | Pass or downgrade readiness honestly |

## Timed Mock Sets

### Mock Set A - Backend Screen

Time: 75 minutes.

1. DSA-091B - Longest Substring Without Repeating Characters.
2. DSA-053 - Course Schedule.
3. DSA-093C - Coin Change.

Acceptance criteria:

* At least two problems fully solved.
* Every problem has complexity stated.
* Course Schedule uses directed graph reasoning.

### Mock Set B - Product Company Coding

Time: 90 minutes.

1. DSA-091A - 3Sum.
2. DSA-088 - Sliding Window Maximum.
3. DSA-062 - LRU Cache.

Acceptance criteria:

* Duplicate handling in 3Sum is correct.
* Deque stores indexes, not just values.
* LRU operations are O(1).

### Mock Set C - Senior Mixed Round

Time: 90 minutes.

1. DSA-083 - Minimum Window Substring.
2. DSA-074 - Binary Tree Maximum Path Sum.
3. DSA-072 - Find Median from Data Stream.

Acceptance criteria:

* Variable window validity is correct.
* Tree return value and global max are separated.
* Two heaps stay balanced.

## Retake Rules

1. If pattern recognition fails, retake two easier problems from the same group.
2. If code is correct but explanation is weak, redo the problem aloud without looking at notes.
3. If edge cases fail, write five edge cases before the retake.
4. If time expires, redo with a 10-minute planning cap and a 35-minute implementation cap.
