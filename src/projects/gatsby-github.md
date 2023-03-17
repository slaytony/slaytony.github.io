---
title: Gatsby 사이트 생성, GitHub 배포
stack: Gatsby, Node.js
slug: gatsby-github
date: 2023-03-17
desc: Node.js, VSCODE, YARN 이용해서 Gatsby.js 정적 웹 사이트 생성하고 GitHub Page에 배포하기
---

Gatsby.js는 React 기반 정적 웹사이트 생성기이다.

React를 사용해서 정적인 HTML, CSS, JavaScript 파일을 생성해서, 웹 사이트를 만들 수 있다.

GraphQL과 같은 기술을 사용하여 데이터를 관리하고 가져올 수 있다.

플러그인과 테마가 다양해서 효과적으로 웹사이트를 만들 수 있다.

Gatsby.js의 특징 중 하나는 빠른 로딩 속도와 성능 최적화.

또한, Gatsby.js는 검색 엔진 최적화(SEO)에도 도움을 준다.

Gatsby.js는 사이트맵(Sitemap)을 자동으로 생성하고, HTML 태그의 구조를 최적화하여 검색 엔진에서 쉽게 인식할 있다.

또한, Gatsby.js는 웹사이트의 이미지를 자동으로 최적화하여 페이지 로딩 속도를 높이고, 검색 엔진에서 이미지 검색이 용이하다.

> Sitemap
> 사이트맵(Sitemap)은 웹사이트의 구조와 페이지 URL 등의 정보를 담고 있는 XML 파일입니다. 이 파일을 검색 엔진에 제출하면 검색 엔진이 웹사이트의 페이지를 크롤링할 때 빠르고 효율적으로 수집할 수
> 있습니다.

> SEO
> SEO는 검색 엔진 최적화(Search Engine Optimization)의 약어로, 웹사이트를 검색 엔진에서 노출시키기 위해 다양한 기술과 전략을 사용하는 것을 말합니다. 검색 엔진은 사용자가 검색어를 입력하면, 그에 > 맞는 검색 결과를 보여주는데, SEO는 검색 결과에서 노출되는 웹사이트의 순위를 높여, 사용자에게 노출될 확률을 높이는 것을 목적으로 합니다. 검색 엔진에서 상위에 노출될수록, 사용자에게 노출될 확률과 > 클릭률이 높아지므로, SEO는 많은 웹사이트에서 중요한 전략 중 하나입니다.

Gatsby.js로 만든 블로그는 SEO에 도움이 될 수 있고,
검색 엔진에서 상위에 노출되는 것은 블로그에 방문자를 유입시키기 좋은 전략이라고 하는데,
방문자가 많이 들어오면 광고 수익도 챙길 수 있고 수익을 창출할 수 있습니다.

- Google AdSense
  Google AdSense와 같은 광고 네트워크를 이용하여 광고 수익을 창출할 수 있습니다. 방문자 수가 많을수록 광고 수익도 높아질 수 있습니다.

Node.js, VSCODE, YARN

Node.js는 JavaScript를 실행할 수 있는 런타임입니다.
npm(Node Package Manager)과 Yarn은 둘 다 JavaScript 패키지 매니저입니다.
npm은 Node.js 패키지 매니저로, Node.js를 설치하면 자동으로 함께 설치됩니다.
Yarn은 Facebook에서 만든 JavaScript 패키지 매니저입니다. Yarn은 npm보다 빠르고 안정적이며 보안 기능도 강화되어 있습니다.

1. Node.js 다운로드

   - Windows에서 Node.js 설치 방법

   1. Node.js 공식 웹사이트(https://nodejs.org/)에서 Windows용 설치 파일(.msi)을 다운로드합니다.
   2. 다운로드한 파일을 실행합니다.
   3. Node.js 설치 마법사가 시작됩니다. 설치 마법사의 지시에 따라 설치를 진행합니다.
   4. 설치가 완료되면 Node.js가 설치된 경로가 환경 변수에 자동으로 추가됩니다.

   - macOS에서 Node.js 설치 방법

   1. Node.js 공식 웹사이트(https://nodejs.org/)에서 macOS용 설치 파일(.pkg)을 다운로드합니다.
   2. 다운로드한 파일을 실행합니다.
   3. Node.js 설치 마법사가 시작됩니다. 설치 마법사의 지시에 따라 설치를 진행합니다.
   4. 설치가 완료되면 Node.js가 설치된 경로가 환경 변수에 자동으로 추가됩니다.

2. yarn 설치

// terminal 이용 자신의 디렉토리로 가서 ex) D:\>

npm install -g yarn

3. Gatsby 프로젝트 만들기

yarn global add gatsby-cli

4. 생성된 프로젝트 폴더로 이동하기

cd <project-name>

5. gatsby 개발 서버 실행

yarn develop

GitHub pages에 배포

1. Github repository 생성

먼저, Github에 새로운 repository를 생성합니다. 이 repository는 배포할 Gatsby 프로젝트를 호스팅할 것입니다. 이후 repository 이름은 [사용자이름].github.io로 설정합니다.

<사진>

Repository name 에
[사용자이름].github.io로 설정

2. Gatsby 프로젝트 준비

gatsby-plugin-github-pages 플러그인을 사용하여 빌드된 소스 코드를 repository의 gh-pages 브랜치로 배포합니다.

npm 이용 : npm install --save-dev gh-pages gatsby-plugin-github-pages
yarn 이용 : yarn add gh-pages gatsby-plugin-github-pages --dev

- npm과 yarn 명령어를 번갈아서 쓰면 일반적으로는 문제가 안된다고 하는데, 한 프로젝트 내에서 두개 패키지 매니저를 혼용하면 의존성 관리에 문제가 발생한다고 하니 나같으면 yarn으로 하겠음

  1.  gatsby-config.js 설정

  plugins: [
  {
  resolve: `gatsby-plugin-github-pages`,
  options: {

      // GitHub Pages options
      // -------------------------------------
      // (optional) Use custom domain
      // domain: "www.example.com",
      // (optional) If you have a CNAME file
      // cname: "www.example.com",

      },

  },

  2.  package.json 설정

  {
  "name": "my-app",
  "version": "1.0.0",
  "homepage": "https://github.com/slaytony/slaytony.github.io.git", // 추가
  "dependencies": {
  "react": "^17.0.2",
  "react-dom": "^17.0.2"
  }
  }

  "scripts": {
  "build": "gatsby build",
  "develop": "gatsby develop",
  "format": "prettier --write \"\*_/_.{js,jsx,ts,tsx,json,md,css}\"",
  "start": "gatsby develop",
  "serve": "gatsby serve",
  "clean": "gatsby clean",
  "test": "echo \"Write tests! -> https://gatsby.dev/unit-testing\" && exit 1",
  "deploy": "gh-pages -d build", // 추가
  "predeploy": "yarn build" // 추가
  },

  이렇게 추가하면 yarn build 또는 yarn build를 실행할 때 자동으로 생성되는 index.html 파일 내에서 정적 파일의 경로가 이 homepage 값으로 시작하도록 설정됩니다.
  gh-pages 패키지를 사용하여 GitHub Pages에 배포하려는 경우, homepage 값은 package.json 파일 내에서 deploy 스크립트에서 사용됩니다.
  위의 deploy 스크립트는 프로젝트를 빌드하고 gh-pages 패키지를 사용하여 빌드된 파일들을 public 디렉토리에 놓고 gh-pages 브랜치에 푸시합니다.

  3.  빌드

  yarn build

  4.  배포

  프로젝트 파일 우클릭 해서 Git Bash Here 누르고

  - Git 저장소(repository) 생성 : 현재 디렉토리 기준으로 Git repository 생성

    git init

  - 프로젝트 폴더 전체 파일 add : 추가로 작성된 파일을 저장한다.

    git add .

  - 프로젝트 폴더 전체 파일 Commit : 무엇을 추가하는지 메시지를 남긴다.

    git commit -m "gatsby page"

  - Repository와 연결 : 어디로 추가할지 연결한다.

    git remote add origin 복붙

    - 위에서 만든 GitHub repository에 가서 Code 클릭하고 HTTPS 로 나오는 주소 복사해서 붙여 넣는다.

  - Git push : 최종적으로 어떤 파일을, 메시지를 더해서, 어떤 저장소로 저장한다.

    git push -u origin main

  * 배포 과정에서는 굉장히 많은 오류가 발생. 구글링해서 해결.

  자주 발생한 오류 - "fatal: refusing to merge unrelated histories" 오류는 두 개의 Git 저장소에서 서로 다른 커밋 기록이 있어서 병합 작업이 거부되었다는 것을 의미.

  해결 - 1) git pull origin main --allow-unrelated-histories 2) git add . (아무거나) 3) git commit -m "message" 4) git push -u origin main

  - 터미널에 돌아와서

    yarn deploy

  5.  GitHub 설정

  - 모든 작업을 마치고 Repository에서 확인하면 파일 업로드 확인가능.
  - 오류 없이 잘 됐다면 gh-pages 라는 branch가 자동으로 생겨있다.
  - Settings > Pages로 들어가서 branch를 gh-pages로 변경, Save
  - 5분 정도 있다가 Visit site로 배포 확인

HTML, CSS, JavaScript 만 이용해서 웹을 만들었다 보니 많이 해맸음.
React, Gatsby, Visual Studio Code, Node.js, npm, yarn 등 처음 써봐서 쉽지 않았음.
