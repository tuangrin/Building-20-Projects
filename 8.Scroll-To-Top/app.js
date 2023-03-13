const scrollBtn = document.querySelector('.top');
const rootEl = document.documentElement; //อ้างอิงไปที่ tag HTML ใช้คำนวณหาความสูง
document.addEventListener('scroll', showBtn);
scrollBtn.addEventListener('click', scrollToTop);

// เลื่อนถึง 0.3 (30%) ของหน้าเว็บแล้วให้ปุ่มปรากฏ 0-1 (0-100%)
function showBtn() {
  // console.log("กำลังเลื่อนดูเนื้อหา")
  const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;
  //ความสูงของหน้าต่างรวม scrollbar - ความสูงของหน้าต่างที่ไม่รวม scrollbar

  //console.log(rootEl.scrollTop/scrollTotal) 
  //0-1 เอาไว้ใช้กำหนดค่าช่วงของหน้าเพื่อให้ปุ่ม ^ ปรากฏ

  if(rootEl.scrollTop/scrollTotal>0.3){
     scrollBtn.classList.add("show-btn")
  }else{
     scrollBtn.classList.remove("show-btn")
  }
}

function scrollToTop(){
     rootEl.scrollTo({
          top:0,
          behavior: "smooth"
     })
}
