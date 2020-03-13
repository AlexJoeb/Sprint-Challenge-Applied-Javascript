// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const ele = type => document.createElement(type);
const ac = (elem, cls) => {
    elem.classList.add(cls);
};
const text = (elem, txt) => {
    elem.textContent = txt;
};
const append = (elemParent, elemChild) =>
    typeof elemParent === "object"
        ? elemParent.append(elemChild)
        : typeof elemParent === "string"
        ? document.querySelector(`.${elemParent}`).append(elemChild)
        : null;

function Header() {
    const   header  = ele("div"),
            date    = ele("span"),
            h1      = ele("h1"),
            temp    = ele("span");

    ac(header, "header");
    ac(date, "date");
    ac(temp, "temp");

    text(date, "SMARCH 28, 2019");
    text(h1, "Lambda Times");
    text(temp, "98°");

    append(header, date);
    append(header, h1);
    append(header, temp);

    return header;
}

append("header-container", new Header());
