import { useState } from "react";
function Layout(props){
  const [num1,updateNum1]=useState(props.startFrom);
  const [num2,updateNum2]=useState(props.startFrom);
return(
  <div>
    <button onClick={function(){
      updateNum1(num1+1);
    }}>Inc</button>
    <button onClick={function(){
      updateNum2(num2-1)
    }}>Dec</button>
    <h1>{num1}</h1>
    <h1>{num2}</h1>
  </div>
);
}
function App(){
  return <Layout startFrom={1} />;
}

    

export default App;
