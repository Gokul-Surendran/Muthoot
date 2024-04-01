// tab links scroll
document.addEventListener("DOMContentLoaded", function () {
    const scrollableNav = document.querySelector(".qbc-product-tab__tab-out");
    const scrollRightBtn = document.querySelector(".qbc-product-tab__arrowr");
    const scrollLeftBtn = document.querySelector(".qbc-product-tab__arrowl");
    const tileContainer = document.querySelector('#myTab');
    const tiles = document.querySelectorAll(".qbc-product-tab__tab-out .nav-item");
  
    if(scrollLeftBtn){
      function setMinWidth() {
          const totalWidth = Array.from(tiles).reduce((sum, e) => sum + e.offsetWidth, 0);
          tileContainer.style.minWidth = totalWidth + 'px';
          if (totalWidth < 500) {
            scrollLeftBtn.style.display = 'none';
            scrollRightBtn.style.display = 'none';
        } else {
            scrollLeftBtn.style.display = 'block';
            scrollRightBtn.style.display = 'block';
        }
      }
    }
  
    function updateScrollButtons() {
        const isAtMinWidth = scrollableNav.scrollLeft <= 0;
        const isAtMaxRight = scrollableNav.scrollLeft + scrollableNav.clientWidth >= scrollableNav.scrollWidth;
  
        scrollLeftBtn.style.display = isAtMinWidth ? 'none' : 'block';
        scrollRightBtn.style.display = isAtMaxRight ? 'none' : 'block';
    }
  
    if(scrollRightBtn){
      window.onload = setMinWidth;
      scrollRightBtn.addEventListener("click", () => scrollableNav.scrollBy({ left: 120, behavior: "smooth" }));
      scrollLeftBtn.addEventListener("click", () => scrollableNav.scrollBy({ left: -120, behavior: "smooth" }));
      scrollableNav.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
    }
  });
  
  // tab active
  $('.nav-tabs li a').click(function (e) {
    //get selected href
    var href = $(this).attr('href');
  
    //set all nav tabs to inactive
    $('.nav-tabs li').removeClass('active');
    $('.nav-link').removeClass('active');
  
    //get all nav tabs matching the href and set to active
    $('.nav-tabs li a[href="' + href + '"]').closest('li').addClass('active');
  
    //active tab
    $('.tab-pane').removeClass('active');
    $('.tab-pane' + href).addClass('active');
  })