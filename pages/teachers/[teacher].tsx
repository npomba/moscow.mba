import stls from '@/styles/pages/teachers/PageTeachersTeacher.module.sass'
import type { NextPage } from 'next'
import { GetStaticPaths, GetStaticProps } from 'next'
import { TypePageTeacherProps } from '@/types/index'
import { NextSeo } from 'next-seo'
import cn from 'classnames'
import truncate from 'truncate'
import parse from 'html-react-parser'
import { marked } from 'marked'
import { getImageHeight } from '@/helpers/index'
import { handleGetStaticPaths, handleGetStaticProps } from '@/lib/index'
import { usePageHandleContext } from '@/hooks/index'
import { routesFront, companyName } from '@/config/index'
import { Wrapper } from '@/components/layout'
import { ImgTeachersTeacher } from '@/components/images'

const PageTeachersTeacher: NextPage<TypePageTeacherProps> = ({
  programs,
  teacher
}) => {
  usePageHandleContext({ programs })

  const image = (
    <ImgTeachersTeacher
      src={teacher?.portrait?.url}
      width={teacher?.portrait?.url ? 343 : undefined}
      height={getImageHeight({
        width: 343,
        widthInitial: teacher?.portrait?.width,
        heightInitial: teacher?.portrait?.height
      })}
    />
  )

  return (
    <>
      <NextSeo
        title={`${teacher?.name || 'Преподаватель'}${` | ${companyName}`}`}
        description={truncate(
          `${
            teacher?.description ||
            'Эксперт по бизнес-планированию, инвестиционному и финансовому анализу'
          }`,
          120
        )}
        canonical={`${routesFront.root}${routesFront.teachers}/${
          teacher?.slug || 'teacher'
        }`}
      />
      <section>
        <Wrapper column>
          <div className={stls.content}>
            <div className={cn(stls.left, stls.laptopDesktopWidescreen)}>
              {image}
            </div>
            <div className={stls.right}>
              <h1 className={stls.title}>{teacher?.name || 'Преподаватель'}</h1>
              <div className={stls.about}>
                <div className={stls.phoneTablet}>{image}</div>
                <h2 className={stls.subtitle}>Об эксперте:</h2>
                {teacher?.descriptionItems?.length > 0 ? (
                  <ul className={stls.list}>
                    {teacher.descriptionItems
                      .filter(item => item?.item)
                      .map((item, idx) => (
                        <li
                          key={`${item || 'teacherListItem'}-${idx}`}
                          className={stls.listItem}>
                          {parse(marked(item?.item))}
                        </li>
                      ))}
                  </ul>
                ) : (
                  <p className={stls.p}>{teacher?.description}</p>
                )}
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () =>
  await handleGetStaticPaths({ page: routesFront.teachersTeacher })

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.teachersTeacher, context })

export default PageTeachersTeacher
