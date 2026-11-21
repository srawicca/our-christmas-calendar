const calendar = document.getElementById('calendar');
const modal = document.getElementById('modal');
const titleEl = document.getElementById('letter-title');
const contentEl = document.getElementById('letter-content');
const today = new Date();
const isDecember = today.getMonth() === 11;
const currentDay = isDecember ? today.getDate() : (today.getMonth() > 11 ? 24 : 0);
const palette = ['cream','wine','green'];
// Tamaños y posiciones alternos para un aspecto de collage de sobres.
const layouts = [
 ['wide'],[''],[''],['wide'],[''],[''],[''],[''],['wide'],[''],[''],[''],
 [''],['wide'],[''],[''],[''],[''],['wide'],[''],[''],[''],[''],['wide']
];
function createEnvelope(day){
  const btn=document.createElement('button');
  btn.className='envelope '+palette[(day-1)%3]+' '+(layouts[day-1]?.[0]||'');
  btn.setAttribute('aria-label',`Sobre ${day}`);
  const locked=day>currentDay;
  if(locked) btn.classList.add('locked');
  btn.innerHTML=`<span class="number">${day}</span><span class="seal">${locked?'✦':'♡'}</span><span class="sprig">❧</span><span class="flap"></span>`;
  btn.addEventListener('click',()=>{
    if(locked){btn.classList.remove('shake'); void btn.offsetWidth; btn.classList.add('shake'); return;}
    const data=adventContent[day-1]||{};
    titleEl.textContent=data.title||`Día ${day}`;
    contentEl.replaceChildren();
    if(data.text){const p=document.createElement('p');p.textContent=data.text;contentEl.appendChild(p);}
    if(data.image){const img=document.createElement('img');img.src=data.image;img.alt='Recuerdo';contentEl.appendChild(img);}
    if(data.video){const video=document.createElement('video');video.src=data.video;video.controls=true;video.playsInline=true;contentEl.appendChild(video);}
    if(data.link){const a=document.createElement('a');a.href=data.link;a.target='_blank';a.rel='noopener';a.textContent=data.linkText||'Abrir mi regalo ♡';contentEl.appendChild(a);}
    modal.classList.add('show');modal.setAttribute('aria-hidden','false');
  });
  return btn;
}
for(let day=1;day<=24;day++) calendar.appendChild(createEnvelope(day));
function closeModal(){modal.classList.remove('show');modal.setAttribute('aria-hidden','true');}
modal.addEventListener('click',e=>{if(e.target.matches('[data-close]'))closeModal();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
