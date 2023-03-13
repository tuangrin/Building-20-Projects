const sounds = ['Effect1', 'Effect2', 'Effect3', 'Effect4', 'Effect5']

sounds.forEach(sound=>{ // sound เฉยๆคือชื่อไฟล์เสียงแต่ละไฟล์ เช่น Effect1
     const btn = document.createElement('button')
     btn.classList.add('btn')
     btn.innerText=sound
     btn.addEventListener('click', ()=>{
          stopSounds()
          // console.log(sound)
          document.getElementById(sound).play()
     })
     document.getElementById('controller').appendChild(btn)
}) 

function stopSounds(){
     sounds.forEach(sound=>{
          const song = document.getElementById(sound)
          song.pause()
          song.currentTime = 0
     })
}