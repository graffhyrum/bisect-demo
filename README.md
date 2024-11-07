# bisect-demo

This project is a demo for how to use git bisect. It has VC history and a commit
that intentionally introduces a bug. Using `git bisect`, you can find the exact commit where the bug was introduced.

## To install dependencies:

```shell
bun install
```

## Bisect instructions

### Manual

```shell
git bisect start
git bisect bad HEAD
# 626eb954 is the first commit hash
git bisect good 626eb954
```

Git will checkout the commit halfway between good and bad.
Create and run a test that exposes the defect.
Use `git bisect good` or `git bisect bad` in your terminal for each commit,
based on test results. Bisect will automatically go up or down the history depending on your 
command, until the first commit that introduces the defect is identified.

See [the git documentation](https://git-scm.com/docs/git-bisect) for more detail.

### Scripted

The HEAD of this project has scripts in the `package.json` that you can use to exercise bisect
automatically.

---

```shell 
bun maketest
```

This creates a simple test that exposes the bug. Since bisect with automatically check out revisions for you, having a
file that exercises the problem outside git will allow the file to persist as you traverse the history.

---

 ```shell
 bun bisect
 ```

This runs the normal bisect command, with HEAD as the known bad and the first commit of the project as the known good.
Note that if you use this with the test generator, it will fail, as multiplication was not implemented until `c734fea3`.

---

```shell
bun bisect:run
```

This script does everything in one command. It will create a test that exercises the defect, set up the bisect for you,
and use `git bisect run <test command>` to bisect automatically. It will stop bisect on the first commit where the test
command fails (does not return exit code 0). Your terminal output will identify which

---

This project was created using `bun init` in bun v1.1.34. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
