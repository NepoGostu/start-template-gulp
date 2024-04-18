const tabs = () => {

    const tabsBinder = (tabSelector, contentSelector, activeClass, activeContent, displayProperty, isShow) => {
        let tabs = document.querySelectorAll(tabSelector),
            content = document.querySelectorAll(contentSelector),
            activeTab = activeContent - 1;

        try {

            function removeActiveTabClass() {
                tabs.forEach(tab => {
                    tab.classList.remove(activeClass);
                });
            }

            function hideContent() {
                content.forEach(contentItem => {
                    contentItem.style.display = 'none';
                });
            }

            if (tabSelector) {
                tabs[activeTab].classList.add(activeClass);
                hideContent();
                content[activeTab].style.display = displayProperty;
            }


            //скрывать контент при клике вне таба

            function handleClickOutside(event) {
                const isInsideTab = event.target.closest(tabSelector);

                if (!isInsideTab) {
                    removeActiveTabClass();
                    hideContent();
                }
            }

            if (isShow === true) document.addEventListener('click', handleClickOutside);

            tabs.forEach((tab, tabIndex) => {

                tab.addEventListener('click', (event) => {
                    event.stopPropagation();
                    removeActiveTabClass();
                    hideContent();
                    tab.classList.add(activeClass);
                    content[tabIndex].style.display = displayProperty;
                });
            });
        } catch(error) {
            console.error(error);
        }
    }

    tabsBinder('[data-tab-trigger]', '[data-tab-content]','tab-content--active', 1, 'flex',  false);
}

export default tabs;