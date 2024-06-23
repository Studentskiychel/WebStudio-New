(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    function openModal() {
        refs.modal.classList.remove("is-hidden");
    }

    function closeModal() {
        refs.modal.classList.add("is-hidden");
    }

    refs.openModalBtn.addEventListener("click", openModal);
    refs.closeModalBtn.addEventListener("click", closeModal);


    refs.closeModalBtn.addEventListener("click", closeModal);
      })();