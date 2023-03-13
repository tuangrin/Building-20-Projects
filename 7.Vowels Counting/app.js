const countEl = document.querySelector('.count');
const input = document.querySelector('input');

input.addEventListener('keyup', () => {
  // event keyup: ดูว่ามีการพิมพ์ข้อความเสร็จรึยัง
  let word = input.value.toLocaleLowerCase();
  // console.log(word)
  let vowelCount = 0;
  for (let i = 0; i < word.length; i++) {
    let letter = word[i]; // word คือคำที่เข้ามา, letter คือตัวอักษรแต่ละตัวใน word (ถึงได้ใช้ word[i])
    if (letter.match(/([a,e,i,o,u])/)) {
      // การเขียนแบบนี้แปลว่าต้อง map ตัวอักษรมากกว่า 1 ตัว (array)
      vowelCount++; 
    }
  }
  countEl.innerHTML = `${vowelCount}`
});
