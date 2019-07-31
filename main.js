var items = [
    { name: 'item-1', children: [{ name: 'child-1' }, { name: 'child-6' }] },
    { name: 'item-2', children: [{ name: 'child-3' }, { name: 'child-7' }] },
    { name: 'item-3', children: [{ name: 'child-4' }, { name: 'child-8' }] },
    { name: 'item-4', children: [{ name: 'child-5' }, { name: 'child-9' }] }
];

var createDiv = document.createElement('div');

function outRespName() {

    for (var names of items) {

        var liRest = document.createElement('li');

        var { children, ...rest } = names;

        var div = document.querySelector('body');

        liRest.innerHTML = rest.name;

        createDiv.appendChild(liRest);
        createDiv.appendChild(outRespChild());
    };

    div.appendChild(createDiv);

};
outRespName();

function outRespChild() {

    var ulChild = document.createElement('ul');

    for (var child of items) {

        var { name, ...objChild } = child;

        for (var chiArr of objChild.children) {

            var li = document.createElement('li');

            li.innerHTML = chiArr.name;

            ulChild.appendChild(li);
        };
    };
    return ulChild;
};


