import stls from '@/styles/components/sections/CourseOptions.module.sass'
import { useState, useRef, useContext } from 'react'
import cn from 'classnames'
import { ContextStaticProps } from '@/context/index'
import { AccordionsContainer, Pagination } from '@/components/general'

const CourseOptions = () => {
  const { programs } = useContext(ContextStaticProps)
  const programsFiltered = programs.filter(
    program => program?.studyFormat === 'online'
  )
  const swapDataItems = () => {
    const firstDataItem = programsFiltered?.[0]
    const lastDataItem = programsFiltered?.[programsFiltered?.length - 1]
    const swappedData = [
      lastDataItem,
      ...programsFiltered?.slice(1, programsFiltered?.length - 1),
      firstDataItem
    ]
    return swappedData
  }

  const swappedData = swapDataItems()

  const coursesContainerRef = useRef(null)

  const coursesPerPage = 5
  const [firstCourseOnPage, setFirstCourseOnPage] = useState(0)
  const [lastCourseOnPage, setLastCourseOnPage] = useState(
    firstCourseOnPage + coursesPerPage
  )
  const [closeAllAccordions, setCloseAllAccordions] = useState(false)
  const numberOfCourses = programsFiltered?.length
  const numberOfPages = numberOfCourses / coursesPerPage

  const shownCourses = swappedData.slice(firstCourseOnPage, lastCourseOnPage)

  const scrollToCoursesContainer = () => {
    const coursesContainerTop =
      coursesContainerRef.current.getBoundingClientRect().top
    const offsetY = 100

    window.scrollTo({
      top: coursesContainerTop + window.pageYOffset - offsetY,
      behavior: 'smooth'
    })
  }

  const handleShowNextPage = newFirstCourseOnPage => {
    setFirstCourseOnPage(newFirstCourseOnPage)
    setLastCourseOnPage(newFirstCourseOnPage + coursesPerPage)
    setCloseAllAccordions(true)
    scrollToCoursesContainer()
  }

  const handleToggleAllCourses = () => {
    setLastCourseOnPage(firstCourseOnPage + coursesPerPage)
    scrollToCoursesContainer()
  }

  return (
    <section className={stls.container} ref={coursesContainerRef}>
      <div className={stls.titleContainer}>
        <h2 className={stls.title}>Направления обучения</h2>
        <p className={stls.coursesNumber}>{numberOfCourses}+ направлений</p>
      </div>
      <div
        className={cn({
          [stls.content]: true,
          ['accordionsContent']: true
        })}>
        <AccordionsContainer
          accordionsItems={shownCourses}
          firstAccordionActive={firstCourseOnPage === 0}
          closeAll={closeAllAccordions}
          setCloseAll={setCloseAllAccordions}
          isCoursesContainer
        />
        <div className={stls.paginationContainer}>
          <Pagination
            numberOfPages={numberOfPages}
            itemsPerPage={coursesPerPage}
            totalItems={numberOfCourses}
            lastShownItem={lastCourseOnPage}
            showNextPage={newFirstCourseOnPage =>
              handleShowNextPage(newFirstCourseOnPage)
            }
            loadMoreItems={setLastCourseOnPage}
            toggleItems={handleToggleAllCourses}
          />
        </div>
      </div>
    </section>
  )
}

export default CourseOptions
