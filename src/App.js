import './App.css';
import React from 'react'
import useInput from "./useInput";
import useFetch from "./useFetch";
import useTheme from "./useTheme";

function App() {
    const inp=useInput("Hellow",true)
    const {data,error,loading} = useFetch("https://www.reddit.com/r/news.json")
    const {theme,toggleTheme} = useTheme()
    if (loading){
        return "loading..."
    }

    if (error){
        console.log(error,"error")
        return null
    }
  return (
    <div className={`App ${theme}`} style={theme === "light"?{color : "red"}:{color:"blue"}}>
      <header className="App-header">
          <button onClick={toggleTheme}>Toggle Theme</button>
          <input type="text" {...inp}/>
          {inp.error && <span style={{color:"red"}}>{inp.error}</span>}
          {JSON.stringify(data && data.dist)}
      </header>
    </div>
  );
}

export default App;
