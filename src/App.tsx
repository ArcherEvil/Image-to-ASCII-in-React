import './App.css';
import ImageToAsciiArt from 'image-to-ascii-art'
import { useState } from 'react';
import axios from 'axios';
import parse from'html-react-parser';

const App:React.FC = () => {

  const [Url, setUrl] = useState('');
  const [Image, setImage] = useState('');
  const [bgColor, setbgColor] = useState('#FF0000');
  const convert = () => {
    console.log(bgColor)

    // const link = 'https://process.filestackapi.com/AIMhUFS9mRe2A7DJy0NIkz/ascii=background:'+ bgColor +'/' + Url
    const link = 'https://process.filestackapi.com/AIMhUFS9mRe2A7DJy0NIkz/ascii=colored:true,background:'+ bgColor.toString().substring(1) +'/' + Url
    console.log(link)
    axios.get(link).then((response: any) => {
      setImage(response.data)
    })
    


  }

  return (
    <main className={'main'}>
      <p>Image to ASCII App</p>
      <h2>URL:</h2>
      <input type={'text'} onChange={e => {setUrl(e.target.value)}} id="myFile" name="filename"
      />
      <div>
      <h2>Background Color:</h2>
      <input type={'color'} onChange={e => {setbgColor(e.target.value)}}/>
      </div>
      <button onClick={() => convert()} className="btn"> Convert
</button>
      <h2>Your ASCII Text:</h2>
      {parse(Image)}
    </main>
  );
}

export default App;
