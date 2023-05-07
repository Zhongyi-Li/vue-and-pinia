var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DateUtil = /** @class */ (function () {
    function DateUtil() {
        console.log("被创建了");
    }
    DateUtil.getInstance = function () {
        if (!this.dateUtil) {
            this.dateUtil = new DateUtil();
        }
        return this.dateUtil;
    };
    DateUtil.prototype.formatDate = function () { };
    DateUtil.dateUtil = new DateUtil();
    return DateUtil;
}());
// const r1 = DateUtil.getInstance();
// const r2 = DateUtil.getInstance();
var r1 = DateUtil.dateUtil;
var r2 = DateUtil.dateUtil;
console.log(r1 === r2);
var PersonInfo = /** @class */ (function () {
    function PersonInfo(address) {
        this.addrrss = address;
    }
    Object.defineProperty(PersonInfo.prototype, "age", {
        set: function (val) {
            if (val <= 100) {
                this.age_ = val;
            }
            else {
                //   throw new Error("The age is over 100");
            }
        },
        enumerable: false,
        configurable: true
    });
    return PersonInfo;
}());
var xiaom = new PersonInfo("HangZhou");
xiaom.age = 1001;
console.log("xiaom:", xiaom);
var animal = /** @class */ (function () {
    function animal() {
        console.log("Animal");
    }
    return animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super.call(this) || this;
        console.log("super:");
        return _this;
    }
    return Dog;
}(animal));
new Dog();
