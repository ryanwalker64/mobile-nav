const sidebar = document.getElementById('sidebar');
const sidebarBtn = document.getElementById('sidebarBtn')

sidebarBtn.addEventListener('click', (e) => {
    sidebar.classList.toggle('visible');
})

window.addEventListener('click', (e) => {
    console.log(e.target.classList);
   if (e.target.classList.includes('content') && sidebar.classList.includes('visible')) {
    sidebar.classList.toggle('visible');
   };
})



// add button to show sidebar
// hide sidebar
// show sidebar when btn is clicked
// hide sidebar when it's clicked again
// hide sidebar at mobile screen size and show button