import CallStack from "../src/index";
function asyncAdd(p1: number, p2: number, cb: (o: any) => void): void {
  setTimeout(() => cb(p1 + p2), 1);
}
function asyncMns(p1: number, p2: number, cb: (o: any) => void): void {
  setTimeout(() => cb(p1 - p2), 1);
}
function asyncMul(p1: number, p2: number, cb: (o: any) => void): void {
  setTimeout(() => cb(p1 * p2), 1);
}
function asyncDvd(p1: number, p2: number, cb: (o: any) => void): void {
  setTimeout(() => cb(p1 / p2), 1);
}
// ((1 + 2) * 3 + 4 ) / 5 - 9 + 2
(() => {
  var cs = new CallStack();
  cs.append("res", asyncAdd, () => [1, 2])
    .append("res", asyncMul, () => [cs.val("res"), 3])
    .append("res", asyncAdd, () => [cs.val("res"), 4])
    .append("res", asyncDvd, () => [cs.val("res"), 5])
    .append("res", asyncMns, () => [cs.val("res"), 9])
    .append("res", asyncAdd, () => [cs.val("res"), 2])
    .success((res: any) => console.log("((1 + 2) * 3 + 4 ) / 5 - 9 + 2 = " + res))
    .error((err: Error) => console.error(err))
    .execute();
})();
// 1! + 2! + 3! + 4! + 5! + 6! + 7! + 8! + 9! + 10!
(() => {
  var cs = new CallStack();
  // 1. sum = 0;
  cs.append("sum", CallStack.ASSIGN, () => [0]);
  // 2. i = 1;
  cs.append("i", CallStack.ASSIGN, () => [1]);
  // 3. fac = 1;
  // let the stack just appended name
  // "itemi", => fac = 1
  // for loop logic jump back.
  cs.mark("itemi");
  cs.append("fac", CallStack.ASSIGN, () => [1]);
  // 4. j = 1;
  cs.append("j", CallStack.ASSIGN, () => [1]);
  // 5. fac = asyncMul(fac, j);
  // let the stack just appended
  // name "itemj", => fac = fac * j
  // for loop logic jump back.
  cs.mark("itemj");
  cs.append("fac", asyncMul, () => [cs.val("fac"), cs.val("j")]);
  // 6. j = asyncAdd(j, 1)
  cs.append("j", asyncAdd, () => [cs.val("j"), 1]);
  // 7. j <= i?back to itemj
  cs.goto(
    () => cs.val("j") <= cs.val("i"),
    () => cs.findMark("itemj")
  );
  // 8. i = asyncAdd(i, 1)
  cs.append("i", asyncAdd, () => [cs.val("i"), 1]);
  // 9. sum = asyncAdd(sum, fac)
  cs.append("sum", asyncAdd, () => [cs.val("sum"), cs.val("fac")]);
  // 10. i <= 10?back to itemi
  cs.goto(
    () => cs.val("i") <= 10,
    () => cs.findMark("itemi")
  );
  // 11. console sum value. all done.
  cs.success(() => console.log("1! + 2! + 3! + 4! + 5! + 6! + 7! + 8! + 9! + 10! = " + cs.val("sum")));
  // 12. console err if happends
  cs.error((err: any) => console.error(err.message));
  //
  cs.complete(() => console.log("stack:", CallStack.currentStack()));
  // execute CallStack cs.
  cs.execute();
})();
(() =>
  setTimeout(() => {
    console.log("Test AopBuilder");
    var ab = new CallStack.AopBuilder();
    ab.aopFrom(() => console.log("real func"));
    ab.addPrev(() => console.log("prev1-sync"));
    ab.addPrev((r: any) =>
      setTimeout(() => {
        console.log("prev2-async", CallStack.currentStack());
        r();
      }, 3000)
    );
    ab.addPrev(() => console.log("prev3-sync"));
    ab.addPost(() => console.log("post1-sync"));
    ab.addPost((r: any) =>
      setTimeout(() => {
        console.log("post2-async");
        r();
      }, 3000)
    );
    ab.addPost(() => console.log("post3-sync"));
    ab.execute(() => console.log("success"));
  }, 1000))();
