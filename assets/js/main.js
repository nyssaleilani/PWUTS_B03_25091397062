
$(function () {
  const $content = $("#pageContent");
  const key = "alhikmah_news_v1";

  const pages = {
    berita: "pages/berita.html",
    "tambah-berita": "pages/tambah-berita.html"
  };

  // Mengatur menu yang sedang aktif
  function setActive(page) {
    $(".nav-link").removeClass("active");

    $('.nav-link[data-page="' + page + '"]')
      .addClass("active");
  }

  // Memuat halaman menggunakan AJAX
  function loadPage(page, push = true) {
    if (page === "home") {
      $content.empty();
      setActive("home");

      if (push) {
        history.pushState({ page }, "", "index.html");
      }

      return;
    }

    $content.html(
      '<p class="loading">Memuat halaman...</p>'
    );

    $.ajax({
      url: pages[page] || page,
      method: "GET",
      dataType: "html"
    })
      .done(function (html) {
        $content.html(html);
        setActive(page);

        if (push) {
          history.pushState(
            { page },
            "",
            "#" + page
          );
        }

        if (page === "berita") {
          renderSavedNews();
        }
      })
      .fail(function () {
        $content.html(
          '<div class="notice error">' +
          "Halaman gagal dimuat. Jalankan melalui Live Server " +
          "atau localhost, bukan dengan membuka file HTML langsung." +
          "</div>"
        );
      });
  }

  // Mengambil berita dari localStorage
  function getNews() {
    try {
      return JSON.parse(
        localStorage.getItem(key) || "[]"
      );
    } catch (e) {
      return [];
    }
  }

  // Menampilkan berita yang sudah disimpan
  function renderSavedNews() {
    const $grid = $("#newsGrid");

    // Mencegah berita tersimpan ditampilkan berulang
    $grid.find(".saved-news-card").remove();

    getNews().forEach(function (item) {
      const $card = $("<article>")
        .addClass("card news-card saved-news-card");

      $("<span>")
        .addClass("tag")
        .text("Berita baru")
        .appendTo($card);

      $("<p>")
        .addClass("news-date")
        .text(item.tanggal)
        .appendTo($card);

      $("<h3>")
        .text(item.judul)
        .appendTo($card);

      $("<p>")
        .text(
          item.isi.length > 130
            ? item.isi.slice(0, 130) + "…"
            : item.isi
        )
        .appendTo($card);

      $("<button>")
        .addClass("detail-button")
        .attr("type", "button")
        .attr("data-title", item.judul)
        .attr("data-detail", item.isi)
        .text("Baca detail →")
        .appendTo($card);

      $grid.prepend($card);
    });
  }

  // Navigasi menu
  $(document).on("click", "a[data-page]", function (e) {
    e.preventDefault();

    const page = $(this).data("page");

    loadPage(page);

    if (page !== "home") {
      $("#pageContent")[0].scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    $("#mainNav").removeClass("open");
  });

  // Menampilkan detail berita
  $(document).on("click", ".detail-button", function () {
    const title = $(this).attr("data-title");
    const detail = $(this).attr("data-detail");

    $("#newsDetail")
      .empty()
      .append(
        $("<h3>").text(title),
        $("<p>").text(detail)
      )
      .addClass("visible");
  });

  // Validasi dan penyimpanan formulir berita
  $(document).on("submit", "#newsForm", function (e) {
    e.preventDefault();

    $(".field-error").text("");

    const judul = $.trim($("#judul").val());
    const tanggal = $("#tanggal").val();
    const isi = $.trim($("#isi").val());
    const gambar = $.trim($("#gambar").val());

    let valid = true;

    if (judul.length < 5 || judul.length > 200) {
      $("#judulError").text(
        "Judul harus 5–200 karakter."
      );

      valid = false;
    }

    if (!tanggal) {
      $("#tanggalError").text(
        "Tanggal berita wajib diisi."
      );

      valid = false;
    }

    if (isi.length < 20) {
      $("#isiError").text(
        "Isi berita minimal 20 karakter."
      );

      valid = false;
    }

    const $status = $("#formStatus")
      .removeClass("error success")
      .text("");

    if (!valid) {
      $status
        .addClass("error")
        .text("Periksa kembali data yang ditandai.");

      return;
    }

    try {
      const all = getNews();

      all.unshift({
        judul: judul,
        tanggal: tanggal,
        isi: isi,
        gambar: gambar
      });

      localStorage.setItem(
        key,
        JSON.stringify(all)
      );

      $status
        .addClass("success")
        .text(
          "Berita berhasil disimpan di browser ini. " +
          "Buka menu Berita Sekolah untuk melihatnya."
        );

      this.reset();
    } catch (err) {
      $status
        .addClass("error")
        .text(
          "Penyimpanan browser tidak tersedia."
        );
    }
  });

  // Membersihkan pesan saat formulir di-reset
  $(document).on("reset", "#newsForm", function () {
    setTimeout(function () {
      $(".field-error").text("");

      $("#formStatus")
        .removeClass("error success")
        .text("");
    }, 0);
  });

  // Membuka dan menutup menu navigasi pada layar kecil
  $("#menuToggle").on("click", function () {
    $("#mainNav").toggleClass("open");
  });

  // Mendukung tombol Back dan Forward browser
  window.addEventListener("popstate", function (e) {
    loadPage(
      (e.state && e.state.page) ||
      location.hash.replace("#", "") ||
      "home",
      false
    );
  });

  // Memuat halaman berdasarkan alamat URL awal
  const initial = location.hash.replace("#", "");

  if (initial) {
    loadPage(initial, false);
  }
});