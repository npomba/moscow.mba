import stls from '@/styles/components/sections/CourseOptions.module.sass'
import { useState } from 'react'
import AccordionsContainer from '@/components/general/AccordionsContainer'
import Pagination from '@/components/general/Pagination'

const CourseOptions = ({ data }) => {
  const coursesPerPage = 5
  const [firstCourseOnPage, setFirstCourseOnPage] = useState(0)
  const [lastCourseOnPage, setLastCourseOnPage] = useState(
    firstCourseOnPage + coursesPerPage
  )
  const [closeAllAccordions, setCloseAllAccordions] = useState(false)
  const numberOfCourses = data.length
  const numberOfPages = numberOfCourses / coursesPerPage

  const shownCourses = data.slice(firstCourseOnPage, lastCourseOnPage)

  const handleShowNextPage = newFirstCourseOnPage => {
    setFirstCourseOnPage(newFirstCourseOnPage)
    setLastCourseOnPage(newFirstCourseOnPage + coursesPerPage)
    setCloseAllAccordions(true)
  }

  const handleToggleAllCourses = () => {
    setLastCourseOnPage(firstCourseOnPage + coursesPerPage)
  }

  return (
    <section className={stls.container}>
      <div className={stls.titleContainer}>
        <h2 className={stls.title}>Направления обучения</h2>
        <p className={stls.coursesNumber}>{numberOfCourses}+ направлений</p>
      </div>
      <div className={stls.content}>
        <AccordionsContainer
          accordionsItems={shownCourses}
          firstAccordionActive={firstCourseOnPage === 0}
          closeAll={closeAllAccordions}
          setCloseAll={setCloseAllAccordions}
          isCoursesContainer
        />
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
    </section>
  )
}

export default CourseOptions
