// $(function () {
//     $('#sidebarCollapse').on('click', function () {
//         $('#sidebar, #content').toggleClass('active');
//     });
// });

const demo = () => {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const testingClass = document.getElementById('testing-class');
    const footerNavbar = document.getElementById('footer-navbar');
    const explore = document.getElementById('nav-explore-mobile');
    console.log(sidebar);

    sidebar.classList.toggle('active');
    content.classList.toggle('active');
    testingClass.classList.toggle('active');
    footerNavbar.classList.toggle('active');
    explore.classList.toggle('active');
}
