document.addEventListener('DOMContentLoaded', ()=>{
  const display = document.getElementById('display');
  const keys = document.querySelector('.keys');

  keys.addEventListener('click', (e)=>{
    if (!e.target.matches('button')) return;
    const v = e.target.dataset.value;
    handleInput(v);
  });

  document.addEventListener('keydown', (e)=>{
    if (e.key === 'Enter') return handleInput('=');
    if (e.key === 'Backspace') return handleInput('back');
    if (e.key === 'c' || e.key === 'C') return handleInput('C');
    if (/^[0-9.+\-*/() ]$/.test(e.key)) return handleInput(e.key);
  });

  function handleInput(key){
    if (key === 'C') { display.value = ''; return; }
    if (key === 'back') { display.value = display.value.slice(0,-1); return; }
    if (key === '='){
      try{
        const expr = display.value.replace(/×/g,'*').replace(/÷/g,'/');
        // eslint-disable-next-line no-new-func
        const result = Function('"use strict"; return (' + expr + ')')();
        display.value = String(result);
      }catch(err){
        display.value = 'Error';
        setTimeout(()=> display.value = '', 800);
      }
      return;
    }
    // Append digits/operators (prevent two operators in a row)
    display.value += key;
  }
});