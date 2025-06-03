var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var apiKey = "3034fc6853fe758f3054ed97b77a635b";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
var searchBox = document.querySelector(".search input");
var searchBtn = document.querySelector(".search button");
var weatherSymbol = document.querySelector(".weathericon");
var weatherEl = document.querySelector(".weather");
var errorEl = document.querySelector(".error");
function checkweather(city) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(apiUrl + city + '&appid=' + apiKey)];
                case 1:
                    response = _a.sent();
                    if (!(response.status == 404)) return [3 /*break*/, 2];
                    errorEl.style.display = "block";
                    weatherEl.style.display = "none";
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    document.querySelector(".city").innerHTML = data.name;
                    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
                    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
                    if (data.weather[0].main == "Clouds") {
                        weatherSymbol.src = "./img/clouds.png";
                    }
                    else if (data.weather[0].main == "Drizzle") {
                        weatherSymbol.src = "./img/drizzle.png";
                    }
                    else if (data.weather[0].main == "Mist") {
                        weatherSymbol.src = "./img/mist.png";
                    }
                    else if (data.weather[0].main == "Rain") {
                        weatherSymbol.src = "./img/rain.png";
                    }
                    else if (data.weather[0].main == "Clear") {
                        weatherSymbol.src = "./img/clear.png";
                    }
                    else {
                        weatherSymbol.src = "./img/snow.png";
                    }
                    errorEl.style.display = "none";
                    weatherEl.style.display = "block";
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
searchBtn.addEventListener("click", function () {
    checkweather(searchBox.value);
});
