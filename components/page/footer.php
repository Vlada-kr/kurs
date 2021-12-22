<footer class="footer">
    <div class="container">
        &copy; 2021. Все права защищены.
        <button class="js-modal-open" data-modal-id="modal-feedback">Кажется я выкупил иронию</button>
    </div>
</footer>
<svg style="display: none;">
    <symbol id="tel-icon" viewBox="0 0 512 512">
        <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z">
        </path>
    </symbol>
</svg>
<div class="modal-container js-modal-container">
    <div class="overlay js-modal-close-all"></div>
    <div class="modal menu js-modal" id="modal-menu">
        <div class="scroll-container">
            <div class="modal-menu__top">
                <span class="icon-close js-modal-close-all"></span>
            </div>
            <nav class="modal-menu">
                <ul class="modal-menu__list">
                    <li>
                        <a href="#">О компании</a>
                    </li>
                    <li>
                        <a href="#">Направления деятельности</a>
                    </li>
                    <li>
                        <a href="#">Объекты и клиенты</a>
                    </li>
                    <li>
                        <a href="#">Контроль качества</a>
                    </li>
                    <li>
                        <a href="#">Благодарности</a>
                    </li>
                </ul>
            </nav>
            <div class="modal-menu__bottom">
                <a href="tel:+8552530054" class="tel link-orange">8 (8552) 53 00 54</a>
                <a href="mailto:info@kitstroi.pro " class="mes">info@kitstroi.pro </a>
            </div>
        </div>
    </div>
</div>
<div class="modal-container js-modal-container">
    <div class="overlay js-modal-close-all"></div>
    <div class="modal js-modal" id="modal-feedback">
        <div class="modal-content-title">
            Обратная связь
            <span class="icon-close js-modal-close-all"></span>
        </div>
        <div class="scroll-container">
            <form action="#" data-controller="">
                <p>Молодцом! Если ты являешься специалистом в IT-сфере, то мы готовы рассмотреть тебя на вступление в наше небольшое сообщество. Если же тебе нужны услуги опытных специалистов, знающих своё дело, то рассказывай, что там тебе надо сделать и мы подумаем</p>
                <div class="input input-wrapper required">
                    <label class="input-label" for="feedback-name">Имя</label>
                    <input type="text" id="feedback-name" name="NAME" required>
                </div>
                <div class="input input-wrapper required">
                    <label class="input-label" for="feedback-name">Телефон</label>
                    <input type="tel" id="feedback-tel" name="TEL" required>
                </div>
                <input type="hidden" name="action" value="sendform">
                <button type="submit" class="ok_but btn">Отправить</button>
            </form>
        </div>
    </div>
</div>