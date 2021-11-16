#!/bin/bash

# this script updates the data behind the co2birth.date site
# takes some time to build all the pages
# and may heat up your computer

# refresh data
git submodule init
git submodule update

# https://github.com/co2birthdate/dataops
git submodule foreach git pull origin master

# install node packages
npm i

# generate indidvidual pages, based on date
mkdir -p out
npm run export

# generate sitemap
echo "https://co2birth.date" > listofurls.txt && \
	find out/co2 -name "*.html" -maxdepth 1 -type f | \
	sed 's/out/https:\/\/co2birth.date/g' >> listofurls.txt && \
	npx sitemap --index-base-url https://co2birth.date < listofurls.txt > out/sitemap.xml && \
	rm -f listofurls.txt && gzip -f out/sitemap.xml

# deploy site to github "pages" branch
npm run deploy