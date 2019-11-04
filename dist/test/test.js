"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../src/index"));
debugger;
function asyncAdd(p1, p2, cb) {
    setTimeout(function () { return cb(p1 + p2); }, 1);
}
function asyncMns(p1, p2, cb) {
    setTimeout(function () { return cb(p1 - p2); }, 1);
}
function asyncMul(p1, p2, cb) {
    setTimeout(function () { return cb(p1 * p2); }, 1);
}
function asyncDvd(p1, p2, cb) {
    setTimeout(function () { return cb(p1 / p2); }, 1);
}
// ((1 + 2) * 3 + 4 ) / 5 - 9 + 2
(function () {
    var cs = new index_1.default();
    cs.append("res", asyncAdd, function () { return [1, 2]; })
        .append("res", asyncMul, function () { return [cs.val("res"), 3]; })
        .append("res", asyncAdd, function () { return [cs.val("res"), 4]; })
        .append("res", asyncDvd, function () { return [cs.val("res"), 5]; })
        .append("res", asyncMns, function () { return [cs.val("res"), 9]; })
        .append("res", asyncAdd, function () { return [cs.val("res"), 2]; })
        .success(function (res) { return console.log("((1 + 2) * 3 + 4 ) / 5 - 9 + 2 = " + res); })
        .error(function (err) { return console.error(err); })
        .execute();
})();
// 1! + 2! + 3! + 4! + 5! + 6! + 7! + 8! + 9! + 10!
(function () {
    var cs = new index_1.default();
    // 1. sum = 0;
    cs.append("sum", index_1.default.ASSIGN, function () { return [0]; });
    // 2. i = 1;
    cs.append("i", index_1.default.ASSIGN, function () { return [1]; });
    // 3. fac = 1;
    // let the stack just appended name
    // "itemi", => fac = 1
    // for loop logic jump back.
    cs.append("fac", index_1.default.ASSIGN, function () { return [1]; }).markAs("itemi");
    // 4. j = 1;
    cs.append("j", index_1.default.ASSIGN, function () { return [1]; });
    // 5. fac = asyncMul(fac, j);
    // let the stack just appended
    // name "itemj", => fac = fac * j
    // for loop logic jump back.
    cs.append("fac", asyncMul, function () { return [cs.val("fac"), cs.val("j")]; }).markAs("itemj");
    // 6. j = asyncAdd(j, 1)
    cs.append("j", asyncAdd, function () { return [cs.val("j"), 1]; });
    // 7. j <= i?back to itemj
    cs.loop(function () { return cs.val("j") <= cs.val("i"); }, function () { return cs.findMark("itemj"); });
    // 8. i = asyncAdd(i, 1)
    cs.append("i", asyncAdd, function () { return [cs.val("i"), 1]; });
    // 9. sum = asyncAdd(sum, fac)
    cs.append("sum", asyncAdd, function () { return [cs.val("sum"), cs.val("fac")]; });
    // 10. i <= 10?back to itemi
    cs.loop(function () { return cs.val("i") <= 10; }, function () { return cs.findMark("itemi"); });
    // 11. console sum value. all done.
    cs.success(function (sum) { return console.log("1! + 2! + 3! + 4! + 5! + 6! + 7! + 8! + 9! + 10! = " + sum); });
    // 12. console err if happends
    cs.error(function (err) { return console.error(err.message); });
    //
    cs.complete(function () { return console.log("stack:", index_1.default.currentStack()); });
    // execute CallStack cs.
    cs.execute();
})();
(function () {
    return setTimeout(function () {
        console.log("Test AopBuilder");
        var ab = new index_1.default.AopBuilder();
        ab.aopFrom(function () { return console.log("real func"); });
        ab.addPrev(function () { return console.log("prev1-sync"); });
        ab.addPrev(function (r) {
            return setTimeout(function () {
                console.log("prev2-async", index_1.default.currentStack());
                r();
            }, 3000);
        });
        ab.addPrev(function () { return console.log("prev3-sync"); });
        ab.addPost(function () { return console.log("post1-sync"); });
        ab.addPost(function (r) {
            return setTimeout(function () {
                console.log("post2-async");
                r();
            }, 3000);
        });
        ab.addPost(function () { return console.log("post3-sync"); });
        ab.execute(function () { return console.log("success"); });
    }, 1000);
})();
