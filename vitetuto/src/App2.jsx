import { ArraySample2 } from "./components/props/ArraySample2";
import { FunctionSample } from "./components/props/FunctionSample";

// import { Childrencompcss } from "./components/props/childrencompcss"


const App2 = () => {
  function handleClick() {
    alert ('clicked');
    
  }
  const array1= [
    {
      id:1, dobName : "vignu"
    },
    {
      id:2, dobName : "gvkutties"
    },
    {
      id:3, dobName : "durgakrishkutties"
    },
    {
      id:4, dobName : "parents"
    }
  ]
  return (
    // <div>
    //   <Childrencompcss>
    //     <ul className="blockToInline">
    //       <li><a href="https://remoteapps.disney.com" target="_blank">menu</a></li>
    //       <li>qtest</li>
    //       <li>jira</li>
    //       <li>contactus</li>
    //     </ul>
    //     <div className="inlineToBlock">
    //       <span>testspaninline1</span>
    //       <span>testspaninline2</span>
    //       <span>testspaninline3</span>
    //       <span><button>testspaninline4</button></span>
    //     </div>
    //   </Childrencompcss>
    // </div>
    <div>
      {/* <FunctionSample handleClick={handleClick} /> */}
      <ArraySample2 array1={array1}></ArraySample2>
    </div>

  );
};

export default App2;
