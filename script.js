const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

$('.menu').addEventListener('click', () => $('.site header nav').classList.toggle('open'));
$$('.site header nav a').forEach(link => link.addEventListener('click', () => $('.site header nav').classList.remove('open')));

const modal = $('#modal');
function openAuth(tab) {
  modal.classList.add('open');
  $$('[data-tab]').forEach(button => button.classList.toggle('active', button.dataset.tab === tab));
  $$('.auth form').forEach(form => form.classList.toggle('active', form.id === tab));
}
$$('[data-open]').forEach(button => button.addEventListener('click', () => {
  const target = button.dataset.open;
  target === 'admin' ? showApp('admin') : openAuth(target);
}));
$('.close').addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', event => { if (event.target === modal) modal.classList.remove('open'); });
$$('[data-tab]').forEach(button => button.addEventListener('click', () => openAuth(button.dataset.tab)));

function showApp(id) {
  modal.classList.remove('open');
  $('.site').style.display = 'none';
  $(`#${id}`).classList.add('open');
  window.scrollTo(0, 0);
}
$('#login').addEventListener('submit', event => { event.preventDefault(); showApp('client'); });
$('#register').addEventListener('submit', event => { event.preventDefault(); showApp('client'); });
$$('[data-exit]').forEach(button => button.addEventListener('click', () => {
  $$('.app').forEach(app => app.classList.remove('open'));
  $('.site').style.display = '';
}));
$$('[data-mail]').forEach(button => button.addEventListener('click', () => {
  $('.client-home').style.display = 'none';
  $('.mail').classList.add('open');
}));
$('#enquiry').addEventListener('submit', event => {
  event.preventDefault();
  $('#enquiry output').textContent = 'Thank you — your enquiry is ready for the NDT team. We’ll be in touch shortly.';
  event.target.reset();
});
