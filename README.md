# frank-native-callstack - Simplified Callback Hell.
Callback Hell is a common and difficult issue which need almost all JavaScript programmers to face it thousands of times.  
This module can make it easy.
# APIs:
1. class: CallStack
    1. import & instantiate:
        ```js
        var CallStack = require("frank-native-callstack");
        // instantiate by Constructor
        var callStack = new CallStack();
        // instantiate by class.newInstance
        var callStack = CallStack.newInstance();
        // instantiate by factory
        var callStack = require("frank-native-core").newInstance(CallStack);
        ```
    2. callStack.append: append a CallItem on callStack
        ```js
        append({
            "vari":string,
            "methodCall":function,
            "paramsCall":function
        });
        ```
        ```js
        append(variable:string, methodCall:function, paramsCall:function);
        ```
        ```js
        append(new CallItem()
        .variKey(key:string)
        .methodCall(call:function)
        .paramsCall(call:function));
        ```
    3. callStack.next: append a CallItem after current executing CallItem
        ```
        [The arguments types are the same as append]
        ```
    4. callStack.val: get value from callStack cache
        ```js
        val(key:string)
        ```
    5. callStack.success: set success callback for all success.
        ```js
        success(cb:function)
        ```
    6. callStack.error: set error callback for any Error happening.
        ```js
        error(cb:function)
        ```
    7. callStack.complete: set complete callback for callStack completing.
        ```js
        complete(cb:function)
        ```
    8. callStack.execute: execute this callStack.
        ```js
        execute()
        ```
    9. callStack.loop: jump to the loopFromCallItem if the conditionCall() is true
        ```js
        loop(conditionCall:function, loopFromCall:function)
        ```
    10. callStack.sleep: add the timeout of last callItem executing.
        ```js
        sleep(timeoutMillisecond:number)
        ```
2. class: CallItem 
    1. import & instantiate

        ```js
        var CallItem = require("frank-native-callstack/CallItem");
        // instantiate by Constructor
        var callItem = new CallItem();
        // instantiate by class.newInstance
        ...
        // instantiate by factory
        ...
        ```
    2. All functions are chain model and Getter & Setter, Such as:
        ```js
        var ci = new CallItem()
            .variKey("key")
            .methodCall((params,receive)=>receive(params))
            .paramsCall(()=>["params"]);
        // string: "key"
        var key = ci.variKey(); 
        // function:(params,receive)=>receive(params)
        var methodCall = ci.methodCall();
        // function:()=>["params"]
        var paramsCall = ci.paramsCall();
        ```
    3. callItem.variKey: the name of callItem result to save as in callStack
        ```js
        variKey(key:string)
        ```
    4. callItem.methodCall: method for execute
        ```js
        methodCall(call:function)
        ```
    5. callItem.paramsCall: parameter for method
        ```js
        paramsCall(call:function)
        ```
    6. callItem.next : the next CallItem instance
        ```js
        next(item:CallItem)
        ```
    7. callItem.loopCall: [function]: loop condition
        ```js
        loopCall(call:function)
        ```
    8. callItem.loopFrom: [CallItem]: go to the callItem when done and condition is true.
        ```js
        loopFrom(item:CallItem)
        ```
3. others: 
    1. CallStack.o
        ```
        for writing multilevel JSON in one line.
        ```
        - Example:
        ```js
        var arg = {
            a1:0,
            a2:{
                b1:1
            },
            a3:{
                b2:2
            }
        };
        ```
        - can be write as: 
        ```js
        var o = CallStack.o;
        var arg = o().kv("a1",0).kv("a2.b1",1).kv("a3.b2",2).done();
        ```
        - or as:
        ```js
        var o = CallStack.o;
        var arg = o("a1",0).kv("a2.b1",1).done("a3.b2",2);
        ```
    2. CallStack.ASSIGN
        ```
        Using it if the logic is just to store value. Easy to use.
        ```
        - For example:
        ```js
        new CallStack().append("var1",CallStack.ASSIGN,()=>[1]);
        ```
        - It's equivalent to:
        ```js
        new CallStack().append("var1",(p,r)=>r(p),()=>[1]);
        ```
        


#Super simple to use: 
##Example: 
### First of all:
Let us suppose that there only 4 async functions and no other math functions for further example.
```js
var asyncAdd = (p1,p2,cb)=>setTimeout(()=>cb(p1+p2));
var asyncMns = (p1,p2,cb)=>setTimeout(()=>cb(p1-p2));
var asyncMul = (p1,p2,cb)=>setTimeout(()=>cb(p1*p2));
var asyncDvd = (p1,p2,cb)=>setTimeout(()=>cb(p1/p2));
```

### Second: Use "callStack.append" to handle simple logic
    Calculate the result of formula ((1+2)*3+4)/5-9+2)
1. Traditional
```js
    asyncAdd(1, 2, res => { // =>1+2 ------------------------------------------ (3)
        try {
            asyncMul(res, 3, res => { // =>*3 --------------------------------- (9)
                try {
                    asyncAdd(res, 4, res => { // =>+4 ------------------------ (13)
                        try {
                            asyncDvd(res, 5, res => { // =>/5 --------------- (2.6)
                                try {
                                    asyncMns(res, 9, res => { // =>-9 -------(-6.4)
                                        try { 
                                            asyncAdd(res, 2, res => {// =>+2 (-4.4)
                                                try{
                                                    console.log("((1+2)*3+4)/5-9+2=" + res);
                                                }catfch(err){
                                                    console.error(err);
                                                }
                                            });
                                        } catch (err) {
                                            console.error(err);
                                        }
                                    });
                                } catch (err) {
                                    console.error(err);
                                }
                            });
                        } catch (err) {
                            console.error(err);
                        }
                    });
                } catch (err) {
                    console.error(err);
                }
            });
        } catch (err) {
            console.error(err);
        }
    });
```
2. Use frank-native-callstack
    - Overview: 
    ```js
    new CallStack().append("res",asyncAdd,()=>[1,2])
    .append("res",asyncMul,function(){return [this.val("res"),3]})
    .append("res",asyncAdd,function(){return [this.val("res"),4]})
    .append("res",asyncDvd,function(){return [this.val("res"),5]})
    .append("res",asyncMns,function(){return [this.val("res"),9]})
    .append("res",asyncAdd,function(){return [this.val("res"),2]})
    .success(res =>console.log("((1+2)*3+4)/5-9+2=" + res))
    .error(err => console.error(err))
    .execute();
    ```
    - Dscription with comments:
    ```js
    // 1. Instantiate a CallStack instance cs.
    var cs = new CallStack();
    // 2. append a CallItem instance
    cs.append(
    // 2.1. with resultName:"res"
    "res",
    // 2.2. with a call function: asyncAdd
    asyncAdd,
    // 2.3. with a parameters function: ()=>[1,2].
    //      means it returns params[0]: p1=1, params[1]: p2=2
    ()=>[1,2]);
    // 2. if not using lambda function,
    //    the scope 'this' is the CallStack instance cs.
    //    both in call function and parameter function.
    cs.append("res",asyncMul,function(){return [this.val("res"),3];});
    // 3. All functions in CallStack are designed as chained mode.
    cs.append("res",asyncAdd,()=>[cs.val("res"),4])
    .append("res",asyncDvd,()=>[cs.val("res"),5])
    .append("res",asyncMns,()=>[cs.val("res"),9])
    .append("res",asyncAdd,()=>[cs.val("res"),2])
    // 4. Success callback:
    // 4.1. Success callback will be call when 
    //      all CallItem instance has done and successed.
    // 4.2. The result of last CallItem instance 
    //      will be send as the argument of success callback.
    // 4.3. The scope 'this' is the CallStack instance cs.
    .success(res=>console.log(res));
    // 5. Error callback:
    // 5.1. Error callback will be call when any Error happends.
    // 5.2. 
    // 5.3. The scope 'this' is the CallStack instance cs.
    .error(err=>console.error(err));
    // 6. The CallStack instance will run after execute
    .execute();
    ```

### Third: Use "callStack.loop" to control loop logic and flow.
        Calculate formula 1! + 2! + ... + 9! + 10!.
        By Traditional, it's hard to see loop logic clearly and must
    nest serval functions to code.
        But by frank-native-core, can clearly see loop logic and no
    need to nest.
- Use frank-native-callstack: 
```js
var marks = {};
var cs = new CallStack();
// 1. sum = 0;
cs.append("sum", (p, r) => r(p), () => [0]);
// 2. i = 1;
cs.append("i", (p, r) => r(p), () => [1]);
// 3. fac = 1;
// let the stack just appended name
// "itemi", => fac = 1
// for loop logic jump back.
cs.append(marks.itemi = new CallItem().variKey("fac").methodCall((p, r) => r(p)).paramsCall(() => [1]));
// 4. j = 1;
cs.append("j", (p, r) => r(p), () => [1]);
// 5. fac = asyncMul(fac, j);
// let the stack just appended 
// name "itemj", => fac = fac * j
// for loop logic jump back.
cs.append(marks.itemj = new CallItem().variKey("fac").methodCall(asyncMul).paramsCall(() => [cs.val("fac"), cs.val("j")]));
// 6. j = asyncAdd(j, 1)
cs.append("j", asyncAdd, () => [cs.val("j"), 1]);
// 7. j <= i?back to itemj
cs.loop(() => cs.val("j") <= cs.val("i"), () => marks.itemj);
// 8. i = asyncAdd(i, 1)
cs.append("i", asyncAdd, () => [cs.val("i"), 1]);
// 9. sum = asyncAdd(sum, fac)
cs.append("sum", asyncAdd, () => [cs.val("sum"), cs.val("fac")]);
// 10. i <= 10?back to itemi
cs.loop(() => cs.val("i") <= 10, () => marks.itemi);
// 11. console sum value. all done.
cs.success((sum) => console.log("1! + 2! + 3! + 4! + 5! + 6! + 7! + 8! + 9! + 10! = " + sum));
// 12. console err if happends
cs.error((err) => console.error(err.message));
// execute CallStack cs.
cs.execute();
```
            Look, we can handle complicate async logics like sync. 
            There is no Call Hell any more.
            It likes the following sync logic.
```js
    var sum = 0;// ------------------ <= step 1.
    var i = 1;// -------------------- <= step 2.
    while(true){
        var fac = 1;// -------------- <= step 3., mark it "itemi"
        var j = 1;// ---------------- <= step 4.
        while(true){
            fac = asyncMul(fac, j);// <= step 5., mark it "itemj"
            j = asyncAdd(j, 1);// --- <= step 6.
            if(j<=i){// ------------- <= step 7.
                continue;// --------- <= step 7., back to mark "itemj"
            }else{
                break;// ------------ <= step 7., go next
            }
        }
        i = async(i, 1);// ---------- <= step 8.
        sum = asyncAdd(sum, fac);// - <= step 9.
        if(i<=10){// ---------------- <= step 10.
            continue;// ------------- <= step 10., back to mark "itemi"
        }else{
            break;// ---------------- <= step 10., go next
        }
    }
    console.log(sum);// ------------- <= step 11.
```
        Acturely, coding it like "while(true)" and "if(condition){continue;}else{break;}"
        is for easy understanding, the sync style codes should be like the following codes.
```js
    var sum = 0;
    var i = 1;
    while(i<=10){
        var fac = 1;
        var j = 1;
        while(j<=i){
            fac = asyncMul(fac, j);
            j = asyncAdd(j, 1);
        }
        sum = asyncAdd(sum, fac);
        i = async(i, 1);
    }
    console.log(sum);
```

### Third: Use "callStack.next" to add a callItem after current executing callItem.
        Then someone meticulous may want to ask, it somewhat likes Promise. why don't
    we choose Promise. 
        To a certain exten yes, Promise handles the Call Hell issue too. but the
    defferences are: 
        1. CallStack has own variable scope. it likes a thread. Just think 
    about Thread variables.
        2. A simpler way to coding success/error/complete handler callback. one
    callStack only has one callback on each success/error/complete.
        3. The hugest difference is that CallStack can break logics into gradations.
1. A web filter to controling data format of input and output.
```js
// a function of reading params from Request
var readParams = function(req){...};
// a function of geting web action by Request
var filter = function(req,resp){
    var cs = new CallStack();
    cs.append("params",(p,r)=>r(p),()=>[readParams(req)]);
    cs.append("data",(p,r)=>r(p),()=>[{}]);
    cs.append(null,function(receive){
        if(req.path.indexOf("/product/save")){
            // use callStack.next to route to the 
            // source which req.path is pointing to.
            cs.next(null,require("./controller/product").save,()=>null);
        }else if{
            ...
        }else if{
            ...
        }else if{
            ...
        }else{
            throw new Error("Source not found");
        }
    },()=>null);
    cs.success(()=>resp.json({
        result:true,
        data:resp.json(),
        message:cs.val("message")
    }));
    cs.error((err)=>resp.json({
        result:false,
        message:err.message
    }));
    cs.execute();
}
```
2. ./controller/product.js
```js
module.exports.save = function(callback){
    var params = this.val("params");
    var data = this.val("data");

    // business of saving product start
    ...
    ...
    // detail logic of saving product
    var product = ...
    ...
    ...
    // business of saving product is done.

    // put result product into data using key "product"
    // then product will be exported to fronted named "product" in data.
    // that's called "break logics into gradations"
    data.product = product;
    // calling callback likes "return", means the function has accomplished
    // and it's time for next step.
    callback();
};
```



#Thanks for reading
```
The codes of demos are on file "./test/test.js".
If you have any questions, my email address is 290591522@qq.com.
```