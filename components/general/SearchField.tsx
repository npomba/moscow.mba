import stls from '@/styles/components/sections/SearchField.module.sass'
import programsContext from '@/context/programs/programsContext'
import { useContext, useEffect, useState } from 'react'
import Popup from 'reactjs-popup'
import Link from 'next/link'
import IconSearch from '@/components/icons/IconSearch'
import IconClose from '@/components/icons/IconClose'
import { FormAlpha } from '@/components/forms'
import LeadLoaderThankyou from '@/components/general/LeadLoaderThankyou'
import useAt from '@/helpers/useAt'


const SearchField = () => {
  const at = useAt()
  const [open, setOpen] = useState(false)
  const [openLoader, setOpenLoader] = useState(false)

  const [value, setValue] = useState('')
  const {filteredPrograms, setSearchProgram} = useContext(programsContext)

  const handleSearch = () => {
    setSearchProgram(value.toLowerCase())
  }





  return (
    <Popup
      modal
      className={'SearchField_popup'}
      onClose={() => close}
      trigger={() => <div>
        <div className={stls.trigger}>
          <div className={stls.icon}>
            <IconSearch color={'#000'}/>
          </div>
          <input
            className={stls.input}
            type='text' placeholder={'Поиск'}
            value={value}
          />
        </div>
      </div>}
    >
      {close => (
        <div className={stls.container}>
          <div>
            <div className={stls.search}>
              <div className={stls.icon}>
                <IconSearch color={'#C4C4C4'}/>
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
                  <IconClose/>
                </span>
            </div>

            <ul className={stls.list}>
              {
                filteredPrograms.map(el => {
                  return (
                    <li key={el.id} className={stls.item}>
                      <Link href={`/programs/${el.category?.slug}/${el.studyFormat}/${el.slug}`}>
                        <a className={stls.link}>
                          <span>
                            {
                              Array.from(el?.title).map((str: string) => {
                                if (value.toLowerCase().indexOf(str.toLowerCase()) !== -1) {
                                  return (
                                    <span className={stls.strong}>{str}</span>
                                  )
                                } else {
                                  return (
                                    <span>{str}</span>
                                  )
                                }
                              })
                            }
                          </span>
                          <span className={stls.format}>{at.mini ? 'mini MBA' : at.mba ? 'MBA' : at.profession ? 'Профессии' : at.course ? 'Курсы' : ''}</span>
                        </a>
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
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
                      По вашему запросу ничего не найдено
                    </p>
                    <p className={stls.text}>
                      Попробуйте ввести запрос по-другому или свяжитесь со специалистом. Вам помогут подобрать нужное направление и ответят на вопросы.
                    </p>
                    <FormAlpha
                      programTitle={null}
                      setOpenLoader={setOpenLoader}
                      setOpen={open}
                      cs={{
                        content: stls.content,
                        input: stls.f_input,
                        btn: stls.btn,
                        order: stls.order
                      }}
                    />
                  </div>
                </>
          </div>
        </div>
      )}

    </Popup>
  )
}

export default SearchField