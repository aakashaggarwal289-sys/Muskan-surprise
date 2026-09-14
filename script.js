// ====== CHANGE THESE 3 THINGS ======
const config = {
  name: "Muskan",
  message: `Happy Birthday meri jaan Muskan ❤️🎂

Aaj ka din mere liye bhi utna hi special hai jitna tumhare liye, kyunki aaj uss insaan ka birthday hai jo meri life mein itni khubsurat jagah bana chuki hai. 🥹❤️

Muskan, pata nahi main words mein kabhi properly explain kar paunga ya nahi ki tum mere liye kitni important ho. Tumhari ek smile mera mood theek kar deti hai, tumhari ek chhoti si baat poora din special bana deti hai, aur tumhara mere saath hona mere liye genuinely ek blessing hai. 🫶

Tumhare saath bitaya hua har little moment mere liye precious hai. Chahe hum kitna bhi argue karein, ek dusre ko kitna bhi tang karein, end mein bas tum hi woh person ho jiske saath main sab kuch share karna chahta hoon. ❤️

I hope tumhari life mein hamesha happiness rahe, tumhare saare dreams complete ho, tumhe kabhi kisi cheez ki kami feel na ho, aur tum hamesha aise hi smile karti raho. Aur haan, jab bhi life thodi difficult lage, yaad rakhna ki main tumhare saath hoon. 🤍

Thank you meri life mein aane ke liye, mujhe samajhne ke liye, meri stupid baatein sunne ke liye, aur mere saath itni saari beautiful memories create karne ke liye. 🥺💗

Main promise karta hoon ki main hamesha perfect nahi hounga, kabhi kabhi stupid bhi hounga 😂, lekin tumhare liye meri feelings hamesha real rahengi.

Once again, Happy Birthday meri Muskan! 🎂❤️
Tumhara har birthday aur bhi zyada beautiful ho, aur main har baar tumhare face par woh beautiful smile dekh sakun.

I LOVE YOU SO MUCH, MUSKAN. ❤️🫶
Aaj, kal, aur har uss din jab tumhe meri zarurat ho. 💕
Forever yours. ❤️`
};
// =====================================

document.querySelectorAll("[data-name]").forEach(el => el.textContent = config.name);

let typedStarted = false;
function showScreen(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  if(id==="letter" && !typedStarted) typeMessage();
  window.scrollTo({top:0,behavior:"smooth"});
}
function typeMessage(){
  typedStarted=true;
  const el=document.getElementById("typed");
  let i=0;
  const tick=()=>{ if(i<config.message.length){ el.textContent += config.message[i++]; setTimeout(tick,18); } };
  tick();
}
function heart(){
  const h=document.createElement("div");
  h.className="heart";
  h.textContent=["❤","💗","💖","💕","✨"][Math.floor(Math.random()*5)];
  h.style.left=(Math.random()*100)+"vw";
  h.style.fontSize=(14+Math.random()*20)+"px";
  h.style.animationDuration=(2.4+Math.random()*2)+"s";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),5000);
}
setInterval(heart,650);

let musicOn=false;
function toggleMusic(){
  const a=document.getElementById("music");
  if(!musicOn){a.play().then(()=>{musicOn=true}).catch(()=>alert("Add your music as 'music.mp3' in this folder, then tap again."));}
  else{a.pause();musicOn=false;}
}
function burst(){
  for(let i=0;i<35;i++) setTimeout(heart,i*35);
  alert("Hug delivered successfully. 🤗❤️");
}
