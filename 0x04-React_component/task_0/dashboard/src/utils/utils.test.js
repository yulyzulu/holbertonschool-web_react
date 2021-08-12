import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe("functions", function () {
  describe("Test full year", function () {
    it("Should return current year", function () {
      const year = getFullYear();
      expect(year).toEqual(new Date().getFullYear());
    });
  });
  describe("Get Footer", function () {
    it("Should return the correct message", function () {
      const message = getFooterCopy(true);
      expect(message).toEqual("Holberton School");
    });
    it("Should return false message", function () {
      const message = getFooterCopy(false);
      expect(message).toEqual("Holberton School main dashboard");
    });
  });
  describe("Notifications", function () {
    it("Should return the correct message", function () {
      const msg = "<strong>Urgent requirement</strong> - complete by EOD";
      expect(getLatestNotification()).toEqual(msg);
    });
  });
});