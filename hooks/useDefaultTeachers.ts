import { useAt } from '@/hooks/index'

const useDefaultTeachers = () => {
  const at = useAt()

  return [
    {
      name: at.en ? 'Itskhak Pintosevich' : 'Ицхак Пинтосевич',
      desc: at.en
        ? ''
        : 'Эксперт по личностному росту и развитию бизнеса, почетный профессор университета «Синергия»',
      img: {
        src: '/assets/images/teachers/teacher-1.jpg',
        alt: at.en ? 'Itskhak Pintosevich' : 'Ицхак Пинтосевич'
      }
    },
    {
      name: at.en ? 'Ryakovskiy Sergey' : 'Ряковский Сергей',
      desc: at.en
        ? ''
        : 'Эксперт по стратегическому менеджменту. Автор многочисленных пособий по управлению персоналом',
      img: {
        src: '/assets/images/teachers/teacher-2.jpg',
        alt: at.en ? 'Ryakovskiy Sergey' : 'Ряковский Сергей'
      }
    },
    {
      name: at.en ? 'Konoplyanskiy Dmitriy' : 'Коноплянский Дмитрий',
      desc: at.en
        ? ''
        : 'Основатель сети ювелирных салонов в Москве и регионах. Советник группы «НЛМК», «НК РОСНЕФТЬ»',
      img: {
        src: '/assets/images/teachers/teacher-3.jpg',
        alt: at.en ? 'Konoplyanskiy Dmitriy' : 'Коноплянский Дмитрий'
      }
    },
    {
      name: at.en ? 'Borisov Aleksandr' : 'Борисов Александр',
      desc: at.en
        ? ''
        : 'Эксперт по бизнес-планированию, инвестиционному и финансовому анализу',
      img: {
        src: '/assets/images/teachers/teacher-4.jpg',
        alt: at.en ? 'Borisov Aleksandr' : 'Борисов Александр'
      }
    },
    {
      name: at.en ? 'Aleksandr Doderer' : 'Александр Додерер',
      desc: at.en
        ? ''
        : 'Основатель и глава агентства по стратегическим коммуникациям GRUPPE DREI.',
      img: {
        src: '/assets/images/teachers/teacher-5.jpg',
        alt: at.en ? 'Aleksandr Doderer' : 'Александр Додерер'
      }
    },
    {
      name: at.en ? 'Yannik Transhye' : 'Янник Траншье',
      desc: at.en
        ? ''
        : 'Эксперт в сфере инновационного менеджмента, технологический брокер, предприниматель',
      img: {
        src: '/assets/images/teachers/teacher-6.jpg',
        alt: at.en ? 'Yannik Transhye' : 'Янник Траншье'
      }
    },
    {
      name: at.en ? 'Baranova Tatyana' : 'Баранова Татьяна',
      desc: at.en
        ? ''
        : 'Эксперт по деловому этикету и протоколу. «Про ЭТИКЕТ», основатель образовательного проекта',
      img: {
        src: '/assets/images/teachers/teacher-7.jpg',
        alt: at.en ? 'Baranova Tatyana' : 'Баранова Татьяна'
      }
    },
    {
      name: at.en ? 'Dubovyk Serhey' : 'Дубовик Сергей',
      desc: at.en
        ? ''
        : 'Специалист в области продаж и управления коммерческой деятельностью.',
      img: {
        src: '/assets/images/teachers/teacher-8.jpg',
        alt: at.en ? 'Dubovyk Serhey' : 'Дубовик Сергей'
      }
    }
  ]
}

export default useDefaultTeachers
