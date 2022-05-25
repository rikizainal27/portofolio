const nb = document.querySelector('.navigation');
const icon = nb.querySelectorAll('.material-symbols-rounded');
const ic = nb.querySelector('.material-symbols-rounded');
const sButton = document.querySelector('.search-input');
const back = sButton.querySelector('i');
const searchBtn = document.querySelector('.tombol');
const dark = document.querySelector('.dark');
const style = document.querySelector('link');
// dark mode
dark.addEventListener('click', function(){
  style.setAttribute('href','css/dark.css')
})
// navigation
ic.classList.replace('material-symbols-rounded','material-icons')
nb.addEventListener('click', function(e) {
  icon.forEach(function(icon) {
    if ( icon.classList.contains('active') ){
      icon.classList.remove('active');
    }
    if ( icon.classList.contains('material-icons') ){
    icon.classList.replace('material-icons', 'material-symbols-rounded')
    }
  });
  e.target.classList.add('active');
  e.target.classList.replace('material-symbols-rounded', 'material-icons')
})
// search engine
searchBtn.addEventListener('click', function(){
  sButton.style.display = 'flex';
  searchBtn.style.opacity = '0'
})
back.addEventListener('click', function(){
  sButton.style.display = 'none';
  searchBtn.style.opacity = '1'
})
function submitData() {
  const nilai = document.getElementById('name').value;
  alert(nilai);
}
