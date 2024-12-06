export const Login = () => {
  function alerted() {
   return document.querySelector('button').innerHTML= `entered value is ${document.querySelector('input').value}`;
  }
  return (
    <div>
      <div className="loginCls">
        <input type="text" placeholder="enter text" />
        <button className="btn" onClick={alerted}>show</button> 
      </div>
    </div>
  );
};
