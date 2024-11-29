// 获取所有的 section 元素
const sections = document.querySelectorAll('.section');
// 检测是否进入视口的函数
function checkVisibility() {
    const viewportHeight = window.innerHeight;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= viewportHeight * 0.8) {
            section.classList.add('visible');
        }
    });
}
// 监听滚动事件
window.addEventListener('scroll', checkVisibility);
// 页面加载时先检查一次
checkVisibility();