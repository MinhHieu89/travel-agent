import $ from 'jquery';

class Modal {
    constructor() {
        this.openModalButton = $('.open-modal');
        this.modal = $('.modal');
        this.closeModalButton = $('.modal__close');
        this.events();
    }

    events() {
        // Click the open button
        this.openModalButton.click(this.openModal.bind(this));

        // Click the x close button
        this.closeModalButton.click(this.closeModal.bind(this));

        // Click any key
        $(document).keyup(this.keyPressedHandler.bind(this));
    }

    keyPressedHandler(e) {
        if (e.keyCode == 27) {
            this.closeModal();
        }
    }

    openModal() {
        this.modal.addClass('modal--is-visible');
        return false;   // Prevent defaut behavior of anchor tag.
    }

    closeModal() {
        this.modal.removeClass('modal--is-visible');
    }
}

export default Modal;