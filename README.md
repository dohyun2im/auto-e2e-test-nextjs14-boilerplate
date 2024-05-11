## 프로젝트 소개

0. npm i 실행 시, package.json prepare에 있는 husky install && npx playwright install 명령이 실행됩니다.
1. commitlint를 통한 커밋 메시지 lint를 자동화합니다. .commitlintrc.ts 파일을 참고하세요.
2. git hook을 통해 커밋 메시지 앞에 [branch name]을 prefix로 붙여줍니다. ex) [main] Feature: 로그인
3. lint-staged를 통해 git commit 전 변경된 ts,tsx 파일 lint를 자동화합니다.
4. git push 전에 프로젝트를 빌드하고 개발 서버를 실행시킨 다음 테스트를 진행하고 완료하면 git push가 진행됩니다.
5. main branch에 머지되면 git workflows가 실행되며 Dockfile을 기반으로 컨테이너 이미지를 ECR에 push합니다.

## 주요 라이브러리

- husky: git hook 관련 라이브러리입니다.
- playwright: e2e test 라이브러리입니다.
- @commitlint/cli & @commitlint/config-conventional: 커밋 메시지 lint 라이브러리입니다.
- npm-run-all: 병렬 실행을 가능하게 도와주는 라이브러리입니다. pre-push 단계에서 개발서버 실행과 테스트가 병렬 실행되게 합니다.
