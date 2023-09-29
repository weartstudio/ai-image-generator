import { useState, useEffect } from 'react'
import Image from './components/Image';
import { getImage } from './helpers/getImage';
import Button from './components/Button';
import Loading from './components/Loading';

function App() {

  const [search,setSearch] = useState('');
  const [images,setImages] = useState([]);
  const [imageIndex,setImageIndex] = useState(-1)
  const [loading,setLoading] = useState(false)


  const getData = async (e) => {
    if (e.key === 'Enter') {
      setLoading(true)

      let imageResult = await getImage(search)

      setImages(prev => ([...prev,imageResult]))
      setImageIndex(-1) // mert vissza kell állítani
      setSearch('')
      setLoading(false)
    }
  }

  return (
    <main className="bg-gray-50 min-h-screen flex justify-center items-center flex-col gap-5">


        { !loading ?
          <div className='flex'>

            {(imageIndex!== -images.length && images.length > 1)?
              <Button set={()=>setImageIndex(imageIndex-1)}>{'<'}</Button>:""}

            { images.length > 0 ? <Image img={images.at(imageIndex)} /> : '' }

            {(imageIndex!== -1)?
              <Button set={()=>setImageIndex(imageIndex+1)}>{'>'}</Button>:""}

          </div>
          : <Loading />
        }


        <input
          className='rounded-md border-blue-400 border-2 p-3 h-min w-full max-w-[400px]'
          type="text"
          placeholder='Miről szeretnél képet?'
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          onKeyDown={(e)=>getData(e)} />

    </main>
  )
}

export default App
