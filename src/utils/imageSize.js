/* export function imageHeight (file) {
  const reader = new FileReader();

  reader.readAsDataURL(file);
  reader.onload = (e) => {
    const image = new Image();
    image.src = e.target.result;
    image.onload = (e) => {
      const height = e.target.height;
      return height;
    };
  };
} */
