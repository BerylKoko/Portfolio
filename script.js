const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if ('IntersectionObserver' in window && !reduced) {
  document.documentElement.classList.add('js-reveal');
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.remove('pending'); observer.unobserve(entry.target); }
  }), { threshold: 0.06 });
  document.querySelectorAll('.reveal').forEach(el => {
    if(el.getBoundingClientRect().top > innerHeight) {el.classList.add('pending'); observer.observe(el);}
  });
}
const dialog = document.querySelector('.lightbox');
let trigger;
if (dialog && typeof dialog.showModal === 'function') {
  document.querySelectorAll('.zoom').forEach(link => link.addEventListener('click', event => {
    event.preventDefault(); trigger=link;
    const image=dialog.querySelector('img'); image.src=link.href; image.alt=link.querySelector('img').alt;
    dialog.showModal(); dialog.querySelector('button').focus();
  }));
  dialog.querySelector('button').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog) {const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
  dialog.addEventListener('close',()=>trigger?.focus());
}
const filters=document.querySelector('.work-filters');
if(filters){
  filters.hidden=false;
  filters.addEventListener('click',event=>{
    const button=event.target.closest('button[data-filter]');if(!button)return;
    const selected=button.dataset.filter;let count=0;
    filters.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    document.querySelectorAll('.project-card').forEach(card=>{
      const show=selected==='all'||card.dataset.category.split(' ').includes(selected);
      card.hidden=!show;if(show){count++;card.classList.remove('pending');}
    });
    document.getElementById('filter-status').textContent=`Showing ${count} ${count===1?'project':'projects'}.`;
  });
}
