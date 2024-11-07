# bisect-demo

This project is a demo for how to use git bisect. It has VC history and a commit
that intentionally introduces a bug. Using `git bisect`, you can find the exact commit where the bug was introduced.

## To install dependencies:

```shell
bun install
```

## Bisect instructions

```shell
git bisect start
git bisect bad HEAD
# 626eb954 is the first commit hash
git bisect good 626eb954
# Git will checkout different commits
# Run `bun test` at each step
# Use `git bisect good` or `git bisect bad` based on test results
# Git will eventually point to the commit that introduced the bug

```


This project was created using `bun init` in bun v1.1.34. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
