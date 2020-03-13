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
