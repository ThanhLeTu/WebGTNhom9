// Hiệu ứng khi tải trang: các thanh kỹ năng sẽ xuất hiện dần
document.addEventListener("DOMContentLoaded", function () {
    const skillLevels = document.querySelectorAll(".skill-level");
    skillLevels.forEach((skill) => {
        const width = skill.style.width; // Lấy giá trị width ban đầu
        skill.style.width = "0"; // Đặt về 0 ban đầu
        setTimeout(() => {
            skill.style.width = width; // Trả về giá trị gốc với hiệu ứng
        }, 500); // Delay nhẹ để thấy hiệu ứng
    });
});

// Hiệu ứng scroll mượt mà khi nhấn vào menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});