const images = require.context("../../public/images");

const getImage = (imageName: string) => {
  return images(`./${imageName}`)
}

export default getImage;