const compileSass = require("gulp-sass")(require("sass"));
const { src, dest } = require("gulp");
compileSass.compiler = require("node-sass");
const bundleSass = () => {
  return src("./sass/**/*.scss")
    .pipe(compileSass().on("error", compileSass.logError))
    .pipe(dest("./css"));
};
exports.bundleSass = bundleSass;
