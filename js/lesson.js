// Copyright Normunds Andersons
var doumain = "";
//var doumain = "";
var xmlhttp;
$('.main').css({ height: $(window).height() });
if ($(window).width() >= 746) {
    $("body").addClass("showmenu");
} else {
    $("body").removeClass("showmenu");
}
var WordMode = true;
var KeyHint = true;
var TextMode = true;
var SpeedTest = true;
var Numeric = true;
var type_keys = "61:101¶126:101;413¶49:102;504¶33:102;413;504¶50:103;504¶64:103;413;504¶51:104;504¶35:104;413;504¶52:105;504¶36:105;413;504¶53:106;504¶37:106;413;504¶54:107;504¶94:107;401;504¶55:108;504¶38:108;401;504¶56:109;504¶42:109;401;504¶57:110;504¶40:110;401;504¶48:111¶41:111;401¶45:112¶95:112;401¶61:113¶43:113;401¶113:202¶81:202;413¶119:203¶87:203;413¶101:204¶69:204;413¶233:204;102¶201:204;413;102¶232:204;103¶200:204;413;103¶7867:204;104¶7866:204;413;104¶7869:204;105¶7868:204;413;105¶7865:204;106¶7864:204;413;106¶234:204;107¶202:204;413;107¶7871:204;107;102¶7870:204;413;107;102¶7873:204;107;103¶7872:204;413;107;103¶7875:204;107;104¶7874:204;413;107;104¶7877:204;107;105¶7876:204;413;107;105¶7879:204;107;106¶7878:204;413;107;106¶114:205¶82:205;413¶116:206¶84:206;413¶121:207¶89:207;401¶253:207;102¶221:207;401;102¶7923:207;103¶7922:207;401;103¶7927:207;104¶7926:207;401;104¶7929:207;105¶7928:207;401;105¶7925:207;108¶7924:207;401;108¶117:208¶85:208;401¶250:208;102¶218:208;401;102¶249:208;103¶217:208;401;103¶7911:208;104¶7910:208;401;104¶361:208;105¶360:208;401;105¶7909:208;106¶7908:208;401;106¶432:208;108¶431:208;401;108¶7913:208;108;102¶7912:208;401;108;102¶7915:208;108;103¶7914:208;401;108;103¶7917:208;108;104¶7916:208;401;108;104¶7919:208;108;105¶7918:208;401;108;105¶7921:208;108;106¶7920:208;401;108;106¶105:209¶73:209;401¶237:209;102¶205:209;401;102¶236:209;103¶204:209;401;103¶7881:209;104¶7880:209;401;104¶297:209;105¶296:209;401;105¶7883:209;106¶7882:209;401;106¶111:210¶79:210;401¶243:210;102¶211:210;401;102¶242:210;103¶210:210;401;103¶7887:210;104¶7886:210;401;104¶245:210;105¶213:210;401;105¶7885:210;106¶7884:210;401;106¶244:210;107¶212:210;401;107¶417:210;108¶416:210;401;108¶7889:210;107;102¶7888:210;401;107;102¶7891:210;107;103¶7890:210;401;107;103¶7893:210;107;104¶7892:210;401;107;104¶7895:210;107;105¶7894:210;401;107;105¶7897:210;107;106¶7896:210;401;107;106¶7899:210;108;102¶7898:210;401;108;102¶7901:210;108;103¶7900:210;401;108;103¶7903:210;108;104¶7902:210;401;108;104¶7905:210;108;105¶7904:210;401;108;105¶7907:210;108;106¶7906:210;401;108;106¶112:211¶80:211;401¶91:212¶123:212;401¶93:213¶125:213;401¶92:214¶124:214;401¶97:302¶65:302;413¶225:302;102¶193:302;413;102¶224:302;103¶192:302;413;103¶7843:302;104¶7842:302;413;104¶227:302;105¶195:302;413;105¶7841:302;106¶7840:302;413;106¶226:302;107¶194:302;413;107¶259:302;109¶258:302;413;109¶7845:302;107;102¶7844:302;413;107;102¶7847:302;107;103¶7846:302;413;107;103¶7849:302;107;104¶7848:302;413;107;104¶7851:302;107;105¶7850:302;413;107;105¶7853:302;107;106¶7852:302;413;107;106¶7855:302;109;102¶7854:302;413;109;102¶7857:302;109;103¶7856:302;413;109;103¶7859:302;109;104¶7858:302;413;109;104¶7861:302;109;105¶7860:302;413;109;105¶7863:302;109;106¶7862:302;413;109;106¶115:303¶83:303;413¶100:304¶68:304;413¶273:304;110¶272:304;413;110¶102:305¶70:305;413¶103:306¶71:306;413¶104:307¶72:307;401¶106:308¶74:308;401¶107:309¶75:309;401¶108:310¶76:310;401¶59:311¶58:311;401¶39:312¶34:312;401¶122:403¶90:403;413¶120:404¶88:404;413¶99:405¶67:405;413¶118:406¶86:406;413¶98:407¶66:407;413¶110:408¶78:408;401¶109:409¶77:409;401¶44:410¶60:410;401¶46:411¶62:411;401¶47:412¶63:412;401¶32:504¶";
var Pos = 0;
var Index = 0;
var Text = [];
var TextDoneArr = [];
var TextDone = "";
var TextCurrent = "";

var TotalLength = 0;
var TotalPos = 0;

var LastError = false;
var FirstTime = true;

var Progress = [];
var ProgressBad = [];
var ErrorQty = 0;

var Keys = [];
var KeysUsed = [];

var Time = 0;
var IntervalM;
var IntervalT;
//
var correct = 0.0;
var correctChar = 0.0;
var wrong = 0.0;
var wrongChar = 0.0;
//
function resetAll() {
    $("#main-typing").removeClass("hide-box");
    $("#result").addClass("hide-box");
    $("#type").val("");
    WordMode = true;
    KeyHint = true;
    TextMode = true;
    SpeedTest = true;
    Numeric = true;
    Pos = 0;
    Index = 0;
    Text = [];
    TextDoneArr = [];
    TextDone = "";
    TextCurrent = "";

    TotalLength = 0;
    TotalPos = 0;

    LastError = false;
    FirstTime = true;

    Progress = [];
    ProgressBad = [];
    ErrorQty = 0;

    Keys = [];
    KeysUsed = [];
}
// ----------------------------------------------------------------------------

function resetTime() {
    $("#counter_time").text("00:00");
    Time = 0;
    clearInterval(IntervalT);
    clearInterval(IntervalM);
}
function OnKeyDown(o, e) {
    var keynum = window.event ? e.keyCode : e.which;
    var arr = Keys[keynum];

    if (
        keynum == 8 || // back
        keynum == 9 || // tab
        keynum == 16 || // shift
        keynum == 17 || // ctrl
        keynum == 18 || // alt
        keynum == 27 || // esc
        keynum == 33 || // pg up
        keynum == 34 || // pg down
        keynum == 35 || // end
        keynum == 36 || // home
        keynum == 37 || // left
        keynum == 38 || // up
        keynum == 39 || // right
        keynum == 40 || // down
        keynum == 45 || // ins
        keynum == 46 || // del
        (keynum == 65 && e.ctrlKey && !e.altKey) || // ctrl + a
        (keynum == 86 && e.ctrlKey && !e.altKey) || // ctrl + v
        (keynum == 88 && e.ctrlKey && !e.altKey) // ctrl + x
    ) {
        if (o.setSelectionRange) {
            o.focus();
        } else if (o.createTextRange) {
            e.returnValue = false;
        }

        var len = o.value.length;
        if (
            keynum == 8 &&
            // WordMode &&
            len > 0 &&
            o.value.charAt(len - 1) != " "
        ) {
            // back
            return;
        }

        if (e.preventDefault) {
            e.preventDefault();
        }
    }
}
function OnKeyPress(o, e) {
    // console.clear();

    var keynum = window.event ? e.keyCode : e.which;
    var keychar = String.fromCharCode(keynum);


    if (Time == 0) {
        Time = new Date();
        IntervalM = setInterval(ShowCounter, 3000);
        IntervalT = setInterval(ShowTime, 200);
    }

    var len = o.value.length;
    if (keynum == 8) {
        // backspace
        if (len > 0 && o.value.charAt(len - 1) != " ") {
            o.value = o.value.substring(0, len - 1);
        }
    } else {
        if (keynum == 32 || keynum == 13) {

            var c = o.value.charCodeAt(len - 1);

            if (len > 0 && (c == 32 || c == 10)) {
                keychar = "";
            } else {
                ++Pos;
                TotalPos += TextCurrent.length + 1;
                HighlightText(keynum == 13 ? "\r" : null);
                if (Pos == 0) {
                    o.value = "";
                    keychar = "";
                }
            }

        }

        o.value += keychar;

    }

    // end
    if (Pos == 0 && !IsTextLength()) {
        ShowConclusion();
    } else if (!WordMode) {
        ClearKeysUsed();

        if (!IsPosLength()) return false;

        var typed = ById("type").value;

        var text_word = Text[Index].split(/ |\n/)[Pos];
        var typed_word = typed.split(/ |\n/)[Pos];

        var p = typed_word.length - 1;

        if (p > -1) {
            var keyval = text_word.charAt(p);
            var keycode = text_word.charCodeAt(p);

            if (keycode == keynum) {
                //            o.value += keychar;
                //            ++Pos;
                //            ++TotalPos;
                // HighlightText();
                //            if (Pos == 0) {
                //                o.value = "";
                //                keychar = "";
                //            }
            } else {
                // temp
                // o.value = o.value.substring(0, o.value.length - 1);

                //var arr = Keys[keynum];

                //if (arr) {
                //    for (var i in arr) {
                //        ById("key_" + arr[i]).style.backgroundColor = "#f00";
                //        KeysUsed.push(arr[i]);
                //    }
                //}

                //LastError = true;
            }

            AddProgress(keyval, LastError);
        }

        ShowNextKey();
    }

    o.scrollTop = o.scrollHeight - o.clientHeight;

    return false;
}
// ----------------------------------------------------------------------------
function byteLength(str) {
    // returns the byte length of an utf8 string
    var s = str.length;
    for (var i = str.length - 1; i >= 0; i--) {
        var code = str.charCodeAt(i);
        if (code > 0x7f && code <= 0x7ff) s++;
        else if (code > 0x7ff && code <= 0xffff) s += 2;
        if (code >= 0xDC00 && code <= 0xDFFF) i--; //trail surrogate
    }
    return s;
}
function GetXmlHttpObject() {
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        return new XMLHttpRequest();
    }
    if (window.ActiveXObject) {
        // code for IE6, IE5
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
    return null;
}

// ----------------------------------------------------------------------------

function StateChanged() {
    if (xmlhttp.readyState == 4) {
        ById("typing").innerHTML = xmlhttp.responseText;
    }
}
function ShowConclusion() {
    //ById("typing").innerHTML = "Done! Please wait for the progress report.";
    //ById("typing_info").innerHTML = "";
    //get wpm

    setResult();
    resetAll();
    resetTime();
    $("#main-typing").addClass("hide-box");
    $("#result").removeClass("hide-box");
}
function setResult() {
    var diff = new Date().getTime() - Time.getTime();
    var space = correct + wrong;
    var accuracy = (correct / space) * 100;
    var wpm = 0;
    if (diff > 50) {
        var wpm = Math.ceil(((correct + wrong + space) * 12) / (diff / 1000));
    }
    //get time end
    if (Time > 0) {
        diff_min = Math.floor(diff / 1000 / 60);
        diff_sec = Math.ceil((diff - diff_min * 1000 * 60) / 1000);
    }
    if (diff_min < 10) {
        diff_min = "0" + diff_min;
    }
    if (diff_sec < 10) {
        diff_sec = "0" + diff_sec;
    }


    $(".rs-info .char-correct").text((correctChar + space).toString());
    $(".rs-info .char-wrong").text(wrongChar.toString());
    $(".rs-info .char-total").text((correctChar + wrongChar + space).toString());
    $("#result .wpm").text(wpm.toString() + " WPM");
    $("#result .time-end").text(diff_min + ":" + diff_sec);
    $("#result .accuracy").text(accuracy < 1 ? "0%" : accuracy.toFixed(0).toString() + "%");
    $(".rs-info .correct").text(correct);
    $(".rs-info .wrong").text(wrong);
}
// ----------------------------------------------------------------------------

function ClearKeysUsed() {
    // clear keys
    var z = KeysUsed.shift();
    while (z) {
        //ById("key_" + z).style.backgroundColor = "#fff";
        $("#key_" + z).removeAttr("style");
        z = KeysUsed.shift();
    }
}

// ----------------------------------------------------------------------------

function Trim(str) {
    return str.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}

// ----------------------------------------------------------------------------
//function ShowNextKey() {
//    if (!IsPosLength()) return;

//    var typed = ById("type").value;

//    var text_word = Text[Index].split(/ |\n/)[Pos];
//    var typed_word = typed.split(/ |\n/)[Pos];

//    var p = typed_word.length;
    
//    var keynum = p < text_word.length ? text_word.charCodeAt(p) : 32;
//    var arr = Keys[keynum];
//    if (!arr) return;

//    var fingers = new Array(
//        new Array(2, 96),
//        new Array(8, 72),
//        new Array(20, 60),
//        new Array(36, 60),
//        new Array(75, 94),
//        new Array(636, 94),
//        new Array(674, 60),
//        new Array(690, 60),
//        new Array(702, 72),
//        new Array(708, 96)
//    );

//    var i;
//    for (i = 0; i < arr.length; ++i) {
//        var k = arr[i];
//        var f;

//        if (Numeric) {
//            switch (parseInt(k)) {
//                case 201:
//                case 301:
//                case 401:
//                case 501:
//                    f = 6;
//                    break;
//                case 102:
//                case 202:
//                case 302:
//                case 402:
//                    f = 7;
//                    break;
//                case 103:
//                case 203:
//                case 303:
//                case 403:
//                case 502:
//                    f = 8;
//                    break;
//                default:
//                    f = 9;
//            }
//        } else {
//            switch (parseInt(k)) {
//                case 101:
//                case 102:
//                case 202:
//                case 302:
//                case 401:
//                case 402:
//                case 403:
//                    f = 0;
//                    break;
//                case 103:
//                case 203:
//                case 303:
//                case 404:
//                    f = 1;
//                    break;
//                case 104:
//                case 204:
//                case 304:
//                case 405:
//                    f = 2;
//                    break;
//                case 105:
//                case 106:
//                case 205:
//                case 206:
//                case 305:
//                case 306:
//                case 406:
//                case 407:
//                    f = 3;
//                    break;
//                case 504:
//                case 505:
//                    f = 5;
//                    break;
//                case 107:
//                case 108:
//                case 207:
//                case 208:
//                case 307:
//                case 308:
//                case 408:
//                case 409:
//                    f = 6;
//                    break;
//                case 109:
//                case 209:
//                case 309:
//                case 410:
//                    f = 7;
//                    break;
//                case 110:
//                case 210:
//                case 310:
//                case 411:
//                    f = 8;
//                    break;
//                default:
//                    f = 9;
//            }
//        }

//        if (KeyHint || LastError) {
//            //ById("key_" + k).style.backgroundColor = "#0f0";
//            $("#key_" + k).attr("style", "background-color:#a33 !important;color:white !important;");
//            KeysUsed.push(k);
//            if (ById("finger_" + i) != null) {
//                ById("finger_" + i).style.left = fingers[f][0] + "px";
//                ById("finger_" + i).style.top = fingers[f][1] + "px";
//            }
            
//        }
//        if (ById("finger_" + i) != null) {
//            ById("finger_" + i).style.display =
//                KeyHint || LastError ? "block" : "none";
//        }
        
//    }

//    for (var j = i; j < 5; ++j) {
//        if (ById("finger_" + j) != null) {
//            ById("finger_" + j).style.display = "none";
//        }
//    }
//}
function removeElement(array, elem) {
    var index = array.indexOf(elem);
    if (index > -1) {
        array.splice(index, 1);
    }
}
function ShowNextKey() {
    if (!IsPosLength()) return;
    var typed = ById("type").value;
    var text_word1 = Text[Index].split(/ |\n/)[Pos];
    var text_word = Text[Index].split(/ |\n/)[Pos];
    var typed_word = typed.split(/ |\n/)[Pos];
    var mynamechars = text_word1.split('');
    for (var i = 0; i < mynamechars.length; i++) {
        if (getEndChar(mynamechars[i]) != "") {
            mynamechars.push(getEndChar(mynamechars[i]));
        }
        mynamechars[i] = editChar(mynamechars[i]);
    }
    text_word1 = mynamechars.join('');
    var p = byteLength(typed_word);
    //console.log("text_word1: ", text_word1);
    //console.log("typed_word: ", typed_word.length);
    //console.log("text_word2: ", byteLength(text_word1));
    //console.log("p: ", p);
    var keynum = p < byteLength(text_word1) ? text_word1.charCodeAt(p) : 32;
    var arr = Keys[keynum];
    
    //console.log("arr: ", arr);
    if (!arr) return;
    if (arr.length > 1 && arr.indexOf("504") != -1) {
        removeElement(arr,"504");
    }
  
    var fingers = new Array(
        new Array(2, 96),
        new Array(8, 72),
        new Array(20, 60),
        new Array(36, 60),
        new Array(75, 94),
        new Array(636, 94),
        new Array(674, 60),
        new Array(690, 60),
        new Array(702, 72),
        new Array(708, 96)
    );

    var i;

    for (i = 0; i < arr.length; ++i) {

        var k = arr[i];
        var f;

        if (Numeric) {
            switch (parseInt(k)) {
                case 201:
                case 301:
                case 401:
                case 501:
                    f = 6;
                    break;
                case 102:
                case 202:
                case 302:
                case 402:
                    f = 7;
                    break;
                case 103:
                case 203:
                case 303:
                case 403:
                case 502:
                    f = 8;
                    break;
                default:
                    f = 9;
            }
        } else {
            switch (parseInt(k)) {
                case 101:
                case 102:
                case 202:
                case 302:
                case 401:
                case 402:
                case 403:
                    f = 0;
                    break;
                case 103:
                case 203:
                case 303:
                case 404:
                    f = 1;
                    break;
                case 104:
                case 204:
                case 304:
                case 405:
                    f = 2;
                    break;
                case 105:
                case 106:
                case 205:
                case 206:
                case 305:
                case 306:
                case 406:
                case 407:
                    f = 3;
                    break;
                case 504:
                case 505:
                    f = 5;
                    break;
                case 107:
                case 108:
                case 207:
                case 208:
                case 307:
                case 308:
                case 408:
                case 409:
                    f = 6;
                    break;
                case 109:
                case 209:
                case 309:
                case 410:
                    f = 7;
                    break;
                case 110:
                case 210:
                case 310:
                case 411:
                    f = 8;
                    break;
                default:
                    f = 9;
            }
        }

        if (KeyHint || LastError) {
            //$("#key_" + k).attr("style", "background-color:#00ff00 !important");
            $("#key_" + k).attr("style", "background-color:#a33 !important;color:white !important;");
            KeysUsed.push(k);
            if (ById("finger_" + i) != null) {
                ById("finger_" + i).style.left = fingers[f][0] + "px";
                ById("finger_" + i).style.top = fingers[f][1] + "px";
            }
            
        }
        if (ById("finger_" + i) != null) {
            ById("finger_" + i).style.display =
                KeyHint || LastError ? "block" : "none";
        }
        
    }

    for (var j = i; j < 5; ++j) {
        if (ById("finger_" + j) != null) {
            ById("finger_" + j).style.display = "none";
        }
        
    }
}

 //----------------------------------------------------------------------------

function IsTextLength() {
    return Index < Text.length;
}

// ----------------------------------------------------------------------------

function IsPosLength() {
    if (IsTextLength()) return Pos < Text[Index].length;
    else return false;
}

// ----------------------------------------------------------------------------

function HighlightText(enter) {
    var out = "";

    //    if (WordMode) {
    //console.log("TextText: ", Text);
    //console.log("TextText0: ", Text[Index]);
    var arr = Text[Index].split(" ");
    var typed = ById("type").value;
    var txt = TextMode ? "_txt" : "";

    if (Pos > 0) {
        var t = typed.split(/ |\n/)[Pos - 1];
        if (enter) t += enter;

        LastError = TextCurrent != t;
        if (LastError) {
            wrongChar += byteLength(t);
            wrong++;
        } else {
            correctChar += byteLength(t);
            correct++;
        }

        TextDone +=
            '<span class="done' +
            txt +
            (LastError ? "_bad" : "_ok") +
            '">' +
            escapeHtml(TextCurrent) +
            "</span> ";
        TextDoneArr[Index] += t;
        if (!enter) {
            TextDoneArr[Index] += " ";
        }
        if (LastError) {
            ErrorQty++;
        }
    }

    if (Pos >= arr.length) {
        ++Index;
        Pos = 0;

        if (!IsTextLength()) return;

        arr = Text[Index].split(" ");

        TextDone = "";
        TextDoneArr[Index] = "";
    }

    TextCurrent = arr.length > Pos ? arr[Pos] : "";

    out =
        TextDone +
        '<span class="current' +
        txt +
        '">' +
        escapeHtml(TextCurrent) +
        "</span>" +
        '<span class="next' +
        txt +
        '">';

    for (var i = Pos + 1; i < arr.length; ++i) {
        out += " " + escapeHtml(arr[i]);
    }
    out += "</span>";

    //    } else {
    /*        
        if (!IsPosLength()) {
            ++Index;
            Pos = 0;
            TextDone = "";
            TextDoneArr[Index] = "";
        } else if (Pos > 0) {
            TextDone +=
                '<span class="done_' +
                (LastError ? "bad" : "ok") +
                '">' +
                escapeHtml(TextCurrent) +
                "</span>";
        }
 
        if (!IsTextLength()) return;
 
        TextCurrent = Text[Index].charAt(Pos);
 
        out =
            TextDone +
            '<span class="current">' +
            escapeHtml(TextCurrent) +
            "</span>" +
            '<span class="next">' +
            escapeHtml(Text[Index].substring(Pos + 1)) +
            "</span>";
*/
    //    }

    // enter
    if (TextMode) out = out.replace(/\r/g, "<br />");
    else out = out.replace(/\r/g, "&crarr;<br />");
    ById("text").innerHTML = out;

    ShowCounter();

    LastError = false;
}

// ----------------------------------------------------------------------------

function AddProgress(key, bad) {
    if (!FirstTime) {
        FirstTime = !bad;
        return;
    }

    var qty = Progress[key];
    if (qty == undefined) qty = 0;

    Progress[key] = ++qty;

    if (bad) {
        qty = ProgressBad[key];
        if (qty == undefined) qty = 0;
        ProgressBad[key] = ++qty;
    }

    FirstTime = !bad;
}

function ShowTime() {
    var counter_time = ById("counter_time");
    if (counter_time == null) return;

    var diff = 0;
    var diff_min = 0;
    var diff_sec = 0;
    if (Time > 0) {
        diff = new Date().getTime() - Time.getTime();
        diff_min = Math.floor(diff / 1000 / 60);
        diff_sec = Math.ceil((diff - diff_min * 1000 * 60) / 1000);
    }
    if (diff_min < 10) {
        diff_min = "0" + diff_min;
    }
    if (diff_sec < 10) {
        diff_sec = "0" + diff_sec;
    }

    if (SpeedTest && diff > 1000 * 60) {
        clearInterval(IntervalT);
        clearInterval(IntervalM);

        ShowConclusion();
    }

    counter_time.innerHTML = diff_min + ":" + diff_sec;
}

// ----------------------------------------------------------------------------

function ShowCounter() {
    var counter_erro = ById("counter_erro");
    if (counter_erro == null) return;
    var counter_wpmi = ById("counter_wpmi");
    if (counter_wpmi == null) return;
    if (!SpeedTest) {
        var counter_sign = ById("counter_sign");
        if (counter_sign == null) return;
        var counter_prog = ById("counter_prog");
        if (counter_prog == null) return;
        var counter_accu = ById("counter_accu");
        if (counter_accu == null) return;
    }

    clearInterval(IntervalM);

    var percent = 0;
    if (TotalLength > 0) {
        percent = parseInt((TotalPos / TotalLength) * 100);
    }

    var bad = 0;
    //    if (WordMode) {
    bad = ErrorQty;
    //    } else {
    /*
        for (var i in ProgressBad) {
            bad += ProgressBad[i];
        }
        */
    //    }

    if (Time > 0) {
        var diff = new Date().getTime() - Time.getTime();
        if (diff > 50) {
            var wpm = Math.ceil((TotalPos * 12) / (diff / 1000));
        } else {
            var wpm = 0;
        }
        var diff_min = Math.floor(diff / 1000 / 60);
        var diff_sec = Math.ceil((diff - diff_min * 1000 * 60) / 1000);
    } else {
        var diff = 0;
        var wpm = 0;
        var diff_min = 0;
        var diff_sec = 0;
    }

    var accuracy = 100;
    if (TotalPos > 0) {
        accuracy = Math.round(100 - (bad / TotalPos) * 100);
    }

    counter_erro.innerHTML = bad;
    counter_wpmi.innerHTML = wpm;
    if (!SpeedTest) {
        counter_sign.innerHTML = TotalPos;
        counter_prog.innerHTML = percent + "%";
        counter_accu.innerHTML = accuracy + "%";
    }

    IntervalM = setInterval(ShowCounter, 3000);
}

function Init(type) {
    Text.pop();
    var a;
    var arr = type_keys.split("¶");
    for (var i in arr) {
        if (arr[i]) {
            a = arr[i].split(":");
            Keys[a[0]] = a[1].split(";");
        }
    }

    WordMode = type > 5 && type < 11;
    KeyHint = type < 5 || (type > 10 && type < 13);
    
    TextMode = type > 7 && type < 10;
    SpeedTest = type == 10;
    Numeric = type == 11 || type == 12 || type == 13 || type == 14;

    //    var rep = WordMode ? "\r " : "\r";
    var rep = "\r ";
    for (var i in Text) {
        Text[i] = Text[i].replace(/\\n/g, rep);
    }
    TotalLength = Text.join(WordMode ? " " : "").length;

    if (WordMode) {
        TextDoneArr[0] = "";
    } else {
        TextDoneArr[0] = "";
        ShowNextKey();
    }
    HighlightText();
}

// ----------------------------------------------------------------------------

function ById(id) {
    return document.getElementById(id);
}

// ----------------------------------------------------------------------------
$("#img-togg-folder").click(function () {
    $("body").toggleClass("showmenu");
});

$("#cb-hints").change(function () {
    if (this.checked) {
        $("#typing_info").removeClass("hide-box");
    } else {
        $("#typing_info").addClass("hide-box");
    }

});
//$("#cb-vie").change(function () {
//    if (this.checked) {
//        AVIMObj.setMethod(0);
//    } else {
//        AVIMObj.setMethod(-1);
//    }

//});
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
var objUrl = new URL(location.href);
var lesson = objUrl.searchParams.get("lesson");
var course = objUrl.searchParams.get("course");
lesson = lesson == null || lesson == "null" ? "1" : lesson;
course = course == null || course == "null" ? "1" : course;
function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
}
function sortText(a, b) {
    return 0.5 - Math.random();
}
$.get("https://softvn.com/lab/game-typing/data/data.json", function (data) {
    if (data != null) {
        function setInitValue() {
            if (lesson == "23") {
                $("#header h2").text(data[parseInt(lesson) - 1].Name);
                var randomItem = random_item(data[parseInt(lesson) - 1].Value);
                Text = randomItem.split("¶");
            } else {
                $("#header h2").text(data[parseInt(lesson) - 1].Data[parseInt(course) - 1].Name);
                if (data[parseInt(lesson) - 1].KeyType != null) {
                    type_keys = data[parseInt(lesson) - 1].KeyType;
                }
                Text = data[parseInt(lesson) - 1].Data[parseInt(course) - 1].Value.split("¶");
            }
            
            Init(0);
        }
        $.each(data, function (i, item) {
            var $li = $("<li></li>");
            $li.attr("data-lesson", item.Lesson);
            $li.attr("id", "ls_"+item.Lesson);
            var $a = $("<a></a>").text(item.Name).click(function () {
                if (item.Lesson == "23") {
                    var link = doumain + "?lesson=" + item.Lesson;
                    location.href = link;
                } else {
                    lesson = item.Lesson;
                    $("ul.box-left>li").removeClass("active");
                    $(this).parent().toggleClass("active");
                }
                $(".box-left").animate({ scrollTop: $('#ls_' + item.Lesson).offset().top - 72 + $(".box-left").scrollTop() }, 1000);

            });
            var $expand = $("<img />").click(function () {
                $("ul.box-left>li[data-lesson != '" + item.Lesson+"']").removeClass("active");
                lesson = item.Lesson;
                $(this).parent().toggleClass("active");
                $(".box-left").animate({ scrollTop: $('#ls_' + item.Lesson).offset().top - 72 + $(".box-left").scrollTop() }, 1000);

            });
            $li.append($a);
            if (item.Lesson != "23") {
                $li.append($expand);
            }

            //bài học con
            if (item.Data != null) {
                var $ul_child = $("<ul class='childs'></ul>")
                $.each(item.Data, function (j, child) {
                    var $li_child = $("<li data-course='" + child.Course + "'></li>");
                    
                    $li_child.html(child.Name);
                    $li_child.click(function () {
                        var link = doumain+"?lesson=" + item.Lesson + "&course=" + child.Course;
                        location.href = link;
                    });
                    //var $a = $("<a href='" + link + "'>" + child.Name+"</a>");
                    //$li_child.append($a);
                    $ul_child.append($li_child);
                });
                $li.append($ul_child);
            }
            $(".lesson-item").append($li);
        });
        $(".box-left").animate({ scrollTop: $('#ls_' + lesson).offset().top - 72 }, 1000);
        if (lesson != "23") {
            $(".box-left li[data-lesson = '" + lesson + "']").addClass("active");
            $(".box-left li[data-lesson = '" + lesson + "']").find("li[data-course = '" + course + "']").addClass("selected");
        } else {
            $(".box-left li[data-lesson = '" + lesson + "']").addClass("selected");
        }
        if (lesson == 23) {
            $("#typing_info").remove();
            $(".hints").remove();
        }
        
        //
        //$(".box-left li[data-course = '" + course + "']").addClass("selected");
        setInitValue();
    }

});


