# Chrome Extension Starter Kit

This is a quick-start kit to help you begin your journey of developing Chrome extensions.



## How-to

### Design

- [x] design.sketch
- [x] design.ai
- [x] design.figma
- [x] design.xd

### Develop

1. Clone or download as zip.
2. Make sure you have [Node.js](https://nodejs.org) Installed.
3. Run `npm run init`  to install webpack and npm-check-updates.
4. Run `npm start` , webpack will began watching your files changes and output to `develop` directory.
5. Drag `develop` folder and drop it in [chrome://extensions/](chrome://extensions/).

### Release

- You can run `npm run production` to get a final version of your extension in `production` directory.
- If you're on macOS, Linux or Unix, simply run `npm run releaseUnix` and you'll get all content in `production` directory zipped as upload.zip. It'll also create a `extensionVersion.zip` in `archives` directory.



## License

MIT

Copyright (c) 2017 John Cido

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.