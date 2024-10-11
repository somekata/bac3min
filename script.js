document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slider a');
    const totalSlides = slides.length;

    function updateSlidePosition() {
        for (let i = 0; i < totalSlides; i++) {
            slides[i].style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    }

    function changeSlide(direction) {
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
        updateSlidePosition();
    }

    // 初期表示を更新
    updateSlidePosition();

    // 矢印ボタンがクリックされたときにスライドを変更
    document.querySelector('.prev').addEventListener('click', function() {
        changeSlide(-1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        changeSlide(1);
    });
});
