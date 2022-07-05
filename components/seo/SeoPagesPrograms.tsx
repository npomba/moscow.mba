import { TypeLibPrograms } from '@/types/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront, companyName } from '@/config/index'
import { useAt } from '@/hooks/index'
import { SeoOrganizationJsonLd } from '@/components/seo'

type TSeoPagesProgram = {
  ofType?: 'mini' | 'mba' | 'course' | 'profession'
  studyFormat?: 'online' | 'blended'
  programs?: TypeLibPrograms | null
}

const SeoPagesPrograms = ({
  ofType,
  studyFormat,
  programs
}: TSeoPagesProgram) => {
  const at = useAt()

  const seoParams = {
    title: `Программы обучения ${at.mini ? 'Mini MBA' : at.mba ? 'MBA' : ''} ${
      at.online ? 'Online' : at.blended ? 'Blended' : ''
    } • ${companyName}`,
    desc: truncate(
      at.mini
        ? at.en
          ? ''
          : 'Дистанционная программа Mini MBA разработана для специалистов и руководителей, которые хотят систематизировать имеющиеся знания или познакомиться с ключевыми аспектами новой для себя сферы управленческой деятельности'
        : at.mba
        ? at.en
          ? ''
          : 'Дистанционная программа MBA разработана для специалистов и руководителей, которые хотят систематизировать имеющиеся знания или познакомиться с ключевыми аспектами новой для себя сферы управленческой деятельности'
        : at.profession
        ? at.en
          ? ''
          : 'Программа профессиональной переподготовки разработана для специалистов и руководителей, которые хотят систематизировать имеющиеся знания или познакомиться с ключевыми аспектами новой для себя сферы управленческой деятельности'
        : at.course
        ? at.en
          ? ''
          : 'Программа повышения квалификации разработана для специалистов и руководителей, которые хотят систематизировать имеющиеся знания или познакомиться с ключевыми аспектами новой для себя сферы управленческой деятельности'
        : '',
      120
    ),
    canonical: `${routesFront.root}${routesFront.programsMbaOnline}`
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
      <SeoOrganizationJsonLd />
    </>
  )
}

export default SeoPagesPrograms
