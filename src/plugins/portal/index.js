
function getTarget(node = document.body) {
    if (node === true) return document.body;
    return node instanceof window.Node ? node : document.querySelector(node);
}

const homes = new Map();

const directive = {
    inserted(el, { value }, vnode) {
        const { parentNode } = el;
        const home = document.createComment("");
        let hasMovedOut = false;

        if (value !== false) {
            parentNode.replaceChild(home, el); // 把该节点移除
            getTarget(value).appendChild(el); // 移到value所代表的目标节点内
            hasMovedOut = true;
        }

        if (!homes.has(el)) homes.set(el, { parentNode, home, hasMovedOut }); // 记录他原本的位置信息
    },
    // 在componentUpdated这个钩子中是为了确保所有子节点都更新完成
    componentUpdated(el, { value }) {
        const { parentNode, home, hasMovedOut } = homes.get(el);
        console.log(homes.get(el));

        if (!hasMovedOut && value) {
            // 如果该节点还未移出，且有目标节点

            // 将该节点移至目标节点，并用占位符home代替原本的该节点位置
            parentNode.replaceChild(home, el);
            getTarget(value).appendChild(el);

            homes.set(el, Object.assign({}, homes.get(el), { hasMovedOut: true }));
        } else if (hasMovedOut && value === false) {
            // 如果该节点已经移出去 但是value为false，则将该节点归位
            parentNode.replaceChild(el, home);
            homes.set(el, Object.assign({}, homes.get(el), { hasMovedOut: false }));
        } else if (value) {
            getTarget(value).appendChild(el);
        }
    },
    unbind(el, binding) {
        homes.delete(el);
    }
};

function plugin(Vue, { name = "dom-portal" } = {}) {
    Vue.directive(name, directive);
}


export default plugin;
