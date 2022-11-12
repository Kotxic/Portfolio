const button = document.querySelector('.header__logo__contain__left__link');
const button1=document.querySelector('.btn-success')
const button2=document.querySelector('.btn-success1')
const popup = document.querySelector('.input');
const container = document.querySelector('.input__container')
const toggleInput = () => {
  popup.classList.toggle('input_open');
}
button.addEventListener('click', () => {
  toggleInput();
});
button1.addEventListener('click', () => {
  toggleInput();
});
button2.addEventListener('click', () => {
  toggleInput();
});
document.addEventListener('click', e => {
  let target = e.target;
  let its_menu = target == container || container.contains(target);
  let its_hamburger = target == button;
  let menu_is_active = popup.classList.contains('input_open');
  console.log(its_menu)
  console.log(its_hamburger)
  console.log(menu_is_active)
  if (!its_menu && !its_hamburger && menu_is_active) {
    console.log("wdsdad")
    toggleInput();
  }
})