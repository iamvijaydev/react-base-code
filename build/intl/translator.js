/* eslint-disable */
import * as fs from 'fs';
import { sync as globSync } from 'glob';
import { sync as mkdirpSync } from 'mkdirp';

const outputLanguageDataDir = './config/locale/';

const processFolder = (filePattern, fileName) => {
  const messages = globSync(filePattern)
    .map((filename) => fs.readFileSync(filename, 'utf8'))
    .map((file) => JSON.parse(file))
    .reduce((collection, descriptors) => {
      Object.keys(descriptors)
        .forEach((key) => {
          if (collection.hasOwnProperty(key)) {
            throw new Error(`Duplicate message id: ${key}`);
          }

          collection[key] = descriptors[key]
        });

      return collection;
    }, {});


  fs.writeFileSync(outputLanguageDataDir + fileName, JSON.stringify(messages, null, 2));
}

mkdirpSync(outputLanguageDataDir);
processFolder('./config/locale/en-US/*.json', 'en-US.json');
processFolder('./config/locale/fr-FR/*.json', 'fr-FR.json');
processFolder('./config/locale/ja-JP/*.json', 'ja-JP.json');
