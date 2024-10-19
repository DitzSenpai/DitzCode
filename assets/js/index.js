function createCategoriesTable() {
    let HostingCategory = JSON.parse(localStorage.getItem('HostingCategory'));

    if (!HostingCategory) {
        HostingCategory = [];
    }

    if (HostingCategory.length < 1) {
        let HostingCategoryLists = [
            {
                id : 1, 
                nama : 'Agus' ,
                logo : 'assets/photos/game-category/br.png' ,
            },
        ]

        for (const gc of HostingCategoryLists) {
            HostingCategory.push(gc);
        }
        localStorage.setItem('HostingCategory', JSON.stringify(HostingCategory));
    }

    showHostingCategory();
}
function createHostingTable() {
    let Hosting = JSON.parse(localStorage.getItem('Hosting'));

    if (!Hosting) {
        Hosting = [];
    }

    if (Hosting.length < 1) {
        let HostingLists = [
            {
                id : 0, 
                nama : 'SCRIPT ALYA' ,
                logo : 'assets/photos/games/Ditz.jpg' ,
                genre : 'SCRIPT BOT',
                item : 'SCRIPT',
                harga: 0,
                categoryId: 1,
                popular: 1,
                banner : 'assets/photos/bannerGI.jpg',
                deskripsi: 'SCRIPT BOT INI MERUPAKAN REMAKE DARI ADITYA SANG PEMBUAT WEBSITE'
            },
           
        ]

        for (const g of HostingLists) {
            Hosting.push(g);
        }
        localStorage.setItem('Hosting', JSON.stringify(Hosting));
    }

    showHosting();
}

function createTestimonialsTable() {
    let testimonials = JSON.parse(localStorage.getItem('testimonials'));

    if (!testimonials) {
        testimonials = [];
    }

    if (testimonials.length < 1) {
        let testimonialsLists = [
            {
                id : 1, 
                nama : 'Elmano' ,
                status : 'ProHostingr' ,
                testimoni : 'DitzKun Store memberikan layanan yang cepat dan efisien. Saya sangat puas dengan pengalaman belanja online di sini!' ,
            }, 
            {
                id : 2, 
                nama : 'Jaylen' ,
                status : 'ProGramer' ,
                testimoni : 'Belanja di DitzKun Store sangat praktis dan terjamin keamanannya.' ,
            },
            {
                id : 3, 
                nama : 'Alexander' ,
                status : 'Programmer' ,
                testimoni : 'Saya selalu mendapatkan voucher Hosting dengan harga terbaik di DitzKun Store.' ,
            },
            {
                id : 4, 
                nama : 'Apollo' ,
                status : 'Programmer' ,
                testimoni : 'Mantap top up di DitzKun Store sangat amanah.' ,
            },
           
           
        ]

        for (const gc of testimonialsLists) {
            testimonials.push(gc);
        }
        localStorage.setItem('testimonials', JSON.stringify(testimonials));
    }

    showTestimonials();
}

function showHosting(category) {
    let bungkusPopular = document.getElementById('section-Hosting-promo');
    let bungkusHostingLists = document.getElementById('Hostinglists');
    let Hosting = JSON.parse(localStorage.getItem('Hosting'));
    let popularHosting = [];
    let HostingToDisplay = [...Hosting]; // Duplikat data Hosting untuk ditampilkan

    let keyword = document.getElementById('searchHostingInput').value;

    if (category || keyword) {
        let params = {
            categoryId: category,
            keyword: keyword,
        }

        HostingToDisplay = filterBy(HostingToDisplay, params);
    }

    // Tampilkan Hosting List
    let contentHostingLists = "";

    if (HostingToDisplay.length < 1) {
        contentHostingLists = 'yg anda cari tidak ditemukan'
    } else {
        for (const Hosting of HostingToDisplay) {
            const {id, nama, logo, genre, item, harga, categoryId, popular} = Hosting;
            let rupiah = formatRupiah(harga);

            contentHostingLists += `
                <div class="col-lg-3 mb-4">
                    <a href="https://whatsapp.com/channel/0029Vam12JU6rsQy0ZlSLh0T" class="Hostinglists-link" onClick="toCart(${id})">
                        <div class="card-arvi">
                            <img src="${logo}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h6 class="card-title" style="font-weight: bold; font-size: 24px;">${nama}</h6>
                                <div class="d-flex">
                                    <span class="badge badge-pill discount-precentage">${genre}</span>
                                    <span class="badge badge-pill discount-price"></span>
                                </div>
                                <p class="mt-1 mb-0" style="font-size: 14px;">Start From:</p>
                                <h5 class="mt-1" style="font-weight: bold;">${rupiah} <span style="font-size: 12px; color: #989898;">/${item}</span> </h5>
                                <div class="d-flex align-items-center">
                                    <img class="star-rating" src="assets/photos/icon-bintang.png" alt="">
                                    <img class="star-rating" src="assets/photos/icon-bintang.png" alt="">
                                    <img class="star-rating" src="assets/photos/icon-bintang.png" alt="">
                                    <img class="star-rating" src="assets/photos/icon-bintang.png" alt="">
                                    <img class="star-rating" src="assets/photos/icon-bintang.png" alt="">
                                    <span style="color: #989898;">(972)</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            `;
        }
    }

    bungkusHostingLists.innerHTML = contentHostingLists;

    // Tampilkan Hosting Populer
    for (const gmsP of Hosting) {
        const {id, nama, logo, genre, item, harga, categoryId, popular} = gmsP;

        if (popular === 1) {
            popularHosting.push(gmsP);
        }
    }

    let HostingPopular = "";

    for (const gmsP of popularHosting) {
        const {id, nama, logo, genre, item, harga, categoryId, popular} = gmsP;
        let rupiah = formatRupiah(harga);

        HostingPopular += `
            <div class="swiper-slide position-relative card-holder">
                <a href="https://whatsapp.com/channel/0029Vam12JU6rsQy0ZlSLh0T" class="Hostinglists-link" onClick="toCart(${id})">
                    <div class="card-arvi">
                        <img src="${logo}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h6 class="card-title">${nama}</h6>
                            <div class="d-flex">
                                <span class="badge badge-pill discount-precentage">${genre}</span>
                            </div>
                            <p class="mt-1 mb-0" style="font-size: 14px;">Start From:</p>
                            <h5 class="mt-1" style="font-weight: bold;">${rupiah} <span style="font-size: 12px; color: #989898;">/${item}</span> </h5>
                            <div class="d-flex align-items-center">
                                <img class="star-rating" src="assets/photos/icon-bintang.png" alt="">
                                <img class="star-rating" src="assets/photos/icon-bintang.png" alt="">
                                <img class="star-rating" src="assets/photos/icon-bintang.png" alt="">
                                <img class="star-rating" src="assets/photos/icon-bintang.png" alt="">
                                <img class="star-rating" src="assets/photos/icon-bintang.png" alt="">
                                <span style="color: #989898;">(972)</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        `;
    }

    bungkusPopular.innerHTML = HostingPopular;
}



function showHostingCategory(){
    let bungkus = document.getElementById('section-Hostingcategory-lists');
    let HostingCategory = JSON.parse(localStorage.getItem('HostingCategory'));


    let content = ""; // Inisialisasi variabel string untuk menyimpan konten
   
    for (const gc of HostingCategory) {
        const {id, nama, logo } = gc;
        content += `
                <div class="col-lg-4 col-md-6 mt-4 mt-md-0 mb-4">
                    <a href="#Hosting" class="Hosting-category-link" onclick="showHosting(${id})">
                        <div class="card-service d-flex align-items-center">
                            <img src="${logo}" class="img-fluid img-section-Hostinglists" alt="" />
                            <div class="detail">
                                <h5>${nama}</h5>
                            </div>
                        </div>
                    </a>
                </div>
        `;
    }

    bungkus.innerHTML = content; // Menetapkan konten baru ke elemen
}

function showTestimonials(){
    let bungkus = document.getElementById('section-testimonials');
    let testimonials = JSON.parse(localStorage.getItem('testimonials'));


    let content = ""; // Inisialisasi variabel string untuk menyimpan konten
   
    for (const gc of testimonials) {
        const {id, nama, status, testimoni } = gc;
        content += `
                <div class="swiper-slide card text-center py-2" style="border-radius: 20px;">
                        
                    <p class="name mb-0 mt-2 fw-bold">${nama}</p>
                    <p class="address">${status}</p>
                    <div class="card-body px-5 py-4 position-relative mx-auto">
                    <i
                        class="bx bxs-quote-left position-absolute top-0 start-0"
                    ></i>
                    <i
                        class="bx bxs-quote-right position-absolute bottom-0 end-0"
                    ></i>
                    <p class="testi-text">
                        ${testimoni}
                    </p>
                    </div>
                </div>
        `;
    }

    bungkus.innerHTML = content; // Menetapkan konten baru ke elemen
}


function showUserLoginStatus(){
    let bungkus = document.getElementById('user-status');
    let userLogin = JSON.parse(localStorage.getItem('loginUsers'));
    if (userLogin !== null) {
        let user = userLogin[userLogin.length - 1].name
        bungkus.innerHTML = `

        <i class="bx bxs-user" style="color: white; font-size: large; margin: 20px;"> ${user}</i>
        <div class="btn btn-primary btn-sm" onClick="logout()" style="border-radius: 20px; width: 80px; font-weight: bold; font-size: medium;">Logout</div>
        `; // Menetapkan konten baru ke elemen
    }else{
        bungkus.innerHTML = `
        
            <div class="btn btn-primary btn-sm" style="border-radius: 20px; width: 80px; font-weight: bold; font-size: medium;"><a href="login.html" class="auth-link">Login</a></div>
            <div class="btn btn-success btn-sm" style="border-radius: 20px; width: 80px; font-weight: bold; font-size: medium;"><a href="register.html" class="auth-link">Daftar</a></div>
        `;
    }
}

function toCart(HostingId) {
    // Mengambil data keranjang dari localStorage (jika ada)
    let cartData = JSON.parse(localStorage.getItem('cart'));
  
  
    // Jika belum ada data keranjang, buat objek kosong
      cartData = {};
      // Menyimpan data ke dalam objek keranjang

      cartData.HostingId = HostingId;
      cartData.playerId = [];
      cartData.payment = null;
      cartData.token = generateString(18);

      localStorage.setItem('cart', JSON.stringify(cartData));

}

// function testess() {
//     console.log('ya');
//     let userId = document.getElementById('user_id');
//     Swal.fire({
//         title: 'Yakin?',
//         text: "Apakah Anda yakin ingin menambahkan user id " + userId.value + "?",
//         icon: 'question',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         confirmButtonText: 'Ok',
//         cancelButtonText: 'Tidak',
//         allowOutsideClick: false,
//         allowEscapeKey: false,
//         allowEnterKey: false,
//     }).then((result) => {
//         if (result.isConfirmed) {
//             // localStorage.removeItem('loginUsers');
//             // window.location.href = 'pages/index.html';
//         }
//     });
// }



function logout(){

    Swal.fire({
        title: 'Yakin?',
        text: "Apakah Anda yakin ingin keluar dari aplikasi?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok',
        cancelButtonText: 'Tidak',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem('loginUsers');


            window.location.href = 'index.html';
        }
    });
}

// document.getElementById('logoutButton').addEventListener('click',function(){
//     logout();
// });


window.onload = function() {
    createHostingTable();
    createCategoriesTable();
    createTestimonialsTable();
    showUserLoginStatus();
}




