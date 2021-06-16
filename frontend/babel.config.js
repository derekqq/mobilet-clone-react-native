module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "~src": "./src/",
            "~shared": "./src/shared",
            "~components": "./src/components",
            "~screens": "./screens",
            "~context": "./context",
            "~types": "./src/types",
            "~hooks": "./src/hooks",
          },
        },
      ],
    ],
  };
};
