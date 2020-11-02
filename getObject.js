function getObjByAttr(attrVal,attr='title', returnObj='dom') {
    attr = attr ?? 'title'; // title == tooltip
    returnObj = returnObj ?? 'dom'; // 'dom' or 'mstr'
    let domElement = document.querySelector(`div[${attr}='${attrVal}']`);
    return returnObj='dom' ? domElement : mstrmojo.all[domElement.id];
}
