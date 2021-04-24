import Image from 'next/image'
import setString from '@/components/hooks/setString'
import lang from '@/data/translation/index'

import { useEffect } from 'react'
import loadJs from 'loadjs'

const CorporateClients = () => {
  useEffect(() => {
    loadJs(['/assets/js/corporateClientsSlider.js'], {
      async: false,
    })
  }, [])

  return (
    <section className='clients-section'>
      <div className='section-pl'>
        <div className='clients-text'>
          <h2>
            {setString(lang.corporateClientsTitleTop)} <br />
            {setString(lang.corporateClientsTitleBottom)}
          </h2>
          <p>{setString(lang.corporateClientsDics)}</p>
        </div>
      </div>
      <div className='clients-slider js-slick'>
        <ul className='clients-slider-block'>
          <li>
            <div className='image'>
              <img
                className='lazyload'
                data-src='/assets/images/clients/client_1.jpg'
                alt=''
              />
            </div>
          </li>
          <li>
            <div className='image'>
              <img
                className='lazyload'
                data-src='/assets/images/clients/client_2.jpg'
                alt=''
              />
            </div>
          </li>
          <li>
            <div className='image'>
              <img
                className='lazyload'
                data-src='/assets/images/clients/client_3.jpg'
                alt=''
              />
            </div>
          </li>
          <li>
            <div className='image'>
              <img
                className='lazyload'
                data-src='/assets/images/clients/client_4.jpg'
                alt=''
              />
            </div>
          </li>
        </ul>
        <ul className='clients-slider-block'>
          <li>
            <div className='image'>
              <img
                className='lazyload'
                data-src='/assets/images/clients/client_5.jpg'
                alt=''
              />
            </div>
          </li>
          <li>
            <div className='image'>
              <img
                className='lazyload'
                data-src='/assets/images/clients/client_6.jpg'
                alt=''
              />
            </div>
          </li>
          <li>
            <div className='image'>
              <img
                className='lazyload'
                data-src='/assets/images/clients/client_7.jpg'
                alt=''
              />
            </div>
          </li>
          <li>
            <div className='image'>
              <img
                className='lazyload'
                data-src='/assets/images/clients/client_8.jpg'
                alt=''
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default CorporateClients
