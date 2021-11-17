import stls from '@/styles/components/sections/SearchField.module.sass'
import programsContext from '@/context/programs/programsContext'
import { useContext, useState } from 'react'
import Popup from 'reactjs-popup'
import Link from 'next/link'

const SearchField = () => {
  const [value, setValue] = useState('')
  const {searchRes, setSearchProgram} = useContext(programsContext)
  console.log('value', value)
  const hendleSearch = () => {
    setSearchProgram(value.toLowerCase())
  }




  return (


      <Popup
        modal
        trigger={() => <div>
          <input
            className={stls.input}
            type='text' placeholder={'ckick'}
            value={value}

          />
        </div>}
        >
        <div className={stls.container}>
          <div>
            <div className={stls.search}>
              <input
                className={stls.input}
                type='text'
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder={'search'}
                onKeyUp={hendleSearch}
              />
              <span className={stls.cross}>X</span>
            </div>

            <ul className={stls.list}>
              {
                searchRes.map(el => {
                  return (
                    <li key={el.id} className={stls.item}>
                      <Link href={`/programs/mini/online/${el.slug}`}>
                        <a>{el.title}</a>
                      </Link>
                    </li>
                  )
                })
              }
            </ul>

          </div>
        </div>
      </Popup>
  )
}

export default SearchField