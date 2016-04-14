# Dawson Botsford

> Node.js hacker and hackathon enthusiast

<br>

[![npm version](https://img.shields.io/npm/v/inf.svg)](https://www.npmjs.com/package/inf)

## Contact Information
| phone |
|------|
| 865-804-9305 |

  <table>
    <thead>
      <tr>
        <th>GitHub</th>
        <th>Twitter</th>
        <th>LinkedIn</th>
        <th>Facebook</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td align='center'>
        <a href="https://github.com/dawsonbotsford">
        <img class="socialIcon" src="./img/socialIcons/Github.png" alt="Github icon">
      </a>
        </td>
        <td align='center'>
          <a href="https://twitter.com/dawsonbotsford">
          <img class="socialIcon" src="./img/socialIcons/Twitter.png" alt="Twitter icon">
        </a>
        </td>
        <td>
        <a href="https://linkedIn.com/in/dawsonbotsford">
        <img class="socialIcon" src="./img/socialIcons/LinkedIn.png" alt="LinkedIn icon">
        </a>
        </td>
        <td>
        <a href="https://facebook.com/dawsonbotsford">
        <img class="socialIcon" src="./img/socialIcons/Facebook.png" alt="Facebook icon">
        </a>
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
