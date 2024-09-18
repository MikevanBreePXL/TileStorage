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
    await execa("git", ["add", folderName, "--force"]);
    await execa("git", ["commit", "-m", "gh-pages script deploy"]);
    console.log("Deleting old gh-pages build...");
    try {
      await execa("git", ["branch", "-D", "gh-pages"]);
    } catch (e) {
    }
    try {
      await execa("git", ["push", "-d", "origin", "gh-pages"]);
    } catch (e) {
    }
    await execa("git", ["branch", "gh-pages"]);
    console.log("Pushing to gh-pages...");
    await execa("git", ["subtree", "push", "\-\-prefix\=Frontend\/dist", "origin", "gh\-pages"], { cwd: ".." });
    await execa("git", ["reset", "HEAD~1", "--mixed"]);
    try {
      await execa("rmdir", [folderName, "/S", "/Q"]);
    } catch (e) {
    }
    console.log("Successfully deployed, check your settings");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();