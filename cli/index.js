import "babel-polyfill";

import program from "commander";
import PhotosService from "./services/photosService";

const photosService = new PhotosService();

program
  .version("0.1.0")
  .option("-f, --fetch-photos", "Fetch Photos")
  .parse(process.argv);

if (program.fetchPhotos) {
  photosService.list().then(data => {
    data.forEach(photo => console.log(`Photo URL => ${photo.url}`));
  });
}
