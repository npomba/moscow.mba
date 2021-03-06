import { TypeLibProgram } from '@/types/index'
import { NextSeo, CourseJsonLd } from 'next-seo'
import truncate from 'truncate'
import { routesFront, companyName } from '@/config/index'
import { useAt } from '@/hooks/index'

type TSeoPagesProgram = {
  program: TypeLibProgram
  canonical?: string
}

const SeoPagesProgram = ({ program, canonical }: TSeoPagesProgram) => {
  const at = useAt()

  const programTitle = program?.title || (at.en ? 'Program' : 'Программа')

  const seoParams = {
    title: `${programTitle} • MBA - ${companyName}`,
    programTitle: programTitle,
    desc: program?.goal
      ? truncate(program?.goal, 120)
      : program?.description
      ? truncate(program?.description, 120)
      : at.en
      ? 'Concur relevant business education from international experts'
      : 'Получите современное бизнес образование от международных экспертов',
    canonical:
      canonical ||
      `${routesFront.root}${routesFront.programs}/${program.category.slug}/${program.studyFormat}/${program.slug}`
  }

  return (
    <>
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        openGraph={{
          url: seoParams.canonical,
          title: seoParams.title,
          description: seoParams.desc,
          images: [
            {
              url: `${routesFront.root}${routesFront.assetsImgsIconsManifestIcon512}`,
              width: 512,
              height: 512,
              alt: companyName,
              type: 'image/png'
            }
          ],
          site_name: companyName
        }}
      />
      <CourseJsonLd
        courseName={seoParams.programTitle}
        description={seoParams.desc}
        provider={{
          name: companyName,
          url: seoParams.canonical
        }}
      />
    </>
  )
}

export default SeoPagesProgram
