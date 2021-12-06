import stls from '@/styles/components/header/HeaderDesktopMenu.module.sass'
import Link from 'next/link'
import { useContext } from 'react'
import MenuContext from '@/context/menu/menuContext'
import OverlayContext from '@/context/overlay/overlayContext'
import classNames from 'classnames'
import ProgramsColumn from '@/components/general/ProgramsColumn'
import HeaderTabs from '@/components/header/HeaderTabs'

const HeaderDesktopMenu = ({ handleMenuClose, handleMouseEnter, programs }) => {
  const { menuIsOpen, openMenu, closeMenu, toggleMenu } =
    useContext(MenuContext)

  const { overlayIsShown, showOverlay, hideOverlay, toggleOverlay } =
    useContext(OverlayContext)

  return (
    <div
      className={classNames({
        'header-podmenu': true,
        [stls.hidden]: !menuIsOpen
      })}>
      <div className='container'>
        <div className='header-podmenu-flex'>
          <div className='header-podmenu-left'>
            <HeaderTabs
              handleMenuClose={handleMenuClose}
              handleMouseEnter={handleMouseEnter}
            />
            <div className='header-podmenu-premium'>
              <div className='label'>
                <span>Premium</span>
              </div>
              <Link href='/programs/executive' locale='ru'>
                <a onClick={handleMenuClose}>Executive MBA</a>
              </Link>
            </div>
          </div>
          <div className='header-podmenu-right'>
            <ProgramsColumn
              data={programs}
              id={'header-podmenu-1'}
              type={'mini'}
            />
            <ProgramsColumn
              data={programs}
              id={'header-podmenu-2'}
              type={'mba'}
            />
            <ProgramsColumn
              data={programs}
              id={'header-podmenu-3'}
              type={'profession'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderDesktopMenu
