import stls from '@/styles/components/general/SearchField.module.sass'
import { ProgramsContext } from '@/context/index'
import { useAt } from '@/hooks/index'
import { useContext, useState } from 'react'
import Popup from 'reactjs-popup'
import Link from 'next/link'
import { IconSearch, IconClose } from '@/components/icons'
import { FormAlpha } from '@/components/forms'
import { LeadLoaderThankyou } from '@/components/general'

const SearchField = () => {
  const at = useAt()
  const [open, setOpen] = useState(false)
  const [openLoader, setOpenLoader] = useState(false)

  const [value, setValue] = useState('')
  const { filteredPrograms, setSearchProgram } = useContext(ProgramsContext)

  const handleSearch = () => setSearchProgram(value.toLowerCase())

  return (
    <Popup
      modal
      className={'searchField_popup'}
      onClose={() => close}
      trigger={() => (
        <div>
          <div className={stls.trigger}>
            <div className={stls.icon}>
              <IconSearch color={'#000'} />
            </div>
            <button className={stls.btn}>{value || 'Поиск'}</button>
          </div>
        </div>
      )}>
      {close => (
        <div className={stls.container}>
          <div>
            <div className={stls.search}>
              <div className={stls.icon}>
                <IconSearch color={'#C4C4C4'} />
              </div>
              <input
                className={stls.input}
                type='text'
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder={'Поиск'}
                onKeyUp={handleSearch}
              />
              <span className={stls.cross} onClick={() => close()}>
                <IconClose />
              </span>
            </div>

            <ul className={stls.list}>
              {filteredPrograms.map(el => {
                return (
                  <li key={el.id} className={stls.item}>
                    <Link
                      href={`/programs/${el.category?.slug}/${el.studyFormat}/${el.slug}`}>
                      <a className={stls.link}>
                        <span>
                          {Array.from(el?.title).map((str: string) => {
                            if (
                              value.toLowerCase().includes(str.toLowerCase())
                            ) {
                              return <span className={stls.strong}>{str}</span>
                            } else {
                              return <span>{str}</span>
                            }
                          })}
                        </span>
                        <span className={stls.format}>
                          {at.mini
                            ? 'mini MBA'
                            : at.mba
                            ? 'MBA'
                            : at.profession
                            ? 'Профессии'
                            : at.course
                            ? 'Курсы'
                            : ''}
                        </span>
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>
            {filteredPrograms.length === 0 && value !== '' && (
              <>
                <LeadLoaderThankyou
                  open={open}
                  setOpen={setOpen}
                  openLoader={openLoader}
                  setOpenLoader={setOpenLoader}
                  programId={null}
                  programTitle={null}
                />
                <div className={stls.form}>
                  <p className={stls.title}>
                    По Вашему запросу ничего не найдено
                  </p>
                  <p className={stls.text}>
                    Попробуйте ввести запрос по-другому или свяжитесь со
                    специалистом. Вам помогут подобрать нужное направление и
                    ответят на вопросы.
                  </p>
                  <FormAlpha
                    programTitle={null}
                    setOpenLoader={setOpenLoader}
                    setOpen={open}
                    classNames={[stls.content]}
                    globalStyle={false}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </Popup>
  )
}

export default SearchField
