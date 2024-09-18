echo Building started...
npm run build
git --work-tree dist add --all
git --work-tree dist commit -m "gh-pages deploy build"
echo Deleting old gh-pages build...
git branch -D gh-pages
git push -d origin gh-pages
git checkout --orphan gh-pages
echo Pushing to gh-pages...
cd ..
git subtree push --prefix=Frontend/dist origin gh-pages
cd Frontend
echo Finished, deleting branch...
git checkout -f main
rmdir /S /Q dist
echo Successfully deployed, check your settings
pause