/* eslint-disable no-console */
import { execa } from "execa";
import fs from "fs";

(async () => {
  try {
    // eslint-disable-next-line no-console
    console.log("Building started...");
    await execa("npm", ["run", "build"]);
    // Understand if it's dist or build folder
    const folderName = fs.existsSync("dist") ? "dist" : "build";
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages deploy build"]);
    console.log("Deleting old gh-pages build...");
    try {
      await execa("git", ["branch", "-D", "gh-pages"]);
    } catch (e) {
    }
    try {
      await execa("git", ["checkout", "--orphan", "gh-pages"]);
    } catch (e) {
    }
    console.log("Pushing to gh-pages...");
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    await execa("git", ["checkout", "-f", "main"]);
    await execa("rmdir", ["/q", "/s", folderName]);
    console.log("Successfully deployed, check your settings");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();