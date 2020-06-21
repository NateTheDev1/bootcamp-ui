# bootcamp-ui

- [bootcamp-ui](#bootcamp-ui)
  - [Install](#install)
  - [Usage](#usage)
- [Components](#components)
  - [`Button`](#-button-)
- [License](#license)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

> A prototyping based component library made for easy and quick UI development in React. Made for bootcamp students by a bootcamp student.

[![NPM](https://img.shields.io/npm/v/bootcamp-ui.svg)](https://www.npmjs.com/package/bootcamp-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

### Install

```bash
npm install --save bootcamp-ui
```

### Usage

```jsx
import React, { Component } from 'react'

import { ComponentName } from 'bootcamp-ui'

class Example extends Component {
  render() {
    return <ComponentName />
  }
}
```

# Components

## `Button`

| Prop      | Prop Type | Required | Example         | Options                         | Default |
| --------- | --------- | -------- | --------------- | ------------------------------- | ------- |
| variant   | boolean   | No       | outlined={true} | outlined, box, boxRound, circle | box     |
| textColor | String    | No       | "#FFFFF"        | null                            | Black   |
| width     | String    | No       | "300px"         | null                            | 300px   |
| height    | String    | No       | "600"           | null                            | 50px    |
| theme     | String    | No       | "dark"          | null                            | "light" |

# License

MIT © [NateTheDev1](https://github.com/NateTheDev1)

Porfolio: https://nathanielrichards.dev
