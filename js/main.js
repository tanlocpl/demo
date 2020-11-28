function layLoaiXe() {
    var ketqua;
    var uberX = document.getElementById('uberX').checked;
    var uberSUV = document.getElementById('uberSUV').checked;
    var uberBlack = document.getElementById('uberBlack').checked;
    if (uberX===true) {
        ketqua = "uberX";

    } else if (uberSUV===true) {
        ketqua = "uberSUV";

    } else if (uberBlack===true) {
        ketqua = "uberBlack";
    }
    return ketqua;

}

// function tinhtien() {

//     var laySoKm = document.getElementById('soKm').value;
//     laySoKm = parseFloat(laySoKm);

//     var layThoiGianCho = document.getElementById('thoiGianCho').value;
//     layThoiGianCho = parseFloat(layThoiGianCho);

//     var divThanhTien = document.getElementById('divThanhTien');

//     divThanhTien.style.display = 'block';

//     var spanXuatTien = document.getElementById('xuatTien');
//     var thanhTien;

//     var loaiXe=layLoaiXe();
//     switch (loaiXe) {
//         case "uberX":
//             if (laySoKm <= 1) {
//                 thanhTien = laySoKm * 8000 + layThoiGianCho * 2000;

//             } else if (laySoKm > 1 && laySoKm <= 20) {
//                 thanhTien = laySoKm * 12000 + layThoiGianCho * 2000;

//             } else if (laySoKm > 20) {
//                 thanhTien = laySoKm * 10000 + layThoiGianCho * 2000;

//             }
//             break;
//         case "uberSUV":
//             if (laySoKm <= 1) {
//                 thanhTien = laySoKm * 9000 + layThoiGianCho * 3000;

//             } else if (laySoKm > 1 && laySoKm <= 20) {
//                 thanhTien = laySoKm * 14000 + layThoiGianCho * 3000;

//             } else if (laySoKm > 20) {
//                 thanhTien = laySoKm * 12000 + layThoiGianCho * 3000;

//             }
//             break;
//         case "uberBlack":
//             if (laySoKm <= 1) {
//                 thanhTien = laySoKm * 10000 + layThoiGianCho * 4000;

//             } else if (laySoKm > 1 && laySoKm <= 20) {
//                 thanhTien = laySoKm * 16000 + layThoiGianCho * 4000;

//             } else if (laySoKm > 20) {
//                 thanhTien = laySoKm * 14000 + layThoiGianCho * 4000;

//             }
//             break;
//     }
//     spanXuatTien.innerHTML = thanhTien;

// }

document.getElementById('btnTinhtien').addEventListener('click',function(){
    var laySoKm = document.getElementById('soKm').value;
    laySoKm = parseFloat(laySoKm);

    var layThoiGianCho = document.getElementById('thoiGianCho').value;
    layThoiGianCho = parseFloat(layThoiGianCho);

    var divThanhTien = document.getElementById('divThanhTien');

    divThanhTien.style.display = 'block';

    var spanXuatTien = document.getElementById('xuatTien');
    var thanhTien;

    var loaiXe=layLoaiXe();
    switch (loaiXe) {
        case "uberX":
            if (laySoKm <= 1) {
                thanhTien = laySoKm * 8000 + layThoiGianCho * 2000;

            } else if (laySoKm > 1 && laySoKm <= 20) {
                thanhTien = laySoKm * 12000 + layThoiGianCho * 2000;

            } else if (laySoKm > 20) {
                thanhTien = laySoKm * 10000 + layThoiGianCho * 2000;

            }
            break;
        case "uberSUV":
            if (laySoKm <= 1) {
                thanhTien = laySoKm * 9000 + layThoiGianCho * 3000;

            } else if (laySoKm > 1 && laySoKm <= 20) {
                thanhTien = laySoKm * 14000 + layThoiGianCho * 3000;

            } else if (laySoKm > 20) {
                thanhTien = laySoKm * 12000 + layThoiGianCho * 3000;

            }
            break;
        case "uberBlack":
            if (laySoKm <= 1) {
                thanhTien = laySoKm * 10000 + layThoiGianCho * 4000;

            } else if (laySoKm > 1 && laySoKm <= 20) {
                thanhTien = laySoKm * 16000 + layThoiGianCho * 4000;

            } else if (laySoKm > 20) {
                thanhTien = laySoKm * 14000 + layThoiGianCho * 4000;

            }
            break;
    }
    spanXuatTien.innerHTML = thanhTien;
})