/**
 * - Type(필수): Commit의 종류. (Feature, Update, Fix, Docs, Style, Refact, Config)
 * - Scope(선택): Commit의 범위. 기능, 함수, 페이지, API 등 자유롭게 선택할 수 있습니다.
 * - Subject(필수): Commit의 제목. 되도록 간결하게 작성하고, 명사형 어미로 끝나도록 합니다.
 * - <type>(<scope>): <subject>
 *
 * @example
 * - Feat: 로그인 기능 추가
 * - Feat(login/SignUp): 회원가입 기능 추가
 * - Fix: 로그인 기능 수정
 * - Style: 로그인 페이지 디자인 변경
 */

import type { UserConfig } from "@commitlint/types";

const commitlintConfig: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    //Commit Type
    "type-enum": [2, "always", ["Feature", "Fix", "Refactor", "Update", "Config", "Docs"]],
    "type-case": [2, "always", "start-case"],
    "type-empty": [2, "never"],

    //* Scope
    "scope-case": [2, "never", []],

    //* Subject
    "subject-full-stop": [2, "never", "."],
    "subject-exclamation-mark": [2, "never", "!"],
    "subject-case": [2, "never", []],
    "subject-empty": [2, "never"],
  },

  prompt: {},
  ignores: [
    (message: string) =>
      message.startsWith("Merge") ||
      message.startsWith("Revert") ||
      message.startsWith("Amend") ||
      message.startsWith("Reset") ||
      message.startsWith("Rebase") ||
      message.startsWith("Tag"),
  ],
};

module.exports = commitlintConfig;
