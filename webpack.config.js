// 전체경로를 지정해주는법임
// 예를들어 documents/vs/personal/mytube 같은 경로
const path = require("path");

const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const MODE = process.env.WEBPACK_ENV;

// __dirname은 현재의 프로젝트 이름 assets/js/main.js 라는뜻
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
// static
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  // 파일의 시작점
  entry: ["@babel/polyfill",ENTRY_FILE],
  //   개발을 위한 development(코드를 압축시키지않음 오류발생시 발견가능) production(서버에배포 코드를압축함) 2가지 모드가있음
  mode: MODE,
  //   모듈을발견하면
  module: {
    //   룰에따라
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        //   파일을 만낫는데 그게 scss로 끝나면
        test: /\.(scss)$/,
        // scss를 찾았어? 그다음엔 scss를 css로 바꾸고 텍스트를 추출후에 그 추출된 css를 하나의 파일로 만듬
        // 우린 이걸 사용할거야.
        use: [
          {
            //   4.
            loader: MiniCssExtractPlugin.loader,
          },
          {
            // 3. 호환성맞게 css로 변환된 파일을 webpack 이 이해함
            loader: "css-loader",
          },
          {
            //  2. 밑에서 온 css를 호환성있게(크롬 사파리 파이어폭스 익스플로러..) 만들기위한 Postcss
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    //   postcss에서 지원하는 autoprefixer가
                    // 각 브라우저의 호환성에맞게 코드를 수정해줌
                    "autoprefixer",
                    {
                      //options 브라우저의 99.5%에 호환되게 만든다는뜻. 여러 옵션들이있음
                      browsers: "cover 99.5%",
                    },
                  ],
                ],
              },
            },
          },
          {
            //  1. sass scss를 일반 css로 바꿔줌
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  //   entry에서 만든 파일을 어떻게 처리할래?
  output: {
    //   output_dir에서 설정한 경로에
    path: OUTPUT_DIR,
    // 파일이름은 [name].js로 만들어
    filename: "[name].js",
  },
  //   이런 플러그인을 쓸거에요
  plugins: [
    new MiniCssExtractPlugin({
      // 저장할 파일이름
      filename: "[name].css",
    }),
  ],
};

module.exports = config;
