const modals = () => {
    function closeModal(modal) {
        if (modal) {
            modal.classList.remove("active");
        }
    }

    function openModal(modal) {
        if (modal) {
            modal.classList.add("active");
        }
    }

    function setupModal(modalSelector, btnTrig) {
        let btns = document.querySelectorAll(btnTrig);
        let modals = document.querySelectorAll(modalSelector);

        btns.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                const index = Array.from(btns).indexOf(btn);
                openModal(modals[index]);
            });
        });

        modals.forEach((modal) => {
            modal.addEventListener("click", (event) => {
                if (event.target === modal || event.target.classList.contains("close-modal")) {
                    closeModal(modal);
                }
            });
        });
    }

    setupModal(".modal-form", ".form-trig");
};

export default modals;
