import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2> Learning String Methods</h2>
      <button type="button" onclick={()=>{
        let alphabets= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        console.log(alphabets length);
        console.log(alphabets[9]);
        console.log(alphabets.at(8));
        console.log(alphabets.charAt(13));
      }}></button>
      <button type="button" onclick={()=>{
        let quote = "Mera Bharat Mahan";
        console.log(quote.toLocaleUpperCase());
        console.log(quote.toLocaleLowerCase());
      }}>toUppercase/toLowercase</button>
      <button type="button" onclick={()=>{
        let fn ="narendra";
        let ln ="Moudi";
        let fullName =fn.concat(in);
        console.log(fullName);
      }}>concat</button>
      <button type="button" onclick={()=>{
        let name ="   Hello world!   "
        console.log(`----->${Name.trim()}----->`);
        console.log(`----->${Name.trimStart()}----->`);
        console.log(`----->${Name.trimEnd()}----->`);
      
      }}>trim/trimStart/trimEnd</button>
      <button type="button" onclick={()=>{
        let name ="oh my god!"
        console.log(name.length);
        console.log(name.padStart(50,"l "));
        console.log(name.padEnd(30,"!"));
      }}>padStart/padEnd</button>
      <button type="button" onclick={()=>{
        let text = "jai shri ram";
        let result = text.repeat(108);
        console.log(result)
      }}>repeat</button>
      <button type="button" onclick={()=>{
        let yoth ="All is well"
        console.log(yoth.replace("All","India"));
        console.log(yoth.replaceAll("All", "India"));
      }}>replace/replaceall</button>
      <button type="button" onclick={()=>{
        let prayer ="India is my country"
        console.log(prayer.split("I"));
      }}>Split</button>
      <button type="button" onclick={()=>{
        let alphabets ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        console.log(alphabets.slice(9,14));
        console.log(alphabets.substring(10,22));
        console.log(alphabets.substr(10,18));
      }}>Slice/substring/substr</button>
      <button type="button" onclick={()=>{
      //  console.log(String.fromCharCode(3077));
       // for(i=3077;i<3300;i++);
       // console.log(String.fromCharCode(i));
       let alphabets ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
       console.log(alphabets.charCodeAt());
       for( let i=0;i<alphabets.length;i++){
         console.log(alphabets.charCodeAt(i));
       }

      }}>charCodeAt</button>
      <button type="button" onclick={()=>{}}></button>
      <button type="button" onclick={()=>{}}></button>
     </div>
       );
}

export default App;
