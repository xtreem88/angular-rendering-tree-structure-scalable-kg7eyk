import { TreeNode } from "./tree-models";

export class Tree<T> {

  private _root: TreeNode;

  constructor(data: T) {
    this._root = new TreeNode<T>(data, null);
  }

  getRoot(): TreeNode {
    return this._root;
  }

  getFlatTree(): TreeNode[] {
    return this.flatTreeRecursive(this._root);
  }

  private flatTreeRecursive(root: TreeNode): TreeNode[] {
    let res = [];
    for (let c of root.children) {
      res.push(c);
      res = res.concat(this.flatTreeRecursive(c));
    }
    return res;
  }
  
}