const phase = { PHASE_DEVELOPMENT_SERVER} = require("next/constants");

module.exports = () => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongoDb_UserName: "jeffkk1",
        mongoDb_UserPassWord: "jk512jk99",
        mongoDb_ClusterName: "cluster0",
        mongoDb_DatabaseKey: "MyApp",
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      mongoDb_UserName: "jeffkk1",
      mongoDb_UserPassWord: "jk512jk99",
      mongoDb_ClusterName: "cluster0",
      mongoDb_DatabaseKey: "MyApp",
    },
  };
};
