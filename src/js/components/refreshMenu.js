function refreshMenu(data, refs, hbs) {
  const newList = data.map(e => hbs(e)).join('\n');
  refs.insertAdjacentHTML('beforeend', newList);
}

export default refreshMenu;
