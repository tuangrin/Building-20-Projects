const smallImg = document.querySelectorAll('.gallery img');
// console.log(smallImg)
const fullImg = document.querySelector('.full-image')
const modal = document.querySelector('.modal')

smallImg.forEach((img) => {
  img.addEventListener('click', () => {
    const fullsize = img.getAttribute('alt');
    //     alert(fullsize) //ไว้เช็คว่าเรียก alt สำเร็จมั้ย
    const path = `foods-images/full/${fullsize}.jpg`;
    //     alert(path)
    fullImg.src = path; //เปลี่ยน src ของรูปให้เป็นไปตาม path โดยอ้างอิงผ่าน class
    modal.classList.add('open')
  });
});

modal.addEventListener('click', (e)=>{
     modal.classList.remove('open')
})

// คลิกที่รูปเพื่อเพิ่ม class open แต่พอคลิกที่ modal ให้ remove class open ทิ้งเพื่อทำการปิดหน้าต่าง popup