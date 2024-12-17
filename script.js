let socialMedias = [
    {
        icon: '<i class="ri-facebook-fill"></i>',
        iconName: "Facebook",
    },
    {
        icon: '<i class="ri-youtube-fill"></i>',
        iconName: "Youtube",
    },
    {
        icon: '<i class="ri-instagram-fill"></i>',
        iconName: "Instagram",
    },
    {
        icon: '<i class="ri-pinterest-fill"></i>',
        iconName: "Pinterest",
    }

]
let selector = document.querySelector('.dropdown');
socialMedias.forEach((socialMedia) => {
    let option = document.createElement('div');
    option.classList.add('flex', 'gap-[10px]', 'text-white', 'border-b', 'p-2', 'option', 'cursor-pointer');
    let div = document.createElement('div');
    div.innerHTML = socialMedia.icon;
    let p = document.createElement('p');
    p.innerText = socialMedia.iconName;
    option.append(div, p);
    selector.append(option);
});

let dropdownIcon = document.querySelector('#dropdown-icon');
dropdownIcon.addEventListener('click', () => {
    let options = document.querySelectorAll('.option');
    let selectOption = document.querySelector('#select-option');
    if (selector.classList.contains('invisible')) {
        selector.classList.remove('invisible');
        dropdownIcon.classList.add('transform', 'rotate-180');
        options.forEach((option) => {
            option.addEventListener('click', (e) => {
                dropdownIcon.classList.remove('rotate-180');
                let clonedOption = option.cloneNode(true);
                clonedOption.style.border = "none";
                clonedOption.style.padding = "0px";
                selectOption.innerHTML = "";
                selectOption.append(clonedOption);
                selector.classList.add('invisible');
            })
        })
    }
    else {
        selector.classList.add('invisible');
        dropdownIcon.classList.remove('rotate-180');
    }
});




