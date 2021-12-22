<!DOCTYPE html>
<html lang="ru">
<?php
include 'components/page/head.php';
?>

<body class="is-boxed has-animations">
    <div class="wrapper">

        <div class="content">
            <?php
            include 'components/page/header.php';
            ?>
            <main class="main">
                <section class="banner">
                    <div class="banner__video">
                        <div class="banner-down">DOWN</div>
                        <video src="video.mp4" preload="auto" autoplay="" muted="" loop="" playsinline="" type="video/mp4"></video>
                    </div>
                    <div class="container">
                        <div class="banner__inner">
                            <div class="banner__subtitle">КРЕАТИВНАЯ КОМАНДА</div>
                            <h1>
                                <span data-text="Мы Создаем Красивые">Мы Создаем Красивые</span>
                                <span data-text="Цифровые Продукты">Цифровые Продукты</span>
                            </h1>
                        </div>
                    </div>
                </section>
                <section class="about">
                    <div class="container">
                        <div class="about__inner">
                            <div class="about__img">
                                <img src="img/about.jpg" alt="">
                            </div>
                            <div class="about__text">
                                <h3>О нас</h3>
                                <h2>Мы - группа <br> IT - специалистов</h2>
                                <p>Поскольку зачастую наша деятельность напоминает какое-то шаманство или волшебство, мы называемся Wiz Group.</p>
                                <p>Можем наколдовать вам сайт, но это будет стоить дороже, чем у знакомого, который сделал бы быстрее и лучше, но ему задали слишком много домашки.</p>
                            </div>

                        </div>
                    </div>
                </section>
                <section class="text">
                    <div class="container">
                        <div class="text__inner">
                            <p>Процесс общения с нами напоминает ролевую игру, в которой будут стоп-слова: <span>Недорого. Оплата потом. Бюджет ограничен.</span></p>

                        </div>
                    </div>
                </section>
                <section class="projects">
                    <div class="container">
                        <h3>Работы</h3>
                        <div class="section__head">
                            <h2>Наши <span>лучшие</span> работы</h2>
                            <p>для наших работ мы черпаем вдохновение на следующих сайтах</p>
                        </div>
                    </div>
                    <div class="projects__items">
                        <a href="#" class="project" target="_blank">
                            <div class="project__img"><img src="img/work-1.jpg" alt=""></div>
                        </a>
                        <a href="#" class="project" target="_blank">
                            <div class="project__img"><img src="img/work-2.jpg" alt=""></div>
                        </a>
                        <a href="#" class="project" target="_blank">
                            <div class="project__img"><img src="img/work-3.jpg" alt=""></div>
                        </a>
                        <a href="#" class="project" target="_blank">
                            <div class="project__img"><img src="img/work-4.jpg" alt=""></div>
                        </a>
                        <a href="#" class="project" target="_blank">
                            <div class="project__img"><img src="img/work-5.jpg" alt=""></div>
                        </a>
                        <a href="#" class="project" target="_blank">
                            <div class="project__img"><img src="img/work-2.jpg" alt=""></div>
                        </a>
                    </div>
                </section>
                <section class="text">
                    <div class="container">
                        <div class="text__inner" style="max-width: 1000px;">
                            <p>
                                После небольшого исследования, проведенного нашей командой, было выявлено, что цена за нашу работу самая лучшая среди веб-студий
                                <span>(критерий лучшей цены: чем больше, тем лучше)</span>
                            </p>
                        </div>
                    </div>
                </section>
                <section class="process">
                    <div class="container">
                        <h3>Процесс</h3>
                        <h2>Как проходит наша <span>работа</span></h2>
                        <div class="process__items">
                            <div class="process__item">
                                <div class="process__item-number" style="background-image: url(img/process-1.png);">01</div>
                                <div class="process__item-name">Сроки</div>
                                <div class="process__item-descr">Мы могли бы сделать что вам нужно вчера, но мы сделаем когда сделаем</div>
                            </div>
                            <div class="process__item">
                                <div class="process__item-number" style="background-image: url(img/process-2.jpg);">02</div>
                                <div class="process__item-name">Дизайн</div>
                                <div class="process__item-descr">Дизайнеры нарисуют красивый дизайн как вы запросите и все дальнейшие правки вы сможете указывать в комментариях к платежам.</div>
                            </div>
                            <div class="process__item">
                                <div class="process__item-number" style="background-image: url(img/process-3.jpg);">03</div>
                                <div class="process__item-name">Гарантии</div>
                                <div class="process__item-descr">Мы не можем предоставить вам никаких гарантий</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="features">
                    <div class="container">
                        <h3>Преимущества</h3>
                        <div class="features__inner">
                            <div class="features__text">
                                <h2> <span>Поможем</span> создать креативный сайт</h2>
                                <div class="features__items">
                                    <div class="features__item">
                                        <div class="features__item-number">14</div>
                                        <div class="features__item-name">Недовольных клиентов</div>
                                    </div>
                                    <div class="features__item">
                                        <div class="features__item-number">2</div>
                                        <div class="features__item-name">Рабочих сайта</div>
                                    </div>
                                    <div class="features__item">
                                        <div class="features__item-number">17</div>
                                        <div class="features__item-name">Жалоб</div>
                                    </div>
                                    <div class="features__item">
                                        <div class="features__item-number">20</div>
                                        <div class="features__item-name">Нерабочих сайтов</div>
                                    </div>
                                </div>
                            </div>
                            <div class="features__text">
                                <p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Рукописи там предупреждал языком ipsum раз ведущими имеет, большого подпоясал.</p>
                                <img src="img/features.jpg" alt="">
                            </div>
                        </div>

                    </div>
                </section>

                <section class="experience">
                    <div class="container">
                        <div class="experience__inner">
                            <div class="experience__box">
                                <h2>Наши <span>навыки</span> и <br> умения</h2>
                                <p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Раз языкового продолжил по всей переписывается путь за приставка повстречался что.</p>
                            </div>
                            <div class="experience__box">
                                <div class="experience__item">
                                    <div class="experience__item-head">
                                        <div class="experience__item-name">Прокрастинация</div>
                                        <div class="experience__item-number">85%</div>
                                    </div>
                                    <div class="experience__item-line">
                                        <span style="max-width: 85%;"></span>
                                    </div>
                                </div>
                                <div class="experience__item">
                                    <div class="experience__item-head">
                                        <div class="experience__item-name">Делать в последний момент</div>
                                        <div class="experience__item-number">60%</div>
                                    </div>
                                    <div class="experience__item-line">
                                        <span style="max-width: 60%;"></span>
                                    </div>
                                </div>
                                <div class="experience__item">
                                    <div class="experience__item-head">
                                        <div class="experience__item-name">Быстро отвечать на сообщения</div>
                                        <div class="experience__item-number">70%</div>
                                    </div>
                                    <div class="experience__item-line">
                                        <span style="max-width: 70%;"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="conditions">
                    <div class="container">
                        <div class="conditions__inner">
                            <h3>Условия</h3>
                            <h2>Мы <span>работаем</span> по следующими условиями</h2>
                            <div class="conditions__text">
                                <p>Да-да, в отличии от остальных веб-студий мы не работаем с кем попало, кто готов платить и потенциальным клиентам у нас есть свои требования:</p>
                                <ul>
                                    <li>Если вы хотите красивый сайт, чтобы на нем была информация о вас или вашем продукте, люди бы туда заходили и что-то делали, то поздравляем: вы не знаете что хотите, а мы знаем, что не хотим иметь с вами дело, ну только если вы не готовы безбожно много нам платить;</li>

                                    <li>Если вы являетесь HR, то идите в пень, заколебали;</li>
                                    <li>Если вы не знаете, что такое техническое задание, то попробуйте нажать Ctrl + W.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="team">
                    <div class="container">
                        <h3>Команда</h3>
                        <h2>Наши <span>креативные</span> ребята</h2>
                        <div class="swiper team-slider">
                            <div class="swiper-wrapper">

                                <div class="swiper-slide">
                                    <div class="team__item">
                                        <div class="team__item-img">
                                            <img src="img/team-6.jpg" alt="">
                                        </div>
                                        <div class="team__item-info">
                                            <div class="team__item-name">Максим Ширинов</div>
                                            <div class="team__item-position">Знает синтаксис запросов
                                                в гугле наизусть</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="team__item">
                                        <div class="team__item-img">
                                            <img src="img/team-3.jpg" alt="">
                                        </div>
                                        <div class="team__item-info">
                                            <div class="team__item-name">Ирина Болгарева</div>
                                            <div class="team__item-position">Мастер фотошопа</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="team__item">
                                        <div class="team__item-img">
                                            <img src="img/team-2.jpg" alt="">
                                        </div>
                                        <div class="team__item-info">
                                            <div class="team__item-name">Андрей Баранов</div>
                                            <div class="team__item-position">Копипастер века</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="team__item">
                                        <div class="team__item-img">
                                            <img src="img/team-5.jpg" alt="">
                                        </div>
                                        <div class="team__item-info">
                                            <div class="team__item-name">Андрей Баранов</div>
                                            <div class="team__item-position">Копипастер века</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-button-next"></div>
                        </div>
                    </div>
                </section>

                <section class="reviews">
                    <div class="container">
                        <h3>Отзывы</h3>
                        <div class="section__head">
                            <h2>Наши <span>честныe</span> отзывы</h2>
                            <p>дабы избавить Вас от негатива часть отзывов мы скрыли</p>
                        </div>
                        <div class="reviews__items">
                            <div class="reviews__item">
                                <div class="reviews__item-date">05.12.2021</div>
                                <div class="reviews__item-author">Максим <span>Наш разработчик </span></div>
                                <div class="reviews__item-text">Сделали очень быстро, качественно сайт! Все работает отлично! </div>
                            </div>
                            <div class="reviews__item hide">
                                <div class="reviews__item-date">05.12.2021</div>
                                <div class="reviews__item-author">Машков Дмитрий <span>ООО "Компания" </span></div>
                                <div class="reviews__item-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, provident. </div>
                            </div>
                            <div class="reviews__item">
                                <div class="reviews__item-date">05.12.2021</div>
                                <div class="reviews__item-author">Ирина <span>Наш дизайнер </span></div>
                                <div class="reviews__item-text">Очень красиво, цвета гармоничные, анимации не напрягают. Ребяа молодцы </div>
                            </div>
                            <div class="reviews__item hide">
                                <div class="reviews__item-date">05.12.2021</div>
                                <div class="reviews__item-author">Ольга <span>Магазин </span></div>
                                <div class="reviews__item-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad expedita consectetur aperiam quod asperiores itaque placeat? Porro eaque placeat modi? </div>
                            </div>
                            <div class="reviews__item hide">
                                <div class="reviews__item-date">05.12.2021</div>
                                <div class="reviews__item-author">Александр <span>Название компании </span></div>
                                <div class="reviews__item-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, ea quibusdam repudiandae porro rerum cum. </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="conditions">
                    <div class="container">
                        <div class="conditions__inner">
                            <h3>Дополнительно</h3>
                            <h2> <span>Дополнительные</span> услуги</h2>
                            <div class="conditions__text">
                                <p>Помимо самой разработки сайта мы еще предоставляем следующие возможности для наших клиентов:</p>
                                <ul>
                                    <li>Размещение нашего логотипа на вашем сайте за небольшую ежемесячную плату;</li>
                                    <li>Остаться анонимным заказчиком и не попадать в нашу статистику и портфолио за небольшую разовую плату.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="text-bottom">
                    <div class="container">
                        <div class="text__inner">
                            <p>В чем заключается наша магия?
                                <span>Если Ваш сайт будет работать, то это настоящая магия</span>
                            </p>                           
                        </div>
                    </div>
                </section>
            </main>
        </div>

        <div class="footer">
            <?php
            include 'components/page/footer.php';
            ?>

        </div>
    </div>

    <?php
    include 'components/page/scripts.php';
    ?>

</body>

</html>