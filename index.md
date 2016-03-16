# inf

> JavaScript's quick-print for variable **inf**ormation

<br>

[![npm version](https://img.shields.io/npm/v/inf.svg)](https://www.npmjs.com/package/inf)
[![npm download count](http://img.shields.io/npm/dm/inf.svg?style=flat)](http://npmjs.org/inf)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

  <table>
    <thead>
      <tr>
        <th>Linux & OSX</th>
        <th>Windows</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td align='center'>
          <a href='https://travis-ci.org/dawsonbotsford/inf'><img src='https://api.travis-ci.org/dawsonbotsford/inf.svg?branch=master'></a>
        </td>
        <td align='center'>
          <a href='https://ci.appveyor.com/project/dawsonbotsford/inf'><img src='https://ci.appveyor.com/api/projects/status/3tqkm56t5osoffb9/branch/master?svg=true'></a>
        </td>
      </tr>
    </tbody>
  </table>

<br>

## Install

```
npm install --save inf
```


<br>

## Usage

```js
const inf = require('inf');

inf('JavaScript');
//=>'Value: JavaScript
//=>Type: string
//=>Length: 10'

inf([1, 2, 3]);
//=>'Value: 1,2,3
//=>Type: array
//=>Length: 3'

inf(new Boolean(true));
//=>'Value: true
//=>Type: boolean'

inf(new Date());
//=>'Value: Fri Mar 11 2016 23:52:58 GMT-0600 (CST)
//=>Type: date;


```

<br>

## API

### inf(target)

##### target

Type: `all types`

##### returns

Type: `string`

The alternative is to `console.log` your variable every time you need to get it's value. `inf` gives you so much more useful **inf**o about any JavaScript variable. It's even easier to type than `console.log`!

<br>

**inf**o includes:
* Value
* Type (using [to-type](https://github.com/dawsonbotsford/to-type))
* Length (if applicable)

<br>

:zap: Put `inf` into a `console.log` for lightning fast debugging. :zap:.

<br>

## License

MIT © [Dawson Botsford](http://dawsonbotsford.com)

<br>

---
If you like this, star it. If you want to follow me, follow me.
