var lowestCommonAncestor = function(root, p, q) {
    let path1 = [];
    let path2 = [];

    let dfs = function(root, n, path){
        if(!root) return false;
        console.log(root.val, n.val, path)
        path.push(root)
        
        if(root.val === n.val) return true;
        if(root.left && dfs(root.left, n, path)) return true;
        if(root.right && dfs(root.right, n, path)) return true;

        path.pop();
        return false;
    }
    
    dfs(root, p, path1);
    dfs(root, q, path2);
    let max = Math.max(path1.length, path2.length)
    console.log(path1, path2)
    let i=0;
    for(; i<max; i++){
        if(path1[i] !== path2[i]){ 
            return path1[i-1].val
        }   
    }
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const tree = new TreeNode(10, 
                new TreeNode(5, 
                    new TreeNode(3,
                        new TreeNode(3),
                        new TreeNode(-2),),
                    new TreeNode(2,
                        new TreeNode(null),
                        new TreeNode(1)),
                ),
                new TreeNode(-3, 
                    new TreeNode(null),
                    new TreeNode(11),
                ),
            )

const p = new TreeNode(5, 
    new TreeNode(3,
        new TreeNode(3),
        new TreeNode(-2),),
    new TreeNode(2,
        new TreeNode(null),
        new TreeNode(1),),
)

const q = new TreeNode(1)
let a = lowestCommonAncestor(tree, p, q);
console.log(a)
