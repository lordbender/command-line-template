require("babel-polyfill");
const assert = require("assert");
const PhotosService = require("../build/cli/services/photosService");

describe("Array", function() {
  describe("#indexOf()", function() {
    it("should return -1 when the value is not present", function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

// TODO: Mock / Stub this axios call
describe("PhotosService", function() {
  describe("fetch list of photos", function() {
    it("should return a list of photos", async () => {
      const photosService = new PhotosService.default();
      const photos = await photosService.list();

      assert.equal(photos.length, 5000);
    });
  });
});
