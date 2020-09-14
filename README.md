# react-native-promise-rejection-utils

[![npm version](https://badge.fury.io/js/react-native-promise-rejection-utils.svg)](https://badge.fury.io/js/react-native-promise-rejection-utils)
[![Dependency Status](https://david-dm.org/iyegoroff/react-native-promise-rejection-utils.svg)](https://david-dm.org/iyegoroff/react-native-promise-rejection-utils)
[![devDependencies Status](https://david-dm.org/iyegoroff/react-native-promise-rejection-utils/dev-status.svg)](https://david-dm.org/iyegoroff/react-native-promise-rejection-utils?type=dev)
[![npm](https://img.shields.io/npm/l/react-native-promise-rejection-utils.svg)](https://www.npmjs.com/package/react-native-promise-rejection-utils)

Utils for global tracking of unhandled promise rejections.

## Installation

`$ npm i react-native-promise-rejection-utils`

## Usage

```ts
import {
  getUnhandledPromiseRejectionTracker,
  setUnhandledPromiseRejectionTracker,
} from 'react-native-promise-rejection-utils'

const prevTracker = getUnhandledPromiseRejectionTracker()

setUnhandledPromiseRejectionTracker((id, error) => {
  console.warn('Unhandled promise rejection!', id, error)

  if (prevTracker !== undefined) {
    prevTracker(id, error)
  }
})
```
