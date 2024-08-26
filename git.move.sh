#!/bin/bash

git fetch origin

git branch -a

for BRANCH in `git branch --list|sed 's/\*//g'`;
  do
    git checkout $BRANCH
  done
git checkout master;

git remote add new-origin $1

git push --all new-origin

git push --tags new-origin

git remote -v

git remote rm origin

git remote rename new-origin origin
