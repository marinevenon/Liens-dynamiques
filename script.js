function toggle() {
    let toggleIcon = document.querySelector('.ico01').addEventListener('mouseover', active);
    function active() {
        let wrapper = document.querySelector('.wrapper')
        wrapper.classList.toggle('active');
    }
}

toggle();