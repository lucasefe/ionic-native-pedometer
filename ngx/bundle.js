'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@ionic-native/core');
require('rxjs');
var core$1 = require('@angular/core');

var Pedometer = /** @class */ (function (_super) {
    tslib.__extends(Pedometer, _super);
    function Pedometer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pedometer.prototype.isStepCountingAvailable = function () { return core.cordova(this, "isStepCountingAvailable", {}, arguments); };
    Pedometer.prototype.isDistanceAvailable = function () { return core.cordova(this, "isDistanceAvailable", {}, arguments); };
    Pedometer.prototype.isFloorCountingAvailable = function () { return core.cordova(this, "isFloorCountingAvailable", {}, arguments); };
    Pedometer.prototype.startPedometerUpdates = function () { return core.cordova(this, "startPedometerUpdates", { "observable": true, "clearFunction": "stopPedometerUpdates" }, arguments); };
    Pedometer.prototype.stopPedometerUpdates = function () { return core.cordova(this, "stopPedometerUpdates", {}, arguments); };
    Pedometer.prototype.queryData = function (options) { return core.cordova(this, "queryData", { "callbackOrder": "reverse" }, arguments); };
    Pedometer.pluginName = "Pedometer";
    Pedometer.plugin = "cordova-plugin-pedometer";
    Pedometer.pluginRef = "pedometer";
    Pedometer.repo = "https://github.com/leecrossley/cordova-plugin-pedometer";
    Pedometer.platforms = ["Android", "iOS"];
    Pedometer.decorators = [
        { type: core$1.Injectable }
    ];
    return Pedometer;
}(core.IonicNativePlugin));

exports.Pedometer = Pedometer;
