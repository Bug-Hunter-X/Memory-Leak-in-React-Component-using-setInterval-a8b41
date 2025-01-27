```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using a callback function in setInterval without cleanup
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    // Missing cleanup function to clear the interval when component unmounts
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```