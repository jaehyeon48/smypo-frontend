export function closeModalWrapper(closeFunc) {
  document.body.style.overflow = 'visible';
  closeFunc();
}