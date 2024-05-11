## 프로젝트 소개

이 프로젝트는 다음과 같은 주요 기능을 갖고 있습니다:

- `npm i` 명령 실행 시, `package.json`의 `prepare` 스크립트에 포함된 `husky install && npx playwright install` 명령이 실행됩니다.
- Dockerfile에서는 `npm ci --ignore-scripts` 명령으로 실행하여 `prepare` 스크립트를 실행하지 않습니다.
- 커밋 메시지를 자동으로 lint하는 기능을 제공합니다. (`commitlint`를 사용하며, `.commitlintrc.ts` 파일을 참고하세요.)
- git hook을 활용하여 커밋 메시지 앞에 브랜치 이름을 prefix로 붙여줍니다. (예: `[main] Feature: 로그인`)
- `lint-staged`를 사용하여 변경된 ts, tsx 파일의 lint를 자동화합니다.
- git push 전에 Next.js 프로젝트를 빌드합니다.
- 빌드가 완료되면 `npm-run-all --parallel --race`으로 `start`와 `test`를 병렬로 실행합니다.
- `--race` 옵션을 사용하여 먼저 마치는 작업이 있으면 프로세스가 종료됩니다.
- 테스트가 성공하면 git push가 실행됩니다.
- `.github/workflows/ci_cd.yml` 파일에서 지정한 브랜치 명에 push되면 git workflows가 실행됩니다.
- Dockfile을 기반으로 컨테이너 이미지를 ECR에 push합니다.

## 주요 라이브러리

- `husky`: git hook 관련 라이브러리
- `playwright`: e2e test 라이브러리
- `@commitlint/cli` & `@commitlint/config-conventional`: 커밋 메시지 lint 라이브러리
- `npm-run-all`: 병렬 실행을 가능하게 도와주는 라이브러리로, pre-push 단계에서 `npm run start`와 `npm run test`를 병렬 실행하고 --race 옵션을 통해 먼저 끝나는 프로세스가 있으면 모두 종료됩니다.
