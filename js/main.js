$(function () {

    function editHeaderScroll() {
        if ($(window).scrollTop() > 10) {
            $(".header").addClass("scroll");
        }
        else {
            $(".header").removeClass("scroll");
        }
    }

    $(window).on("scroll", function () {
        editHeaderScroll()
        revealOnScroll()
    });

    $(window).resize(function () {
        revealOnScroll();
    });

    function revealOnScroll() {
        if ($(window).width() > "760") {
            let bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            let top_of_screen = $(window).scrollTop();
            $(".revealOnScroll").each(function () {
                if (!$(this).hasClass("animated")) {
                    let top_of_element = $(this).offset().top;
                    let bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
                        if ($(this).attr("data-timeout")) {
                            window.setTimeout(function () {
                                $(this).addClass("animated " + $(this).attr("data-animation"));
                            }, parseInt($(this).attr("data-timeout")))
                        } else {
                            $(this).addClass("animated " + $(this).attr("data-animation"));
                        }
                    }
                }
                else {
                    let top_of_element = $(this).offset().top;
                    let bottom_of_element = $(this).offset().top + $(this).outerHeight();
                    if (!(bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
                        $(this).removeClass("animated " + $(this).attr("data-animation"));
                    }
                }
            })
        }
        else {
            $('.revealOnScroll').toggleClass('animated');
        }
    }

    $('.arrow-up').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    editHeaderScroll()
    revealOnScroll();
});

let teamSlider = new Swiper('.team-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    centeredSlides: true,
    loop: true,
    breakpoints: {
        280: {
            slidesPerView: 1.3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 80,
        },
    }
});

//Модальные окна

/**
 * Modal windows on page bottom
 * @param element
 * @constructor
 */

var $page = jQuery('body');

function Modal(element) {
    this.$modalContainer = jQuery(element);
    this.$modal = this.$modalContainer.find('.js-modal');

    jQuery('.js-modal-open').on('click', this.onOpenModalClick.bind(this));
    jQuery('.js-modal-close').on('click', this.onCloseModalClick.bind(this));
    jQuery('.js-modal-close-all').on('click', this.closeAllModal.bind(this));
    this.$modal.on('openModal', this.onOpenModal.bind(this));
}

Modal.prototype.onOpenModal = function (ev) {
    this.openModal(jQuery(ev.currentTarget).attr('id'));
};

Modal.prototype.onOpenModalClick = function (ev) {
    ev.preventDefault();
    this.openModal(jQuery(ev.currentTarget).data('modal-id'));
};

Modal.prototype.onCloseModalClick = function (ev) {
    ev.preventDefault();
    this.closeModal(jQuery(ev.currentTarget).data('modal-id'));
};

Modal.prototype.openModal = function (id) {
    var $modal = this.$modal.filter('#' + id);
    if ($modal.length === 0) return;

    this.$modalContainer.fadeIn();

    this.$modal.removeClass('open');

    $modal.addClass('open');

    bodyLock()

};

Modal.prototype.closeModal = function (id) {
    var $modal = this.$modal.filter('#' + id);
    if ($modal.length === 0) return;
    $modal.removeClass('open');
    if (this.$modal.filter('open').length === 0) {
        this.$modalContainer.fadeOut();
    }
};

Modal.prototype.closeAllModal = function (id) {
    this.$modal.removeClass('open');
    this.$modalContainer.fadeOut();
    bodyUnLock()
};


jQuery.extend(jQuery.validator.messages, {
    required: "Пожалуйста, заполните поле",
    remote: "Введите правильное значение",
    email: "Введите корректный email адрес",
    url: "Введите корректный URL",
    date: "Введите корректную дату",
    dateISO: "Введите корректную дату в формате ISO",
    number: "Введите число",
    digits: "Введите только цифры",
    creditcard: "Введите правильный номер кредитной карты",
    equalTo: "Введите такое же значение ещё раз",
    extension: "Загрузите изображение, документ или архив",
    maxlength: jQuery.validator.format("Введите не больше {0} символов"),
    minlength: jQuery.validator.format("Введите не менее {0} символов"),
    rangelength: jQuery.validator.format("Введите значение длиной от {0} до {1} символов"),
    range: jQuery.validator.format("Введите число от {0} до {1}"),
    max: jQuery.validator.format("Введите число меньше {0}"),
    min: jQuery.validator.format("Введите число больше {0}"),
    phone: "Введите корректный номер телефона",
});

/** Form loader
*  @param form
*/

function formLoader(form) {
    var $form = jQuery(form);
    var isInitialized = $form.hasClass('form-initialized');
    if (isInitialized) return;
    $form.addClass('form-initialized');
    var controllerName = $form.data('controller');
    if (typeof this[controllerName] != 'function') controllerName = 'Form';
    new this[controllerName](form);
}

function Form(form) {
    this.init(form);
}

/* Form initialization */


Form.prototype.init = function (form) {
    this.$form = jQuery(form);
    this.$form.find('.input, .textarea').each(function () {
        new Input(this);
    });
    this.validater();
    this.mask();
};
/* Form validation */


Form.prototype.validater = function () {

    this.validator = this.$form.validate({
        focusInvalid: true,
        highlight: function (element) {
            var $element = jQuery(element);
            var $row = $element.closest('.input-wrapper');
            $row.addClass('error');
        }.bind(this),
        unhighlight: function (element) {
            var $element = jQuery(element);
            var $row = $element.closest('.input-wrapper');
            $row.removeClass('error');
        }.bind(this),
        invalidHandler: function (e, validator) {
            var errors = validator.numberOfInvalids();
            console.log(errors);
        }.bind(this),
        submitHandler: function (el, ev) {
            if (this.$form.valid()) {
                this.submitForm(ev);
            } else {
                this.validator.focusInvalid();
            }
        }.bind(this),
    }
    );
};

/* Form mask */
$.jMaskGlobals.translation["d"] = $.jMaskGlobals.translation["9"];
delete $.jMaskGlobals.translation["9"];

Form.prototype.mask = function () {
    this.$form.find('input[type="tel"]').mask('+7 900 000 00 00');
};

/* Form submit handler */
Form.prototype.submitForm = function (ev) {
    var ajaxurl = '/wp-admin/admin-ajax.php';
    var formData = new FormData(this.$form[0]);
    // for (var pair of formData.entries()) {
    //     console.log(pair[0]+ ', ' + pair[1]);
    // }
    // return false;
    jQuery.ajax({
        url: ajaxurl,
        method: 'post',
        action: formData.get('action'),
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            console.log(response);

            if (response.SUCCESS == 'Y') {
                if (response.HTML) {
                    jQuery(this.$form).html(response.HTML);
                }
            }

            if (response.SUCCESS == 'N') {
                if (response.MESSAGE) {
                    jQuery(this.$form).html(response.MESSAGE);
                }
            }
        }.bind(this)
    });
};

/**
 * Input element (add class for empty fields)
 * @param el
 * @constructor
 */
function Input(el) {
    this.$wrapper = jQuery(el);
    this.$input = this.$wrapper.find('input, textarea');
    this.$input.on('change', this.checkEmpty.bind(this));
    this.$input.on('input', this.checkEmpty.bind(this));

    this.checkEmpty();
}

Input.prototype.checkEmpty = function () {
    let val = this.$input.val();
    let placeholder = this.$input.attr('placeholder');
    this.$wrapper.toggleClass('empty', val.length === 0 && (!placeholder || placeholder.length === 0));
};

window.onload = initPage;

function initPage() {
    jQuery('form[data-controller]').each(function () { formLoader(this) });
    $page.find('.js-modal-container').each(function () {
        new Modal(this)
    });
}

const lockPadding = document.querySelectorAll('.lock-padding')
const wrapper = document.querySelector('.wrapper')
function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if (lockPadding.length > 0) {
        lockPadding.forEach((el) => {
            el.style.paddingRight = lockPaddingValue
        })
    }

    document.body.style.paddingRight = lockPaddingValue;

    document.body.classList.add('fixed');
}
function bodyUnLock() {
    document.body.style.paddingRight = '0'

    document.body.classList.remove('fixed')

    if (lockPadding.length > 0) {
        lockPadding.forEach((el) => {
            el.style.paddingRight = '0px'
        })
    }
}
