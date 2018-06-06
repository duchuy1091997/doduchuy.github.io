 $(document).ready(function(){
    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
    //Scroll effect
     $(".navbar a, footer a[href='#information']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
  //ChartJS
 	var ctx = document.getElementById("kyNangNgheNghiep");
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["HTML/CSS/Javascript", "C#", "Java"],
            datasets: [{
                data: [50, 20, 30],
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
        }
    });
    var ctx = document.getElementById("kyNangMem");
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Teamwork", "English", "Communication"],
            datasets: [{
                data: [30, 40, 30],
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
        }
    });
})
//Contact  
function create() {
    var name = $('input[name="name"]').val();
    var email = $('input[name="email"]').val();
    toastr.options = {"positionClass": "toast-top-center",};
    if (name == "" || email == "") {
       toastr.error('Vui lòng nhập đủ Họ Tên và Email của bạn!', 'Đã xảy ra lỗi!');
    } else {
        $.ajax({
            url: "http://janeto.us.to:7752/api/contact",
            method: "POST",
            headers: {
                ContentType: "application/json"
            },
            data: {
                name: name,
                email: email,
                message: $('textarea').val()
            },
            success: function(data) {
                toastr.success('Cảm ơn bạn đã liên hệ với tôi, tôi sẽ liên hệ lại bạn trong thời gian sớm nhất!', 'Đã ghi nhận ý kiến của bạn!');
                $('input[name="name"]').val("");
                $('input[name="email"]').val("");
                $('textarea[name="comment"]').val("");
            },
            error: function(err) {
                toastr.error('Vui lòng nhập đủ Họ Tên và Email của bạn!', 'Đã xảy ra lỗi!');
                console.log(err);
            }
        });
    }
}
