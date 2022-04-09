// $(function () {
//     $('#sidebarCollapse').on('click', function () {
//         $('#sidebar, #content').toggleClass('active');
//     });
// });

const demo = () => {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    console.log(sidebar);

    sidebar.classList.toggle('active');
    content.classList.toggle('active');
}
