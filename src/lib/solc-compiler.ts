const solc = require("solc");

export let solCompiler: any;

solc.loadRemoteVersion(
  "v0.8.10+commit.fc410830",
  function (err: any, solcSnapshot: any) {
    if (err) throw err;
    solCompiler = solcSnapshot;
  }
);
