#!/bin/bash
ng build --base-href "https://alexandralee.github.io/SuperAxelAlexandra/"
npm run deploy -- --repo=https://github.com/AlexandraLEE/SuperAxelAlexandra.git
