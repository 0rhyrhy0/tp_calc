import { useEffect, useState } from 'react';
import './App.module.css';

const Input = ({
  colSpan = 1,
  valueName,
  value,
  setValue,
  width = '8vw'
}) => {
  return (
    <td colSpan={colSpan}>
      {valueName}
      <input
        type='Number'
        className={valueName}
        id={valueName}
        placeholder='0'
        value={value}
        onChange={(e)=>setValue(Number(e.target.value))}
        style={{
          width: width
        }}
      />
    </td>
  );
};

const ResultCalcButton = ({getResult, result}) => (
  <td colSpan="4">
    <button id="calc" onClick={getResult}>Calculate</button>
    <span id="lemon" style={{fontSize:'1rem'}}>{result}</span>
  </td>
);

function App() {
  const [TP, setTP]           = useState(0);
  const [Perfect, setPerfect] = useState(0);
  const [Good, setGood]       = useState(0);
  const [Bad, setBad]         = useState(0);
  const [Miss, setMiss]       = useState(0);

  const [result, setResult] = useState(0);
  const getResult = ()=>{
    let Notes = Perfect + Good + Bad + Miss;
    let lemons = (100/30) * Perfect + Good - (TP / 30) * Notes;
    lemons = Math.round(lemons);
    if(0<=lemons && lemons<=Perfect)
      setResult("You made " + lemons + " lemon" + (lemons>1 ? 's' : ''));
    else
      setResult("You might entered something wrong...");
  };

  return (
    <div className='HTMLbody'>
      <table><tbody>
        <tr>
          <Input
            colSpan='4'
            valueName='TP'
            value={TP}
            setValue={setTP}
            width='20vw'
          />
        </tr>
        <tr>
          <Input
            valueName='Perfect'
            value={Perfect}
            setValue={setPerfect}
          />
          <Input
            valueName='Good'
            value={Good}
            setValue={setGood}
          />
          <Input
            valueName='Bad'
            value={Bad}
            setValue={setBad}
          />
          <Input
            valueName='Miss'
            value={Miss}
            setValue={setMiss}
          />
        </tr>
        <tr>
          <ResultCalcButton
            getResult={getResult}
            result={result}
          />
        </tr>
      </tbody></table>
    </div>
  );
}

export default App
