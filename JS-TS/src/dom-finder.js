// HTML for the below problem is this

/*
<div id="rootA">
    <div>
        <div>
            <div></div>
            <div>
                <div></div>
                <div>
                    <div id="nodeA">Value of node A</div>
                </div>
            </div>
        </div>
    </div>
    <div></div>
</div>
<div id="rootB">
    <div>
        <div>
            <div></div>
            <div>
                <div></div>
                <div>
                    <div>Value of node B</div>
                </div>
            </div>
        </div>
    </div>
    <div></div>
</div>
*/

const rootA = document.querySelector("#rootA");
const nodeA = document.querySelector("#nodeA");
const rootB = document.querySelector("#rootB");

const tracePath = (child, parent) => {
	let path = [];
	let current = child;
	while (!parent.isEqualNode(current)) {
		const p = current.parentElement;
		const i = [...p.children].indexOf(current);
		path.push(i);
		current = p;
	}
	path = path.reverse();
	getPath(path, rootB);
};

const getPath = (path, rootNode) => {
	const element = path.reduce((acc, curr) => {
		acc = [...acc.children][curr];
		return acc;
	}, rootNode);

	console.log("TextContent:", element.textContent);
};

tracePath(nodeA, rootA);
