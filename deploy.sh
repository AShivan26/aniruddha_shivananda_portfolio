#!/usr/bin/env sh

#abort on errors
set -e

env PUBLIC_URL=https://AShivan26.github.io/aniruddha_shivananda-portfolio npm run build

cd build

git init
git add -A
git commit -m 'deploy'

#if you are deploying to https://{USERNAME}.github.io (see https://pages.github.com for instructions)
#git push -f git@github.com:{USERNAME}/{USERNAME}.github.io.git main

#if you are deploying to https://{USERNAME}.github.io/{REPO}
git push -f git@github.com:AShivan26/aniruddha_shivananda-portfolio.git master:gh-pages