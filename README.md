### 프로젝트 소개

- npm i 실행 시, package.json prepare에 있는 husky install && npx playwright install 명령이 실행됩니다.
- Dockerfile 에서는 npm ci --ignore-scripts로 실행하여 prepare에 있는 스크립트가 실행되지 않습니다.
- commitlint를 통한 커밋 메시지 lint를 자동화합니다. ( .commitlintrc.ts 파일을 참고하세요. )
- git hook을 통해 커밋 메시지 앞에 [branch name]을 prefix로 붙여줍니다. ( ex: [main] Feature: 로그인 )
- lint-staged를 통해 git commit 전 변경된 ts,tsx 파일 lint를 자동화합니다.
- git push 전에 next.js 프로젝트를 빌드합니다.
- 빌드가 완료되면 npm-run-all --parallel --race으로 start와 test가 병렬로 실행됩니다.
- --race 옵션으로 먼저 마치는 작업이 있으면 프로세스가 종료됩니다.
- test가 성공하면 git push를 실행합니다.
- [.github/workflows/ci_cd.yml 파일에서 지정한 브랜치 명] branch에 push 되면 git workflows가 실행됩니다.
- Dockfile을 기반으로 컨테이너 이미지를 ECR에 push합니다.

### 주요 라이브러리

- husky: git hook 관련 라이브러리입니다.
- playwright: e2e test 라이브러리입니다.
- @commitlint/cli & @commitlint/config-conventional: 커밋 메시지 lint 라이브러리입니다.
- npm-run-all: 병렬 실행을 가능하게 도와주는 라이브러리입니다. pre-push 단계에서 개발서버 실행과 테스트가 병렬 실행되게 합니다.
