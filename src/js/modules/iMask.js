import IMask from "imask";


//обязательное условие: <input type=text />

const iMask = () => {

    function NamePhone(inputElement) {
        let phoneInput = document.querySelectorAll(inputElement);
        phoneInput.forEach(function (item) {
            const maskOptions = {
                mask: '+7(000)000-00-00'
            };
            const mask = IMask(item, maskOptions);
        })
    }

    setTimeout(()=>{
        NamePhone('phone-input-js');
    }, 1000);
}


export default iMask;