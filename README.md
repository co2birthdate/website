# CO2 Birthdate Website

## About this project

This is the respository where the **[co2birth.date](https://co2birth.date)** website lives.  
**[co2birth.date](https://co2birth.date)** tells you the difference of atmospheric carbon dioxide (CO₂) measurement on any date since 1900 and today.

## Developer's notes

### Refresh the data

The data is stored in a git repository that updates 1x weekly: : https://github.com/co2birthdate/dataops

This website needs to refresh the submodule before building.

```
git submodule foreach git pull origin master
```

### Prerequisites

- [Node.js v17+](https://nodejs.org/en/download/current/)

### Run website locally

Once you've forked/cloned/downloaded/etc the repository, install project dependencies with
```
npm i
```
then run
```
npm run dev
```
which will get a localhost up and running for development.  
Navigate to [localhost:3000](http://localhost:3000) in your browser to see it in action/develop in the browser.

### To generate the site as static content

To generate the website with static resources
```
npm run export
```
Because of the number of static pages, this can take some time.

To preview the website loaded from static resources
```
npm start
```

### Generate the sitemap

Using the `npx` and npm package [`sitemap`](https://www.npmjs.com/package/sitemap), run a one-liner:

```
echo "https://co2birth.date" > listofurls.txt && find out/co2 -name "*.html" -maxdepth 1 -type f | sed 's/out/https:\/\/co2birth.date/g' >> listofurls.txt && npx sitemap --index-base-url https://co2birth.date < listofurls.txt > out/sitemap.xml && rm -f listofurls.txt && gzip out/sitemap.xml
```

### Deploy to github pages

Once everything works fine, deploy the website to GitHub Pages (branch: `gh-pages`)
```
npm run deploy
```
Because of the number of files, this can take some time.
