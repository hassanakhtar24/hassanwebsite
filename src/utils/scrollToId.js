/**
 * Scrolls the viewport to the element specified by the given ID,
 * applying a responsive fixed offset.
 * * @param {string} id - The HTML ID of the target element.
 * @param {number} [manualOffset] - If provided, overrides the responsive logic.
 */
export const scrollToId = (id, manualOffset) => {
  const targetElement = document.getElementById(id);

  if (targetElement) {
    const width = window.innerWidth;
    let responsiveOffset = 82;

    if (width <= 880) {
      responsiveOffset = 65;
    } else if (width <= 991) {
      responsiveOffset = 75;
    }

    const finalOffset = manualOffset !== undefined ? manualOffset : responsiveOffset;

    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const finalPosition = targetPosition - finalOffset;

    window.scrollTo({
      top: finalPosition,
      behavior: "smooth",
    });
  } else {
    console.warn(`Attempted to scroll to unknown ID: #${id}`);
  }
};
