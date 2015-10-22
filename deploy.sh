#!/bin/bash

set -o errexit
set -o pipefail

GITHUB_REPO="github.com/caciviclab/disclosure-frontend-alpha"

if [ -z "$GITHUB_TOKEN" ]; then
    echo "GITHUB_TOKEN is required."
    exit 1
fi

# Clean
rm -rf ./dist

# Build
gulp prod

# Git init
cd dist
git init
git config user.name "CA Civic Lab deploy script"
git config user.email "opencal@googlegroups.com"
git add .
git commit -m "Deploy to GitHub Pages"
git push --force "https://${GITHUB_TOKEN}@${GITHUB_REPO}" master:gh-pages
