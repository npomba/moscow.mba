import Head from 'next/head'

const online = () => {
  return (
    <>
      <Head>
        <title>Online MBA</title>
      </Head>

      {/* jumbotron-section */}
      <section className='jumbotron-section'>
        <div className='image'>
          <img src='/assets/images/jumbotron_2.jpg' alt='' />
        </div>
        <div className='container'>
          <div className='jumbotron-content'>
            <div className='breadcrumbs-outer jumbotron-breadcrumbs'>
              <ul className='breadcrumbs'>
                <li>
                  <a href=''>Программы MBA</a>
                </li>
                <li>
                  <a href=''>Mini MBA</a>
                </li>
                <li>
                  <span>Mini MBA</span>
                </li>
              </ul>
            </div>
            <div className='jumbotron-top'>
              <div className='jumbotron-discount'>
                <div className='size'>-30%</div>
                <span>до 20 ноября</span>
              </div>
              <div className='jumbotron-label'>
                <span>MBA ONLINE</span>
              </div>
            </div>
            <div className='jumbotron-flex'>
              <div className='jumbotron-text'>
                <h1>Управление инновационной деятельностью</h1>
                <div className='desc'>
                  Оставьте заявку и получите консультацию по программе, а также
                  узнайте возможные варианты скидок и требования к поступлению
                </div>
                <a href='' className='button white-button'>
                  Оставить заявку
                </a>
              </div>
              <ul className='jumbotron-list'>
                <li>
                  <div className='number'>2020</div>
                  <p>Новейшая программа 2020 года</p>
                </li>
                <li>
                  <div className='number'>150+</div>
                  <p>международных экспертов</p>
                </li>
                <li>
                  <div className='number'>2000+</div>
                  <p>студентов по всему миру</p>
                </li>
              </ul>
            </div>
            <ul className='jumbotron-red-info'>
              <li>
                <p>Срок обучения:</p>
                <div className='detail'>3 года 6 месяцев</div>
              </li>
              <li>
                <p>Форма обучения:</p>
                <div className='detail'>Дистансционное</div>
              </li>
              <li>
                <p>Ближайшее зачисление:</p>
                <div className='detail'>23 января</div>
              </li>
              <li>
                <p>Стоимость:</p>
                <div className='detail'>
                  <span className='old-price'>390 000 &#8381;</span>
                  <span className='new-price'>540 000 Р.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className='container'>
        {/* purpose-section */}
        <section className='purpose-section'>
          <div className='section-pl'>
            <h2>Цель программы</h2>
            <div className='title-desc'>
              Систематизация знаний в области инноваций, прокачка навыков
              по запуску инновационных проектов и их продвижению, освоение
              знаний инновационного менеджмента. Ключевой навык, который
              Вы получите после освоения программы — это умение выстраивать
              процесс инновационной деятельности, в том числе с активным
              привлечением внешних участников инновационного процесса.
            </div>
          </div>
        </section>

        {/* learning-section */}
        <section className='learning-section'>
          <div className='learning-content clearfix'>
            <div className='section-pl floatLeft'>
              <h2>
                Чему <br />
                вы научитесь?
              </h2>
            </div>
            <div className='floatRight'>
              <ul className='learning-list'>
                <li>
                  Получите необходимые знания о различных видах и функциях
                  современного менеджмента
                </li>
                <li>Освоите необходимые навыки в ключевых сферах управления</li>
                <li>
                  Узнаете основы инновационного менеджмента и инновационной
                  политики
                </li>
                <li>Разберетесь в особенностях коммерциализации разработок</li>
                <li>
                  Научитесь строить бизнес-акселераторы и бизнес-инкубаторы
                  внутри организации
                </li>
                <li>
                  Сможете эффективно управлять интеллектуальным капиталом
                  и изменениями в компании
                </li>
              </ul>
            </div>
            <div className='floatLeft'>
              <div className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/learning_pic_1.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </section>

        {/* top-path-section */}
        <section className='top-path-section'>
          <div className='top-path-content'>
            <div className='title-pl'>Топ 2020</div>
            <h2>MBA mini online — путь руководителя к росту</h2>
            <div className='title-desc'>
              Программа профессиональной переподготовки Mini MBA разработана для
              специалистов и руководителей среднего звена, которые хотят
              систематизировать имеющиеся знания или познакомиться с ключевыми
              аспектами новой для себя сферы управленческой деятельности.
            </div>
          </div>
          <div className='image'>
            <img
              className='lazyload'
              data-src='/assets/images/top_path_pic_1.jpg'
              alt=''
            />
          </div>
        </section>

        {/* advantages-section */}
        <section className='advantages-section section-pl'>
          <div className='title-pl red'>online</div>
          <h2>На MBA mini мы обучаем онлайн. И делаем это качественно</h2>
          <div className='advantages-content'>
            <ul className='advantages-list'>
              <li>
                <div className='circle'>
                  <img src='/assets/images/icon_check_red.svg' alt='' />
                </div>
                <div>
                  <h5>Учитесь из любой точки мира</h5>
                  <p>
                    Обучение проходит на нашей образовательной платформе. Всё
                    собрано в личном кабинете: здесь удобно смотреть расписание,
                    изучать материалы, записи прошедших лекций, загружать
                    задания и получать по ним обратную связь.
                  </p>
                </div>
              </li>
              <li>
                <div className='circle'>
                  <img src='/assets/images/icon_check_red.svg' alt='' />
                </div>
                <div>
                  <h5>Онлайн-формат даёт возможность учиться у лучших</h5>
                  <p>
                    Благодаря онлайн-формату вы можете пройти программу с
                    преподавателями сразу из нескольких топовых бизнес-школ
                    мира. Мы хотим, чтобы ценные знания были доступны вам при
                    любых обстоятельствах
                  </p>
                </div>
              </li>
              <li>
                <div className='circle'>
                  <img src='/assets/images/icon_check_red.svg' alt='' />
                </div>
                <div>
                  <h5>Получаете престижные дипломы</h5>
                  <p>
                    Дипломы MBA mini online не отличается от дипломов очных
                    программ за счет того, что преподают те же спикеры по тем же
                    учебным прграммам
                  </p>
                </div>
              </li>
              <li>
                <div className='circle'>
                  <img src='/assets/images/icon_check_red.svg' alt='' />
                </div>
                <div>
                  <h5>Общайтесь с преподавателями online</h5>
                  <p>
                    На MBA mini online у Вас есть возможность задавать вопросы
                    преподавателям во время видео-встреч, а также через нашу
                    образовательную платформу
                  </p>
                </div>
              </li>
            </ul>
            <div className='right-image'>
              <img
                className='lazyload'
                data-src='/assets/images/advantages_pic_1.jpg'
                alt=''
              />
            </div>
          </div>
        </section>

        {/* process-section */}
        <section className='process-section'>
          <div className='process-content'>
            <h2>Как проходит процесс обучения</h2>
            <div className='process-info'>
              <ul className='process-step-tabs'>
                <li>
                  <a href='#process-step-1' className='active'>
                    Поступление
                  </a>
                </li>
                <li>
                  <a href='#process-step-2'>Обучение</a>
                </li>
                <li>
                  <a href='#process-step-3'>Помощь и обратная связь</a>
                </li>
                <li>
                  <a href='#process-step-4'>Завершение обучения</a>
                </li>
              </ul>
              <div id='process-step-1' className='process-step-block'>
                <div className='number'>1</div>
                <div className='title'>Поступление</div>
                <ul className='simple-list'>
                  <li>
                    Вы проходите собеседование со специалистом приемной
                    комиссии, подписываете договор, осуществляете оплату и
                    получаете доступ в образовательную платформу.
                  </li>
                  <li>
                    Ваш личный куратор презентует и расскажет о процессе
                    обучения на вводном персональном занятии.
                  </li>
                  <li>
                    В личном кабинете вам доступна вся информация по обучению:
                    модули, график мероприятий, видео лекции и другие сервисы.
                  </li>
                </ul>
              </div>
              <div id='process-step-2' className='process-step-block'>
                <div className='number'>2</div>
                <div className='title'>Обучение</div>
                <ul className='simple-list'>
                  <li>
                    В личном кабинете вам доступна вся информация по обучению:
                    модули, график мероприятий, видео лекции и другие сервисы.
                  </li>
                  <li>
                    Ваш личный куратор презентует и расскажет о процессе
                    обучения на вводном персональном занятии.
                  </li>
                  <li>
                    Вы проходите собеседование со специалистом приемной
                    комиссии, подписываете договор, осуществляете оплату и
                    получаете доступ в образовательную платформу.
                  </li>
                </ul>
              </div>
              <div id='process-step-3' className='process-step-block'>
                <div className='number'>3</div>
                <div className='title'>
                  Помощь и обратная связь от преподавателей
                </div>
                <ul className='simple-list'>
                  <li>
                    В личном кабинете вам доступна вся информация по обучению:
                    модули, график мероприятий, видео лекции и другие сервисы.
                  </li>
                  <li>
                    Вы проходите собеседование со специалистом приемной
                    комиссии, подписываете договор, осуществляете оплату и
                    получаете доступ в образовательную платформу.
                  </li>
                  <li>
                    Ваш личный куратор презентует и расскажет о процессе
                    обучения на вводном персональном занятии.
                  </li>
                </ul>
              </div>
              <div id='process-step-4' className='process-step-block'>
                <div className='number'>4</div>
                <div className='title'>Завершение обучения</div>
                <ul className='simple-list'>
                  <li>
                    Ваш личный куратор презентует и расскажет о процессе
                    обучения на вводном персональном занятии.
                  </li>
                  <li>
                    Вы проходите собеседование со специалистом приемной
                    комиссии, подписываете договор, осуществляете оплату и
                    получаете доступ в образовательную платформу.
                  </li>
                  <li>
                    В личном кабинете вам доступна вся информация по обучению:
                    модули, график мероприятий, видео лекции и другие сервисы.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* training-section */}
        <section className='training-section'>
          <div className='section-pl'>
            <h2>Программа обучения</h2>
            <ul className='training-red-list'>
              <li>
                <div className='number'>20</div>
                <p>дисциплин базовой части</p>
              </li>
              <li>
                <div className='number'>7</div>
                <p>дисциплин специализации</p>
              </li>
            </ul>
            <h3>Базовые дисциплины</h3>
          </div>
          <div className='training-list'>
            <div className='training-block'>
              <div className='training-modul'>
                <div className='plus'>
                  <i></i>
                  <i></i>
                </div>
                1 модуль
              </div>
              <div className='training-content'>
                <ul className='simple-list'>
                  <li>
                    Бизнес-стратегия в эпоху цифровизации: как изменить
                    бизнес-модель и сделать технологию конкурентным
                    преимуществом.
                  </li>
                  <li>Что такое подрывные инновации и как их предвидеть.</li>
                  <li>Платформы и экосистемы как основа цифрового бизнеса.</li>
                  <li>
                    Стратегия голубого океана и создание новых ценностных
                    кривых.
                  </li>
                </ul>
              </div>
            </div>
            <div className='training-block'>
              <div className='training-modul'>
                <div className='plus'>
                  <i></i>
                  <i></i>
                </div>
                2 модуль
              </div>
              <div className='training-content'>
                <ul className='simple-list'>
                  <li>
                    Основы современного маркетинга: модели, каналы и инструменты
                    B2C- и B2B-маркетинга в цифровой среде.
                  </li>
                  <li>
                    Основы современного маркетинга: модели, каналы и инструменты
                    B2C- и B2B-маркетинга в цифровой среде.
                  </li>
                  <li>Управление взаимоотношениями с клиентами.</li>
                  <li>
                    Принципы использования маркетинговой аналитики и больших
                    данных в современном бизнесе.
                  </li>
                </ul>
              </div>
            </div>
            <div className='training-block'>
              <div className='training-modul'>
                <div className='plus'>
                  <i></i>
                  <i></i>
                </div>
                3 модуль
              </div>
              <div className='training-content'>
                <ul className='simple-list'>
                  <li>
                    Бизнес-стратегия в эпоху цифровизации: как изменить
                    бизнес-модель и сделать технологию конкурентным
                    преимуществом.
                  </li>
                  <li>Что такое подрывные инновации и как их предвидеть.</li>
                  <li>Платформы и экосистемы как основа цифрового бизнеса.</li>
                </ul>
              </div>
            </div>
            <div className='training-block'>
              <div className='training-modul'>
                <div className='plus'>
                  <i></i>
                  <i></i>
                </div>
                4 модуль
              </div>
              <div className='training-content'>
                <ul className='simple-list'>
                  <li>
                    Основы современного маркетинга: модели, каналы и инструменты
                    B2C- и B2B-маркетинга в цифровой среде.
                  </li>
                  <li>
                    Основы современного маркетинга: модели, каналы и инструменты
                    B2C- и B2B-маркетинга в цифровой среде.
                  </li>
                  <li>Управление взаимоотношениями с клиентами.</li>
                  <li>
                    Принципы использования маркетинговой аналитики и больших
                    данных в современном бизнесе.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* about-detail-section */}
        <section className='about-detail-section'>
          <div className='section-pl'>
            <div className='title-pl'>о компании</div>
            <div className='about-detail-content'>
              <h2>
                Российские и <span className='red'>зарубежные </span>эксперты
                программы
              </h2>
              <div className='text'>
                Перенимайте уникальный опыт международных экспертов,
                адаптированный под рынок РФ
              </div>
              <div className='dobble-images about-detail-images'>
                <div className='image pic-1'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/speaker_1.jpg'
                    alt=''
                  />
                </div>
                <div className='image pic-2'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/speaker_2.jpg'
                    alt=''
                  />
                </div>
              </div>
              <ul className='about-detail-list'>
                <li>
                  <div className='circle'>
                    <img src='/assets/images/icon_check.svg' alt='' />
                  </div>
                  <div>
                    <h5>Практикующие специалисты</h5>
                    <p>Реализовывали крупные проекты на рынках Европы и США</p>
                  </div>
                </li>
                <li>
                  <div className='circle'>
                    <img src='/assets/images/icon_check.svg' alt='' />
                  </div>
                  <div>
                    <h5>Прошли многоэтапную проверку</h5>
                    <p>
                      Прошли многоэтапную проверку Moscow Academy и имеют
                      аккредитацию на преподавание
                    </p>
                  </div>
                </li>
                <li>
                  <div className='circle'>
                    <img src='/assets/images/icon_check.svg' alt='' />
                  </div>
                  <div>
                    <h5>Международный опыт преподавания</h5>
                    <p>Преподают в ведущих бизнес-школах мира</p>
                  </div>
                </li>
              </ul>
              <h3>Более 150 профессоров международного уровня</h3>
            </div>
          </div>
          <ul className='about-teachers-list'>
            <li>
              <div className='about-teachers-block'>
                <a href='' className='image'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/teacher_1.jpg'
                    alt=''
                  />
                </a>
                <div>
                  <div className='name'>Александр Иванов</div>
                  <p>
                    Исполнительный директор Центра энергетики Московской школы
                    управления СКОЛКОВО
                  </p>
                  <a href='' className='link'>
                    <span>Биография</span>
                    <img src='/assets/images/arrow_right.svg' alt='' />
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className='about-teachers-block'>
                <a href='' className='image'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/teacher_2.jpg'
                    alt=''
                  />
                </a>
                <div>
                  <div className='name'>Семен Фролов</div>
                  <p>
                    Исполнительный директор Центра энергетики Московской школы
                    управления СКОЛКОВО
                  </p>
                  <a href='' className='link'>
                    <span>Биография</span>
                    <img src='/assets/images/arrow_right.svg' alt='' />
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className='about-teachers-block'>
                <a href='' className='image'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/teacher_3.jpg'
                    alt=''
                  />
                </a>
                <div>
                  <div className='name'>Валентин Земин</div>
                  <p>
                    Исполнительный директор Центра энергетики Московской школы
                    управления СКОЛКОВО
                  </p>
                  <a href='' className='link'>
                    <span>Биография</span>
                    <img src='/assets/images/arrow_right.svg' alt='' />
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className='about-teachers-block'>
                <a href='' className='image'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/teacher_4.jpg'
                    alt=''
                  />
                </a>
                <div>
                  <div className='name'>Александр Иванов</div>
                  <p>
                    Исполнительный директор Центра энергетики Московской школы
                    управления СКОЛКОВО
                  </p>
                  <a href='' className='link'>
                    <span>Биография</span>
                    <img src='/assets/images/arrow_right.svg' alt='' />
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className='about-teachers-block'>
                <a href='' className='image'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/teacher_3.jpg'
                    alt=''
                  />
                </a>
                <div>
                  <div className='name'>Валентин Земин</div>
                  <p>
                    Исполнительный директор Центра энергетики Московской школы
                    управления СКОЛКОВО
                  </p>
                  <a href='' className='link'>
                    <span>Биография</span>
                    <img src='/assets/images/arrow_right.svg' alt='' />
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className='about-teachers-block'>
                <a href='' className='image'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/teacher_4.jpg'
                    alt=''
                  />
                </a>
                <div>
                  <div className='name'>Александр Иванов</div>
                  <p>
                    Исполнительный директор Центра энергетики Московской школы
                    управления СКОЛКОВО
                  </p>
                  <a href='' className='link'>
                    <span>Биография</span>
                    <img src='/assets/images/arrow_right.svg' alt='' />
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className='about-teachers-block'>
                <a href='' className='image'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/teacher_1.jpg'
                    alt=''
                  />
                </a>
                <div>
                  <div className='name'>Александр Иванов</div>
                  <p>
                    Исполнительный директор Центра энергетики Московской школы
                    управления СКОЛКОВО
                  </p>
                  <a href='' className='link'>
                    <span>Биография</span>
                    <img src='/assets/images/arrow_right.svg' alt='' />
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className='about-teachers-block'>
                <a href='' className='image'>
                  <img
                    className='lazyload'
                    data-src='/assets/images/teacher_2.jpg'
                    alt=''
                  />
                </a>
                <div>
                  <div className='name'>Семен Фролов</div>
                  <p>
                    Исполнительный директор Центра энергетики Московской школы
                    управления СКОЛКОВО
                  </p>
                  <a href='' className='link'>
                    <span>Биография</span>
                    <img src='/assets/images/arrow_right.svg' alt='' />
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <div className='about-teachers-link'>
            <a href='' className='button'>
              запросить полный список
            </a>
          </div>
        </section>

        {/* actual-section */}
        <section className='actual-section'>
          <div className='section-pl'>
            <h2>Только актуальный контент</h2>
          </div>
          <div className='actual-content'>
            <div className='actual-content-top'>
              <div className='desc'>
                MBAcademy записывает контент очных лекций, поэтому это хорошая
                возможность <strong className='red'>получить MBA </strong>не
                посящая наши кампусы.
              </div>
              <div className='right-image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/actual_pic_2.jpg'
                  alt=''
                />
              </div>
            </div>
            <div className='actual-bottom-image'>
              <img
                className='lazyload'
                data-src='/assets/images/actual_pic_1.jpg'
                alt=''
              />
            </div>
          </div>
          <div className='section-pl'>
            <ul className='actual-content-list'>
              <li>
                <div className='number'>2020 год</div>
                <p>Новейшая программа 2020 года</p>
              </li>
              <li>
                <div className='number'>53 эксперта</div>
                <p>международных экспертов</p>
              </li>
              <li>
                <div className='number'>ТОП 3</div>
                <p>международных экспертов</p>
              </li>
            </ul>
          </div>
        </section>

        {/* clients-section */}
        <section className='clients-section'>
          <div className='section-pl'>
            <div className='clients-text'>
              <h2>
                Корпоративные <br />
                клиенты в России
              </h2>
              <p>
                Опыт наших экспертов используют многие ведущие компании России и
                стран СНГ. Наш опыт будет полезен не только гигантам
                промышленной, добывающей индустрии, крупным сетевикам, но и
                среднему и малому бизнесу.
              </p>
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

        {/* accreditations-section */}
        <section className='accreditations-section'>
          <div className='image'>
            <img
              className='lazyload'
              data-src='/assets/images/accreditations_pic_1.jpg'
              alt=''
            />
          </div>
          <div className='accreditations-content'>
            <h2>Аккредитации</h2>
            <div className='title-desc'>
              В России Moscow Business Academy имеет все лицензии и
              аккредитации, позволяющие готовить специалистов международного
              уровня по направлению MBA.
            </div>
            <ul className='accreditations-list'>
              <li>
                В частности аккредитацию НАСДОБР — самая престижная национальная
                аккредитация, учрежденная РАБО, Ассоциацией менеджеров, Деловой
                Россией при поддержке Государственной Думы РФ. Аккредитацию
                НАСДОБР имеют не более 10 организаций в России.
              </li>
              <li>
                Также Moscow Business Academy является членом Российской
                Ассоциации Бизнес Образования и имеет государственной лицензию,
                что подтверждает полное соответствие всех предоставляемых нами
                программ с образовательным стандартом РФ.
              </li>
            </ul>
            <a href='' className='accreditations-link'>
              <div className='pic'>
                <img src='/assets/images/icon_list.svg' alt='' />
              </div>
              <span>Лицензия Министерства Образования серия ... № ....</span>
            </a>
          </div>
        </section>

        {/* diplom-section */}
        <section className='diplom-section'>
          <div className='image'>
            <img
              className='lazyload'
              data-src='/assets/images/diplom_pic_1.jpg'
              alt=''
            />
          </div>
          <div className='content'>
            <h2>Ваш будущий диплом</h2>
            <div className='desc'>
              Международный диплом установленного образца с присвоением степени
              «Мастер делового администрирования» с европейским приложением
            </div>
            <div className='note'>
              Диплом MBA Online не отличается от дипломов очных программ за счет
              того, что преподают те же спикеры по тем же учебным планам
            </div>
          </div>
        </section>

        {/* students-section */}
        <section className='students-section section-pl'>
          <div className='title-pl red'>Более 2000</div>
          <div className='students-flex'>
            <div className='students-detail'>
              <h2>Наши студенты</h2>
              <div className='desc'>
                Вы станете частью эффективного нетворкинга по всему миру
              </div>
              <h4>Согласно опросу 2000 наших студентов:</h4>
              <ul className='students-list'>
                <li>
                  <div className='students-circle circle-js' data-value='0.96'>
                    <strong>96%</strong>
                  </div>
                  <p>остались довольны обучением</p>
                </li>
                <li>
                  <div className='students-circle circle-js' data-value='0.92'>
                    <strong>92%</strong>
                  </div>
                  <p>повысили показатели своих проектов</p>
                </li>
                <li>
                  <div className='students-circle circle-js' data-value='0.72'>
                    <strong>72%</strong>
                  </div>
                  <p>продвинулись по карьерной лестнице</p>
                </li>
              </ul>
            </div>
            <div className='dobble-images students-images'>
              <div className='image pic-1'>
                <img
                  className='lazyload'
                  data-src='/assets/images/students_pic_1.jpg'
                  alt=''
                />
              </div>
              <div className='image pic-2'>
                <img
                  className='lazyload'
                  data-src='/assets/images/students_pic_2.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </section>

        {/* reviews-section */}
        <section className='reviews-section'>
          <div className='section-pl'>
            <h2>О нас говорят</h2>
          </div>
          <div className='reviews-text-list'>
            <div className='reviews-text-block'>
              <div className='avatar'>
                <img
                  className='lazyload'
                  data-src='/assets/images/review_ava_1.jpg'
                  alt=''
                />
              </div>
              <div className='info'>
                <div className='text'>
                  <p>
                    С каждым занятием все больше понимаешь, что эти знания не
                    просто можно, а нужно применять на практике. То, что нам
                    давали на курсе, позволило мне не просто понять, что
                    нужно...
                    <a
                      href='#reviewModal'
                      className='link popup-open'
                      data-effect='mfp-zoom-in'
                    >
                      Читать
                    </a>
                  </p>
                </div>
                <div className='name'>Вячеслав Глухов</div>
                <div className='job'>Генеральный директор «Замбонфарма»</div>
              </div>
            </div>
            <div className='reviews-text-block'>
              <div className='avatar'>
                <img
                  className='lazyload'
                  data-src='/assets/images/review_ava_2.jpg'
                  alt=''
                />
              </div>
              <div className='info'>
                <div className='text'>
                  <p>
                    Очень удобный формат обучения – раз в месяц по три дня на
                    выходных. Упор на практику: спикеры – эксперты в своих
                    отраслях, находящиеся на передовой digital-бизнеса...
                    <a
                      href='#reviewModal'
                      className='link popup-open'
                      data-effect='mfp-zoom-in'
                    >
                      Читать
                    </a>
                  </p>
                </div>
                <div className='name'>Вячеслав Глухов</div>
                <div className='job'>Генеральный директор «Замбонфарма»</div>
              </div>
            </div>
          </div>
          <div className='reviews-preview-list'>
            <a href='' className='reviews-preview-block'>
              <div className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/review_prew_1.jpg'
                  alt=''
                />
              </div>
              <div className='content'>
                <div className='type'>Отзыв в формате статьи</div>
                <div className='name'>
                  Как Александр увеличил доход цементного завода после
                  прохождения MBA professional
                </div>
              </div>
            </a>
            <a
              href='https://www.youtube.com/watch?v=l6pDOwNeTrg'
              className='reviews-preview-block video-preview popup-youtube'
            >
              <div className='image'>
                <img
                  className='lazyload'
                  data-src='/assets/images/review_prew_2.jpg'
                  alt=''
                />
              </div>
              <div className='content'>
                <div className='play'>
                  <i></i>
                </div>
                <div className='name'>Видео отзыв</div>
              </div>
            </a>
          </div>
        </section>

        {/* program-price-section */}
        <section className='program-price-section'>
          <h2>Стоимость обучения</h2>
          <ul className='program-price-tabs'>
            <li>
              <a className='active' href='#program-price-1'>
                Professional Intensive
              </a>
            </li>
            <li>
              <a href='#program-price-2'>Professional</a>
            </li>
          </ul>
          <div className='program-price-flex'>
            <div id='program-price-1' className='program-price-block'>
              <div className='name'>
                Professional Intensive
                <div className='discount'>
                  <div className='size'>-30%</div>
                  <span>до 20 ноября</span>
                </div>
              </div>
              <ul className='simple-list'>
                <li>От 3 до 6 месяцев обучения</li>
                <li>Дистанционно</li>
                <li>Ближайший набор 20 ноября</li>
                <li>288 часа живого общения с экспертами</li>
                <li>40 дисциплин об управлении</li>
              </ul>
              <div className='note'>*Возможна рассрочка</div>
              <div className='price'>
                130 000 Р.
                <i className='old-price'>490 000 Р.</i>
              </div>
              <div className='button-block'>
                <a href='' className='button empty-button'>
                  Оставить заявку
                </a>
              </div>
              <a href='' className='cheaper-link'>
                Хочу дешевле
              </a>
            </div>
            <div id='program-price-2' className='program-price-block'>
              <div className='name'>Professional</div>
              <ul className='simple-list'>
                <li>От 3 до 6 месяцев обучения</li>
                <li>Дистанционно</li>
                <li>Ближайший набор 20 ноября</li>
                <li>288 часа живого общения с экспертами</li>
                <li>40 дисциплин об управлении</li>
              </ul>
              <div className='note'>*Возможна рассрочка</div>
              <div className='price'>190 000 Р.</div>
              <div className='button-block'>
                <a href='' className='button empty-button'>
                  Оставить заявку
                </a>
              </div>
              <a href='' className='cheaper-link'>
                Хочу дешевле
              </a>
            </div>
          </div>
        </section>

        {/* faq-section */}
        <section className='faq-section section-pl'>
          <div className='title-pl red'>Узнай все</div>
          <div className='faq-flex'>
            <div className='faq-description'>
              <h2>
                Вопросы <br />и ответы
              </h2>
              <div className='desc'>
                Задавайте вопросы на интересующую тему и наши менеджеры ответят
                вам в ближайшее время
              </div>
            </div>
            <div className='faq-content'>
              <div className='faq-block'>
                <div className='plus'>
                  <i></i>
                  <i></i>
                </div>
                <div className='faq-question'>
                  Какие выпускные документы я получу?
                </div>
                <div className='faq-answer'>
                  <p>
                    Программа профессиональной переподготовки Mini MBA
                    разработана для специалистов и руководителей среднего звена,
                    которые хотят систематизировать имеющиеся знания или
                    познакомиться с ключевыми аспектами новой для себя сферы
                    управленческой деятельности.
                  </p>
                </div>
              </div>
              <div className='faq-block'>
                <div className='plus'>
                  <i></i>
                  <i></i>
                </div>
                <div className='faq-question'>Кто наши преподаватели?</div>
                <div className='faq-answer'>
                  <p>
                    Программа профессиональной переподготовки Mini MBA
                    разработана для специалистов и руководителей среднего звена,
                    которые хотят систематизировать имеющиеся знания или
                    познакомиться с ключевыми аспектами новой для себя сферы
                    управленческой деятельности.
                  </p>
                </div>
              </div>
              <div className='faq-block'>
                <div className='plus'>
                  <i></i>
                  <i></i>
                </div>
                <div className='faq-question'>
                  Как получить рассрочку на обучение?
                </div>
                <div className='faq-answer'>
                  <p>
                    Программа профессиональной переподготовки Mini MBA
                    разработана для специалистов и руководителей среднего звена,
                    которые хотят систематизировать имеющиеся знания или
                    познакомиться с ключевыми аспектами новой для себя сферы
                    управленческой деятельности.
                  </p>
                </div>
              </div>
              <div className='faq-block'>
                <div className='plus'>
                  <i></i>
                  <i></i>
                </div>
                <div className='faq-question'>Как оплатить обучение?</div>
                <div className='faq-answer'>
                  <p>
                    Программа профессиональной переподготовки Mini MBA
                    разработана для специалистов и руководителей среднего звена,
                    которые хотят систематизировать имеющиеся знания или
                    познакомиться с ключевыми аспектами новой для себя сферы
                    управленческой деятельности.
                  </p>
                </div>
              </div>
              <div className='faq-block'>
                <div className='plus'>
                  <i></i>
                  <i></i>
                </div>
                <div className='faq-question'>Как проходит обучение?</div>
                <div className='faq-answer'>
                  <p>
                    Программа профессиональной переподготовки Mini MBA
                    разработана для специалистов и руководителей среднего звена,
                    которые хотят систематизировать имеющиеся знания или
                    познакомиться с ключевыми аспектами новой для себя сферы
                    управленческой деятельности.
                  </p>
                </div>
              </div>
              <div className='faq-block'>
                <div className='plus'>
                  <i></i>
                  <i></i>
                </div>
                <div className='faq-question'>Есть ли у вас очные модули?</div>
                <div className='faq-answer'>
                  <p>
                    Программа профессиональной переподготовки Mini MBA
                    разработана для специалистов и руководителей среднего звена,
                    которые хотят систематизировать имеющиеся знания или
                    познакомиться с ключевыми аспектами новой для себя сферы
                    управленческой деятельности.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* support-section */}
        <section className='support-section'>
          <h3>
            Не знаете что выбрать? <br />
            Получите консультацию по программам MBA
          </h3>
          <div className='text'>
            Оставьте заявку и получите консультацию по программам MBA, узнайте
            их стоимость, возможные варианты скидок и требования к поступлению
          </div>
          <form action='#' method='post' className='simple-form support-form'>
            <div className='inputs-flex'>
              <div className='input-block width-33'>
                <input type='text' />
                <div className='input-placeholder'>Введите имя</div>
              </div>
              <div className='input-block width-33'>
                <input type='text' />
                <div className='input-placeholder'>Номер телефона</div>
              </div>
              <div className='input-block width-33'>
                <button type='submit' className='button white-button'>
                  Оставить заявку
                </button>
              </div>
            </div>
            <div className='personal-datas'>
              Нажимая на кнопку, вы даете согласие на обработку своих
              <a href=''>персональных данных</a>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}

export default online
