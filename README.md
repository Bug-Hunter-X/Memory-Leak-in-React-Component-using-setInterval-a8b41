# React setInterval Memory Leak
This repository demonstrates a common mistake in React applications: using `setInterval` without proper cleanup in `useEffect`. This can lead to memory leaks and unexpected behavior.

## Bug Description
The `MyComponent` component uses `setInterval` to update a counter every second. However, it lacks a cleanup function within the `useEffect` hook to clear the interval when the component unmounts. This results in the interval continuing to run even after the component is removed from the DOM, causing a memory leak.

## Solution
The solution involves adding a cleanup function to the `useEffect` hook that uses `clearInterval` to stop the interval before the component unmounts.