# condition-snap

> Checks SnapCI environment before publishing successful build using semantic-release

Inspired by [condition-travis](https://github.com/semantic-release/condition-travis)


## Install and configure

    npm install --save-dev condition-snap

Add the following to the `package.json`

```json
"release": {
  "verifyConditions": "condition-snap"
}
```

This tells [semantic-release plugins](https://github.com/semantic-release/semantic-release#plugins)
to use this package to verify the environment to make sure we are running on
[SnapCI](https://snap-ci.com).