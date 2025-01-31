<div align="center">
   <h1>
       <img src="https://myhbarwallet.com/img/myhbarwallet-logo.c74a7d51.svg" alt="logo" />
   </h1>
</div>

<div align="center">
  <!-- Netlify Status -->
  <a href="https://app.netlify.com/sites/myhbarwallet/deploys">
    <img src="https://img.shields.io/netlify/c533cd8a-a127-48d5-a123-292202cab01c?style=flat-square"
    alt="Netlify Status" />
  </a>
</div>

<br>

MyHbarWallet is a free, client-side interface helping you interact with Hedera™ Hashgraph. Our easy-to-use, open-source platform allows you to generate keys, create accounts, transfer hbars, and so much more.

## License

Copyright 2019 Hedera Hashgraph LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

<http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Contribution

Send us a Pull Request!

You can run tests with `yarn test`

We use Jest (rn) for Snapshots of Components and Nightwatch for E2E
tests

The project is split into a configuration for web and a configuration
for electron via `vue.config.front.js` and `vue.config.back.js`.
These configs are copied into place before via scripts before
downstream commands run.

`yarn build` builds for production and drops a webpack `stats.json`
in the dist subfolder of the currently running build.

<details>
  <summary>Source Dependency Graph</summary>
  <img src="src/ui/assets/deps.svg"></img>
</details>
