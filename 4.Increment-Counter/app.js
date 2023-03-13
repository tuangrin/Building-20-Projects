// เข้าถึง counter แต่ละตัวซึ่งเป็น array (เพราะใช้ class นี้สามที่ เลยเป็นกลุ่มของ class)
const counters = document.querySelectorAll('.counter');
counters.forEach((counter) => {
  counter.innerText = '0'; // 0 นี้เป้น string
  const updateCounter = () => {
    // ทำหน้าที่เพิ่มเลขจนถึงค่า data-target
    const target = +counter.getAttribute('data-target');
    // target หรือเลข max ที่จะเพิ่มถึง
    // เติม + ด้านหน้าเพราะต้องการ convert string >> Number

    // console.log(typeof(target))
    const start = +counter.innerText; //จุดเริ่ม หรือก็คือ 0
    const increment = target / 200;
    if (start < target) {
      counter.innerText = `${Math.ceil(start + increment)}`; // Math.ceil: ฟังก์ชันสำหรับปัดทศนิยมขึ้นให้เป็นเลขจำนวนเต็ม โดยให้มีค่าที่ใกล้เคียงที่สุดกับค่าเดิม
      setTimeout(updateCounter, 1) //ให้เรียกใช้ function นี้ทุกๆ 1 msec จนกว่าจะถึง target
    }else{
     counter.innerText=target
    }
  };
  updateCounter();
});
