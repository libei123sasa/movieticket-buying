var movieImages = document.querySelectorAll('.reying_img img');
        movieImages.forEach(function (img) {
            var tooltip = img.title;
            img.title = '';
            var tooltipDiv = document.createElement('div');
            tooltipDiv.textContent = tooltip;
            tooltipDiv.style.display = 'none';
            img.parentNode.appendChild(tooltipDiv);
            var timeoutId;
            img.addEventListener('mouseenter', function () {
                tooltipDiv.style.display = 'block';
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
            });
            img.addEventListener('mouseleave', function () {
                timeoutId = setTimeout(function () {
                    tooltipDiv.style.display = 'none';
                }, 100); 
            });
        });