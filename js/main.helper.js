function editChar(char) {
    char = char.replace(/á|à|ả|ạ|ã/g, "a")
        .replace(/ắ|ằ|ẳ|ặ|ẵ/g, "ă")
        .replace(/ấ|ầ|ẩ|ậ|ẫ/g, "â")
        .replace(/ế|ề|ể|ệ|ễ/g, "ê")
        .replace(/ó|ò|ỏ|ọ|õ/g, "o")
        .replace(/í|ì|ỉ|ị|ĩ/g, "i")
        .replace(/ý|ỳ|ỷ|ỵ|ỹ/g, "y")
        .replace(/é|è|ẻ|ẹ|ẽ/g, "e")
        .replace(/ố|ồ|ổ|ộ|ỗ/g, "ô")
        .replace(/ứ|ừ|ử|ự|ữ/g, "ư")
        .replace(/ớ|ờ|ở|ợ|ỡ/g, "ơ")
        .replace(/Ấ|Ầ|Ẩ|Ậ|Ẫ/g, "Â")
        .replace(/Ố|Ồ|Ổ|Ộ|Ỗ/g, "Ô")
        .replace(/Ứ|Ừ|Ử|Ự|Ữ/g, "Ư")
        .replace(/Ớ|Ờ|Ở|Ự|Ỡ/g, "Ơ")
        .replace(/Ế|Ề|Ể|Ệ|Ễ/g, "Ê")
        .replace(/Ắ|Ằ|Ẳ|Ặ|Ẵ/g, "Ă");
    switch (char) {
        case "â": return "aa";
        case "ê": return "ee";
        case "ô": return "oo";
        case "ư": return "uw";
        case "ơ": return "ow";
        case "đ": return "dd";
        case "ă": return "aw";
        case "Â": return "Aa";
        case "Ô": return "oo";
        case "Ư": return "Uw";
        case "Ơ": return "Ow";
        case "Đ": return "Dd";
        case "Ê": return "Ee";
        case "Ă": return "Aw";
    }
    return char;
}
//thêm dấu vào chuỗi
function getEndChar(char) {
    var arrS = "á,ắ,ấ,ớ,é,ế,í,ó,ố,ớ,ú,ứ,ý";
    var arrF = "à,ằ,ầ,ờ,è,ề,ì,ò,ồ,ớ,ù,ừ,ỳ";
    var arrR = "ả,ẳ,ẩ,ở,ẻ,ể,ỉ,ỏ,ổ,ở,ủ,ử,ỷ";
    var arrJ = "ạ,ặ,ậ,ợ,ẹ,ệ,ị,ọ,ộ,ợ,ụ,ự,ỵ";
    var arrX = "ã,ẵ,ẫ,ỡ,ẽ,ễ,ĩ,õ,ỗ,ỡ,ũ,ữ,ỹ";
    if (arrS.split(",").indexOf(char.toLowerCase()) != -1) return "s";
    if (arrF.split(",").indexOf(char.toLowerCase()) != -1) return "f";
    if (arrR.split(",").indexOf(char.toLowerCase()) != -1) return "r";
    if (arrJ.split(",").indexOf(char.toLowerCase()) != -1) return "j";
    if (arrX.split(",").indexOf(char.toLowerCase()) != -1) return "x";
    return "";
}