const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size').imageSize;

const directoryPath = path.join(__dirname, 'photos', 'polefolio');
const indexPath = path.join(__dirname, 'index.html');
const templatePath = path.join(__dirname, 'index.html.template');

fs.readFile(path.join(directoryPath, 'filelist.json'), 'utf8', function (err, filelistData) {
  if (err) {
    return console.log('Unable to read filelist.json: ' + err);
  }

  const filelist = JSON.parse(filelistData);

  console.log('Files found in filelist.json: ' + filelist);

  const aspectRatios = {};

  filelist.forEach(file => {
    try {
      const imagePath = path.join(directoryPath, file);
      const buffer = fs.readFileSync(imagePath);
      const dimensions = sizeOf(buffer);
      aspectRatios[file] = dimensions.width / dimensions.height;
    } catch (err) {
      console.log(`Error getting dimensions for ${file}: ${err}`);
      aspectRatios[file] = 1; // Default aspect ratio
    }
  });

  let thumbnailHTML = '';

  // Group images into rows of three
  const rows = [];
  for (let i = 0; i < filelist.length; i += 3) {
    rows.push(filelist.slice(i, i + 3));
  }

  rows.forEach(row => {
    thumbnailHTML += `<div class="grid__row">`;
    // Calculate the sum of the aspect ratios for each row
    const rowAspectRatioSum = row.reduce((sum, imageFile) => sum + aspectRatios[imageFile], 0);

    row.forEach(imageFile => {
      // Calculate the flex-basis value for each image
      const aspectRatio = aspectRatios[imageFile];
      const flexBasis = (aspectRatio / rowAspectRatioSum) * 100;

      console.log(`${imageFile}: aspectRatio=${aspectRatio}, flexBasis=${flexBasis}`);

      thumbnailHTML += `
        <div class="grid__item-container js-grid-item-container" style="flex-basis: ${flexBasis}%;">
          <img src="photos/polefolio/${imageFile}" alt="${imageFile}" class="grid__item-image js-grid__item-image grid__item-image-lazy js-lazy" style="aspect-ratio: ${aspectRatio}; height: 100%; object-fit: cover;">
        </div>
      `;
    });
    thumbnailHTML += `</div>`;
  });

  fs.readFile(templatePath, 'utf8', function (err, data) {
    if (err) {
      return console.log('Unable to read index.html.template: ' + err);
    }

    console.log('Original index.html.template content: ' + data);

    const newHTML = data.replace('<!-- IMAGE_GALLERY_PLACEHOLDER -->', thumbnailHTML);

    fs.writeFile(indexPath, newHTML, function (err) {
      if (err) {
        return console.log('Unable to write index.html: ' + err);
      }

      console.log('index.html updated successfully!');
      console.log('index.html rebuilt!');
    });
  });
});
