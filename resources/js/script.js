// fullpy-N2 [LdlpiQPe4V]
(function() {
  $(function() {
    $(".fullpy-N2").each(function() {
      const $block = $(this);
      // Header Scroll
      $(window).on("load scroll", function() {
        const $thisTop = $(this).scrollTop();
        if ($thisTop > 0) {
          $block.addClass("header-top-active");
        } else {
          $block.removeClass("header-top-active");
        }
      });
      // Gnb
      $block.find(".header-center").on("mouseover", function() {
        if (window.innerWidth > 992) {
          $block.addClass("block-active");
        }
      });
      $block.find(".header-center").on("mouseout", function() {
        if (window.innerWidth > 992) {
          $block.removeClass("block-active");
        }
      });
      // Gnb DecoLine
      $block.find(".header-gnbitem").each(function() {
        const $this = $(this);
        $this.on("mouseover", function() {
          if (window.innerWidth > 992) {
            $this.find(".header-gnblink").addClass("on");
          }
        });
        $this.on("mouseout", function() {
          if (window.innerWidth > 992) {
            $this.find(".header-gnblink").removeClass("on");
          }
        });
      });
      // Mobile Top
      $block.find(".btn-momenu").on("click", function() {
        $block.addClass("mo-active");
      });
      $block.find(".btn-moclose").on("click", function() {
        $block.removeClass("mo-active");
      });
      // Mobile Gnb
      $block.find(".header-gnbitem").each(function() {
        const $this = $(this);
        const $thislink = $this.find(".header-gnblink");
        $thislink.on("click", function() {
          if (!$(this).parent().hasClass("item-active")) {
            $(".header-gnbitem").removeClass("item-active");
          }
          $(this).parents(".header-gnbitem").toggleClass("item-active");
        });
      });
      // Full Gnb
      $block.find(".btn-allmenu").on("click", function() {
        $block.find(".header-fullmenu").addClass("fullmenu-active");
      });
      $block.find(".fullmenu-close").on("click", function() {
        $block.find(".header-fullmenu").removeClass("fullmenu-active");
      });
      // Full Gnb DecoLine
      $block.find(".fullmenu-gnbitem").each(function() {
        const $this = $(this);
        $this.on("mouseover", function() {
          if (window.innerWidth > 992) {
            $this.find(".fullmenu-gnblink").addClass("on");
          }
        });
        $this.on("mouseout", function() {
          if (window.innerWidth > 992) {
            $this.find(".fullmenu-gnblink").removeClass("on");
          }
        });
      });
      // Header Mobile 1Depth Click
      if (window.innerWidth <= 992) {
        $(".fullmenu-gnbitem").each(function() {
          const $sublist = $(this).find(".fullmenu-sublist");
          if ($sublist.length) {
            $(this).find(".fullmenu-gnblink").attr("href", "javascript:void(0);");
          }
        });
      }
    });
  });
})();
// fullpy-N3 [LylpiQpE61]
(function() {
  $(function() {
    $(".fullpy-N3").each(function() {
      const $block = $(this);
      const $mainVisual = $block.find(".section-visual");
      const pauseButton = $mainVisual.find(".swiper-button-pause");
      const playButton = $mainVisual.find(".swiper-button-play");
      // Fullpage
      const Fullpage = $("#fullpy-N3").fullpage({
        scrollOverflow: true,
        navigation: true,
        navigationTooltips: ["page01", "page02", "page03", "page04", "page05", "footer display none", ],
        afterLoad: function(anchorLink, index) {
          const fullpageSection = $(".section").eq(index - 1);
          // Header Background Color
          if (fullpageSection.hasClass("section-visual")) {
            $(".fullpy-N2").removeClass("bg-on");
          } else {
            $(".fullpy-N2").addClass("bg-on");
          }
        },
        // Fullpage Tooltip
        afterRender: function() {
          if ($(".section").eq(0).hasClass("section-visual")) {
            $("#fp-nav").addClass("bg-white");
            $("#fp-nav").find(".fp-tooltip").addClass("color-white");
          }
        },
        onLeave: function(index, nextIndex, direction) {
          if (nextIndex === 1) {
            $("#fp-nav").addClass("bg-white");
            $("#fp-nav").find(".fp-tooltip").addClass("color-white");
          } else {
            $("#fp-nav").removeClass("bg-white");
            $("#fp-nav").find(".fp-tooltip").removeClass("color-white");
          }
        },
      });
      // Main Visual Swiper
      const swiper = new Swiper(".fullpy-N3 .contents-swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: false,
        loop: true,
        autoplay: {
          delay: 5000,
        },
        pagination: {
          el: ".fullpy-N3 .swiper-pagination",
          type: "fraction",
          clickable: true,
          renderFraction: function(currentClass, totalClass) {
            return ('<span class="' + currentClass + '"></span>' + '<span class="contents-deco"></span>' + '<span class="' + totalClass + '"></span>');
          },
        },
        navigation: {
          nextEl: ".fullpy-N3 .swiper-button-next",
          prevEl: ".fullpy-N3 .swiper-button-prev",
        },
      });
      // Swiper Play, Pause Button
      playButton.hide();
      pauseButton.show();
      pauseButton.on("click", function() {
        swiper.autoplay.stop();
        playButton.show();
        pauseButton.hide();
      });
      playButton.on("click", function() {
        swiper.autoplay.start();
        playButton.hide();
        pauseButton.show();
      });
    });
  });
})();